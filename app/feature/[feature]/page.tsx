import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FEATURES, getFeature } from "../../../lib/features";

export async function generateStaticParams() {
  return FEATURES.map((f) => ({ feature: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ feature: string }> }): Promise<Metadata> {
  const { feature } = await params;
  const f = getFeature(feature);
  if (!f) return {};
  return { title: f.metaTitle, description: f.metaDescription };
}

export default async function FeaturePage({ params }: { params: Promise<{ feature: string }> }) {
  const { feature } = await params;
  const f = getFeature(feature);
  if (!f) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const others = FEATURES.filter((x) => x.slug !== f.slug).slice(0, 5);

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
              Feature
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--foreground)" }}>
              {f.headline}
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--muted)" }}>{f.subheadline}</p>
            <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "white" }}>
              Try TRLActive free →
            </a>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-12">
          <p className="text-base leading-relaxed text-center" style={{ color: "var(--muted)" }}>{f.intro}</p>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="grid sm:grid-cols-2 gap-5">
            {f.bullets.map((b) => (
              <div key={b.title} className="rounded-xl p-6"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <div className="text-2xl mb-3">{b.icon}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Common questions</h2>
          <div className="flex flex-col gap-4">
            {f.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "white" }}>
            Try {f.name} in TRLActive — free →
          </a>
        </section>

        <section style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-3xl mx-auto px-6 py-10">
            <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--muted)" }}>MORE FEATURES</h3>
            <div className="flex flex-wrap gap-3">
              {others.map((o) => (
                <Link key={o.slug} href={`/feature/${o.slug}`}
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
