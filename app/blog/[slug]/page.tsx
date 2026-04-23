import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { POSTS, getPost } from "../../../lib/posts";
import { TOPICS } from "../../../lib/topics";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Saddie`,
    description: post.summary,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = POSTS.filter((p) => p.cluster === post.cluster && p.slug !== post.slug).slice(0, 3);
  const topic = TOPICS.find((t) => t.slug === post.cluster);

  const paragraphs = post.body.split("\n\n");

  return (
    <>
      <style>{`
        .post-body p { margin-bottom: 1.2rem; color: var(--muted); line-height: 1.8; font-size: 1.05rem; }
        .post-body strong { color: var(--foreground); font-weight: 600; }
        .post-body h2 { font-size: 1.3rem; font-weight: 700; color: var(--foreground); margin: 2.5rem 0 0.75rem; }
        .post-body ul { margin: 1rem 0 1.5rem 1.5rem; list-style: disc; }
        .post-body li { color: var(--muted); line-height: 1.7; margin-bottom: 0.4rem; font-size: 1.02rem; }
      `}</style>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--muted)" }}>← Blog</Link>
        </div>

        <div className="flex items-center gap-3 mb-5">
          <span className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>{post.tag}</span>
          <span className="text-sm" style={{ color: "var(--muted)" }}>{post.date} · {post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5" style={{ color: "var(--foreground)" }}>
          {post.title}
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--muted)" }}>{post.summary}</p>
        <hr style={{ borderColor: "var(--border)", marginBottom: "2.5rem" }} />

        <div className="post-body">
          {paragraphs.map((para, i) => {
            if (para.startsWith("**") && para.endsWith("**") && para.split("**").length === 3) {
              return <h2 key={i}>{para.replace(/\*\*/g, "")}</h2>;
            }
            if (para.startsWith("- ")) {
              const items = para.split("\n").filter((l) => l.startsWith("- "));
              return <ul key={i}>{items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}</ul>;
            }
            const html = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
            return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
          })}
        </div>

        {/* Topic link */}
        {topic && (
          <div className="mt-10 mb-4">
            <Link href={`/topics/${topic.slug}`}
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--accent)" }}>
              More on {topic.title} →
            </Link>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 rounded-xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,108,250,0.15) 0%, rgba(124,108,250,0.05) 100%)", border: "1px solid rgba(124,108,250,0.25)" }}>
          <p className="font-semibold text-lg mb-2" style={{ color: "var(--foreground)" }}>Ready to train smarter?</p>
          <p className="text-sm mb-5" style={{ color: "var(--muted)" }}>TRLActive uses Saddie to coach you through every workout — free to start.</p>
          <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-80 transition-opacity"
            style={{ background: "var(--accent)", color: "white" }}>
            Try TRLActive free →
          </a>
        </div>

        {/* Related */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--foreground)" }}>Related posts</h3>
            <div className="flex flex-col gap-3">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="rounded-xl p-4 hover:scale-[1.005] transition-transform"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="font-medium text-sm mb-1" style={{ color: "var(--foreground)" }}>{p.title}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{p.summary}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
