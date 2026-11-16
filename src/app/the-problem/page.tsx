import type { Metadata } from "next";
import { articleSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Check, X } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { Block, Button, Container, Em, QuestionMark, Section, SectionHeader, Steps } from "@/components/ui";
import { CHECKER_URL } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "The AI Insurance Problem: Exclusions and Silent AI",
  description:
    "Most business insurance is silent on AI, and standard AI exclusions are spreading. What it means for your policies, why it's happening and what to check at renewal.",
  path: "/the-problem",
  type: "article",
});

/*
 * Every claim on this page is sourced. Add a source before adding a claim.
 * Rules: no insurer names, no policy-type names, no prices.
 */
const SOURCES = [
  {
    n: 1,
    short: "CSIS",
    label: "CSIS, “The Insurance Industry's Retreat from AI Threatens to Slow Innovation and Adoption”, Sep 2026. Cites The Information (Apr 2026) and the Geneva Association (2025).",
    href: "https://www.csis.org/analysis/insurance-industrys-retreat-ai-threatens-slow-innovation-and-adoption",
  },
  {
    n: 2,
    short: "Insurance Business",
    label: "Insurance Business, review of standard AI exclusions and state filings, 16 Sep 2026.",
    href: "https://www.insurancebusinessmag.com/us/news/cyber/isos-generative-ai-exclusion-is-already-on-thousands-of-cgl-policies-589971.aspx",
  },
  {
    n: 3,
    short: "MoneyGeek",
    label: "MoneyGeek, “Your Business Insurance May Have Dropped AI Coverage in January 2026”, quoting the standard exclusion wording.",
    href: "https://www.moneygeek.com/insurance/business/general-liability/generative-ai-exclusion/",
  },
  {
    n: 4,
    short: "Bank of England",
    label: "Bank of England PRA, Supervisory Statement SS4/17, “Cyber insurance underwriting risk”, Jul 2017.",
    href: "https://www.prarulebook.co.uk/guidance/supervisory-statements/ss04-17-cyber-insurance-underwriting-risk",
  },
  {
    n: 5,
    short: "McCarthy Tétrault",
    label: "Moffatt v. Air Canada, 2024 BCCRT 149 (summary by McCarthy Tétrault).",
    href: "https://www.mccarthy.ca/en/insights/blogs/techlex/moffatt-v-air-canada-misrepresentation-ai-chatbot",
  },
  {
    n: 6,
    short: "Mondaq",
    label: "Mobley v. Workday, N.D. Cal. No. 3:23-cv-00770, collective action allowed May 2025 (summary via Mondaq).",
    href: "https://www.mondaq.com/unitedstates/new-technology/1630454/federal-court-allows-collective-action-lawsuit-over-alleged-ai-hiring-bias",
  },
  {
    n: 7,
    short: "EU AI Act",
    label: "EU AI Act, as amended by the Digital Omnibus on AI, Regulation (EU) 2026/1744.",
    href: "https://artificialintelligenceact.eu/ai-act-explorer/digital-omnibus/",
  },
  {
    n: 8,
    short: "EUR-Lex",
    label: "Directive (EU) 2024/2853 on liability for defective products (EUR-Lex).",
    href: "https://eur-lex.europa.eu/eli/dir/2024/2853/oj",
  },
];

/** Inline source links, shown right beside the claim they support. */
function Cite({ n }: { n: number | number[] }) {
  const list = (Array.isArray(n) ? n : [n]).map((x) => SOURCES.find((s) => s.n === x)!);
  return (
    <span className="ml-1.5 inline-flex flex-wrap gap-x-2 align-baseline">
      {list.map((s) => (
        <a
          key={s.n}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.label}
          className="inline-flex items-center gap-0.5 whitespace-nowrap font-mono text-[0.7em] font-normal uppercase tracking-wide underline decoration-1 underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
        >
          {s.short}
          <ArrowUpRight aria-hidden className="h-[1em] w-[1em]" />
        </a>
      ))}
    </span>
  );
}

const PUBLISHED = "2026-11-15";
const UPDATED = "2026-11-16";
const UPDATED_LABEL = "16 November 2026";

/* ---------- 1. The line ---------- */

const STATES = [
  { key: "covered", label: "Covered", line: "AI is named, and covered.", Icon: Check },
  { key: "silent", label: "Silent", line: "AI is never mentioned. It's decided at claim time.", Icon: QuestionMark },
  { key: "excluded", label: "Excluded", line: "AI is written out of the policy.", Icon: X },
] as const;

function CoverScale() {
  return (
    <div className="mt-14">
      <ol className="relative grid grid-cols-3">
        <span aria-hidden className="absolute left-0 right-[16.67%] top-7 h-px bg-line-dark" />
        {STATES.map(({ key, label, line, Icon }) => {
          const covered = key === "covered";
          return (
            <li key={key} className="relative flex flex-col pr-3 sm:pr-8">
              <span
                className={`relative z-10 flex h-14 w-14 items-center justify-center ${
                  covered ? "bg-signal text-signal-ink" : "border border-cream bg-ink text-cream"
                }`}
              >
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="font-display mt-5 text-lg sm:text-3xl">
                <span className="text-cream">{label}</span>
              </h3>
              <p className="mt-2 max-w-[16rem] text-[13px] leading-snug text-cream-muted sm:text-base sm:leading-relaxed">{line}</p>
            </li>
          );
        })}
      </ol>
      <p className="mt-12 max-w-2xl text-balance text-cream-muted">
        Most business insurance sits at <span className="font-medium text-cream">Silent</span>, and more is moving to{" "}
        <span className="font-medium text-cream">Excluded</span>.<Cite n={[1, 2]} />
      </p>
    </div>
  );
}

/* ---------- 2. The two problems ---------- */

const SILENT_FACTS = [
  { text: "Most business policies were written before AI could act on its own. Cover is assumed, never tested.", cite: 1 },
  { text: "Whether you're covered is argued at claim time, after the loss.", cite: 2 },
  { text: "It's happened before. In 2017, UK regulators told insurers to manage the cyber risk their policies were silent on.", cite: 4 },
];

const EXCLUDED_FACTS = [
  { text: "Standard AI exclusion wording has been available to insurers since January 2026.", cite: 2 },
  { text: "It's usually added as an extra page at renewal, so it's easy to miss.", cite: 3 },
  { text: "It's triggered by any connection to AI, even if a person checked the work.", cite: [2, 3] },
  { text: "It can reach AI you use through a vendor or software you already pay for.", cite: 3 },
  { text: "It's optional, so it varies by insurer, state and renewal date.", cite: 3 },
];

function FactList({ facts }: { facts: { text: string; cite: number | number[] }[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {facts.map((f) => (
        <li key={f.text} className="flex gap-3 text-[15px] leading-relaxed text-cream-muted">
          <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 bg-cream" />
          <span>
            {f.text}
            <Cite n={f.cite} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function TwoProblems() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">
      <article className="border border-line-dark p-7 sm:p-9">
        <span className="inline-flex h-10 w-10 items-center justify-center border border-cream text-cream">
          <QuestionMark className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="font-display mt-5 text-3xl text-cream">Silent</h3>
        <p className="mt-2 text-cream">The policy never mentions AI.</p>
        <FactList facts={SILENT_FACTS} />
      </article>
      <article className="border border-cream p-7 sm:p-9">
        <span className="inline-flex h-10 w-10 items-center justify-center bg-cream text-ink">
          <X className="h-5 w-5" strokeWidth={2} />
        </span>
        <h3 className="font-display mt-5 text-3xl text-cream">Excluded</h3>
        <p className="mt-2 text-cream">The policy writes AI out.</p>
        <FactList facts={EXCLUDED_FACTS} />
      </article>
    </div>
  );
}

function Definition() {
  return (
    <figure className="mt-4 bg-cream px-7 py-8 text-ink sm:px-10">
      <p className="eyebrow opacity-70">How the standard exclusion defines AI</p>
      <blockquote className="font-display mt-4 text-balance text-xl leading-snug sm:text-2xl">
        &ldquo;A machine-based learning system or model that is trained on data with the ability to create content or responses, including but not
        limited to text, images, audio, video or code.&rdquo;
        <Cite n={3} />
      </blockquote>
      <figcaption className="mt-4 text-sm opacity-70">Broad enough to cover most AI in use today.</figcaption>
    </figure>
  );
}

/* ---------- 3. The trend ---------- */

const STATS = [
  { value: "80%+", label: "of insurers' requests to exclude AI approved by US state regulators, by April 2026", cite: 1 },
  { value: "49", label: "US states with AI exclusions on file by mid-2026", cite: 2 },
  { value: "3 of 9", label: "insurability tests generative AI fails outright. It strains five more.", cite: 1 },
];

/* ---------- 4. Liability is growing ---------- */

const LIABILITY = [
  {
    date: "Feb 2024",
    title: "You answer for what your AI says.",
    body: "A tribunal held an airline liable for its chatbot's wrong refund advice, rejecting the argument that the chatbot was responsible for its own actions.",
    cite: 5,
  },
  {
    date: "May 2025",
    title: "AI vendors can be pulled in too.",
    body: "A US court let job applicants' age-discrimination claims against an AI hiring vendor proceed as a nationwide collective action. The claims are allegations, not findings.",
    cite: 6,
  },
  {
    date: "Aug 2026",
    title: "Transparency duties apply in the EU.",
    body: "The EU AI Act's transparency obligations apply from 2 August 2026. Duties for high-risk AI follow from December 2027.",
    cite: 7,
  },
  {
    date: "Dec 2026",
    title: "Software becomes a product.",
    body: "New EU product liability rules treat software, including AI, as a product, with liability regardless of fault. They apply to products placed on the market after 9 December 2026.",
    cite: 8,
  },
];

function LiabilityLedger() {
  return (
    <ol className="mt-12 divide-y divide-line-dark border-y border-line-dark">
      {LIABILITY.map((l) => (
        <li key={l.date} className="grid gap-2 py-7 sm:grid-cols-[9rem_1fr] sm:gap-8">
          <p className="font-mono text-sm uppercase tracking-[0.12em] text-cream-muted">{l.date}</p>
          <div>
            <h3 className="font-display text-xl text-cream sm:text-2xl">{l.title}</h3>
            <p className="mt-2 leading-relaxed text-cream-muted">
              {l.body}
              <Cite n={l.cite} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ---------- 5. Renewal checklist ---------- */

const CHECKS = [
  { title: "Find the extra pages.", body: "Look for anything added that mentions artificial intelligence, machine learning or automated systems." },
  { title: "Read the definition.", body: "How broadly does it define AI? The standard wording reaches most AI in use today." },
  { title: "Read the trigger.", body: "“Arising out of” or “directly or indirectly” means any connection to AI can be enough." },
  { title: "Count the AI you buy in.", body: "Chatbots, copilots and AI features in your software count, not only AI you build." },
  { title: "Check your contracts.", body: "What have you promised customers you'll pay if your AI gets something wrong?" },
];

function RenewalChecklist() {
  return (
    <div className="mt-12">
      <ol className="grid gap-4 sm:grid-cols-2">
        {CHECKS.map((c, i) => (
          <li key={c.title} className={`flex gap-4 border border-line-dark p-6 ${i === CHECKS.length - 1 ? "sm:col-span-2" : ""}`}>
            <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-cream font-mono text-xs text-ink">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-medium text-cream">{c.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream-muted">{c.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <p className="text-cream-muted">Or let us check them for you.</p>
        <Button href={CHECKER_URL} external>
          Check your AI coverage
        </Button>
      </div>
    </div>
  );
}

/* ---------- 6. The fix ---------- */

const STEPS = [
  { title: "Review", body: "We read every policy and find where AI is silent or excluded." },
  { title: "Prove", body: "We show insurers how your AI is built, tested and controlled." },
  { title: "Place", body: "We place AI liability cover written for your AI." },
];

export default function TheProblemPage() {
  return (
    <main>
      <JsonLd
        data={articleSchema({
          headline: "The AI insurance problem: exclusions and silent AI",
          description:
            "Most business insurance is silent on AI, and standard AI exclusions are spreading. What it means for your policies, why it's happening and what to check at renewal.",
          path: "/the-problem",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          citations: SOURCES,
        })}
      />
      <PageHero
        kicker="The AI insurance problem"
        title={
          <>
            Most insurance says nothing about AI. <Em>More now excludes it.</Em>
          </>
        }
        sub="What that means for your policies, why it's happening, and what to check at your next renewal."
        checker
      >
        <p className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">
          Updated <time dateTime={UPDATED}>{UPDATED_LABEL}</time> · {SOURCES.length} sources
        </p>
      </PageHero>

      <Section id="scale">
        <Container>
          <SectionHeader number="01" kicker="Where you stand" title="Every policy sits on this line." />
          <CoverScale />
        </Container>
      </Section>

      <Section id="explained">
        <Container>
          <SectionHeader number="02" kicker="The two problems" title="Silent and excluded, explained." />
          <TwoProblems />
          <Definition />
        </Container>
      </Section>

      <Section id="trend">
        <Container>
          <SectionHeader
            number="03"
            kicker="Why it's happening"
            title="Insurers can't cover what they can't see."
            sub="Insurers can't see which AI you run, how it's governed, or whether your controls work. So they're writing it out."
          />
          <ul className="mt-12 grid divide-y divide-line-dark border-y border-line-dark sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {STATS.map((s) => (
              <li key={s.value} className="py-8 sm:px-6 sm:first:pl-0">
                <p className="font-display text-5xl leading-none text-cream sm:text-6xl">{s.value}</p>
                <p className="mt-3 max-w-[16rem] text-sm text-cream-muted">
                  {s.label}
                  <Cite n={s.cite} />
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-balance text-cream-muted">
            Evidence changes that. <span className="font-medium text-cream">It&apos;s why we prove your AI to insurers.</span>
          </p>
        </Container>
      </Section>

      <Section id="liability">
        <Container>
          <SectionHeader
            number="04"
            kicker="Meanwhile"
            title="Your liability for AI is growing."
            sub="Cover is shrinking just as courts and lawmakers hold businesses responsible for their AI."
          />
          <LiabilityLedger />
        </Container>
      </Section>

      <Section id="checklist">
        <Container>
          <SectionHeader number="05" kicker="What to do" title="Check your renewal for these five things." />
          <RenewalChecklist />
        </Container>
      </Section>

      <Block
        id="fix"
        number="06"
        label="How we fix it"
        title={
          <>
            We move you to <Em>Covered.</Em>
          </>
        }
      >
        <Steps steps={STEPS} />
      </Block>


      <FinalCta sub="Send us your policies. We'll show you where each one sits on the line." />
    </main>
  );
}
