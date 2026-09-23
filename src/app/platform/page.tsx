import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  PageTitle,
  Eyebrow,
  Mark,
  Button,
  BOOKING_URL,
} from "@/components/ui";
import {
  scanObservations,
  scoreStreams,
  underwriterGets,
  gapLoop,
  coveragePerils,
  independence,
} from "@/lib/platform-content";

export const metadata: Metadata = {
  title: "Platform | VizCo",
  description:
    "VizCo makes AI deployments insurable. Gap analysis shows which guardrails cut risk for each agent, and brokers that evidence to carriers.",
};

export default function PlatformPage() {
  return (
    <main className="bg-paper">
      <Section className="!pb-10 sm:!pb-12">
        <Container className="max-w-4xl">
          <Eyebrow>Platform</Eyebrow>
          <PageTitle className="mt-3">
            Making AI deployments <Mark>insurable.</Mark>
          </PageTitle>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            Gap analysis for every agent: which guardrails cut risk for that
            deployment, by how much, and how closing them supports cover that
            stays matched to what runs.
          </p>
          <div className="mt-8">
            <Button href={BOOKING_URL} external>
              Scan your first agent
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="scan" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Step 1 · Scan"
            title={
              <>
                What the scan <Mark>observes.</Mark>
              </>
            }
            subtitle="One agent, one release. Read only. Nothing run, nothing modified, no active testing. Past logs backfill the baseline before the first scan."
          />

          <ul className="mt-8 max-w-3xl space-y-3">
            {scanObservations.map((c) => (
              <li key={c.t} className="flex items-start gap-3">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink-900"
                />
                <div>
                  <div className="text-sm font-semibold text-ink-900 sm:text-base">
                    {c.t}
                  </div>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-500">
                    {c.b}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section id="score" className="!py-16 sm:!py-20">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Step 2 · Score"
            title={
              <>
                How the score is <Mark>built.</Mark>
              </>
            }
            subtitle="Three evidence streams, weighted to what underwriters ask. Calibrated as observed losses accumulate."
          />

          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {scoreStreams.map((item) => (
              <div
                key={item.t}
                className="rounded-lg border border-border bg-surface px-5 py-5"
              >
                <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.b}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-4xl">
            <p className="font-mono text-[11px] uppercase tracking-wide text-ink-500">
              What an underwriter gets
            </p>
            <div className="mt-4 grid grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-2">
              {underwriterGets.map((item) => (
                <div
                  key={item.t}
                  className="border-border px-5 py-5 sm:px-6 [&:nth-child(n+2)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(n+3)]:border-t"
                >
                  <h3 className="text-base font-semibold text-ink-900">
                    {item.t}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">
                    {item.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section id="gap" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Steps 3 to 5"
            title={
              <>
                Close gaps, rescan, then <Mark>insure.</Mark>
              </>
            }
            subtitle="We do not sell spend analysis or operate your governance stack. We show which guardrails materially reduce risk for a specific AI deployment, then broker that evidence for cover."
          />

          <div className="mt-8 grid max-w-4xl grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-3">
            {gapLoop.map((item) => (
              <div
                key={item.t}
                className="border-border px-5 py-6 sm:px-6 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:border-l"
              >
                <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="coverage" className="!py-16 sm:!py-20">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="What is covered"
            title={
              <>
                What the cover responds <Mark>to.</Mark>
              </>
            }
            subtitle="Proposed scope for AI liability. Final wording is set with the carrier. The intent is to respond primary for AI perils, with coordination against your existing lines written into the policy."
          />

          <div className="mt-8 max-w-4xl overflow-x-auto rounded-lg border border-border bg-surface">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <thead className="border-b border-border bg-paper font-mono text-[11px] uppercase tracking-wide text-ink-500">
                <tr>
                  <th className="px-4 py-3 font-medium">Peril</th>
                  <th className="px-4 py-3 font-medium">What it looks like</th>
                  <th className="px-4 py-3 font-medium">Party</th>
                </tr>
              </thead>
              <tbody>
                {coveragePerils.map((row) => (
                  <tr
                    key={row.peril}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="px-4 py-3 font-semibold text-ink-900 align-top">
                      {row.peril}
                    </td>
                    <td className="px-4 py-3 text-ink-500 align-top">
                      {row.looks}
                    </td>
                    <td className="px-4 py-3 text-ink-700 align-top">
                      {row.party}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-500">
            Out of scope: external cyber attack (stays with your cyber policy),
            model training and IP claims (the developer&apos;s), and general
            software defects.
          </p>
        </Container>
      </Section>

      <Section id="independence" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Why independent"
            title={
              <>
                What you can evidence is what you can <Mark>insure.</Mark>
              </>
            }
            subtitle="One independent assessment: measured guardrail impact for your tools and carriers, without replacing either."
          />

          <div className="mt-8 grid max-w-4xl grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-2">
            {independence.map((item) => (
              <div
                key={item.t}
                className="border-border px-5 py-5 sm:px-6 [&:nth-child(n+2)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(n+3)]:border-t"
              >
                <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
                  {item.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
