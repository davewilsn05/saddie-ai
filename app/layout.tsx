import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "Saddie - AI Fitness Coach for TRL/Active", template: "%s | Saddie" },
  description: "Saddie is the AI fitness coach behind TRL/Active. Build adaptive workout, nutrition, recovery, and progress plans around real life.",
  metadataBase: new URL("https://saddie.ai"),
  openGraph: {
    siteName: "Saddie",
    type: "website",
    images: [{ url: "/api/og?title=Saddie+%E2%80%94+AI+Fitness+Coach", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://saddie.ai" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://saddie.ai/#website",
      url: "https://saddie.ai",
      name: "Saddie",
      description: "AI fitness coaching for adaptive workout plans, voice-guided sessions, nutrition support, and real-life progress.",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://saddie.ai/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://saddie.ai/#organization",
      name: "Saddie",
      url: "https://saddie.ai",
      logo: { "@type": "ImageObject", url: "https://saddie.ai/api/og?title=Saddie" },
      sameAs: ["https://trlactive.com"],
      description: "Saddie is the AI coaching system behind TRL/Active: adaptive workout planning, voice-guided coaching, nutrition support, and recovery-aware progress.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://saddie.ai/#app",
      name: "TRL/Active",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
      url: "https://trlactive.com",
      creator: { "@id": "https://saddie.ai/#organization" },
      description: "AI fitness coaching app with adaptive workout plans, voice-guided sessions, nutrition support, and progress planning. Powered by Saddie.",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        {children}
      </body>
    </html>
  );
}
