"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, Repeat } from "lucide-react";
import { PROCESS } from "@/content/process";

const pad = (n: number) => String(n + 1).padStart(2, "0");
const COUNT = PROCESS.length;
const DWELL = 6500; // ms per step while advancing on its own
/** Steps that keep running after cover is placed. */
const ONGOING = new Set(["Monitor", "Report"]);

/**
 * The five-step process as a horizontal row of panels. The current step opens wide as a
 * solid ink block (the logo's "Co" block); the others fold into slim columns with their
 * number and a vertical title. Advances on its own while on screen, pauses on hover or
 * focus, stops once someone picks a step, and never auto-advances with reduced motion.
 * On small screens it becomes a horizontal, snapping row of cards.
 */
export default function Process({ className = "mt-12" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const running = playing && !held && inView;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setPlaying(false);
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
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
    <div ref={root} className={className}>
      {/* Panels: tablets and up */}
      <div
        className="hidden md:block"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
        }}
      >
        <div role="tablist" aria-label="How we work" className="flex h-[30rem] gap-2 [container-type:inline-size] lg:h-[31rem]">
          {PROCESS.map((s, i) => {
            const on = i === active;
            const ongoing = ONGOING.has(s.title);
            return (
              <div
                key={s.title}
                className={`group relative min-w-0 overflow-hidden transition-[flex-grow,background-color,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  on ? "bg-cream text-ink" : "border border-line-dark bg-surface text-cream hover:border-cream"
                }`}
                style={{ flexGrow: on ? 5 : 1, flexBasis: 0 }}
              >
                {on ? <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" /> : null}

                {/* Number, and the repeat mark for ongoing steps */}
                <div className="relative flex items-start justify-between p-5 lg:p-6">
                  <span className={`font-mono text-xs ${on ? "text-ink/55" : "text-subtle"}`}>{pad(i)}</span>
                  {ongoing ? (
                    <Repeat aria-hidden className={`h-3.5 w-3.5 ${on ? "text-signal" : "text-subtle group-hover:text-cream"}`} strokeWidth={1.75} />
                  ) : null}
                </div>

                {/* Folded: vertical title */}
                <span
                  aria-hidden
                  className={`font-display absolute bottom-5 left-5 rotate-180 text-[1.75rem] leading-none tracking-[-0.035em] transition-opacity duration-300 [writing-mode:vertical-rl] lg:bottom-6 lg:left-6 lg:text-[2rem] ${
                    on ? "opacity-0" : "opacity-100 delay-200"
                  }`}
                >
                  {s.title}
                </span>

                {/* Open: the step, laid out at its final width so text never reflows mid-animation */}
                <div
                  role="tabpanel"
                  id={`process-panel-${i}`}
                  aria-labelledby={`process-tab-${i}`}
                  inert={!on}
                  className={`absolute bottom-0 left-0 p-6 transition-[opacity,translate] lg:p-8 ${
                    on ? "translate-y-0 opacity-100 delay-300 duration-500" : "pointer-events-none translate-y-2 opacity-0 duration-200"
                  }`}
                  style={{ width: "calc((100cqw - 2rem) * 5 / 9)" }}
                >
                  <h3 className="font-display text-[2.5rem] leading-none tracking-[-0.045em] lg:text-[3.5rem]">{s.title}</h3>
                  <p className="mt-5 text-xl font-medium tracking-[-0.025em] lg:text-2xl">{s.short}</p>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink/65 lg:text-base">{s.detail}</p>
                  <p className="mt-6 inline-flex items-start gap-3 border border-ink/20 px-4 py-3 text-[15px]">
                    <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 bg-signal" />
                    <span>
                      <span className="eyebrow mr-1.5 !text-[10.5px] text-ink/55">You get </span>
                      {s.get}
                    </span>
                  </p>
                </div>

                {/* The whole folded column is the control */}
                <button
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`process-tab-${i}`}
                  aria-selected={on}
                  aria-controls={`process-panel-${i}`}
                  aria-label={`${pad(i)} ${s.title}`}
                  tabIndex={on ? 0 : -1}
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
                  className={`absolute inset-0 ${on ? "pointer-events-none" : "cursor-pointer"}`}
                />

                {on && playing ? (
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/10">
                    <span
                      key={`p-${active}`}
                      className="group-progress absolute inset-0 bg-signal"
                      style={{ animationDuration: `${DWELL}ms`, animationPlayState: running ? "running" : "paused" }}
                      onAnimationEnd={() => setActive((a) => (a + 1) % COUNT)}
                    />
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause the steps" : "Play the steps"}
            className="eyebrow inline-flex items-center gap-2 text-cream-muted transition-colors hover:text-cream"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? "Pause" : "Play"}
          </button>
          <div aria-hidden className="flex items-center gap-1.5">
            {PROCESS.map((s, i) => (
              <span key={s.title} className={`h-1.5 transition-all duration-500 ${i === active ? "w-6 bg-cream" : "w-1.5 bg-line-strong"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Phones: a horizontal row of cards that snaps */}
      <ol className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 sm:-mx-8 sm:px-8 md:hidden">
        {PROCESS.map((s, i) => (
          <li
            key={s.title}
            className={`relative flex w-[82%] shrink-0 snap-start flex-col p-6 ${i === 0 ? "bg-cream text-ink" : "border border-line-dark bg-surface text-cream"}`}
          >
            <div className="flex items-start justify-between">
              <span className={`font-mono text-xs ${i === 0 ? "text-ink/55" : "text-subtle"}`}>{pad(i)}</span>
              {ONGOING.has(s.title) ? <Repeat aria-hidden className="h-3.5 w-3.5 text-signal" strokeWidth={1.75} /> : null}
            </div>
            <h3 className="font-display mt-10 text-[2.25rem] leading-none tracking-[-0.045em]">{s.title}</h3>
            <p className="mt-4 text-lg font-medium tracking-[-0.02em]">{s.short}</p>
            <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "text-ink/65" : "text-cream-muted"}`}>{s.detail}</p>
            <p className={`mt-auto flex items-start gap-3 border-t pt-4 text-[14px] ${i === 0 ? "border-ink/20" : "border-line-dark"}`}>
              <span aria-hidden className="mt-[6px] h-2 w-2 shrink-0 bg-signal" />
              <span>
                <span className={`eyebrow mr-1.5 !text-[10px] ${i === 0 ? "text-ink/55" : "text-cream-muted"}`}>You get </span>
                {s.get}
              </span>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
