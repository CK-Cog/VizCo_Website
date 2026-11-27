import type { SourceKey } from "@/content/sources";

/**
 * How deep we go on each risk, from the paperwork to the running system. The home page's
 * risk map draws these as rings, outermost first; every risk gets all four.
 */
export type DepthKey = "policy" | "system" | "tests" | "live";

export const DEPTH: { key: DepthKey; name: string; short: string; line: string }[] = [
  { key: "policy", name: "Your policy", short: "Policy", line: "What the wording says about it" },
  { key: "system", name: "Your system", short: "System", line: "Where your AI could cause it" },
  { key: "tests", name: "Tests & controls", short: "Tests", line: "How it fails, and what stops it" },
  { key: "live", name: "Live", short: "Live", line: "What changes once you're covered" },
];

export type Exposure = {
  headline: string;
  line: string;
  /** Its technical name, shown on the risk map. The headline and line say it in plain words. */
  short: string;
  /** Why it lands on the buyer. Plain consequence, no figures. */
  why: string;
  /** A real case or rule, cited beside it. Only where there's a source in src/content/sources.ts. */
  record?: { text: string; s: SourceKey };
  /** What we check for this risk at each depth. Keep to what we actually do (see src/content/process.ts). */
  depth: Record<DepthKey, string>;
};

export type ExposureGroup = {
  name: string;
  items: Exposure[];
};

/**
 * Plain-language examples of how AI goes wrong, in our own words, grouped by what goes wrong.
 * Not a complete list. Numbering (01 to 12) is generated from the order here.
 */
export const EXPOSURE_GROUPS: ExposureGroup[] = [
  {
    name: "Says the wrong thing",
    items: [
      {
        headline: "It says something untrue.",
        line: "A customer acts on it, and holds you to it.",
        short: "Hallucination",
        why: "Your AI speaks for you. What it tells a customer, you can be held to.",
        record: { text: "A tribunal held an airline liable for its chatbot's wrong refund advice.", s: "moffatt" },
        depth: {
          policy: "Whether your wording covers loss from what your AI tells people, or only from what your staff do.",
          system: "Where it answers customers, and what it can promise: refunds, discounts, terms.",
          tests: "We test it on real customer questions and check its answers stay within your own documents and rules.",
          live: "We re-check its answers after model updates and new knowledge sources.",
        },
      },
      {
        headline: "It shares what it shouldn't.",
        line: "Private data reaches the wrong person.",
        short: "Data leakage",
        why: "You answer to the people whose data it was, and to the regulators who protect it.",
        depth: {
          policy: "Whether a leak caused by your AI counts as a data incident under your wording, or falls between policies.",
          system: "What data it can reach, what it remembers, and who it talks to.",
          tests: "We try to make it reveal other users' data, its instructions and internal documents, and check its access controls.",
          live: "We flag new data sources and connections as they're added.",
        },
      },
      {
        headline: "It copies someone else's work.",
        line: "Protected content ends up in what it produces.",
        short: "IP infringement",
        why: "Once it's in your product or your marketing, the claim lands with you.",
        depth: {
          policy: "Whether infringement in AI-generated content is covered, or carved out.",
          system: "Where its output is published or shipped, and which models it's built on.",
          tests: "We check your output filters, and what your model providers' terms promise if their model copies.",
          live: "We track changes to your providers' terms and to the models you use.",
        },
      },
    ],
  },
  {
    name: "Does the wrong thing",
    items: [
      {
        headline: "It acts without permission.",
        line: "It pays, sends or deletes without approval.",
        short: "Unapproved actions",
        why: "It acts in your name. A wrong payment or a deleted record is yours to answer for.",
        depth: {
          policy: "Whether your wording covers loss from an action your AI took, not just advice it gave.",
          system: "Every tool it can use, and what it can pay, send or delete on its own.",
          tests: "We test whether it can be talked into acting, and check the approvals and limits on what it can do.",
          live: "We flag new tools and permissions as they're granted.",
        },
      },
      {
        headline: "It goes beyond its job.",
        line: "It takes on tasks no one gave it, and acts on them.",
        short: "Excessive agency",
        why: "The more it can reach, the more it can do that nobody planned for, or insured.",
        depth: {
          policy: "Whether cover follows the job it was assessed for, or anything it ends up doing.",
          system: "The job it was given, set against the access it actually has.",
          tests: "We give it tasks at the edge of its job and see where it stops.",
          live: "We watch for it being pointed at tasks it was never assessed for.",
        },
      },
      {
        headline: "It obeys the wrong instructions.",
        line: "Hidden text in a document takes control.",
        short: "Prompt injection",
        why: "Anyone who can put text in front of it, in an email, a web page or a file, can try to steer it.",
        depth: {
          policy: "Whether a loss from a manipulated AI reads as an attack, an error, or neither.",
          system: "Everything it reads from outside: emails, web pages, uploaded files.",
          tests: "Attack testing: we plant hidden instructions and see whether it follows them.",
          live: "We flag new outside sources it starts reading.",
        },
      },
    ],
  },
  {
    name: "Stops behaving as tested",
    items: [
      {
        headline: "It changes how it behaves.",
        line: "It drifts from what you tested, and no one notices.",
        short: "Model drift",
        why: "Your cover was written for the AI you described. Drift takes you away from it.",
        depth: {
          policy: "What you told insurers about it, and what happens if that stops being true.",
          system: "The checks you run on its behaviour, and the results you expect.",
          tests: "We check how you measure its behaviour, and how often.",
          live: "We monitor for drift, and tell your insurers when it matters.",
        },
      },
      {
        headline: "It won't stop when told.",
        line: "The off switch fails, and it keeps acting.",
        short: "Failed shutdown",
        why: "Every minute it keeps acting adds to the loss.",
        depth: {
          policy: "Whether a loss that keeps growing counts as one event or many.",
          system: "How it's stopped, who can stop it, and how fast.",
          tests: "We test the off switch mid-task, not just at rest.",
          live: "We check the off switch still works after each change.",
        },
      },
      {
        headline: "An update breaks it.",
        line: "The model underneath changes, and your workflow fails.",
        short: "Update regression",
        why: "Your provider can change the model under you. Your customers still hold you to the result.",
        record: { text: "From 9 December 2026, EU rules treat software, including AI, as a product, with liability regardless of fault.", s: "pld" },
        depth: {
          policy: "Whether a failure caused by your provider's update is yours, theirs, or nobody's under your wording.",
          system: "Which models you depend on, and whether their versions are pinned.",
          tests: "We check how you test a new model before it goes live.",
          live: "We watch for model updates, and flag the ones that change your risk.",
        },
      },
    ],
  },
  {
    name: "Lands you with the bill",
    items: [
      {
        headline: "It runs up costs.",
        line: "It loops or overuses paid services, and the bill lands on you.",
        short: "Runaway spend",
        why: "An agent in a loop can spend faster than anyone is watching.",
        depth: {
          policy: "Whether runaway costs from your own AI are a covered loss at all.",
          system: "Which paid services it can call, and what stops it.",
          tests: "We check spending caps, rate limits and loop breakers.",
          live: "We flag new paid services and raised limits.",
        },
      },
      {
        headline: "It treats people unfairly.",
        line: "A group loses out, and regulators notice.",
        short: "Algorithmic bias",
        why: "When it decides about people, for jobs, loans or claims, bias becomes your liability.",
        record: {
          text: "A US court let age-discrimination claims against an AI hiring vendor proceed. They're allegations, not findings.",
          s: "mobley",
        },
        depth: {
          policy: "Whether discrimination claims over an automated decision are covered or excluded.",
          system: "Which decisions it makes, or shapes, about people.",
          tests: "We check how it's tested for bias, and on which groups.",
          live: "We watch for new uses that put it in front of decisions about people.",
        },
      },
      {
        headline: "It breaks the rules.",
        line: "A legal duty is missed, and you answer for it.",
        short: "Non-compliance",
        why: "AI law now has dates. Missing a duty is a liability of its own.",
        record: { text: "The EU AI Act's transparency duties apply from 2 August 2026.", s: "aiAct" },
        depth: {
          policy: "Whether fines and regulatory defence costs are covered, where the law allows it.",
          system: "Which laws apply to how and where you use it.",
          tests: "We check the records and disclosures those laws ask for.",
          live: "We track new rules and deadlines as they arrive.",
        },
      },
    ],
  },
];

export const EXPOSURE_COUNT = EXPOSURE_GROUPS.reduce((n, g) => n + g.items.length, 0);
