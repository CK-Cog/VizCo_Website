/**
 * How VizCo works: one process for every page. Assess, mitigate, place, monitor, report.
 * The monitor and report steps are the point of difference: AI risk changes after the policy is bound.
 */
export type ProcessStep = { title: string; short: string; detail: string; get: string };

export const PROCESS: ProcessStep[] = [
  {
    title: "Assess",
    short: "We assess your AI risk.",
    detail:
      "We map every AI system you run and buy: what it does, what it can touch, and how it can fail. Then we read your policies against it, so you see exactly where you're covered, silent or excluded.",
    get: "An AI risk assessment and a map of your coverage gaps",
  },
  {
    title: "Mitigate",
    short: "We help you reduce it.",
    detail:
      "We test your AI, review its controls, and recommend practical fixes: approvals, limits, monitoring and contract terms. Lower risk means better terms, and can make insurable what wasn't.",
    get: "A mitigation plan, and evidence of the controls in place",
  },
  {
    title: "Place",
    short: "We place the cover.",
    detail:
      "We take your assessment and evidence to the insurers best suited to your AI, and negotiate wording that names AI rather than leaving it silent.",
    get: "AI liability cover written for your AI",
  },
  {
    title: "Monitor",
    short: "We watch for change.",
    detail:
      "AI risk can change overnight: a model update, new data, a new use or a new vendor. We monitor continuously, so a change in risk is caught when it happens, not at claim time.",
    get: "Alerts when your risk changes, and what to do about it",
  },
  {
    title: "Report",
    short: "We keep your insurers informed.",
    detail:
      "We feed what we see back to your insurers, so your cover reflects how your AI works today. If you need to claim, the record is already there, and we argue the claim for you.",
    get: "Cover that keeps up with your AI, and a record ready for claim time",
  },
];
