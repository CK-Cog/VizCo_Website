"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { EXPOSURE_GROUPS } from "@/content/exposures";

const pad = (n: number) => String(n).padStart(2, "0");
const COUNT = EXPOSURE_GROUPS.length;

/** Start number (1-based) of each group, so items are numbered 01 to 12 across groups. */
const STARTS = EXPOSURE_GROUPS.reduce<number[]>((acc, g, i) => [...acc, i === 0 ? 1 : acc[i - 1] + EXPOSURE_GROUPS[i - 1].items.length], []);

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * "How AI goes wrong": four groups of three, as tabs over bold ink cards.
 * A solid block slides to the selected tab. Advances on its own every 5s (driven by
 * the progress bar's CSS animation) while on screen. Pauses on hover or keyboard focus,
 * stops when someone picks a tab, has a pause button, and never auto-advances for
 * people who prefer reduced motion.
 */
export default function ExposureGroups({ className = "mt-12" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const [box, setBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
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

  const place = useCallback(() => {
    const t = tabs.current[active];
    if (t) setBox({ x: t.offsetLeft, y: t.offsetTop, w: t.offsetWidth, h: t.offsetHeight });
  }, [active]);

  useIsoLayoutEffect(() => {
    place();
  }, [place]);

  useEffect(() => {
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [place]);

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
      <div role="tablist" aria-label="Groups" className="relative grid grid-cols-2 gap-2 md:grid-cols-4">
        {box ? (
          <span
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 bg-cream transition-[transform,width,height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ transform: `translate(${box.x}px, ${box.y}px)`, width: box.w, height: box.h }}
          />
        ) : null}
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
              className={`relative flex flex-col items-start gap-2.5 overflow-hidden border px-4 py-3.5 text-left transition-colors duration-300 ${
                selected ? `border-cream text-ink ${box ? "" : "bg-cream"}` : "border-line-dark bg-surface/60 text-cream hover:border-line-strong hover:bg-surface"
              }`}
            >
              <span className={`font-mono text-[11px] tracking-[0.12em] transition-colors ${selected ? "text-ink/55" : "text-subtle"}`}>
                {pad(start)}–{pad(start + g.items.length - 1)}
              </span>
              <span className="text-[15px] font-medium leading-snug tracking-[-0.015em]">{g.name}</span>
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

      <div
        key={active}
        role="tabpanel"
        id="exposure-panel"
        aria-labelledby={`exposure-tab-${active}`}
        aria-live={playing ? "off" : "polite"}
        className="mt-3"
      >
        <ol className="grid gap-3 overflow-x-clip sm:grid-cols-3">
          {group.items.map((e, j) => (
            <li key={e.headline} className="slide-in" style={{ animationDelay: `${j * 90}ms` }}>
              <div className="group relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden bg-cream p-6 text-ink transition-[translate,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:min-h-[17rem] sm:p-7">
                <div aria-hidden className="grid-texture pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <p className="relative flex items-center gap-3 font-mono text-xs text-ink/55">
                  <span aria-hidden className="h-2.5 w-2.5 bg-signal transition-transform duration-500 group-hover:rotate-90" />
                  {pad(STARTS[active] + j)}
                </p>
                <div className="relative mt-10">
                  <h3 className="font-display text-[1.6rem] leading-[1.08] tracking-[-0.035em] sm:text-[1.85rem]">{e.headline}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink/65">{e.line}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause the rotation" : "Play the rotation"}
          className="eyebrow inline-flex items-center gap-2 text-cream-muted transition-colors hover:text-cream"
        >
          {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          {playing ? "Pause" : "Play"}
        </button>
        <button type="button" onClick={() => choose(active + 1)} className="group text-[15px] font-medium text-cream">
          <span className="link-signal">Next: {EXPOSURE_GROUPS[(active + 1) % COUNT].name} →</span>
        </button>
      </div>
    </div>
  );
}
