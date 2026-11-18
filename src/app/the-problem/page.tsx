import type { Metadata } from "next";
import { X } from "lucide-react";
import Cite from "@/components/Cite";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";
import DoesItPay from "@/components/DoesItPay";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { Container, Em, QuestionMark, Section, SectionHeader } from "@/components/ui";
import { SOURCES, type SourceKey } from "@/content/sources";
import { articleSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "The AI Insurance Problem: Exclusions and Silent AI",
  description:
    "Most business insurance says nothing about AI, and more of it now excludes AI. What that means for you, why it's happening, and how AI liability is growing.",
  path: "/the-problem",
  type: "article",
});

/* Every claim on this page links to its source. Add the source to src/content/sources.ts first. */
const USED: SourceKey[] = ["csis", "insuranceBusiness", "moneyGeek", "moffatt", "mobley", "aiAct", "pld"];

const PUBLISHED = "2026-11-15";
const UPDATED = "2026-11-16";
const UPDATED_LABEL = "16 November 2026";

const SILENT: { text: string; s: SourceKey | SourceKey[] }[] = [
  { text: "Most policies were written before AI could act on its own, so they never mention it.", s: "csis" },
  { text: "Whether they pay for an AI loss is argued after the loss.", s: "insuranceBusiness" },
];

const EXCLUDED: { text: string; s: SourceKey | SourceKey[] }[] = [
  { text: "Standard AI exclusion wording has been available to insurers since January 2026.", s: "insuranceBusiness" },
  { text: "It's usually added as an extra page at renewal, so it's easy to miss.", s: "moneyGeek" },
  { text: "Any connection to AI can trigger it, including AI inside software you buy.", s: ["insuranceBusiness", "moneyGeek"] },
];

const STATS: { value: string; label: string; s: SourceKey }[] = [
  { value: "80%+", label: "of insurers' requests to exclude AI approved, by April 2026", s: "csis" },
  { value: "49", label: "US states with AI exclusions on file", s: "insuranceBusiness" },
  { value: "3 of 9", label: "insurability tests that generative AI fails", s: "csis" },
];

const LIABILITY: { date: string; title: string; body: string; s: SourceKey }[] = [
  { date: "Feb 2024", title: "You answer for what your AI says.", body: "An airline was held liable for its chatbot's wrong refund advice.", s: "moffatt" },
  {
    date: "May 2025",
    title: "AI vendors can be pulled in too.",
    body: "A US court let discrimination claims against an AI hiring vendor proceed. They're allegations, not findings.",
    s: "mobley",
  },
  { date: "Aug 2026", title: "EU transparency rules apply.", body: "The EU AI Act's transparency duties apply from 2 August 2026.", s: "aiAct" },
  { date: "Dec 2026", title: "AI becomes a product.", body: "New EU rules treat AI as a product, with liability regardless of fault.", s: "pld" },
];

function Facts({ facts }: { facts: { text: string; s: SourceKey | SourceKey[] }[] }) {
  return (
    <ul className="mt-6 space-y-4">
      {facts.map((f) => (
        <li key={f.text} className="flex gap-3 text-[0.9375rem] leading-relaxed text-cream-muted sm:text-base">
          <span aria-hidden className="mt-[0.62em] h-1.5 w-1.5 shrink-0 bg-cream" />
          <span>
            {f.text}
            <Cite s={f.s} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TheProblemPage() {
  return (
    <main>
      <JsonLd
        data={articleSchema({
          headline: "The AI insurance problem: exclusions and silent AI",
          description:
            "Most business insurance says nothing about AI, and more of it now excludes AI. What that means for you, why it's happening, and how AI liability is growing.",
          path: "/the-problem",
          datePublished: PUBLISHED,
          dateModified: UPDATED,
          citations: USED.map((k) => SOURCES[k]),
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "The AI insurance problem", path: "/the-problem" }])} />
      <PageHero
        kicker="The AI insurance problem"
        title={
          <>
            Most insurance says nothing about AI. <Em>More now excludes it.</Em>
          </>
        }
        checker
      >
        <p className="eyebrow mt-12 text-cream-muted">
          Updated <time dateTime={UPDATED}>{UPDATED_LABEL}</time> · {USED.length} sources
        </p>
      </PageHero>

      <Section id="scale">
        <Container>
          <Reveal className="rule-draw pt-7">
            <DoesItPay
              number="01"
              kicker="Where you stand"
              note={
                <>
                  Most business insurance sits at <span className="font-medium text-cream">Maybe</span>, and more is moving to{" "}
                  <span className="font-medium text-cream">No</span>.<Cite s={["csis", "insuranceBusiness"]} />
                </>
              }
            />
          </Reveal>
        </Container>
      </Section>

      <Section id="explained">
        <Container>
          <SectionHeader number="02" kicker="The two problems" title="Silent vs excluded." />
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <Reveal className="h-full">
              <article className="h-full border border-line-dark bg-surface p-7 shadow-[var(--shadow-card)] sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center border border-cream text-cream">
                  <QuestionMark className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="font-display t-h3 mt-8 text-cream">Silent</h3>
                <p className="mt-2 text-lg tracking-[-0.015em] text-cream">The policy never mentions AI.</p>
                <Facts facts={SILENT} />
              </article>
            </Reveal>
            <Reveal delay={90} className="h-full">
              <article className="relative h-full border border-cream bg-surface p-7 shadow-[var(--shadow-card)] sm:p-10">
                <span aria-hidden className="absolute inset-x-0 -top-px h-[3px] bg-cream" />
                <span className="inline-flex h-12 w-12 items-center justify-center bg-cream text-ink">
                  <X className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="font-display t-h3 mt-8 text-cream">Excluded</h3>
                <p className="mt-2 text-lg tracking-[-0.015em] text-cream">The policy writes AI out.</p>
                <Facts facts={EXCLUDED} />
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="trend">
        <Container>
          <SectionHeader number="03" kicker="Why it's happening" title="Insurers can't cover what they can't see." />
          <ul className="mt-14 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-3">
            {STATS.map((st, i) => (
              <li key={st.value} className="group relative bg-surface p-7 sm:p-9">
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <p className="font-mono text-[0.6875rem] text-subtle">{String(i + 1).padStart(2, "0")}</p>
                <p className="font-display mt-10 text-[3.5rem] leading-none tracking-[-0.05em] text-cream sm:text-[4.5rem]">
                  <CountUp value={st.value} />
                </p>
                <p className="mt-4 max-w-[17rem] text-[0.9375rem] leading-relaxed text-cream-muted">
                  {st.label}
                  <Cite s={st.s} />
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-lg tracking-[-0.015em] text-cream">Evidence changes that. It&apos;s why we prove your AI to insurers.</p>
        </Container>
      </Section>

      <Section id="liability">
        <Container>
          <SectionHeader number="04" kicker="Meanwhile" title="Your liability for AI is growing." />
          <ol className="relative mt-14 border-l border-line-dark sm:ml-[10.5rem]">
            {LIABILITY.map((l, i) => (
              <li key={l.date} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
                <span
                  aria-hidden
                  className={`absolute -left-[calc(0.28125rem+0.5px)] top-[0.55rem] h-[0.5625rem] w-[0.5625rem] ${i === LIABILITY.length - 1 ? "bg-signal" : "bg-cream"}`}
                />
                <p className="eyebrow text-cream-muted sm:absolute sm:-left-[10.5rem] sm:top-[0.6rem] sm:w-36 sm:text-right">{l.date}</p>
                <Reveal delay={i * 60}>
                  <h3 className="font-display mt-2 text-2xl tracking-[-0.03em] text-cream sm:mt-0 sm:text-[1.75rem]">{l.title}</h3>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-cream-muted sm:text-[1.0625rem]">
                    {l.body}
                    <Cite s={l.s} />
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <FinalCta sub="Send us your policies. We'll show you where each one sits." />
    </main>
  );
}
