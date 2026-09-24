import { RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Assess",
    body: "Map the deployment: model, data, tools, permissions, and autonomy.",
  },
  {
    number: "02",
    title: "Identify",
    body: "Find the liability gaps and the ways they could create loss.",
  },
  {
    number: "03",
    title: "Recommend",
    body: "Prioritize the guardrails most likely to reduce exposure.",
  },
  {
    number: "04",
    title: "Verify",
    body: "Confirm the guardrails work and record the change in risk.",
  },
  {
    number: "05",
    title: "Evidence",
    body: "Package the verified findings for underwriting review.",
  },
];

export default function EvidenceLoop() {
  return (
    <div
      id="how"
      className="relative mx-auto mt-16 max-w-6xl scroll-mt-24 border-y border-border bg-paper/80 sm:mt-20"
    >
      <div className="px-5 pb-5 pt-8 sm:px-7 sm:pb-6 sm:pt-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
          How it works
        </p>
        <h2 className="font-editorial mt-4 max-w-3xl text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
          From gap analysis to underwriting evidence.
        </h2>
      </div>

      <div className="grid gap-x-5 gap-y-8 px-5 pb-8 pt-4 sm:grid-cols-2 sm:px-7 sm:pt-5 lg:grid-cols-5 lg:pb-10">
        {steps.map((step, index) => (
          <article
            key={step.number}
            className="last:sm:col-span-2 last:lg:col-span-1"
          >
            <div className="relative h-px overflow-hidden bg-border-strong">
              <span
                className="vizco-loop-progress absolute inset-y-0 left-0 bg-accent"
                style={{ animationDelay: `${index * 2}s` }}
              />
            </div>
            <p className="mt-4 font-mono text-[9px] tracking-[0.14em] text-ink-300">
              {step.number}
            </p>
            <h3 className="font-editorial mt-3 text-2xl leading-none text-ink-900">
              {step.title}.
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-ink-500 sm:text-sm">
              {step.body}
            </p>
          </article>
        ))}
      </div>

      <div className="border-t border-border bg-surface px-5 py-6 sm:px-7">
        <div className="flex gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-accent">
            <RefreshCw className="h-4 w-4" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-700">
              Continuous reassessment
            </p>
            <p className="mt-1 text-sm leading-relaxed text-ink-500">
              A change to the model, data, tools, or permissions starts the
              loop again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
