import Link from "next/link";
import type { Metadata } from "next";
import { COMPETITORS } from "../../lib/competitors";

export const metadata: Metadata = {
  title: "Saddie vs Other Fitness Apps | Honest Comparisons",
  description: "Honest side-by-side comparisons of TRLActive and Saddie vs Fitbod, Future, Freeletics, MyFitnessPal, and Peloton.",
};

export default function VsIndex() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>How Saddie compares</h1>
        <p className="text-base max-w-xl" style={{ color: "var(--muted)" }}>
          Honest breakdowns — strengths, weaknesses, and who each app is actually built for.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {COMPETITORS.map((c) => (
          <Link key={c.slug} href={`/vs/${c.slug}`}
            className="group rounded-xl p-6 flex flex-col gap-4 hover:scale-[1.01] transition-transform"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <div>
              <div className="text-xs font-medium mb-2" style={{ color: "var(--muted)" }}>Saddie vs</div>
              <div className="text-xl font-bold" style={{ color: "var(--foreground)" }}>{c.name}</div>
              <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>{c.price}</div>
            </div>
            <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{c.verdict.slice(0, 100)}…</p>
            <span className="text-sm font-medium group-hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
              Read comparison →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
