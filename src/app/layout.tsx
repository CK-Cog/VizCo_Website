import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL, TAGLINE } from "@/content/site";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/seo";
import "./globals.css";

/* Inter with its optical-size axis: Inter Display at headline sizes, Inter Text for body. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "VizCo is the AI & emerging risk specialty broker. We make AI insurable and place AI liability cover for enterprises and the AI startups that sell to them.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "VizCo | AI Liability Insurance & Emerging Risk Broker",
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
        className={`${inter.variable} ${geistMono.variable} bg-ink text-cream antialiased`}
      >
        <JsonLd data={organizationSchema()} />
        <SiteHeader />
        <div className="h-[6.5rem]" aria-hidden />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
