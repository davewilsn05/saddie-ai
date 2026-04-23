import Link from "next/link";
import { POSTS } from "../lib/posts";
import { COMPETITORS } from "../lib/competitors";

const stats = [
  { value: "10K+", label: "Workouts completed" },
  { value: "94%", label: "Users hit their 4-week goal" },
  { value: "3.2×", label: "Faster strength gains vs static apps" },
  { value: "68%", label: "Less likely to quit in month 1" },
];

const features = [
  { icon: "🧠", title: "A plan built for you", body: "Answer a few questions about your goals, schedule, and equipment. Saddie builds a training plan around your actual life — not an idealized version of it." },
  { icon: "🎙️", title: "A coach with you every session", body: "Real-time voice coaching guides you through every workout. No staring at your phone. No guessing what's next. Just train." },
  { icon: "🔄", title: "It gets smarter as you train", body: "Saddie watches how you actually perform and adjusts your plan in real time. Miss a week? It rebuilds. Crushing it? It pushes harder." },
  { icon: "🥗", title: "Training and nutrition together", body: "Your food plan updates based on your training load. Hard week at the gym? Your calories go up. Recovery week? They come down." },
];

export default function Home() {
  const featuredPosts = POSTS.slice(0, 3);
  const vsLinks = COMPETITORS.slice(0, 4);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124,108,250,0.2) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-7"
            style={{ background: "var(--accent-glow)", color: "var(--accent)", border: "1px solid rgba(124,108,250,0.3)" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent)" }} />
            The AI behind TRLActive
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: "var(--foreground)" }}>
            Hi, I'm Saddie.
          </h1>
          <p className="text-xl sm:text-2xl font-medium mb-5" style={{ color: "var(--accent)" }}>
            Your AI fitness coach.
          </p>
          <p className="text-lg max-w-2xl mx-auto mb-10" style={{ color: "var(--muted)" }}>
            I build your training plan, coach you through every session with real-time voice cues, and adapt your program based on how you actually train — not how you said you would.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
              style={{ background: "var(--accent)", color: "white" }}>
              Try TRLActive free →
            </a>
            <Link href="/blog"
              className="px-7 py-3 rounded-full font-medium text-base hover:opacity-80 transition-opacity"
              style={{ border: "1px solid var(--border)", color: "var(--foreground)" }}>
              Read fitness tips
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold mb-1" style={{ color: "var(--accent)" }}>{s.value}</div>
              <div className="text-sm" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>What makes me different</h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Most fitness apps give you a plan and leave you to figure the rest out. I stay with you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl p-6"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "var(--foreground)" }}>{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* I'm built for */}
      <section style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--foreground)" }}>I'm built for</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Weight loss", href: "/for/weight-loss" },
              { label: "Building muscle", href: "/for/muscle-building" },
              { label: "Complete beginners", href: "/for/beginners" },
              { label: "Busy people", href: "/for/busy-people" },
              { label: "Runners who lift", href: "/for/runners" },
            ].map((g) => (
              <Link key={g.href} href={g.href}
                className="px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
                style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                {g.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>From the blog</h2>
          <Link href="/blog" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>All posts →</Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="rounded-xl p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full self-start"
                style={{ background: "var(--accent-glow)", color: "var(--accent)" }}>{post.tag}</span>
              <h3 className="font-semibold text-sm leading-snug" style={{ color: "var(--foreground)" }}>{post.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{post.summary}</p>
              <span className="text-xs mt-auto" style={{ color: "var(--muted)" }}>{post.date} · {post.readTime}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How do I compare */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold" style={{ color: "var(--foreground)" }}>How I compare</h2>
          <Link href="/vs" className="text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>See all →</Link>
        </div>
        <div className="grid sm:grid-cols-4 gap-4">
          {vsLinks.map((c) => (
            <Link key={c.slug} href={`/vs/${c.slug}`}
              className="rounded-xl p-5 text-center hover:scale-[1.02] transition-transform"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>Saddie vs {c.name}</div>
              <div className="text-xs" style={{ color: "var(--muted)" }}>{c.price}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="rounded-2xl p-12 text-center"
          style={{ background: "linear-gradient(135deg, rgba(124,108,250,0.15) 0%, rgba(124,108,250,0.05) 100%)", border: "1px solid rgba(124,108,250,0.25)" }}>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Ready to start?</h2>
          <p className="text-base max-w-md mx-auto mb-7" style={{ color: "var(--muted)" }}>
            TRLActive is free to download. I'll have your first session ready in under 2 minutes.
          </p>
          <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-opacity"
            style={{ background: "var(--accent)", color: "white" }}>
            Download TRLActive free →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm"
          style={{ color: "var(--muted)" }}>
          <span>© 2026 Saddie · saddie.ai</span>
          <div className="flex gap-5">
            <Link href="/blog" className="hover:opacity-80 transition-opacity">Blog</Link>
            <Link href="/vs" className="hover:opacity-80 transition-opacity">Compare</Link>
            <Link href="/topics" className="hover:opacity-80 transition-opacity">Topics</Link>
            <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">TRLActive →</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
