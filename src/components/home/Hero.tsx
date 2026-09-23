import { ArrowRight } from "lucide-react";
import { Container, Button, BOOKING_URL } from "@/components/ui";
import EvidenceLoop from "@/components/home/EvidenceLoop";

const interventions = [
  ["Baseline", "Uncontrolled exposure"],
  ["Human review", "Autonomous decisions gated"],
  ["Data control", "Sensitive context protected"],
  ["Tool gating", "Actions constrained"],
];

export function RiskCurve() {
  return (
    <div
      id="how"
      className="relative mx-auto mt-16 max-w-6xl scroll-mt-24 overflow-hidden border-y border-border bg-surface/75 sm:mt-20"
    >
      <div className="flex items-center justify-between border-b border-border bg-paper/70 px-5 py-3.5">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
          Control impact · measured per workflow
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-ink-300">
          Risk ↓
        </span>
      </div>

      <div className="hidden px-6 pb-2 pt-5 sm:block">
        <svg
          viewBox="0 0 1000 360"
          role="img"
          aria-label="Risk decreases as human review, data controls, and tool gating are added to an AI workflow."
          className="h-auto w-full"
        >
          {[70, 170, 270].map((y) => (
            <line
              key={y}
              x1="90"
              x2="950"
              y1={y}
              y2={y}
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          ))}
          <text x="14" y="75" fill="var(--ink-500)" fontSize="12">
            HIGH
          </text>
          <text x="14" y="275" fill="var(--ink-500)" fontSize="12">
            LOW
          </text>

          {[150, 375, 600, 825].map((x) => (
            <line
              key={x}
              x1={x}
              x2={x}
              y1="44"
              y2="300"
              stroke="var(--border)"
              strokeWidth="1"
            />
          ))}

          <path
            d="M150 72 C235 72 285 118 375 137 C455 155 505 192 600 207 C680 220 735 265 825 275"
            fill="none"
            stroke="var(--ink-900)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {[
            [150, 72],
            [375, 137],
            [600, 207],
            [825, 275],
          ].map(([x, y], index) => (
            <g key={x}>
              <circle
                cx={x}
                cy={y}
                r={index === 3 ? 11 : 8}
                fill={index === 3 ? "var(--ink-900)" : "var(--paper)"}
                stroke="var(--ink-900)"
                strokeWidth="3"
              />
              {index === 3 ? (
                <path
                  d={`M${x - 4} ${y} l3 3 l6 -7`}
                  fill="none"
                  stroke="var(--paper)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : null}
            </g>
          ))}

          {interventions.map(([title, detail], index) => {
            const x = [150, 375, 600, 825][index];
            const anchor = index === 0 ? "start" : index === 3 ? "end" : "middle";
            const textX = index === 0 ? x - 10 : index === 3 ? x + 15 : x;
            return (
              <g key={title}>
                <text
                  x={textX}
                  y="325"
                  textAnchor={anchor}
                  fill="var(--ink-900)"
                  fontSize="14"
                  fontWeight="600"
                >
                  {title}
                </text>
                <text
                  x={textX}
                  y="346"
                  textAnchor={anchor}
                  fill="var(--ink-500)"
                  fontSize="11"
                >
                  {detail}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="relative p-5 sm:hidden">
        <div className="absolute bottom-8 left-[1.65rem] top-8 w-px bg-border-strong" />
        <div className="space-y-6">
          {interventions.map(([title, detail], index) => (
            <div key={title} className="relative flex gap-4">
              <span
                className={`relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-ink-900 ${
                  index === interventions.length - 1
                    ? "bg-ink-900"
                    : "bg-paper"
                }`}
              />
              <div>
                <p className="text-sm font-semibold text-ink-900">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-500">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto] items-center border-t border-border bg-paper px-5 py-4 sm:px-7">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-500">
            Verified outcome
          </p>
          <p className="mt-1 text-sm font-semibold text-ink-900">
            Lower measured risk
          </p>
        </div>
        <div className="bg-ink-900 px-4 py-2 text-right text-paper">
          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-paper/60">
            Underwriting
          </p>
          <p className="mt-0.5 text-xs font-semibold">Control credit</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[38rem] opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(var(--border-strong) 0.8px, transparent 0.8px)",
          backgroundSize: "18px 18px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 95%)",
        }}
      />

      <Container className="relative pb-8 pt-20 sm:pb-12 sm:pt-28">
        <div className="max-w-4xl animate-rise">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            Insurance for AI deployments
          </p>
          <h1 className="font-editorial max-w-4xl text-balance text-5xl leading-[0.95] tracking-[-0.025em] text-ink-900 sm:text-7xl lg:text-[5.75rem]">
            Make your AI deployment{" "}
            <span className="italic">insurable.</span>
          </h1>

          <div className="mt-7 grid max-w-4xl gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-700 sm:text-xl">
              Understand the risk in each AI deployment and build the evidence
              insurers need.
            </p>
            <Button
              href={BOOKING_URL}
              external
              className="w-full px-7 py-3.5 text-base sm:w-auto"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <EvidenceLoop />
      </Container>
    </section>
  );
}
