import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, TAGLINE } from "@/content/site";
import { FOUNDERS } from "@/content/team";

/** Per-page metadata: title, description, canonical address and share previews. */
export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  type?: "website" | "article";
}): Metadata {
  const full = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${SITE_NAME}, ${TAGLINE}` }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: SITE_NAME, type, images },
    twitter: { card: "summary_large_image", title: full, description, images },
  };
}

const ORG_ID = `${SITE_URL}/#organization`;

function founders() {
  return FOUNDERS.map((m) => ({
    "@type": "Person",
    name: m.name.replace(/,.*$/, ""),
    ...(m.name.includes("Ph.D.") ? { honorificSuffix: "PhD" } : {}),
    jobTitle: m.role,
    worksFor: { "@id": ORG_ID },
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  }));
}

/** Site-wide entity data: who VizCo is. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        slogan: TAGLINE,
        description:
          "VizCo is the AI & emerging risk specialty broker. It makes AI insurable and places AI liability cover for enterprises and the AI startups that sell to them.",
        email: CONTACT_EMAIL,
        founder: founders(),
        knowsAbout: [
          "AI liability insurance",
          "Silent AI",
          "AI exclusions",
          "AI risk",
          "Emerging risk",
          "Physical AI",
          "Humanoid robots",
          "Autonomous systems",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({ name, description, audience, path }: { name: string; description: string; audience: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Insurance brokerage",
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": ORG_ID },
    audience: { "@type": "BusinessAudience", name: audience },
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  citations,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  citations: { label: string; href: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}/opengraph-image.png`,
    citation: citations.map((c) => ({ "@type": "CreativeWork", name: c.label, url: c.href })),
  };
}
