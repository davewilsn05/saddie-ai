import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCompetitor } from "../../../lib/competitors";

const BASE = "https://saddie.ai";

const comparisonAliases: Record<string, string> = {
  "fitbod-alternative": "fitbod",
  "myfitnesspal-alternative": "myfitnesspal",
  "nike-training-club-alternative": "nike-training-club",
  "freeletics-alternative": "freeletics",
  "apple-fitness-plus-alternative": "apple-fitness-plus",
  "future-alternative": "future",
};

export async function generateStaticParams() {
  return Object.keys(comparisonAliases).map((competitor) => ({ competitor }));
}

export async function generateMetadata({ params }: { params: Promise<{ competitor: string }> }): Promise<Metadata> {
  const { competitor } = await params;
  const mappedSlug = comparisonAliases[competitor];
  const c = mappedSlug ? getCompetitor(mappedSlug) : undefined;
  if (!c) return {};

  return {
    title: `${c.name} Alternative: TRL/Active vs ${c.name} | Saddie`,
    description: `Compare TRL/Active with ${c.name}: pricing, strengths, limits, and when Saddie's adaptive AI fitness coaching is the better fit.`,
    alternates: { canonical: `${BASE}/compare/${competitor}` },
    openGraph: {
      images: [{ url: `/api/og?title=${encodeURIComponent(`${c.name} alternative`)}&tag=Comparison`, width: 1200, height: 630 }],
    },
  };
}

export default async function CompareAlternativePage({ params }: { params: Promise<{ competitor: string }> }) {
  const { competitor } = await params;
  const mappedSlug = comparisonAliases[competitor];
  const c = mappedSlug ? getCompetitor(mappedSlug) : undefined;
  if (!c) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: "Compare", item: `${BASE}/compare` },
          { "@type": "ListItem", position: 3, name: `${c.name} alternative`, item: `${BASE}/compare/${competitor}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
      {
        "@type": "SoftwareApplication",
        name: "TRL/Active",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS, Android",
        url: "https://trlactive.com",
        creator: { "@type": "Organization", name: "Saddie", url: BASE },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/compare" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>
            ← Compare
          </Link>
        </div>

        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(232,199,53,0.28)" }}
        >
          {c.name} alternative
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4" style={{ color: "var(--foreground)" }}>
          TRL/Active vs {c.name}: which app fits your goal?
        </h1>
        <p className="text-base mb-3" style={{ color: "var(--muted)" }}>
          {c.name} price: <strong style={{ color: "var(--foreground)" }}>{c.price}</strong>
        </p>
        <p className="text-lg mb-10 leading-relaxed" style={{ color: "var(--muted)" }}>{c.verdict}</p>

        <section className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="font-bold text-base mb-4" style={{ color: "var(--foreground)" }}>Where {c.name} is strong</h2>
            <ul className="flex flex-col gap-2">
              {c.strengths.map((item) => (
                <li key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="font-bold text-base mb-4" style={{ color: "var(--foreground)" }}>Where {c.name} may fall short</h2>
            <ul className="flex flex-col gap-2">
              {c.weaknesses.map((item) => (
                <li key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                  <span style={{ color: "var(--accent)", flexShrink: 0 }}>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-xl p-6 mb-12" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-bold text-xl mb-4" style={{ color: "var(--foreground)" }}>What TRL/Active does differently</h2>
          <ul className="flex flex-col gap-3">
            {c.saddieWins.map((item) => (
              <li key={item} className="text-sm flex gap-2" style={{ color: "var(--muted)" }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="font-bold text-xl mb-3" style={{ color: "var(--foreground)" }}>Bottom line</h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{c.whoShouldUse}</p>
        </section>

        <section className="mb-12">
          <h2 className="font-bold text-xl mb-5" style={{ color: "var(--foreground)" }}>Frequently asked questions</h2>
          <div className="flex flex-col gap-4">
            {c.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(232,199,53,0.16) 0%, rgba(232,199,53,0.05) 100%)", border: "1px solid rgba(232,199,53,0.24)" }}
        >
          <p className="font-semibold text-xl mb-2" style={{ color: "var(--foreground)" }}>{c.cta}</p>
          <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>
            TRL/Active is built for users who want adaptive workout planning, voice-guided training, and nutrition context in one app.
          </p>
          <a
            href="https://trlactive.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "#050505" }}
          >
            Try TRL/Active
          </a>
        </section>
      </main>
    </>
  );
}
