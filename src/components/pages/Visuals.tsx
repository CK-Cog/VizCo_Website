import { ShieldCheck } from "lucide-react";

const shell =
  "relative mx-auto w-full max-w-md rounded-lg border border-line-dark bg-ink-2/90 p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.18)] backdrop-blur lg:ml-auto";

const RISK = {
  high: "bg-accent-glow",
  med: "bg-warn",
  low: "bg-ok",
} as const;

export function InventoryCard() {
  const rows: { name: string; tag: string; risk: keyof typeof RISK; gap: boolean }[] = [
    { name: "Support chatbot", tag: "Customer-facing", risk: "high", gap: true },
    { name: "Procurement agent", tag: "Moves money", risk: "high", gap: true },
    { name: "Claims triage model", tag: "Decides on people", risk: "high", gap: true },
    { name: "Contract summariser", tag: "Internal", risk: "med", gap: false },
    { name: "Code copilot", tag: "Internal", risk: "low", gap: false },
  ];
  return (
    <div className={shell} aria-hidden>
      <div className="flex items-center justify-between border-b border-line-dark pb-4">
        <p className="eyebrow text-cream-muted">AI inventory</p>
        <p className="font-mono text-xs text-cream-muted">5 deployments</p>
      </div>
      <ul className="mt-3 divide-y divide-line-dark">
        {rows.map((r, i) => (
          <li key={r.name} className="anim-in flex items-center justify-between py-3 text-sm" style={{ animationDelay: `${200 + i * 140}ms` }}>
            <span className="flex items-center gap-3">
              <span className={`h-2 w-2 rounded-full ${RISK[r.risk]}`} />
              <span className="text-cream">{r.name}</span>
            </span>
            <span className="flex items-center gap-3">
              <span className="hidden text-xs text-cream-muted sm:inline">{r.tag}</span>
              {r.gap ? (
                <span className="rounded-full border border-accent/50 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-glow">Gap</span>
              ) : (
                <span className="rounded-full border border-line-dark px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cream-muted">OK</span>
              )}
            </span>
          </li>
        ))}
      </ul>
      <div className="anim-in mt-4 flex items-center justify-between rounded-xl border border-ok/40 bg-ok/10 px-4 py-3 text-sm" style={{ animationDelay: "1100ms" }}>
        <span className="flex items-center gap-2 text-cream">
          <ShieldCheck className="h-4 w-4 text-ok" /> 3 gaps placed with insurers
        </span>
      </div>
    </div>
  );
}

export function CertificateCard() {
  const lines = [
    ["AI liability", "In force"],
    ["Additional insured", "Named"],
    ["Policy period", "12 months"],
  ];
  return (
    <div className="relative mx-auto w-full max-w-md lg:ml-auto" aria-hidden>
      <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-lg bg-cream/15" />
      <div className="relative rounded-lg border border-line bg-paper p-7 text-text shadow-[0_40px_100px_-30px_rgba(0,0,0,0.18)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="eyebrow text-muted">Certificate of insurance</p>
            <p className="font-display mt-2 text-2xl">Your AI startup</p>
          </div>
          <span className="flex h-14 w-14 -rotate-12 items-center justify-center rounded-full border-2 border-text text-center font-mono text-[9px] uppercase leading-tight tracking-wider text-text">
            Placed
            <br />
            by VizCo
          </span>
        </div>
        <p className="mt-4 text-xs text-muted">
          Certificate holder: <span className="text-text">Enterprise customer, Inc.</span>
        </p>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {lines.map(([k, v], i) => (
            <li key={k} className="anim-in flex justify-between py-3 text-sm" style={{ animationDelay: `${200 + i * 150}ms` }}>
              <span>{k}</span>
              <span className="font-mono text-xs uppercase tracking-wider text-ok">{v}</span>
            </li>
          ))}
        </ul>
        <p className="anim-in mt-4 flex items-center gap-2 text-sm text-text" style={{ animationDelay: "900ms" }}>
          <ShieldCheck className="h-4 w-4 text-ok" /> Procurement approved
        </p>
      </div>
    </div>
  );
}

export function VendorStack() {
  const vendors: { name: string; use: string; state: "shared" | "requested" | "gap" }[] = [
    { name: "Support chatbot", use: "Answers your customers", state: "shared" },
    { name: "Contract review AI", use: "Reads your agreements", state: "shared" },
    { name: "Hiring screener", use: "Ranks your applicants", state: "gap" },
    { name: "Finance agent", use: "Pays your suppliers", state: "requested" },
  ];
  const badge = {
    shared: { label: "Record shared", cls: "border-ok/40 bg-ok/10 text-ok" },
    requested: { label: "Requested", cls: "border-line-dark text-cream-muted" },
    gap: { label: "Exposed", cls: "border-accent/50 bg-accent/10 text-accent-glow" },
  } as const;
  return (
    <div className="relative mx-auto w-full max-w-md rounded-lg border border-line-dark bg-ink p-6 text-cream shadow-[0_40px_100px_-40px_rgba(0,0,0,0.18)]" aria-hidden>
      <div className="flex items-center justify-between border-b border-line-dark pb-4">
        <p className="eyebrow text-cream-muted">AI you buy</p>
        <p className="font-mono text-xs text-cream-muted">4 vendors</p>
      </div>
      <ul className="mt-2 divide-y divide-line-dark">
        {vendors.map((v, i) => (
          <li key={v.name} className="anim-in flex items-center justify-between gap-4 py-3.5" style={{ animationDelay: `${200 + i * 140}ms` }}>
            <div>
              <p className="text-sm text-cream">{v.name}</p>
              <p className="text-xs text-cream-muted">{v.use}</p>
            </div>
            <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${badge[v.state].cls}`}>
              {badge[v.state].label}
            </span>
          </li>
        ))}
      </ul>
      <div className="anim-in mt-3 flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm" style={{ animationDelay: "900ms" }}>
        <span className="h-2 w-2 rounded-full bg-accent-glow" />
        1 vendor leaves you exposed
      </div>
    </div>
  );
}
