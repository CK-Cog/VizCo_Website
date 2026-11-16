/**
 * Every source cited on the site. Pages cite by key, and each link sits beside the claim it supports.
 * Add a source here before adding a claim. Rules: no insurer names, no policy-type names, no prices.
 */
export type Source = { short: string; label: string; href: string };

export const SOURCES = {
  csis: {
    short: "CSIS",
    label: "CSIS, “The Insurance Industry's Retreat from AI Threatens to Slow Innovation and Adoption”, Sep 2026. Cites The Information (Apr 2026) and the Geneva Association (2025).",
    href: "https://www.csis.org/analysis/insurance-industrys-retreat-ai-threatens-slow-innovation-and-adoption",
  },
  insuranceBusiness: {
    short: "Insurance Business",
    label: "Insurance Business, review of standard AI exclusions and state filings, 16 Sep 2026.",
    href: "https://www.insurancebusinessmag.com/us/news/cyber/isos-generative-ai-exclusion-is-already-on-thousands-of-cgl-policies-589971.aspx",
  },
  moneyGeek: {
    short: "MoneyGeek",
    label: "MoneyGeek, “Your Business Insurance May Have Dropped AI Coverage in January 2026”, quoting the standard exclusion wording.",
    href: "https://www.moneygeek.com/insurance/business/general-liability/generative-ai-exclusion/",
  },
  pra2017: {
    short: "Bank of England",
    label: "Bank of England PRA, Supervisory Statement SS4/17, “Cyber insurance underwriting risk”, Jul 2017.",
    href: "https://www.prarulebook.co.uk/guidance/supervisory-statements/ss04-17-cyber-insurance-underwriting-risk",
  },
  pra2019: {
    short: "Simmons & Simmons",
    label: "Simmons & Simmons, summary of the PRA's letter of 30 January 2019 to general insurers' chief executives, 14 Feb 2019.",
    href: "https://www.simmons-simmons.com/en/publications/ck09o4k6bmkjz0b85utaqawpj/140219-the-pras-letter-on-cyber-underwriting",
  },
  moffatt: {
    short: "McCarthy Tétrault",
    label: "Moffatt v. Air Canada, 2024 BCCRT 149 (summary by McCarthy Tétrault).",
    href: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
  },
  mobley: {
    short: "Mondaq",
    label: "Mobley v. Workday, N.D. Cal. No. 3:23-cv-00770, collective action allowed May 2025 (summary via Mondaq).",
    href: "https://www.mondaq.com/unitedstates/new-technology/1630454/federal-court-allows-collective-action-lawsuit-over-alleged-ai-hiring-bias",
  },
  garcia: {
    short: "Volokh Conspiracy",
    label: "Garcia v. Character Technologies, M.D. Fla., ruling of 21 May 2025 (summary by Eugene Volokh, Reason).",
    href: "https://reason.com/volokh/2025/05/21/court-allows-lawsuit-over-character-ai-conversations-that-allegedly-caused-14-year-olds-suicide-to-go-forward/",
  },
  aiAct: {
    short: "EU AI Act",
    label: "EU AI Act, as amended by the Digital Omnibus on AI, Regulation (EU) 2026/1744.",
    href: "https://artificialintelligenceact.eu/ai-act-explorer/digital-omnibus/",
  },
  pld: {
    short: "EUR-Lex",
    label: "Directive (EU) 2024/2853 on liability for defective products (EUR-Lex).",
    href: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
  },
  aiIndex: {
    short: "Stanford AI Index",
    label: "Stanford HAI, The 2026 AI Index Report, Responsible AI chapter.",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai",
  },
} satisfies Record<string, Source>;

export type SourceKey = keyof typeof SOURCES;
