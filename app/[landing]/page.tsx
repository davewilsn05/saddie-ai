import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEO_LANDING_PAGES, getSeoLandingPage } from "../../lib/seoLandingPages";

const BASE = "https://saddie.ai";

export async function generateStaticParams() {
  return SEO_LANDING_PAGES.map((page) => ({ landing: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ landing: string }> }): Promise<Metadata> {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${BASE}/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: `/api/og?title=${encodeURIComponent(page.headline)}&tag=${encodeURIComponent(page.eyebrow)}`, width: 1200, height: 630 }],
    },
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ landing: string }> }) {
  const { landing } = await params;
  const page = getSeoLandingPage(landing);
  if (!page) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE },
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: `${BASE}/${page.slug}` },
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "TRL/Active",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS, Android",
        url: "https://trlactive.com",
        description: page.metaDescription,
        creator: { "@type": "Organization", name: "Saddie", url: BASE },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(232,199,53,0.18) 0%, transparent 70%)" }}
          />
          <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 relative">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
              style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(232,199,53,0.28)" }}
            >
              {page.eyebrow}
            </div>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-5" style={{ color: "var(--foreground)" }}>
                  {page.headline}
                </h1>
                <p className="text-lg leading-relaxed mb-8 max-w-3xl" style={{ color: "var(--muted)" }}>
                  {page.subheadline}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://trlactive.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
                    style={{ background: "var(--accent)", color: "#050505" }}
                  >
                    {page.ctaLabel}
                  </a>
                  <Link
                    href="/trlactive-product-summary"
                    className="px-7 py-3 rounded-full font-medium text-base hover:opacity-80 transition-opacity"
                    style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                  >
                    Product summary
                  </Link>
                </div>
              </div>
              <aside className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h2 className="font-semibold text-base mb-4" style={{ color: "var(--foreground)" }}>Key takeaways</h2>
                <ul className="flex flex-col gap-3">
                  {page.takeaways.map((item) => (
                    <li key={item} className="text-sm leading-relaxed flex gap-2" style={{ color: "var(--muted)" }}>
                      <span style={{ color: "var(--accent)" }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-14">
          <div className="rounded-xl p-7" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{page.answerTitle}</h2>
            <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{page.answer}</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-5">
            {page.featureGrid.map((feature) => (
              <div key={feature.title} className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{feature.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-16">
          <div className="flex flex-col gap-8">
            {page.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>{section.title}</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>{section.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--foreground)" }}>Common questions</h2>
          <div className="flex flex-col gap-4">
            {page.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Supporting guides</h2>
              <div className="flex flex-col gap-3">
                {page.supportingPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
                    {post.title} →
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <h2 className="text-xl font-bold mb-4" style={{ color: "var(--foreground)" }}>Related pages</h2>
              <div className="flex flex-col gap-3">
                {page.relatedPages.map((related) => (
                  <Link key={related.href} href={related.href} className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
                    {related.title} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(232,199,53,0.16) 0%, rgba(232,199,53,0.05) 100%)", border: "1px solid rgba(232,199,53,0.24)" }}
          >
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Build the plan around your real life</h2>
            <p className="text-base max-w-xl mx-auto mb-7" style={{ color: "var(--muted)" }}>
              TRL/Active uses Saddie to turn your goals, schedule, equipment, workouts, nutrition, and progress into one adaptive coaching system.
            </p>
            <a
              href="https://trlactive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "#050505" }}
            >
              {page.ctaLabel}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
