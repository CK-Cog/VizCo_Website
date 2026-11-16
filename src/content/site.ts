export const SITE_NAME = "VizCo";
export const SITE_URL = "https://vizco.co";
export const TAGLINE = "The AI & Emerging Risk Specialty Broker";
export const BOOKING_URL = "https://calendar.app.google/UUfjxJN178KsGvCGA";
export const CONTACT_EMAIL = "info@vizco.co";
export const CHECKER_URL = "https://platform.vizco.app/";

export type NavLink = { label: string; href: string; external?: boolean };
export type NavItem = NavLink & { items?: NavLink[] };

export const NAV: NavItem[] = [
  { label: "What we cover", href: "/#coverage" },
  { label: "The problem", href: "/the-problem" },
  { label: "Insights", href: "/insights" },
  { label: "For startups", href: "/startups" },
  { label: "For enterprise", href: "/enterprise" },
  { label: "Emerging risk", href: "/emerging-risk" },
  { label: "About", href: "/about" },
];

export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "For startups",
    links: [
      { label: "Overview", href: "/startups" },
      { label: "How it works", href: "/startups#process" },
      { label: "What you get", href: "/startups#deliverable" },
    ],
  },
  {
    title: "For enterprise",
    links: [
      { label: "Overview", href: "/enterprise" },
      { label: "Our approach", href: "/enterprise#approach" },
      { label: "How it works", href: "/enterprise#process" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "The problem", href: "/the-problem" },
      { label: "Insights", href: "/insights" },
      { label: "Emerging risk", href: "/emerging-risk" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
];

export const DISCLAIMER =
  "VizCo acts as an insurance intermediary. Policies are underwritten by third-party insurers; VizCo does not underwrite or bear insurance risk. All coverage is subject to policy terms, conditions, limits and exclusions. Nothing on this site is an offer of insurance.";
