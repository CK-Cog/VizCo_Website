import {
  Fingerprint,
  Plug,
  ScrollText,
  Database,
  Bot,
  Wallet,
  Eye,
  ChartColumn,
} from "lucide-react";

export const securityControls = [
  {
    icon: Fingerprint,
    t: "Policy & Identity",
    b: "Roles, permissions, and approvals enforced before any call runs.",
  },
  {
    icon: Database,
    t: "Data Control",
    b: "Sensitive fields are blocked or redacted before they ever reach an external model.",
  },
  {
    icon: Bot,
    t: "Agent & Action Control",
    b: "Constrain read, write, send, edit, and delete actions across systems.",
  },
  {
    icon: Plug,
    t: "Secure Connectivity",
    b: "Reach internal systems without exposing credentials or keys outside your walls.",
  },
  {
    icon: ScrollText,
    t: "Audit Trail",
    b: "Every call, policy decision, action, and data outcome logged on your infrastructure.",
  },
];

export const budgetControls = [
  {
    icon: Wallet,
    t: "Budget limits",
    b: "Set budgets by team, project, or use case. Limits are enforced on every request.",
  },
  {
    icon: Eye,
    t: "Spend by owner",
    b: "See cost by team, project, and model, so you know who is spending what.",
  },
  {
    icon: ChartColumn,
    t: "Use by workflow",
    b: "See themes of AI use and which workflows are running, so you know what the spend is for.",
  },
];

export const integrations = [
  { name: "ChatGPT", logo: "/chatgpt_logo.svg" },
  { name: "Claude", logo: "/claude_logo.svg" },
  { name: "Gemini", logo: "/gemini_logo.svg" },
  { name: "Microsoft 365", logo: "/microsoft_365_logo.svg" },
  { name: "AWS", logo: "/aws_logo.svg" },
  { name: "Google Cloud", logo: "/gcp_logo.svg" },
];

export const deployments = [
  {
    title: "Cloud",
    body: "Deploy in your cloud account. Policies and budgets are enforced inside your perimeter.",
  },
  {
    title: "On-prem",
    body: "Run VizCo on your own infrastructure, next to the systems and data you already govern.",
  },
  {
    title: "Air-gapped",
    body: "Operate in disconnected environments where sensitive workflows never leave your network.",
  },
];
