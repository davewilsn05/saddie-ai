import { NextRequest, NextResponse } from "next/server";
import { sendSurveyInviteEmail } from "../../../../lib/surveyEmail";

const DEFAULT_PREVIEW_RECIPIENT = "d.wilson@trlactive.com";

function assertAuthorized(request: NextRequest) {
  const secret = process.env.SURVEY_SEND_SECRET;
  if (!secret) {
    throw new Error("Survey preview endpoint is not configured.");
  }

  const header = request.headers.get("authorization") ?? "";
  if (header !== `Bearer ${secret}`) {
    throw new Error("Unauthorized.");
  }
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    assertAuthorized(request);
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === "string" && body.email.trim() ? body.email.trim() : DEFAULT_PREVIEW_RECIPIENT;

    if (!isValidEmail(email)) {
      throw new Error("Please provide a valid preview email address.");
    }

    const origin = process.env.SURVEY_SITE_ORIGIN ?? new URL(request.url).origin;
    await sendSurveyInviteEmail({ email, origin, preview: true });

    return NextResponse.json({ ok: true, sentTo: email });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Survey preview failed.";
    const status = message === "Unauthorized." ? 401 : 400;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
