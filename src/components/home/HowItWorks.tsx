import { Container, Section, SectionHeading, Mark } from "@/components/ui";

const steps = [
  {
    title: "Scan",
    body: "What the agent touches, what it can do, which controls exist. Read only.",
  },
  {
    title: "Gap analysis",
    body: "Which guardrails to adopt for this deployment, and how much each cuts risk.",
  },
  {
    title: "Rescan",
    body: "Confirm risk is lower after the guardrails are in.",
  },
  {
    title: "Insure",
    body: "We insure the deployment on that evidence, so cover matches what actually runs.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how" className="!py-14 sm:!py-16 bg-surface-subtle">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Close the gaps. Insure the <Mark>deployment.</Mark>
            </>
          }
          subtitle="Scan the agent, adopt the guardrails that cut risk, then we insure it."
        />

        <div className="mx-auto mt-8 max-w-3xl grid grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className="border-border px-5 py-5 sm:px-6 sm:py-6 [&:not(:first-child)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(n+3)]:border-t"
            >
              <h3 className="text-base font-semibold text-ink-900 sm:text-lg">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
