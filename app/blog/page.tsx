import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "../../lib/blog";
import { TOPICS } from "../../lib/topics";
import { buildSiteMetadata } from "../../lib/siteMetadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Fitness Blog — Saddie",
  description: "Honest fitness advice, app comparisons, and practical tips for people with real lives. Powered by Saddie AI.",
  path: "/blog",
  imageTitle: "Fitness tips from Saddie",
  imageTag: "Blog",
});

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
  const productLinks = [
    { href: "/ai-fitness-coach", label: "AI fitness coach" },
    { href: "/personalized-workout-plan-app", label: "Personalized plans" },
    { href: "/weight-loss-workout-app", label: "Weight loss" },
    { href: "/workout-app-with-meal-planning", label: "Workout + meals" },
    { href: "/compare", label: "App comparisons" },
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Fitness tips from Saddie</h1>
        <p className="text-base max-w-xl" style={{ color: "var(--muted)" }}>
          Practical advice for people with real lives. No bro science. No perfect-schedule assumptions.
        </p>
      </div>
      <section className="grid lg:grid-cols-[1fr_1fr] gap-5 mb-10">
        <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Topic clusters</h2>
          <div className="flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/topics/${topic.slug}`}
                className="px-3 py-1 rounded-full text-xs hover:opacity-80 transition-opacity"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-xl p-5" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="text-sm font-semibold mb-3" style={{ color: "var(--foreground)" }}>Product pages</h2>
          <div className="flex flex-wrap gap-2">
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1 rounded-full text-xs hover:opacity-80 transition-opacity"
                style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
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
