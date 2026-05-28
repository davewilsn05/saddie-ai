import { NextRequest, NextResponse } from "next/server";
import { sendSurveyInviteEmail } from "../../../../lib/surveyEmail";

type SupabaseUser = {
  id: string;
  email?: string;
};

function assertAuthorized(request: NextRequest) {
  const secret = process.env.SURVEY_SEND_SECRET;
  if (!secret) {
    throw new Error("Survey send endpoint is not configured.");
  }
  const header = request.headers.get("authorization") ?? "";
  if (header !== `Bearer ${secret}`) {
    throw new Error("Unauthorized.");
  }
}

async function fetchUsers() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase admin access is not configured.");
  }

  const users: SupabaseUser[] = [];
  let page = 1;

  while (page <= 100) {
    const response = await fetch(`${supabaseUrl}/auth/v1/admin/users?page=${page}&per_page=1000`, {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Could not load users. HTTP ${response.status}.`);
    }

    const body = await response.json();
    const batch = Array.isArray(body.users) ? body.users as SupabaseUser[] : [];
    users.push(...batch.filter((user) => user.email));
    if (batch.length < 1000) break;
    page += 1;
  }

  return users;
}

export async function POST(request: NextRequest) {
  try {
    assertAuthorized(request);
    const origin = process.env.SURVEY_SITE_ORIGIN ?? new URL(request.url).origin;
    const users = await fetchUsers();
    const uniqueEmails = Array.from(new Set(users.map((user) => user.email).filter(Boolean))) as string[];

    const limit = Number(process.env.SURVEY_SEND_LIMIT ?? "500");
    const targets = uniqueEmails.slice(0, limit);

    for (const email of targets) {
      await sendSurveyInviteEmail({ email, origin });
    }

    return NextResponse.json({ ok: true, sent: targets.length, totalUsers: uniqueEmails.length });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Survey send failed.";
    const status = message === "Unauthorized." ? 401 : 400;
    return NextResponse.json({ ok: false, error: message }, { status });
  }
}
