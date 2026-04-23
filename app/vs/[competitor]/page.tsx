import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPETITORS, getCompetitor } from "../../../lib/competitors";

export async function generateStaticParams() {
  return COMPETITORS.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) return {};
  return { title: `${c.tagline} | Saddie`, description: c.verdict };
}

export default async function ComparisonPage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params;
  const c = getCompetitor(competitor);
  if (!c) notFound();

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/vs" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>← Compare</Link>
      </div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
        style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(124,108,250,0.3)" }}>
        Comparison
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "var(--foreground)" }}>
        Saddie vs {c.name}
      </h1>
      <p className="text-base mb-3" style={{ color: "var(--muted)" }}>{c.name} price: <strong style={{ color: "var(--foreground)" }}>{c.price}</strong></p>
      <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--muted)" }}>{c.verdict}</p>

      <hr style={{ borderColor: "var(--border)", marginBottom: "2.5rem" }} />

      {/* Side by side */}
      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-bold text-base mb-4" style={{ color: "var(--foreground)" }}>✅ Where {c.name} is strong</h2>
          <ul className="flex flex-col gap-2">
            {c.strengths.map((s) => (
              <li key={s} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                <span style={{ color: "#22c55e", flexShrink: 0 }}>+</span> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-bold text-base mb-4" style={{ color: "var(--foreground)" }}>⚠️ Where {c.name} falls short</h2>
          <ul className="flex flex-col gap-2">
            {c.weaknesses.map((w) => (
              <li key={w} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                <span style={{ color: "#ef4444", flexShrink: 0 }}>−</span> {w}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Saddie wins */}
      <div className="rounded-xl p-6 mb-12"
        style={{ background: "linear-gradient(135deg, rgba(124,108,250,0.12) 0%, rgba(124,108,250,0.04) 100%)", border: "1px solid rgba(124,108,250,0.25)" }}>
        <h2 className="font-bold text-base mb-4" style={{ color: "var(--foreground)" }}>🧠 What Saddie (TRLActive) does differently</h2>
        <ul className="flex flex-col gap-3">
          {c.saddieWins.map((w) => (
            <li key={w} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
              <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span> {w}
            </li>
          ))}
        </ul>
      </div>

      {/* Verdict */}
      <div className="mb-12">
        <h2 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>The bottom line</h2>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{c.whoShouldUse}</p>
      </div>

      {/* CTA */}
      <div className="rounded-xl p-8 text-center"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>{c.cta}</p>
        <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>No credit card needed. Your first plan is ready in under 2 minutes.</p>
        <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ background: "var(--accent)", color: "white" }}>
          Try TRLActive free →
        </a>
      </div>

      {/* Other comparisons */}
      <div className="mt-14">
        <h3 className="text-base font-bold mb-4" style={{ color: "var(--foreground)" }}>More comparisons</h3>
        <div className="flex flex-wrap gap-3">
          {COMPETITORS.filter((x) => x.slug !== c.slug).map((x) => (
            <Link key={x.slug} href={`/vs/${x.slug}`}
              className="px-4 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
              style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)" }}>
              Saddie vs {x.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
