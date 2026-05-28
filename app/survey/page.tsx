import type { Metadata } from "next";
import Image from "next/image";
import SurveyForm from "./SurveyForm";

export const metadata: Metadata = {
  title: "TRL/Active User Survey",
  description: "Share quick feedback about TRL/Active ease of use, satisfaction, pricing, and what we should improve next.",
  alternates: { canonical: "https://trlactive.com/survey" },
};

export default async function SurveyPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string; utm_source?: string; utm_medium?: string; utm_campaign?: string }>;
}) {
  const params = await searchParams;
  const source = [params.utm_source, params.utm_medium, params.utm_campaign].filter(Boolean).join(":") || "site";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Image src="/trl-active-logo.png" alt="TRL/Active" width={64} height={64} className="rounded-2xl mb-5" />
        <p className="text-sm font-semibold mb-3" style={{ color: "var(--accent)" }}>TRL/Active feedback</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Help us make TRL/Active easier to use</h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          This short survey takes about two minutes. Each question is multiple choice, with an optional comment box if you want to add context.
        </p>
      </div>
      <SurveyForm initialEmail={params.email} source={source} />
    </main>
  );
}
