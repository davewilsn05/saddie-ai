import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "../../lib/blog";

export const metadata: Metadata = {
  title: "Fitness Blog — Saddie",
  description: "Honest fitness advice, app comparisons, and practical tips for people with real lives. Powered by Saddie AI.",
};

const tagColors: Record<string, string> = {
  Lifestyle: "#22c55e",
  "Voice Coaching": "#2dd4bf",
  Comparison: "#f97316",
  Value: "#f59e0b",
  Beginners: "#7c6cfa",
  Strength: "#ef4444",
  "Adaptive Training": "#3b82f6",
  "AI Coaching": "#a855f7",
  Nutrition: "#10b981",
  Recovery: "#06b6d4",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Fitness tips from Saddie</h1>
        <p className="text-base max-w-xl" style={{ color: "var(--muted)" }}>
          Practical advice for people with real lives. No bro science. No perfect-schedule assumptions.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => {
          const color = tagColors[post.tag] ?? "var(--accent)";
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group rounded-xl p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: `${color}20`, color }}>{post.tag}</span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>{post.readingTime}</span>
              </div>
              <h2 className="font-semibold text-sm leading-snug group-hover:opacity-80 transition-opacity"
                style={{ color: "var(--foreground)" }}>{post.title}</h2>
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{post.description}</p>
              <span className="text-xs mt-1" style={{ color: "var(--muted)" }}>{post.date}</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
