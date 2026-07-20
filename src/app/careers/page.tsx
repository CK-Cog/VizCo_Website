import type { Metadata } from "next";
import { Container, Section, Button, Eyebrow, Mark, PageTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "Careers | VizCo",
  description:
    "Join VizCo to build the adoption layer for enterprise AI: security policy enforcement and budget visibility, deployed inside your environment.",
};

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfg9CWkCq2wgZmlQKKuB4BqRz-JB_DNdddzN1XDuIBaheyF0A/viewform?usp=header";

export default function CareersPage() {
  return (
    <main className="bg-paper">
      <Section className="pb-0">
        <Container className="max-w-5xl space-y-10">
          {/* Hero */}
          <header className="space-y-3">
            <Eyebrow>Careers</Eyebrow>
            <PageTitle>
              Make AI safe for the <Mark>enterprise.</Mark>
            </PageTitle>
            <p className="max-w-2xl text-lg text-ink-500">
              We&apos;re building the adoption layer for enterprise AI:
              security policy enforcement and budget enforcement with usage
              visibility, so leadership can say yes to frontier models at scale.
            </p>
          </header>

          {/* Snapshot */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                t: "What we do",
                b: "Security policy enforcement and budget enforcement with usage visibility. Sensitive data is blocked or redacted before it reaches an external model. Spend stays tied to teams, projects, and approved use cases. Enforced inside your perimeter.",
              },
              {
                t: "Why it matters",
                b: "Enterprises want frontier models but need control over data, actions, and cost. We are the layer that lets leadership say yes to AI at scale.",
              },
              {
                t: "Stage",
                b: "Early. Design partners across the enterprise. You'll ship core systems, set standards, and shape the product with customers.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="mb-2 text-lg font-semibold text-ink-900">
                  {c.t}
                </h3>
                <p className="text-sm text-ink-500">{c.b}</p>
              </div>
            ))}
          </div>

          {/* Open roles */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink-900">Open roles</h2>
            <div className="rounded-lg border border-border bg-surface p-8">
              <h3 className="mb-2 text-xl font-semibold text-ink-900">
                Founding Engineer (Full-Stack)
              </h3>
              <p className="mb-6 text-ink-700">
                Own big pieces of the stack from day one: core product, policy
                engine, data pipelines, and integrations with AI providers and
                enterprise systems.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <h4 className="mb-2 font-semibold text-ink-900">
                    You&apos;ll work on
                  </h4>
                  <ul className="ml-5 list-disc space-y-1 text-sm text-ink-500">
                    <li>End-to-end product features across web and services</li>
                    <li>Policy evaluation on calls; audit trails</li>
                    <li>LLM / agent integrations; data &amp; identity connectors</li>
                    <li>Architecture, testing, observability, reliability</li>
                    <li>Fast customer-driven iterations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-ink-900">
                    What you bring
                  </h4>
                  <ul className="ml-5 list-disc space-y-1 text-sm text-ink-500">
                    <li>3+ years shipping production software</li>
                    <li>Strong TypeScript / JavaScript plus one backend language</li>
                    <li>Databases, APIs, auth, cloud deployment</li>
                    <li>Ownership, product sense, bias to action</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold text-ink-900">
                    Nice to have
                  </h4>
                  <ul className="ml-5 list-disc space-y-1 text-sm text-ink-500">
                    <li>LLMs / AI tooling, vector search</li>
                    <li>Security / compliance, role-based access control</li>
                    <li>Enterprise integrations (identity, DMS, email systems)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button href={APPLY_URL} external className="px-6 py-3">
                  Apply via Google Form
                </Button>
              </div>
            </div>
          </section>

          {/* How we work */}
          <section className="rounded-lg border border-border bg-surface p-8">
            <h3 className="mb-3 text-xl font-semibold text-ink-900">
              How we work
            </h3>
            <ul className="ml-6 list-disc space-y-1 text-sm text-ink-500">
              <li>Small team, high trust, fast shipping</li>
              <li>Customer-obsessed; quality without ceremony</li>
              <li>Remote-friendly with SF Bay Area time overlap</li>
            </ul>
          </section>
        </Container>
      </Section>
    </main>
  );
}
