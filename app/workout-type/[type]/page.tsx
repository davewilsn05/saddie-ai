import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WORKOUT_TYPES, getWorkoutType } from "../../../lib/workoutTypes";

export async function generateStaticParams() {
  return WORKOUT_TYPES.map((w) => ({ type: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const w = getWorkoutType(type);
  if (!w) return {};
  return { title: w.metaTitle, description: w.metaDescription };
}

export default async function WorkoutTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const w = getWorkoutType(type);
  if (!w) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: w.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const others = WORKOUT_TYPES.filter((x) => x.slug !== w.slug).slice(0, 5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(124,108,250,0.18) 0%, transparent 65%)" }} />
          <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(124,108,250,0.3)" }}>
              {w.name}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--foreground)" }}>
              {w.headline}
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>{w.subheadline}</p>
            <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "white" }}>
              Try TRLActive free →
            </a>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-12">
          <p className="text-base leading-relaxed text-center" style={{ color: "var(--muted)" }}>{w.intro}</p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 gap-5">
            {w.bullets.map((b) => (
              <div key={b.title} className="rounded-xl p-6"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Common questions</h2>
          <div className="flex flex-col gap-4">
            {w.faqs.map((f) => (
              <div key={f.q} className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{f.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "white" }}>
            Start {w.name} with Saddie — free →
          </a>
        </section>

        <section style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-10">
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--muted)" }}>MORE WORKOUT TYPES</h3>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <Link key={o.slug} href={`/workout-type/${o.slug}`}
                  className="px-4 py-2 rounded-full text-sm hover:opacity-80 transition-opacity"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                  {o.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
