import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { Button, CALENDLY_URL } from "@/components/ui";
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
  title: "VizCo | Policy Layer for Safe AI Adoption",
  description:
    "The on-premise policy layer for safe AI adoption. Control actions and data when AI connects to your systems, enforced at the MCP layer and deployed inside your environment.",
  openGraph: {
    title: "VizCo | Policy Layer for Safe AI Adoption",
    description:
      "Control what AI can do and what data it can access. Enforced at the MCP layer, with every call, decision, action, and data outcome logged on your infrastructure.",
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
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-md">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
            <Wordmark />

            <div className="hidden items-center gap-1 md:flex">
              <Link
                href="/team"
                className="rounded-md px-3 py-2 font-mono text-[13px] text-ink-700 transition-colors hover:text-ink-900"
              >
                Team
              </Link>
              <Link
                href="/careers"
                className="rounded-md px-3 py-2 font-mono text-[13px] text-ink-700 transition-colors hover:text-ink-900"
              >
                Careers
              </Link>
              <Link
                href="/blog"
                className="rounded-md px-3 py-2 font-mono text-[13px] text-ink-700 transition-colors hover:text-ink-900"
              >
                Blog
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Button href={CALENDLY_URL} external className="px-5 py-2.5">
                Book a Demo
              </Button>
            </div>
          </div>
        </nav>

        <div className="h-16" />
        {children}

        <footer className="border-t border-border bg-surface-subtle">
          <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
            <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
              <div className="max-w-sm">
                <Wordmark />
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  The policy layer for safe AI adoption, deployed in your
                  environment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 font-mono text-[13px] sm:grid-cols-3">
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
