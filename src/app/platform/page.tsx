import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Container,
  Section,
  SectionHeading,
  PageTitle,
  Eyebrow,
  Mark,
  Button,
  CALENDLY_URL,
} from "@/components/ui";
import {
  securityControls,
  integrations,
  deployments,
} from "@/lib/platform-content";

export const metadata: Metadata = {
  title: "Platform | VizCo",
  description:
    "VizCo is the adoption layer for enterprise AI. Enforce security policies and budgets on every request, inside your perimeter.",
};

export default function PlatformPage() {
  return (
    <main className="bg-paper">
      <Section className="!pb-10 sm:!pb-12">
        <Container className="max-w-4xl">
          <Eyebrow>Platform</Eyebrow>
          <PageTitle className="mt-3">
            The <Mark>adoption layer</Mark> for enterprise AI.
          </PageTitle>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-500 sm:text-xl">
            VizCo sits between your company and the models. We enforce what data
            goes out and what it costs, so your enterprise can say yes to
            frontier AI at scale.
          </p>
          <div className="mt-8">
            <Button href={CALENDLY_URL} external>
              Book a Demo
            </Button>
          </div>
        </Container>
      </Section>

      <Section id="security" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Security policy enforcement"
            title={
              <>
                Control what leaves and what AI can <Mark>do.</Mark>
              </>
            }
            subtitle="Sensitive data is blocked or redacted before it ever reaches an external model. Actions are constrained. Everything is audited on your infrastructure."
          />

          <ul className="mt-8 max-w-3xl space-y-3">
            {securityControls.map((c) => (
              <li key={c.t} className="flex items-start gap-3">
                <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-900 sm:h-5 sm:w-5" />
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

          <Link
            href="/#security"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:underline sm:text-base"
          >
            See it in ChatGPT Enterprise
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </Section>

      <Section id="budget" className="!py-16 sm:!py-20">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Budget enforcement & usage visibility"
            title={
              <>
                Keep spend tied to approved <Mark>work.</Mark>
              </>
            }
            subtitle="Enforce budgets by team, project, or use case. Get detailed visibility reports on where AI spend is going and on what workflows."
          />

          <div className="mt-8 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                t: "Limits by team or use case",
                b: "Set budgets by team, project, or use case. Overages are blocked before spend runs away.",
              },
              {
                t: "Spend by owner",
                b: "See cost by team, project, and model, so you know who is spending what.",
              },
              {
                t: "Use by workflow",
                b: "See themes of AI use and which workflows are running, so you know what the spend is for.",
              },
            ].map((item) => (
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
        </Container>
      </Section>

      <Section id="integrations" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Integrations"
            title={
              <>
                Platforms and systems you already <Mark>use.</Mark>
              </>
            }
            subtitle="A sample of the vendor platforms and systems VizCo covers. The list is not exhaustive."
          />
          <div className="mt-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {integrations.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-5"
              >
                <Image
                  src={item.logo}
                  alt=""
                  width={22}
                  height={22}
                  className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                />
                <span className="text-sm font-semibold text-ink-900 sm:text-base">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink-500 sm:text-base">
            Plus agents, custom apps, and other systems your teams already run.
          </p>
        </Container>
      </Section>

      <Section id="deployment" className="!py-16 sm:!py-20">
        <Container>
          <SectionHeading
            align="left"
            eyebrow="Deployment"
            title={
              <>
                Enforced inside your <Mark>perimeter.</Mark>
              </>
            }
            subtitle="Cloud, on-prem, or air-gapped. Policies and budgets stay with your infrastructure."
          />
          <div className="mt-8 grid max-w-4xl grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-3">
            {deployments.map((d) => (
              <div
                key={d.title}
                className="border-border px-5 py-6 sm:px-6 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:border-l"
              >
                <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
