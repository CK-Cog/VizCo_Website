import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, TAGLINE } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displaySans = Noto_Sans({
  variable: "--font-display",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const description =
  "VizCo is the AI & emerging risk specialty broker. We make AI insurable and place AI liability cover for enterprises and the AI startups that sell to them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `VizCo | ${TAGLINE}`,
    template: "%s | VizCo",
  },
  description,
  openGraph: {
    title: `VizCo | ${TAGLINE}`,
    description,
    url: SITE_URL,
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
        className={`${geistSans.variable} ${geistMono.variable} ${displaySans.variable} bg-ink text-cream antialiased`}
      >
        <SiteHeader />
        <div className="h-16" aria-hidden />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
