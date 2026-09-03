import { NextRequest, NextResponse } from "next/server";
import { USER_SURVEY_QUESTIONS } from "../../../lib/survey";

type SubmittedAnswer = {
  answer?: unknown;
  comment?: unknown;
};

type SurveyPayload = {
  email?: unknown;
  source?: unknown;
  answers?: Record<string, SubmittedAnswer>;
};

function isValidEmail(email: string) {
  if (email.length > 254 || /\s/.test(email)) return false;
  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@")) return false;
  const domain = email.slice(at + 1);
  return domain.length <= 253 && domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

function normalizePayload(body: SurveyPayload) {
  const email = typeof body.email === "string" && body.email.trim() ? body.email.trim() : null;
  if (email && !isValidEmail(email)) {
    throw new Error("Please enter a valid email address.");
  }

  const answers = body.answers;
  if (!answers || typeof answers !== "object") {
    throw new Error("Missing survey answers.");
  }

  const normalizedAnswers = USER_SURVEY_QUESTIONS.map((question) => {
    const submitted = answers[question.id];
    const answer = typeof submitted?.answer === "string" ? submitted.answer : "";
    const comment = typeof submitted?.comment === "string" ? submitted.comment.trim().slice(0, 600) : "";

    if (!question.commentOnly && !question.options.includes(answer)) {
      throw new Error(`Missing answer for: ${question.title}`);
    }

    return {
      id: question.id,
      question: question.title,
      answer: question.commentOnly ? "Additional feedback" : answer,
      comment,
    };
  });

  return {
    email,
    source: typeof body.source === "string" ? body.source.slice(0, 80) : "site",
    answers: normalizedAnswers,
  };
}

async function storeSurvey(payload: ReturnType<typeof normalizePayload>, request: NextRequest) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Survey storage is not configured.");
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/user_surveys`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      email: payload.email,
      source: payload.source,
      answers: payload.answers,
      metadata: {
        user_agent: request.headers.get("user-agent"),
        referrer: request.headers.get("referer"),
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Survey storage failed with HTTP ${response.status}.`);
  }
}

function surveyHtml(payload: ReturnType<typeof normalizePayload>) {
  const rows = payload.answers.map((answer) => `
    <tr>
      <td style="padding:12px;border-bottom:1px solid #eee;">
        <strong>${answer.question}</strong><br />
        ${answer.answer}
        ${answer.comment ? `<p style="margin:8px 0 0;color:#555;">${answer.comment}</p>` : ""}
      </td>
    </tr>
  `).join("");

  return `
    <div style="font-family:Arial,sans-serif;line-height:1.45;color:#111;">
      <h1>New TRL/Active survey response</h1>
      <p><strong>Email:</strong> ${payload.email ?? "Not provided"}</p>
      <p><strong>Source:</strong> ${payload.source}</p>
      <table style="border-collapse:collapse;width:100%;border:1px solid #eee;">${rows}</table>
    </div>
  `;
}

async function sendNotification(payload: ReturnType<typeof normalizePayload>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("Resend is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.RESEND_FROM ?? "TRL/Active Survey <survey@trlactive.com>",
      to: [process.env.SURVEY_NOTIFY_EMAIL ?? "info@trlactive.com"],
      subject: `New TRL/Active survey response${payload.email ? ` from ${payload.email}` : ""}`,
      html: surveyHtml(payload),
    }),
  });

  if (!response.ok) {
    throw new Error(`Survey notification failed with HTTP ${response.status}.`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = normalizePayload(await request.json());
    await storeSurvey(payload, request);
    await sendNotification(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Survey submission failed.";
    return NextResponse.json({ ok: false, error: message }, { status: 400 });
  }
}
