import Link from "next/link";
import type { Metadata } from "next";
import { TOPICS } from "../../lib/topics";
import { POSTS } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Topics — Saddie",
  description: "Browse fitness topics by cluster: adaptive training, voice coaching, comparisons, lifestyle, and AI personal training.",
};

export default function TopicsIndex() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Topics</h1>
        <p className="text-base max-w-xl" style={{ color: "var(--muted)" }}>
          Browse by subject — each topic links to every related article in one place.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOPICS.map((topic) => {
          const count = POSTS.filter((p) => p.cluster === topic.slug).length;
          return (
            <Link key={topic.slug} href={`/topics/${topic.slug}`}
              className="group rounded-xl p-6 flex flex-col gap-3 hover:scale-[1.01] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-base" style={{ color: "var(--foreground)" }}>{topic.title}</h2>
                <span className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>{count} posts</span>
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{topic.description}</p>
              <span className="text-sm font-medium group-hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
                Explore →
              </span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
