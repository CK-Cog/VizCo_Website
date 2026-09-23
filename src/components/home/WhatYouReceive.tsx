import { Container } from "@/components/ui";

const deliverables = [
  {
    number: "01",
    title: "Deployment risk baseline",
    detail: "A clear view of the current liability exposure.",
  },
  {
    number: "02",
    title: "Prioritized guardrail plan",
    detail: "The changes most likely to reduce risk.",
  },
  {
    number: "03",
    title: "Verification report",
    detail: "Evidence that each guardrail is working.",
  },
  {
    number: "04",
    title: "Underwriting evidence package",
    detail: "A current deployment view ready for review.",
  },
];

export default function WhatYouReceive() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-16 sm:py-20">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
          What you receive
        </p>
        <h2 className="font-editorial mt-4 max-w-3xl text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
          Evidence built for <span className="italic">underwriting.</span>
        </h2>

        <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item) => (
            <div
              key={item.number}
              className="border-l border-border-strong pl-5"
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-ink-300">
                {item.number}
              </span>
              <h3 className="mt-3 text-base font-semibold leading-tight text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
