"use client";

import { useRef, useState } from "react";
import { EXPOSURE_GROUPS } from "@/content/exposures";

const pad = (n: number) => String(n).padStart(2, "0");

/** Start number (1-based) of each group, so items are numbered 01 to 12 across groups. */
const STARTS = EXPOSURE_GROUPS.reduce<number[]>((acc, g, i) => [...acc, i === 0 ? 1 : acc[i - 1] + EXPOSURE_GROUPS[i - 1].items.length], []);

/**
 * "How AI goes wrong": four groups of three, as tabs. Each group shows its three
 * failure modes as bold black cards. Shared by home and enterprise.
 */
export default function ExposureGroups({ className = "mt-10" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = EXPOSURE_GROUPS[active];

  const focusTab = (i: number) => {
    const next = (i + EXPOSURE_GROUPS.length) % EXPOSURE_GROUPS.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label="How AI goes wrong" className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {EXPOSURE_GROUPS.map((g, i) => {
          const selected = i === active;
          const start = STARTS[i];
          return (
            <button
              key={g.name}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`exposure-tab-${i}`}
              aria-selected={selected}
              aria-controls={`exposure-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  focusTab(i + 1);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  focusTab(i - 1);
                }
              }}
              className={`flex flex-col items-start gap-2 border px-4 py-3 text-left transition-colors ${
                selected ? "border-cream bg-cream text-ink" : "border-line-dark text-cream hover:border-cream"
              }`}
            >
              <span className={`font-mono text-[11px] tracking-[0.12em] ${selected ? "text-ink/60" : "text-cream-muted"}`}>
                {pad(start)}–{pad(start + g.items.length - 1)}
              </span>
              <span className="text-sm font-medium leading-snug sm:text-[15px]">{g.name}</span>
            </button>
          );
        })}
      </div>

      <ol
        key={active}
        role="tabpanel"
        id={`exposure-panel-${active}`}
        aria-labelledby={`exposure-tab-${active}`}
        className="mt-4 grid gap-4 sm:grid-cols-3"
      >
        {group.items.map((e, j) => (
          <li
            key={e.headline}
            className="anim-in flex min-h-[13rem] flex-col justify-between bg-cream p-6 text-ink sm:min-h-[16rem]"
            style={{ animationDelay: `${j * 70}ms` }}
          >
            <p className="flex items-center gap-2.5 font-mono text-xs text-ink/60">
              <span aria-hidden className="h-2.5 w-2.5 bg-signal" />
              {pad(STARTS[active] + j)}
            </p>
            <div className="mt-8">
              <h3 className="font-display text-2xl leading-[1.1] sm:text-[1.7rem]">{e.headline}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{e.line}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={() => setActive((active + 1) % EXPOSURE_GROUPS.length)}
          className="text-sm text-cream underline decoration-signal decoration-2 underline-offset-[6px]"
        >
          Next: {EXPOSURE_GROUPS[(active + 1) % EXPOSURE_GROUPS.length].name} →
        </button>
      </div>
    </div>
  );
}
