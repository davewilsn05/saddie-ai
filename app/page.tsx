import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../lib/blog";
import { COMPETITORS } from "../lib/competitors";
import { SEO_LANDING_PAGES } from "../lib/seoLandingPages";

const productPages = [
  "ai-fitness-coach",
  "personalized-workout-plan-app",
  "weight-loss-workout-app",
  "workout-app-with-meal-planning",
  "apple-watch-fitness-app",
  "voice-guided-workout-app",
];

const proofPoints = [
  "Personalized workout plans",
  "Nutrition and meal planning",
  "Voice-guided workouts",
  "Apple Watch support",
  "Adaptive weekly progress",
];

const workflows = [
  {
    title: "Build the plan",
    body: "Start with your goals, schedule, equipment, experience, and constraints. TRL/Active uses Saddie to turn that into a plan for the week ahead.",
  },
  {
    title: "Coach the workout",
    body: "Use voice guidance and workout context so each session feels directed, not like a checklist you have to manage alone.",
  },
  {
    title: "Adjust as life happens",
    body: "Miss a day, change equipment, or need a lighter week. The plan can adapt instead of leaving you stuck.",
  },
  {
    title: "Connect nutrition",
    body: "Workout and meal-planning support stay tied to the same goal so users are not juggling disconnected fitness apps.",
  },
];

export default function Home() {
  const featuredPosts = getAllPosts().slice(0, 3);
  const landingPages = productPages
    .map((slug) => SEO_LANDING_PAGES.find((page) => page.slug === slug))
    .filter((page): page is NonNullable<typeof page> => Boolean(page));
  const vsLinks = COMPETITORS.filter((competitor) => ["fitbod", "myfitnesspal", "nike-training-club", "apple-fitness-plus"].includes(competitor.slug));

  const productSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "TRL/Active",
        brand: { "@type": "Brand", name: "TRL/Active" },
        description: "AI fitness coaching app powered by Saddie for adaptive workouts, nutrition support, voice-guided training, and progress planning.",
        url: "https://trlactive.com",
        category: "Fitness app",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
      },
      {
        "@type": "SoftwareApplication",
        name: "TRL/Active",
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS, Android",
        url: "https://trlactive.com",
        description: "AI fitness coaching app powered by Saddie.",
        creator: { "@type": "Organization", name: "Saddie", url: "https://saddie.ai" },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <main>
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 55% at 50% -5%, rgba(232,199,53,0.18) 0%, transparent 70%)" }}
          />
          <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 relative">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-7"
                  style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(232,199,53,0.28)" }}
                >
                  Saddie powers TRL/Active
                </div>
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-5" style={{ color: "var(--foreground)" }}>
                  Your AI fitness coach for workouts, nutrition, and progress that actually adapts
                </h1>
                <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mb-8" style={{ color: "var(--muted)" }}>
                  TRL/Active builds a personalized plan around your goals, schedule, equipment, recovery, and progress, then coaches you through the work on iPhone and Apple Watch.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://trlactive.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
                    style={{ background: "var(--accent)", color: "#050505" }}
                  >
                    Start your plan
                  </a>
                  <Link
                    href="/ai-fitness-coach"
                    className="px-7 py-3 rounded-full font-medium text-base hover:opacity-80 transition-opacity"
                    style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}
                  >
                    See how it works
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {proofPoints.map((point) => (
                    <span
                      key={point}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)" }}
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div
                  className="rounded-2xl p-8"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-5 mb-7">
                    <Image src="/trl-active-logo.png" alt="TRL/Active logo" width={84} height={84} className="rounded-2xl" priority />
                    <div>
                      <p className="text-sm mb-1" style={{ color: "var(--muted)" }}>Current coaching focus</p>
                      <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Build today&apos;s plan</h2>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    {[
                      ["Goal", "Lose fat while building strength"],
                      ["Schedule", "3 days this week, 35 minutes each"],
                      ["Equipment", "Dumbbells, bands, bodyweight"],
                      ["Adjustment", "Move missed lower-body work to Friday"],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-start justify-between gap-4 pb-4" style={{ borderBottom: "1px solid var(--border)" }}>
                        <span className="text-sm" style={{ color: "var(--muted)" }}>{label}</span>
                        <span className="text-sm font-medium text-right" style={{ color: "var(--foreground)" }}>{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-14">
            <div className="grid md:grid-cols-4 gap-5">
              {workflows.map((item) => (
                <div key={item.title}>
                  <h2 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{item.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Find the right starting point</h2>
            <p className="text-base max-w-2xl" style={{ color: "var(--muted)" }}>
              Saddie.ai now organizes the product around the search intents people actually use when choosing a fitness app.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {landingPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="rounded-xl p-6 hover:scale-[1.01] transition-transform"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>{page.primaryKeyword}</span>
                <h3 className="font-semibold text-lg mt-2 mb-2" style={{ color: "var(--foreground)" }}>{page.eyebrow}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{page.metaDescription}</p>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Answer-engine ready</h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
                  Major product pages now include direct answers, FAQ schema, supporting links, and plain-language positioning so search and AI systems can understand what TRL/Active is.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["AI fitness coach", "/ai-fitness-coach"],
                  ["Workout and meal planning", "/workout-app-with-meal-planning"],
                  ["Product summary", "/trlactive-product-summary"],
                  ["Compare alternatives", "/compare"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-xl p-5 hover:opacity-85 transition-opacity" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                    <span className="font-semibold text-sm" style={{ color: "var(--foreground)" }}>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>From the blog</h2>
            <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>All posts →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <span className="text-xs font-medium px-2 py-0.5 rounded-full self-start" style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>
                  {post.tag}
                </span>
                <h3 className="font-semibold text-sm leading-snug" style={{ color: "var(--foreground)" }}>{post.title}</h3>
                <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{post.description}</p>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{post.date} · {post.readingTime}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>Popular comparisons</h2>
            <Link href="/compare" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>Compare apps →</Link>
          </div>
          <div className="grid sm:grid-cols-4 gap-4">
            {vsLinks.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/compare/${competitor.slug}-alternative`}
                className="rounded-xl p-5 hover:scale-[1.02] transition-transform"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>{competitor.name} alternative</div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>{competitor.price}</div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 pb-24">
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "linear-gradient(135deg, rgba(232,199,53,0.16) 0%, rgba(232,199,53,0.05) 100%)", border: "1px solid rgba(232,199,53,0.24)" }}
          >
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Let Saddie build the plan</h2>
            <p className="text-base max-w-xl mx-auto mb-7" style={{ color: "var(--muted)" }}>
              Start with your goal, schedule, equipment, and current level. TRL/Active handles the next step.
            </p>
            <a
              href="https://trlactive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "#050505" }}
            >
              Start your plan
            </a>
          </div>
        </section>

        <footer style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: "var(--muted)" }}>
            <span>© 2026 Saddie · saddie.ai</span>
            <div className="flex gap-5 flex-wrap">
              <Link href="/ai-fitness-coach" className="hover:opacity-80 transition-opacity">AI Coach</Link>
              <Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link>
              <Link href="/compare" className="hover:opacity-80 transition-opacity">Compare</Link>
              <Link href="/trlactive-product-summary" className="hover:opacity-80 transition-opacity">Product Summary</Link>
              <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">TRL/Active →</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
