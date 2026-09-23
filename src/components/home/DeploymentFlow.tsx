import { ArrowLeftRight, Check, RefreshCw } from "lucide-react";

const gaps = [
  "Autonomous decisions",
  "Sensitive data exposure",
  "Unrestricted actions",
];

const guardrails = [
  ["Human review", "High-impact actions"],
  ["Data boundaries", "Sensitive context"],
  ["Tool limits", "Actions and permissions"],
];

export default function DeploymentFlow() {
  return (
    <div
      id="how"
      className="relative mx-auto mt-16 max-w-6xl scroll-mt-24 border-y border-border bg-surface/80 sm:mt-20"
    >
      <div className="border-b border-border bg-paper/80 px-5 py-5 sm:px-7 sm:py-7">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            How it works
          </p>
          <h2 className="font-editorial mt-4 max-w-3xl text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
            From gap analysis to insurance.
          </h2>
        </div>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-ink-700 sm:text-lg">
          Assess the deployment, identify the right guardrails, verify the
          reduction in risk, and take the evidence to underwriting.
        </p>
      </div>

      <div
        className="relative grid gap-3 p-4 sm:grid-cols-2 sm:p-6 lg:grid-cols-4"
        aria-label="VizCo assesses an AI workflow, identifies its gaps, verifies the guardrails, and prepares the evidence for underwriting."
      >
        <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[3.15rem] hidden h-px bg-border-strong lg:block">
          <span className="vizco-flow-signal absolute -top-1 h-2 w-2 rounded-full bg-accent ring-4 ring-surface" />
        </div>

        <article
          className="vizco-flow-card relative flex min-h-[19rem] flex-col border border-ink-900 bg-ink-900 p-5 text-paper"
          style={{ animationDelay: "0s" }}
        >
          <StepHeader number="1" label="01 · Assess" dark />
          <Metric label="Baseline risk" value="High" dark />
          <div className="mt-auto border-t border-paper/15 pt-4">
            <p className="mb-3 text-xs font-semibold text-paper/70">
              3 liability gaps found
            </p>
            <ul className="space-y-2.5">
              {gaps.map((gap, index) => (
                <li key={gap} className="flex gap-2 text-xs text-paper/75">
                  <span className="font-mono text-accent">0{index + 1}</span>
                  {gap}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className="vizco-flow-card relative flex min-h-[19rem] flex-col border border-border-strong bg-paper p-5 text-ink-900"
          style={{ animationDelay: "2s" }}
        >
          <StepHeader number="2" label="02 · Identify" />
          <Metric label="Gap analysis" value="3 guardrails" />
          <div className="mt-auto border-t border-border pt-4">
            <p className="mb-3 text-xs font-semibold text-ink-700">
              Required for this deployment
            </p>
            <ul className="space-y-2.5">
              {guardrails.map(([title, detail]) => (
                <li
                  key={title}
                  className="grid grid-cols-[1fr_auto] gap-2 text-xs"
                >
                  <span className="font-medium text-ink-900">{title}</span>
                  <span className="text-right text-ink-500">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className="vizco-flow-card relative flex min-h-[19rem] flex-col border border-ink-900 bg-ink-900 p-5 text-paper"
          style={{ animationDelay: "4s" }}
        >
          <StepHeader number="3" label="03 · Verify" dark />
          <Metric label="Residual risk" value="Lower" dark />
          <div className="mt-auto border-t border-paper/15 pt-4">
            <p className="mb-3 text-xs font-semibold text-paper/70">
              Guardrails verified
            </p>
            <ul className="space-y-2.5">
              {guardrails.map(([title]) => (
                <li
                  key={title}
                  className="flex items-center gap-2 text-xs text-paper/75"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-ink-900">
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article
          className="vizco-flow-card relative flex min-h-[19rem] flex-col border border-border-strong border-t-4 border-t-accent bg-surface p-5 pt-4 text-ink-900"
          style={{ animationDelay: "6s" }}
        >
          <StepHeader number="4" label="04 · Underwrite" accent />
          <Metric label="Underwriting status" value="Ready" />
          <div className="mt-auto border-t border-border pt-4">
            <p className="text-base font-semibold leading-snug text-ink-900">
              Evidence that supports coverage.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-500">
              Underwriters see the deployment, its guardrails, and the
              verified reduction in risk.
            </p>
          </div>
        </article>

        <div className="col-span-full mt-1 grid gap-5 border border-border-strong bg-paper p-4 sm:p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-accent">
              <RefreshCw className="h-4 w-4" />
            </span>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-700">
                Continuous reassessment
              </p>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-ink-500">
                When a model, dataset, tool, or permission changes, VizCo
                reassesses the deployment and updates the underwriting
                evidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-border pt-4 lg:min-w-[25rem] lg:border-l lg:border-t-0 lg:py-1 lg:pl-6">
            <div className="text-center">
              <p className="text-xs font-semibold text-ink-900">
                Live deployment
              </p>
              <p className="mt-0.5 text-[10px] text-ink-500">
                Models · data · tools
              </p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-ink-900">
              <ArrowLeftRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <div className="text-center">
              <p className="text-xs font-semibold text-ink-900">
                Underwriting evidence
              </p>
              <p className="mt-0.5 text-[10px] text-ink-500">
                Reassessed · updated
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepHeader({
  number,
  label,
  dark = false,
  accent = false,
}: {
  number: string;
  label: string;
  dark?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span
        className={`font-mono text-[9px] uppercase tracking-[0.16em] ${
          dark ? "text-paper/55" : "text-ink-500"
        }`}
      >
        {label}
      </span>
      <span
        className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full font-mono text-[9px] ${
          accent
            ? "bg-accent text-ink-900"
            : dark
              ? "border border-paper/25 bg-ink-900 text-paper"
              : "border border-border-strong bg-paper text-ink-900"
        }`}
      >
        {number}
      </span>
    </div>
  );
}

function Metric({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div className="mt-8">
      <p
        className={`font-mono text-[9px] uppercase tracking-[0.14em] ${
          dark ? "text-paper/50" : "text-ink-500"
        }`}
      >
        {label}
      </p>
      <p className="mt-2 text-4xl font-semibold leading-none tracking-[-0.04em]">
        {value}
      </p>
    </div>
  );
}
