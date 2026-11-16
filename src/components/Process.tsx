import { PROCESS } from "@/content/process";

/** The five-step process, with what the client gets at each step. Shared by every page. */
export default function Process({ className = "mt-10" }: { className?: string }) {
  return (
    <ol className={`border-b border-line-dark ${className}`}>
      {PROCESS.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line-dark py-7 md:grid-cols-[3rem_11rem_1fr] md:gap-x-6">
          <span className="pt-2 font-mono text-xs text-cream-muted">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="font-display text-2xl text-cream sm:text-3xl">{s.title}</h3>
          <div className="col-start-2 mt-2 md:col-start-3 md:mt-1">
            <p className="text-lg font-medium text-cream">{s.short}</p>
            <p className="mt-2 max-w-2xl leading-relaxed text-cream-muted">{s.detail}</p>
            <p className="mt-4 flex items-start gap-2.5 text-sm text-cream">
              <span aria-hidden className="mt-1.5 h-2 w-2 shrink-0 bg-signal" />
              <span>
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-cream-muted">You get </span>
                {s.get}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
