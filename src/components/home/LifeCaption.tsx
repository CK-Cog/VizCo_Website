import { Plus } from "lucide-react";

const RULES: { cell: "dead" | "alive" | "born"; text: string }[] = [
  { cell: "dead", text: "Fewer than 2 neighbours: it dies" },
  { cell: "alive", text: "2 or 3 neighbours: it lives" },
  { cell: "dead", text: "More than 3 neighbours: it dies" },
  { cell: "born", text: "Exactly 3 neighbours: a cell is born" },
];

const CELL = {
  dead: "border border-line-strong",
  alive: "bg-[#c4beb6]",
  born: "bg-signal",
} as const;

/**
 * The live label for the hero's Game of Life (see LifeField, which fills in the
 * generation and population). "Why the Game of Life?" opens a short note on the rules
 * and how they relate to AI risk, over the field, so nothing on the page moves.
 */
export default function LifeCaption({ className = "" }: { className?: string }) {
  return (
    <div data-field-avoid data-life-ui className={`relative w-[20rem] ${className}`}>
      <div className="border border-line-dark bg-ink/85 px-5 pb-4 pt-[18px] shadow-[var(--shadow-card)] backdrop-blur-sm">
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow flex items-center gap-2.5 !text-[10.5px] text-cream">
            <span aria-hidden className="signal-dot is-live !h-1.5 !w-1.5" />
            Conway&apos;s Game of Life
          </p>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-cream-muted">
            Gen{" "}
            <span data-life-gen className="tabular-nums text-cream">
              0000
            </span>
          </p>
        </div>
        <p className="mt-3 text-[14px] leading-snug tracking-[-0.012em] text-cream-muted">
          Simple rules, emergent behaviour. <span className="text-cream">Click the field to add life.</span>
        </p>
        <details className="group mt-4 border-t border-line-dark pt-3">
          <summary className="flex items-center justify-between gap-3 text-[14px] font-medium tracking-[-0.012em] text-cream">
            <span className="link-draw pb-px">Why the Game of Life?</span>
            <span
              aria-hidden
              className="flex h-6 w-6 items-center justify-center border border-line-strong transition-colors duration-300 group-open:border-cream group-open:bg-cream group-open:text-ink"
            >
              <Plus className="chev h-3.5 w-3.5" strokeWidth={1.75} />
            </span>
          </summary>
          <div className="absolute right-0 top-full z-10 mt-2 w-[23rem] border border-line-dark bg-surface p-6 shadow-[var(--shadow-lift)]">
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
              Four rules, yet gliders, oscillators and sudden collapse emerge that no one can predict by reading them. You only find out by running
              it.
            </p>
            <p className="mt-3 text-[14px] leading-relaxed tracking-[-0.012em] text-cream">
              AI is the same: simple training, emergent behaviour. That emergent risk is what we assess, place and keep monitoring.
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
    </div>
  );
}
