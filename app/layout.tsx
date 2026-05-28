import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, SITE_NAME, SITE_URL, buildSiteMetadata } from "../lib/siteMetadata";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  ...buildSiteMetadata({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    imageTitle: "Saddie - AI Fitness Coach",
    imageTag: "TRL/Active",
  }),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://saddie.ai/#website",
      url: SITE_URL,
      name: SITE_NAME,
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
      name: SITE_NAME,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
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
