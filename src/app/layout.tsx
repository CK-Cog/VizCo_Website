import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vizco | SecureMCP — The AI Governance Layer",
  description:
    "Vizco's SecureMCP enforces policies on content, access, and actions locally — before data reaches any model — so your organization can use frontier AI models safely.",
  openGraph: {
    title: "Vizco | SecureMCP — The AI Governance Layer",
    description:
      "Enforce AI policies on content, access, and actions locally — before data reaches ChatGPT, Claude, or Gemini.",
    url: "https://vizco.co",
    siteName: "Vizco",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Top Nav (shared) */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 py-3 bg-black border-b border-gray-800">
          <div className="flex items-center">
            <Link href="/" aria-label="Home">
              <Image src="/VizCo_Logo_New.png" alt="Vizco" width={96} height={32} style={{ objectFit: "contain" }} />
            </Link>
          </div>
          <div className="flex items-center gap-4 text-sm">
            {/* Products dropdown — CSS-only via group-hover */}
            <div className="relative group">
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-gray-200 hover:text-white py-2"
              >
                Products
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:rotate-180">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {/* Hover bridge to prevent flicker between trigger and menu */}
              <div className="absolute left-0 top-full h-2 w-full" />
              <div className="absolute left-0 top-[calc(100%+0.5rem)] w-72 bg-black border border-purple-900/60 rounded-2xl shadow-[0_10px_40px_-10px_rgba(168,85,247,0.4)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 p-2 z-50">
                <Link
                  href="/products/securemcp-chat"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-950/40 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">💬</span>
                  <span>
                    <span className="block text-sm font-semibold text-white">SecureMCP Chat</span>
                    <span className="block text-xs text-gray-400 mt-0.5">A governed front door to ChatGPT, Claude &amp; Gemini</span>
                  </span>
                </Link>
                <Link
                  href="/products/securemcp-memory"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-purple-950/40 transition-colors"
                >
                  <span className="text-xl flex-shrink-0">🧠</span>
                  <span>
                    <span className="block text-sm font-semibold text-white">SecureMCP Memory</span>
                    <span className="block text-xs text-gray-400 mt-0.5">An institutional memory layer that compounds over time</span>
                  </span>
                </Link>
                <div className="border-t border-gray-800 my-1" />
                <Link
                  href="/products"
                  className="block px-3 py-2 text-xs text-purple-300 hover:text-white"
                >
                  View all products →
                </Link>
              </div>
            </div>
            <Link href="/#learn-more" className="text-gray-200 hover:text-white">Learn more</Link>
            <Link href="/team" className="text-gray-200 hover:text-white">Team</Link>
            <Link href="/careers" className="text-gray-200 hover:text-white">Careers</Link>
            <Link href="/blog" className="text-gray-200 hover:text-white">Blog</Link>
            <a
              href="https://calendly.com/chris-kelly-stanford/1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition"
            >
              Book a Demo
            </a>
          </div>
        </nav>
        {/* Spacer to offset fixed nav height */}
        <div className="h-24" />
        {children}
      </body>
    </html>
  );
}
