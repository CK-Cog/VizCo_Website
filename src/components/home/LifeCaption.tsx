import { Plus } from "lucide-react";

const RULES: { cell: "dead" | "alive" | "born"; text: string }[] = [
  { cell: "dead", text: "Fewer than 2 neighbours: it dies" },
  { cell: "alive", text: "2 or 3 neighbours: it lives" },
  { cell: "dead", text: "More than 3 neighbours: it dies" },
  { cell: "born", text: "Exactly 3 neighbours: a cell is born" },
];

const CELL = {
  dead: "border border-line-strong",
  alive: "bg-[#d2cdc6]",
  born: "bg-signal",
} as const;

/**
 * A quiet label for the hero's Game of Life (LifeField fills in the generation and
 * population). It appears for a few seconds once the field fades in, then only while the
 * pointer is over the field, or while it is hovered or its note is open. "Why?" opens a
 * short note on the rules and how they relate to AI risk, over the field, so nothing on
 * the page moves.
 */
export default function LifeCaption({ className = "" }: { className?: string }) {
  return (
    <div data-field-avoid data-life-ui className={`life-caption relative text-right ${className}`}>
      <p className="eyebrow flex items-center justify-end gap-2 !text-[10px] text-subtle">
        <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
        Conway&apos;s Game of Life
        <span aria-hidden>·</span>
        <span>
          Gen <span data-life-gen className="tabular-nums">0000</span>
        </span>
      </p>
      <details className="group mt-2">
        <summary className="group/sum inline-flex items-center gap-1.5 text-[13px] tracking-[-0.01em] text-subtle transition-colors hover:text-cream-muted group-open:text-cream-muted">
          Simple rules, emergent behaviour.
          <span className="link-draw pb-px text-cream-muted">Why?</span>
          <Plus aria-hidden className="chev h-3 w-3" strokeWidth={1.75} />
        </summary>
        <div className="absolute right-0 top-full z-10 mt-3 w-[23rem] border border-line-dark bg-surface p-6 text-left shadow-[var(--shadow-lift)]">
          <p className="eyebrow !text-[10.5px] text-cream-muted">The rules, for every cell</p>
          <ul className="mt-3.5 space-y-2">
            {RULES.map((r) => (
              <li key={r.text} className="flex items-center gap-3 text-[13.5px] tracking-[-0.01em] text-cream">
                <span aria-hidden className={`h-2.5 w-2.5 shrink-0 ${CELL[r.cell]}`} />
                {r.text}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] leading-relaxed tracking-[-0.012em] text-cream-muted">
            Four rules, yet gliders, oscillators and sudden collapse emerge that no one can predict by reading them. You only find out by running it.
          </p>
          <p className="mt-3 text-[14px] leading-relaxed tracking-[-0.012em] text-cream">
            AI works the same way: behaviour emerges that no one designed. That emergent risk is what we assess, place and keep monitoring.
          </p>
          <p className="mt-5 flex items-center gap-2 border-t border-line-dark pt-4 font-mono text-[10.5px] uppercase tracking-[0.12em] text-subtle">
            Move to seed
            <span aria-hidden>·</span>
            Click to launch a glider
            <span aria-hidden>·</span>
            <span>
              <span data-life-pop className="tabular-nums text-cream">
                0
              </span>{" "}
              alive
            </span>
          </p>
        </div>
      </details>
    </div>
  );
}
