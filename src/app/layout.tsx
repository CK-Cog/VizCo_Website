import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import SiteHeader from "@/components/SiteHeader";
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
  metadataBase: new URL("https://vizco.co"),
  title: "VizCo | The Adoption Layer for Enterprise AI",
  description:
    "VizCo is the adoption layer for enterprise AI. Enforce security and spend policies on every request, before anything leaves your environment.",
  openGraph: {
    title: "VizCo | The Adoption Layer for Enterprise AI",
    description:
      "Enforce security policies and budgets on every request. Sensitive data is blocked or redacted before it reaches an external model. Spend stays tied to teams, projects, and approved use cases.",
    url: "https://vizco.co",
    siteName: "VizCo",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-paper text-ink-900 antialiased`}
      >
        <SiteHeader />

        <div className="h-16" />
        {children}

        <footer className="border-t border-border bg-surface-subtle">
          <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div className="max-w-sm">
                <Wordmark />
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  The adoption layer for enterprise AI, deployed in your
                  environment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 font-mono text-[13px] sm:grid-cols-3">
                <Link
                  href="/platform"
                  className="text-ink-500 hover:text-ink-900"
                >
                  Platform
                </Link>
                <Link href="/team" className="text-ink-500 hover:text-ink-900">
                  Team
                </Link>
                <Link href="/careers" className="text-ink-500 hover:text-ink-900">
                  Careers
                </Link>
                <Link href="/blog" className="text-ink-500 hover:text-ink-900">
                  Blog
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-ink-500 hover:text-ink-900"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-ink-500 hover:text-ink-900"
                >
                  Terms
                </Link>
              </div>
            </div>
            <div className="mt-10 border-t border-border pt-6 text-xs text-ink-500">
              © {new Date().getFullYear()} VizCo. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
