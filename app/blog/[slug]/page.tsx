import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, getPost } from "../../../lib/blog";
import { TOPICS } from "../../../lib/topics";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Saddie`,
    description: post.description,
    openGraph: {
      images: [{ url: `/api/og?title=${encodeURIComponent(post.title)}&tag=${encodeURIComponent(post.tag)}`, width: 1200, height: 630 }],
    },
  };
}

function renderMarkdown(content: string) {
  const paragraphs = content.split(/\n{2,}/);
  return paragraphs.map((para, i) => {
    const trimmed = para.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("### ")) {
      return <h3 key={i}>{trimmed.slice(4)}</h3>;
    }
    if (trimmed.startsWith("## ")) {
      return <h2 key={i}>{trimmed.slice(3)}</h2>;
    }
    if (trimmed.startsWith("# ")) {
      return <h2 key={i}>{trimmed.slice(2)}</h2>;
    }
    // Legacy: **Heading** on its own line
    if (/^\*\*[^*]+\*\*$/.test(trimmed)) {
      return <h2 key={i}>{trimmed.replace(/\*\*/g, "")}</h2>;
    }
    // List
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const items = trimmed.split("\n").filter((l) => l.match(/^[-*] /));
      return <ul key={i}>{items.map((item, j) => <li key={j}>{item.slice(2)}</li>)}</ul>;
    }
    // Regular paragraph with inline bold
    const html = trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.cluster === post.cluster && p.slug !== post.slug).slice(0, 3);
  const topic = TOPICS.find((t) => t.slug === post.cluster);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Saddie", url: "https://saddie.ai" },
    publisher: { "@type": "Organization", name: "Saddie", url: "https://saddie.ai" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <style>{`
        .post-body p { margin-bottom: 1.2rem; color: var(--muted); line-height: 1.8; font-size: 1.05rem; }
        .post-body strong { color: var(--foreground); font-weight: 600; }
        .post-body h2 { font-size: 1.3rem; font-weight: 700; color: var(--foreground); margin: 2.5rem 0 0.75rem; }
        .post-body h3 { font-size: 1.1rem; font-weight: 600; color: var(--foreground); margin: 2rem 0 0.5rem; }
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
          <span className="text-sm" style={{ color: "var(--muted)" }}>{post.date} · {post.readingTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5" style={{ color: "var(--foreground)" }}>
          {post.title}
        </h1>
        <p className="text-lg mb-10" style={{ color: "var(--muted)" }}>{post.description}</p>
        <hr style={{ borderColor: "var(--border)", marginBottom: "2.5rem" }} />

        <div className="post-body">
          {renderMarkdown(post.content)}
        </div>

        {topic && (
          <div className="mt-10 mb-4">
            <Link href={`/topics/${topic.slug}`}
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--accent)" }}>
              More on {topic.title} →
            </Link>
          </div>
        )}

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

        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold mb-5" style={{ color: "var(--foreground)" }}>Related posts</h3>
            <div className="flex flex-col gap-3">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="rounded-xl p-4 hover:scale-[1.005] transition-transform"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="font-medium text-sm mb-1" style={{ color: "var(--foreground)" }}>{p.title}</div>
                  <div className="text-xs" style={{ color: "var(--muted)" }}>{p.description}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
}
