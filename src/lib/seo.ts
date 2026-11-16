import type { Metadata } from "next";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL, TAGLINE } from "@/content/site";
import { FOUNDERS, type TeamMember } from "@/content/team";

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
const WEBSITE_ID = `${SITE_URL}/#website`;

/** A team member or advisor as a Person, with a stable @id so every page refers to the same entity. */
export function personSchema(m: TeamMember, relation: "worksFor" | "affiliation" = "worksFor") {
  const name = m.name.replace(/,.*$/, "");
  const previously = m.prev?.replace(/^Previously\s+/, "").split(/,\s*/).filter(Boolean) ?? [];
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/about#${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    name,
    ...(m.name.includes("Ph.D.") ? { honorificSuffix: "PhD" } : {}),
    jobTitle: m.role,
    [relation]: { "@id": ORG_ID },
    ...(m.img ? { image: `${SITE_URL}${m.img}` } : {}),
    ...(previously.length ? { alumniOf: previously.map((o) => ({ "@type": "Organization", name: o })) } : {}),
    ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
  };
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
        alternateName: "Vizco",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.png`,
        slogan: TAGLINE,
        description:
          "VizCo is the AI & emerging risk specialty broker. It makes AI insurable and places AI liability cover for enterprises and the AI startups that sell to them.",
        email: CONTACT_EMAIL,
        contactPoint: { "@type": "ContactPoint", contactType: "sales", email: CONTACT_EMAIL, url: `${SITE_URL}/contact` },
        founder: FOUNDERS.map((m) => personSchema(m)),
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
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: SITE_NAME,
        description: TAGLINE,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

/** Breadcrumb trail shown in search results in place of the bare URL. Home is added first. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/** The about page: who runs VizCo and who advises it. */
export function aboutPageSchema({ team, advisors }: { team: TeamMember[]; advisors: TeamMember[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: `${SITE_URL}/about`,
        name: "About VizCo",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        mainEntity: { "@id": ORG_ID },
      },
      ...team.map((m) => personSchema(m)),
      ...advisors.map((m) => personSchema(m, "affiliation")),
    ],
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE_URL}/contact`,
    name: "Contact VizCo",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
  };
}

/** The insights index, listing every post. */
export function blogSchema(posts: { title: string; description: string; slug: string; published: string; updated: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/insights#blog`,
    url: `${SITE_URL}/insights`,
    name: "VizCo Insights",
    description: "Short, sourced reads on AI liability insurance, silent AI, AI exclusions and emerging risk.",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `${SITE_URL}/insights/${p.slug}`,
      datePublished: p.published,
      dateModified: p.updated,
      author: { "@id": ORG_ID },
    })),
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
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en",
    datePublished,
    dateModified,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    image: `${SITE_URL}/opengraph-image.png`,
    citation: citations.map((c) => ({ "@type": "CreativeWork", name: c.label, url: c.href })),
  };
}
