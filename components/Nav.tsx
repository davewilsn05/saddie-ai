"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/ai-fitness-coach", label: "AI Coach" },
  { href: "/personalized-workout-plan-app", label: "Plans" },
  { href: "/workout-app-with-meal-planning", label: "Nutrition" },
  { href: "/blog", label: "Blog" },
  { href: "/compare", label: "Compare" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header style={{ borderBottom: "1px solid var(--border)", background: "rgba(6,6,10,0.92)" }}
      className="sticky top-0 z-50 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/trl-active-logo.png" alt="TRL/Active" width={36} height={36} className="rounded-lg" />
          <span className="font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>TRL / ACTIVE</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="transition-opacity hover:opacity-80"
              style={{ color: pathname.startsWith(l.href.split("/").slice(0, 2).join("/")) ? "var(--foreground)" : "var(--muted)" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <a href="https://trlactive.com" target="_blank" rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full text-sm font-medium hover:opacity-80 transition-opacity"
          style={{ background: "var(--accent)", color: "#050505" }}>
          Start your plan
        </a>
      </nav>
    </header>
  );
}
