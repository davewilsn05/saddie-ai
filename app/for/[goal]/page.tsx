import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GOALS, getGoal } from "../../../lib/goals";

export async function generateStaticParams() {
  return GOALS.map((g) => ({ goal: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ goal: string }> }): Promise<Metadata> {
  const { goal } = await params;
  const g = getGoal(goal);
  if (!g) return {};
  return { title: g.metaTitle, description: g.metaDescription };
}

export default async function GoalPage({ params }: { params: Promise<{ goal: string }> }) {
  const { goal } = await params;
  const g = getGoal(goal);
  if (!g) notFound();

  const faqSchema = g.faqs?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: g.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const otherGoals = GOALS.filter((x) => x.slug !== g.slug);

  return (
    <>
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(124,108,250,0.18) 0%, transparent 65%)" }} />
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(124,108,250,0.3)" }}>
            Saddie for…
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--foreground)" }}>
            {g.headline}
          </h1>
          <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>{g.subheadline}</p>
          <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "white" }}>
            {g.cta}
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <p className="text-base leading-relaxed text-center" style={{ color: "var(--muted)" }}>{g.intro}</p>
      </section>

      {/* Feature bullets */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {g.bullets.map((b) => (
            <div key={b.title} className="rounded-xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-2xl mb-3">{b.icon}</div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <blockquote className="rounded-2xl p-8 text-center"
          style={{ background: "var(--accent-glow)", border: "1px solid rgba(124,108,250,0.2)" }}>
          <p className="text-lg italic mb-4" style={{ color: "var(--foreground)" }}>"{g.quote}"</p>
          <span className="text-sm" style={{ color: "var(--muted)" }}>— TRLActive user</span>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
          style={{ background: "var(--accent)", color: "white" }}>
          {g.cta}
        </a>
      </section>

      {/* FAQ */}
      {g.faqs?.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Common questions</h2>
          <div className="flex flex-col gap-4">
            {g.faqs.map((f) => (
              <div key={f.q} className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Other goals */}
      <section style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h3 className="text-base font-bold mb-5" style={{ color: "var(--foreground)" }}>Saddie is also built for</h3>
          <div className="flex flex-wrap gap-3">
            {otherGoals.map((og) => (
              <Link key={og.slug} href={`/for/${og.slug}`}
                className="px-4 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
                style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                {og.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
