/** Insights (blog posts). Each has a page at /insights/<slug>. Newest first. */
export type Insight = {
  slug: string;
  tag: string;
  title: string;
  dek: string;
  published: string;
  updated: string;
  dateLabel: string;
  minutes: number;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "silent-ai",
    tag: "Silent AI",
    title: "The problem with silence",
    dek: "Most business insurance says nothing about AI. That silence feels like cover. It isn't a promise.",
    published: "2026-11-16",
    updated: "2026-11-16",
    dateLabel: "16 November 2026",
    minutes: 3,
  },
  {
    slug: "ai-exclusions-at-renewal",
    tag: "AI exclusions",
    title: "AI exclusions are arriving at renewal",
    dek: "What the standard wording says, and how far it reaches.",
    published: "2026-11-16",
    updated: "2026-11-16",
    dateLabel: "16 November 2026",
    minutes: 2,
  },
  {
    slug: "ai-liability-trends-2026",
    tag: "Emerging trends",
    title: "Five trends reshaping AI liability",
    dek: "More incidents, less visibility, courts and regulators moving in, and cover moving the other way.",
    published: "2026-11-16",
    updated: "2026-11-16",
    dateLabel: "16 November 2026",
    minutes: 3,
  },
];

export const insight = (slug: string) => {
  const found = INSIGHTS.find((i) => i.slug === slug);
  if (!found) throw new Error(`Unknown insight: ${slug}`);
  return found;
};
