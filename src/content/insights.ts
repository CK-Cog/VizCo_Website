/** Insights (blog posts). Each has a page at /insights/<slug>. Newest first. */
export type Insight = {
  slug: string;
  tag: string;
  title: string;
  dek: string;
  /** Meta description for search results and AI answers: what the post covers, 120 to 160 characters. */
  description: string;
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
    description:
      "Silent AI is when business insurance neither covers nor excludes AI. Why that silence is a risk, the UK cyber precedent, and what to do about it.",
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
    description:
      "Standard AI exclusion wording has been available to US insurers since January 2026. What it says, how far it reaches, and what to check at renewal.",
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
    description:
      "Five trends reshaping AI liability in 2026: more AI incidents, less transparency, court rulings, EU deadlines, and business insurance pulling back.",
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
