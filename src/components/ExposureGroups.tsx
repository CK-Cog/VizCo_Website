"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { EXPOSURE_GROUPS } from "@/content/exposures";

const pad = (n: number) => String(n).padStart(2, "0");
const COUNT = EXPOSURE_GROUPS.length;

/** Start number (1-based) of each group, so items are numbered 01 to 12 across groups. */
const STARTS = EXPOSURE_GROUPS.reduce<number[]>((acc, g, i) => [...acc, i === 0 ? 1 : acc[i - 1] + EXPOSURE_GROUPS[i - 1].items.length], []);

/**
 * "How AI goes wrong": four groups of three, as tabs of bold black cards.
 * Advances on its own every 5s (driven by the progress bar's CSS animation) while on screen.
 * Pauses on hover or keyboard focus, stops when someone picks a tab, has a pause button,
 * and never auto-advances for people who prefer reduced motion.
 */
export default function ExposureGroups({ className = "mt-10" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const group = EXPOSURE_GROUPS[active];
  const running = playing && !held && inView;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const choose = (i: number, focus = false) => {
    const next = (i + COUNT) % COUNT;
    setPlaying(false);
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  };

  return (
    <div
      ref={root}
      className={className}
      aria-roledescription="carousel"
      aria-label="How AI goes wrong"
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
      }}
    >
      <div role="tablist" aria-label="Groups" className="grid grid-cols-2 gap-2 md:grid-cols-4">
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
              aria-controls="exposure-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => choose(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  e.preventDefault();
                  choose(i + 1, true);
                } else if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  choose(i - 1, true);
                }
              }}
              className={`relative flex flex-col items-start gap-2 overflow-hidden border px-4 py-3 text-left transition-colors ${
                selected ? "border-cream bg-cream text-ink" : "border-line-dark text-cream hover:border-cream"
              }`}
            >
              <span className={`font-mono text-[11px] tracking-[0.12em] ${selected ? "text-ink/60" : "text-cream-muted"}`}>
                {pad(start)}–{pad(start + g.items.length - 1)}
              </span>
              <span className="text-sm font-medium leading-snug sm:text-[15px]">{g.name}</span>
              {selected && playing ? (
                <span
                  key={`progress-${active}`}
                  aria-hidden
                  className="group-progress absolute inset-x-0 bottom-0 h-[3px] bg-signal"
                  style={{ animationPlayState: running ? "running" : "paused" }}
                  onAnimationEnd={() => setActive((a) => (a + 1) % COUNT)}
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <ol
        key={active}
        role="tabpanel"
        id="exposure-panel"
        aria-labelledby={`exposure-tab-${active}`}
        aria-live={playing ? "off" : "polite"}
        className="mt-4 grid gap-4 overflow-x-clip sm:grid-cols-3"
      >
        {group.items.map((e, j) => (
          <li
            key={e.headline}
            className="slide-in flex min-h-[13rem] flex-col justify-between bg-cream p-6 text-ink sm:min-h-[16rem]"
            style={{ animationDelay: `${j * 90}ms` }}
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

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause the rotation" : "Play the rotation"}
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-cream-muted hover:text-cream"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          onClick={() => choose(active + 1)}
          className="text-sm text-cream underline decoration-signal decoration-2 underline-offset-[6px]"
        >
          Next: {EXPOSURE_GROUPS[(active + 1) % COUNT].name} →
        </button>
      </div>
    </div>
  );
}
