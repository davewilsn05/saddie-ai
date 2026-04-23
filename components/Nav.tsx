"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/vs", label: "Compare" },
  { href: "/topics", label: "Topics" },
  { href: "/workout-type/strength-training", label: "Workouts" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid var(--border)", background: "rgba(6,6,10,0.92)" }}
      className="sticky top-0 z-50 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: "var(--accent)", color: "white" }}>S</div>
          <span className="font-semibold tracking-tight" style={{ color: "var(--foreground)" }}>saddie.ai</span>
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
          style={{ background: "var(--accent)", color: "white" }}>
          Get TRLActive
        </a>
      </nav>
    </header>
  );
}
