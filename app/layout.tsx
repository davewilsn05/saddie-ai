import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saddie — AI Fitness Intelligence",
  description: "Saddie is an AI fitness coach that learns from every workout. Research, insights, and the science behind adaptive training.",
  metadataBase: new URL("https://saddie.ai"),
  openGraph: { siteName: "Saddie", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
          <Nav />
          {children}
        </body>
    </html>
  );
}
