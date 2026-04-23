import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOPICS, getTopic } from "../../../lib/topics";
import { POSTS, getPost } from "../../../lib/posts";

export async function generateStaticParams() {
  return TOPICS.map((t) => ({ cluster: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ cluster: string }> }): Promise<Metadata> {
  const { cluster } = await params;
  const topic = getTopic(cluster);
  if (!topic) return {};
  return { title: topic.metaTitle, description: topic.metaDescription };
}

export default async function TopicPage({ params }: { params: Promise<{ cluster: string }> }) {
  const { cluster } = await params;
  const topic = getTopic(cluster);
  if (!topic) notFound();

  const clusterPosts = POSTS.filter((p) => p.cluster === cluster);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-8">
        <Link href="/topics" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>← Topics</Link>
      </div>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-5"
        style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(124,108,250,0.3)" }}>
        Topic cluster
      </div>
      <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>{topic.title}</h1>
      <p className="text-base max-w-2xl mb-12" style={{ color: "var(--muted)" }}>{topic.description}</p>

      {clusterPosts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {clusterPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="group rounded-xl p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full self-start"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>{post.tag}</span>
              <h2 className="font-semibold text-sm leading-snug group-hover:opacity-80 transition-opacity"
                style={{ color: "var(--foreground)" }}>{post.title}</h2>
              <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--muted)" }}>{post.summary}</p>
              <span className="text-xs mt-1" style={{ color: "var(--muted)" }}>{post.date} · {post.readTime}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p style={{ color: "var(--muted)" }}>More posts in this topic coming soon.</p>
      )}

      <div className="mt-16 rounded-xl p-8 text-center"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>Want coaching, not just content?</p>
        <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>TRLActive puts Saddie's coaching into your workouts — free to start.</p>
        <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
          className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
          style={{ background: "var(--accent)", color: "white" }}>
          Try TRLActive free →
        </a>
      </div>
    </main>
  );
}
