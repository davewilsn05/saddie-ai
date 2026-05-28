import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { USER_SURVEY_QUESTIONS } from "../../lib/survey";
import { buildSiteMetadata } from "../../lib/siteMetadata";

type SurveyAnswer = {
  id: string;
  question: string;
  answer: string;
  comment: string;
};

type SurveyRow = {
  id: string;
  email: string | null;
  source: string;
  answers: SurveyAnswer[];
  created_at: string;
};

type Counts = Record<string, Record<string, number>>;

export const metadata: Metadata = buildSiteMetadata({
  title: "TRL/Active Survey Results",
  description: "Admin view for TRL/Active user survey responses.",
  path: "/admin",
  imageTitle: "TRL/Active survey results",
  imageTag: "Admin",
  robots: { index: false, follow: false },
});

function isAuthorized(token?: string) {
  const expected = process.env.ADMIN_SURVEY_TOKEN;
  return Boolean(expected && token && token === expected);
}

async function fetchSurveyRows() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Survey storage is not configured.");
  }

  const params = new URLSearchParams({
    select: "id,email,source,answers,created_at",
    order: "created_at.desc",
    limit: "200",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/user_surveys?${params}`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Could not load survey results. HTTP ${response.status}.`);
  }

  return response.json() as Promise<SurveyRow[]>;
}

function buildCounts(rows: SurveyRow[]) {
  return rows.reduce<Counts>((counts, row) => {
    row.answers.forEach((answer) => {
      if (answer.id === "additional_feedback") return;
      counts[answer.id] = counts[answer.id] ?? {};
      counts[answer.id][answer.answer] = (counts[answer.id][answer.answer] ?? 0) + 1;
    });
    return counts;
  }, {});
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function AccessRequired() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>Admin</p>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Survey results</h1>
      <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <h2 className="text-lg font-semibold mb-2">Admin access required</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          Set `ADMIN_SURVEY_TOKEN` on the site, then open `/admin?token=YOUR_TOKEN` to view survey responses.
        </p>
      </div>
    </main>
  );
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;

  if (!isAuthorized(params.token)) {
    return <AccessRequired />;
  }

  let rows: SurveyRow[] = [];
  let error: string | null = null;

  try {
    rows = await fetchSurveyRows();
  } catch (loadError) {
    error = loadError instanceof Error ? loadError.message : "Could not load survey results.";
  }

  const counts = buildCounts(rows);
  const responsesWithComments = rows.filter((row) => row.answers.some((answer) => answer.comment));

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <Image src="/trl-active-logo.png" alt="TRL/Active" width={64} height={64} className="rounded-2xl mb-5" />
          <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>Admin</p>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Survey results</h1>
          <p className="text-base" style={{ color: "var(--muted)" }}>
            Recent TRL/Active survey responses from the website form.
          </p>
        </div>
        <Link
          href="/survey"
          className="px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          style={{ background: "var(--accent)", color: "#050505" }}
        >
          Open survey
        </Link>
      </div>

      {error ? (
        <div className="rounded-xl p-6 mb-8" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="text-lg font-semibold mb-2">Results unavailable</h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>{error}</p>
        </div>
      ) : null}

      <section className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>{rows.length}</div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>Total responses</div>
        </div>
        <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>{responsesWithComments.length}</div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>Responses with comments</div>
        </div>
        <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>
            {rows[0] ? formatDate(rows[0].created_at) : "None yet"}
          </div>
          <div className="text-sm" style={{ color: "var(--muted)" }}>Latest response</div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-5">Answer summary</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {USER_SURVEY_QUESTIONS.filter((question) => !question.commentOnly).map((question) => (
            <div key={question.id} className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <h3 className="font-semibold mb-4">{question.title}</h3>
              <div className="space-y-3">
                {question.options.map((option) => {
                  const count = counts[question.id]?.[option] ?? 0;
                  const percent = rows.length ? Math.round((count / rows.length) * 100) : 0;
                  return (
                    <div key={option}>
                      <div className="flex items-center justify-between gap-3 text-sm mb-1">
                        <span>{option}</span>
                        <span style={{ color: "var(--muted)" }}>{count}</span>
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: `${percent}%`, background: "var(--accent)" }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-5">Recent responses</h2>
        <div className="space-y-5">
          {rows.length ? rows.map((row) => (
            <article key={row.id} className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="font-semibold">{row.email ?? "No email provided"}</div>
                <div className="text-sm" style={{ color: "var(--muted)" }}>{formatDate(row.created_at)}</div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {row.answers.map((answer) => (
                  <div key={answer.id} className="rounded-lg p-4" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="text-xs font-semibold mb-1" style={{ color: "var(--accent)" }}>{answer.question}</div>
                    <div className="text-sm">{answer.answer}</div>
                    {answer.comment ? (
                      <p className="text-sm mt-2 leading-relaxed" style={{ color: "var(--muted)" }}>{answer.comment}</p>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          )) : (
            <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <p className="text-sm" style={{ color: "var(--muted)" }}>No survey responses yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
