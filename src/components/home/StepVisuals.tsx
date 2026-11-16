import type { ReactNode } from "react";
import { CircleCheck, CircleX, FileText, ShieldCheck, Stamp } from "lucide-react";

function Frame({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden className="relative flex h-40 items-center justify-center overflow-hidden rounded-xl border border-line-dark bg-ink px-4">
      {children}
    </div>
  );
}

export function GapVisual() {
  const rows: [string, string, string][] = [
    ["Wrong answers", "Gap", "text-accent-glow border-accent/50 bg-accent/10"],
    ["Exposed data", "Covered", "text-ok border-ok/40 bg-ok/10"],
    ["AI actions", "Unclear", "text-warn border-warn/40 bg-warn/10"],
  ];
  return (
    <Frame>
      <ul className="w-full max-w-[240px] space-y-2">
        {rows.map(([k, v, cls]) => (
          <li key={k} className="flex items-center justify-between rounded-lg border border-line-dark bg-ink-2 px-3 py-2 text-xs text-cream">
            {k}
            <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${cls}`}>{v}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function RecordVisual() {
  return (
    <Frame>
      <div className="w-full max-w-[220px] rounded-lg border border-line-dark bg-ink-2 p-3">
        <div className="flex items-center gap-2 border-b border-line-dark pb-2">
          <FileText className="h-4 w-4 text-accent-glow" />
          <span className="text-xs text-cream">VizCo record</span>
          <span className="ml-auto font-mono text-[10px] text-cream-muted">Support AI</span>
        </div>
        <ul className="mt-2 space-y-1.5 text-[11px] text-cream-muted">
          {["How it works", "Evidence attached", "Controls in place"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-ok" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

export function AttackVisual() {
  const lines: [string, boolean][] = [
    ["prompt injection", true],
    ["data request", true],
    ["tool misuse", false],
  ];
  return (
    <Frame>
      <ul className="w-full max-w-[240px] space-y-2 rounded-lg border border-black bg-black p-3 font-mono text-[11px] text-white">
        {lines.map(([k, held]) => (
          <li key={k} className="flex items-center justify-between">
            <span className="text-white/70">
              <span className="text-white">→</span> {k}
            </span>
            <span className={`flex items-center gap-1 ${held ? "text-[#4fd1a0]" : "text-white"}`}>
              {held ? <CircleCheck className="h-3.5 w-3.5" /> : <CircleX className="h-3.5 w-3.5" />}
              {held ? "held" : "fixed"}
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

export function PlacedVisual() {
  return (
    <Frame>
      <div className="absolute h-28 w-28 rounded-full bg-accent/25 blur-2xl" />
      <div className="relative flex flex-col items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-md border border-accent/50 bg-gradient-to-br from-accent/30 to-accent/5">
          <ShieldCheck className="h-7 w-7 text-accent-glow" strokeWidth={1.6} />
        </span>
        <span className="rounded-full border border-ok/40 bg-ok/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ok">
          AI liability · Bound
        </span>
      </div>
    </Frame>
  );
}

export function CertificateVisual() {
  return (
    <Frame>
      <div className="relative w-full max-w-[200px] -rotate-2 rounded-lg bg-paper p-3 text-text shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
        <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Certificate of insurance</p>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-11/12 rounded bg-paper-3" />
          <div className="h-1.5 w-8/12 rounded bg-paper-3" />
          <div className="h-1.5 w-10/12 rounded bg-paper-3" />
        </div>
        <span className="absolute -bottom-3 -right-3 flex h-12 w-12 rotate-12 items-center justify-center rounded-full border-2 border-text bg-paper text-text">
          <Stamp className="h-5 w-5" />
        </span>
      </div>
    </Frame>
  );
}

export function ClaimVisual() {
  const steps = ["Incident", "Claim filed", "We argue it"];
  return (
    <Frame>
      <ol className="relative flex w-full max-w-[250px] items-start justify-between">
        <span className="absolute left-4 right-4 top-3 h-px bg-gradient-to-r from-line-dark via-accent/50 to-accent" />
        {steps.map((s, i) => (
          <li key={s} className="relative flex flex-col items-center gap-2">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] ${
                i === steps.length - 1 ? "border-cream bg-cream text-ink" : "border-line-dark bg-ink-2 text-cream-muted"
              }`}
            >
              {i + 1}
            </span>
            <span className={`text-[11px] ${i === steps.length - 1 ? "text-accent-glow" : "text-cream-muted"}`}>{s}</span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}
