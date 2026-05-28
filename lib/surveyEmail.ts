const SURVEY_PATH = "/survey";

type SurveyEmailOptions = {
  email: string;
  origin: string;
  preview?: boolean;
};

export function buildSurveyUrl({ email, origin, preview = false }: SurveyEmailOptions) {
  const params = new URLSearchParams({
    email,
    utm_source: "resend",
    utm_medium: "email",
    utm_campaign: "user_survey",
  });

  if (preview) {
    params.set("preview", "true");
  }

  return `${origin}${SURVEY_PATH}?${params}`;
}

export function surveyInviteHtml({ email, origin, preview = false }: SurveyEmailOptions) {
  const surveyUrl = buildSurveyUrl({ email, origin, preview });
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#111;max-width:560px;">
      <img src="${origin}/trl-active-logo.png" width="64" height="64" alt="TRL/Active" style="border-radius:16px;margin-bottom:16px;" />
      <h1>Help us improve TRL/Active</h1>
      <p>We are asking TRL/Active users a few short questions about ease of use, satisfaction, pricing, and what we should improve next.</p>
      <p>The survey is multiple choice and takes about two minutes.</p>
      <p>
        <a href="${surveyUrl}" style="display:inline-block;background:#e8c735;color:#050505;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:700;">
          Take the survey
        </a>
      </p>
      <p style="color:#666;font-size:13px;">If the button does not work, open this link: ${surveyUrl}</p>
    </div>
  `;
}

export async function sendSurveyInviteEmail({ email, origin, preview = false }: SurveyEmailOptions) {
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
      from: process.env.RESEND_FROM ?? "TRL/Active <hello@trlactive.com>",
      to: [email],
      subject: `${preview ? "[Preview] " : ""}Help us improve TRL/Active`,
      html: surveyInviteHtml({ email, origin, preview }),
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend failed for ${email}: HTTP ${response.status}.`);
  }
}
