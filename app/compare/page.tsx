import Link from "next/link";
import type { Metadata } from "next";
import { buildSiteMetadata } from "../../lib/siteMetadata";

const comparisons = [
  { href: "/compare/fitbod-alternative", label: "Fitbod alternative", body: "For users who want adaptive coaching beyond gym logging." },
  { href: "/compare/myfitnesspal-alternative", label: "MyFitnessPal alternative", body: "For users who want workouts and nutrition in one coaching system." },
  { href: "/compare/nike-training-club-alternative", label: "Nike Training Club alternative", body: "For users who want a plan that adapts instead of a class library." },
  { href: "/compare/freeletics-alternative", label: "Freeletics alternative", body: "For users who want AI coaching without intensity-first programming." },
  { href: "/compare/apple-fitness-plus-alternative", label: "Apple Fitness+ alternative", body: "For users who want adaptive planning instead of only guided classes." },
  { href: "/compare/future-alternative", label: "Future alternative", body: "For users who want coach-like planning without a high monthly coach price." },
];

export const metadata: Metadata = buildSiteMetadata({
  title: "Fitness App Alternatives and Comparisons | Saddie",
  description: "Compare TRL/Active with Fitbod, MyFitnessPal, Nike Training Club, Freeletics, Apple Fitness+, Future, and other fitness apps.",
  path: "/compare",
  imageTitle: "Compare TRL/Active with other fitness apps",
  imageTag: "App comparisons",
});

export default function CompareHub() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fitness app comparisons",
    url: "https://saddie.ai/compare",
    description: metadata.description,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-3xl mb-12">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
            style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(232,199,53,0.28)" }}
          >
            App comparisons
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--foreground)" }}>
            Compare TRL/Active with other fitness apps
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            Fair comparisons for people choosing between workout loggers, calorie trackers, class libraries, human coaching, and Saddie&apos;s adaptive AI fitness coaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {comparisons.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl p-6 hover:scale-[1.01] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h2 className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>{item.label}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{item.body}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
