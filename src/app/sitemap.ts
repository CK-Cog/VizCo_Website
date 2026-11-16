import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";
import { INSIGHTS } from "@/content/insights";

const UPDATED = new Date("2026-11-16");

const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/the-problem", priority: 0.9, changeFrequency: "weekly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  ...INSIGHTS.map((i) => ({ path: `/insights/${i.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
  { path: "/startups", priority: 0.9, changeFrequency: "monthly" },
  { path: "/enterprise", priority: 0.9, changeFrequency: "monthly" },
  { path: "/emerging-risk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
