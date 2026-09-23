export const scanObservations = [
  {
    t: "Models and vendors",
    b: "Which models and vendors are in use for the agent under assessment.",
  },
  {
    t: "Data and tool access",
    b: "What data stores and tools the agent can reach, and with what permissions.",
  },
  {
    t: "Public exposure",
    b: "Whether the agent is customer-facing or otherwise exposed outside the tenant.",
  },
  {
    t: "Autonomy thresholds",
    b: "Where the agent decides alone, and where human review is required.",
  },
  {
    t: "Guardrails in place",
    b: "Segmentation, access control, and other controls already attached to the workflow.",
  },
  {
    t: "Evaluation history",
    b: "Performance and evaluation records that back how the agent has behaved.",
  },
];

export const scoreStreams = [
  {
    t: "Static analysis, per release",
    b: "Code, permissions, gated capabilities, and guardrails. Read only.",
  },
  {
    t: "Action and admin logs",
    b: "What each agent did, who changed what and when. Past data counts.",
  },
  {
    t: "Measured outcomes",
    b: "The risks you want covered, in numbers: how much sensitive data actually reached a model.",
  },
];

export const underwriterGets = [
  {
    t: "Explainable",
    b: "Every point on the score traces to an observation, not a form answer.",
  },
  {
    t: "Comparable",
    b: "Benchmarked against similar agents.",
  },
  {
    t: "Calibrated",
    b: "Tightens as observed losses accumulate.",
  },
  {
    t: "Provable at claim time",
    b: "What was in place at the moment it happened.",
  },
];

export const gapLoop = [
  {
    t: "Gap analysis",
    b: "For this deployment: which guardrails to adopt, how much each one cuts risk, and how that supports coverage.",
  },
  {
    t: "Rescan",
    b: "Confirm the guardrails are in and the risk score is lower. Measured change, not a checklist.",
  },
  {
    t: "Insure",
    b: "VizCo brokers that evidence to carriers. Lower measured risk supports cover that matches what runs.",
  },
];

export const coveragePerils = [
  {
    peril: "Sensitive data leaks through an agent",
    looks: "Client data or contract terms reach a model or leave the tenant",
    party: "First and third party",
  },
  {
    peril: "Agent acts beyond scope",
    looks: "Wrong payment, deleted records, an unauthorized send",
    party: "First party",
  },
  {
    peril: "Wrong output relied upon",
    looks: "A hallucinated answer becomes a customer claim",
    party: "Third party",
  },
  {
    peril: "Regulatory action on AI use",
    looks: "Defense costs and, where insurable, fines",
    party: "First party",
  },
  {
    peril: "Underperformance against a promise",
    looks: "The AI guarantee pays your client when the agent misses agreed performance",
    party: "First party, paid to your client",
  },
];

export const independence = [
  {
    t: "Guardrail impact, not a stack",
    b: "We show how adopting specific guardrails changes risk for your deployment. We do not replace your governance tools.",
  },
  {
    t: "Carrier agnostic",
    b: "We broker evidence to carriers rather than sell one carrier's policy.",
  },
  {
    t: "Read only",
    b: "Nothing installed in the workflow, nothing changed, no active testing.",
  },
  {
    t: "In your environment",
    b: "VizCo runs in your VPC or on-prem. Your releases and logs stay inside your perimeter.",
  },
];
