"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Cite from "@/components/Cite";
import Reveal from "@/components/Reveal";
import { Container, Label } from "@/components/ui";
import { DEPTH, EXPOSURE_GROUPS, type Exposure } from "@/content/exposures";
import { BOOKING_URL } from "@/content/site";

const RISKS: Exposure[] = EXPOSURE_GROUPS.flatMap((g) => g.items);
const COUNT = RISKS.length;

const pad = (n: number) => String(n + 1).padStart(2, "0");

/*
 * Geometry, in the SVG's 0–100 units so the HTML labels can sit at the same percentages.
 * One spoke per risk, clockwise from the top; one ring per depth, outermost first.
 */
const C = 50;
const RINGS = [33, 25, 17, 9.5];
const CORE = 4;
const LABEL_R = 36;
const STEP = 360 / COUNT;
const rad = (deg: number) => (deg * Math.PI) / 180;
const spokeAngle = (k: number) => rad(-90 + (k + 0.5) * STEP);
const edgeAngle = (k: number) => rad(-90 + k * STEP);
const at = (r: number, a: number) => [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
const f = (v: number) => v.toFixed(3);
const join = (pts: (readonly [number, number] | number[])[]) => pts.map(([x, y]) => `${f(x)},${f(y)}`).join(" ");
const ringPoints = (r: number) => join(RISKS.map((_, k) => at(r, spokeAngle(k))));
/** The outer ring's edge midpoints, halfway between spokes. */
const MID = RINGS[0] * Math.cos(rad(STEP / 2));
/** One risk's slice of the web, out to the outer ring. */
const slice = (k: number) => join([[C, C], at(MID, edgeAngle(k)), at(RINGS[0], spokeAngle(k)), at(MID, edgeAngle(k + 1))]);

/** A small target: four rings, the given depth picked out. Same order as the map. */
function DepthGlyph({ level }: { level: number }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 shrink-0">
      {[11, 8, 5].map((r, i) => (
        <circle key={r} cx="12" cy="12" r={r} fill="none" strokeWidth={i === level ? 1.75 : 1} className={i === level ? "stroke-cream" : "stroke-line-strong"} />
      ))}
      <rect x="10.25" y="10.25" width="3.5" height="3.5" className={level === 3 ? "fill-signal" : "fill-line-strong"} />
    </svg>
  );
}

/**
 * What we cover, as a risk map in one framed module: the map on the left, the chosen risk
 * on the right, both the same height. Twelve spokes for the ways AI goes wrong, and four
 * rings for how deep we test each one, from the policy wording to the AI running live.
 * Picking a risk lights its spoke ring by ring; the panel says why it matters and what we
 * check at every depth. Every risk gets every ring: the map shows structure, not scores.
 */
export default function RiskMap() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [ring, setRing] = useState<number | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const map = useRef<HTMLDivElement>(null);
  // The first scan waits until the map is on screen, so it isn't over before anyone sees it
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = map.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const choose = (i: number, focus = false) => {
    const next = (i + COUNT) % COUNT;
    setActive(next);
    if (focus) tabs.current[next]?.focus();
  };

  const onKey = (e: KeyboardEvent, i: number) => {
    const moves: Record<string, number> = { ArrowRight: i + 1, ArrowDown: i + 1, ArrowLeft: i - 1, ArrowUp: i - 1, Home: 0, End: COUNT - 1 };
    if (e.key in moves) {
      e.preventDefault();
      choose(moves[e.key], true);
    }
  };

  const a = spokeAngle(active);

  return (
    <section id="coverage" className="relative py-20 sm:py-28 lg:py-32">
      <Container>
        {/* Same heading as the page's other numbered sections (see Block), with the map full width below */}
        <Reveal className="rule-draw grid gap-7 pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
          <Label number="01" className="lg:pt-3">
            What we cover
          </Label>
          <h2 className="font-display t-h2 max-w-3xl text-balance text-cream">How AI goes wrong.</h2>
        </Reveal>

        {/* One framed module: the map and the chosen risk, side by side at the same height */}
        <Reveal className="mt-14 grid border border-line-dark bg-surface shadow-[var(--shadow-card)] lg:mt-20 xl:grid-cols-[minmax(0,8fr)_minmax(0,7fr)]">
          {/* The map, with a prompt above it and the rings explained below */}
          <div className="flex flex-col bg-ink-2 px-5 py-6 sm:px-8 sm:py-8">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow flex items-center gap-2.5 text-cream">
                <span aria-hidden className="signal-dot is-live" />
                Pick a risk
              </p>
              <p className="hidden font-mono text-[0.625rem] uppercase tracking-[0.14em] text-subtle sm:block">Your AI at the core</p>
            </div>

            <div ref={map} className="flex flex-1 items-center justify-center py-8 sm:py-10">
              <div className="relative aspect-square w-full max-w-[30rem] sm:w-[72%] xl:w-[76%]">
                <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
                  <g className="map-web">
                    {/* The chosen risk's slice, and the one being pointed at */}
                    {RISKS.map((r, k) => (
                      <polygon
                        key={r.short}
                        points={slice(k)}
                        className={`transition-[fill] duration-500 ${k === active ? "fill-ink-3" : k === hover ? "fill-ink-3/50" : "fill-transparent"}`}
                      />
                    ))}

                    {/* Rings, outermost first */}
                    {RINGS.map((r, i) => (
                      <polygon
                        key={r}
                        points={ringPoints(r)}
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        strokeWidth={ring === i ? 2 : 1}
                        className={`transition-[stroke] duration-300 ${ring === i || i === 0 ? "stroke-cream" : "stroke-line-strong"}`}
                      />
                    ))}

                    {/* Spokes, and the web's knots */}
                    {RISKS.map((r, k) => {
                      const ak = spokeAngle(k);
                      const [x1, y1] = at(CORE + 1.5, ak);
                      const [x2, y2] = at(RINGS[0], ak);
                      return (
                        <g key={r.short}>
                          <line
                            x1={f(x1)}
                            y1={f(y1)}
                            x2={f(x2)}
                            y2={f(y2)}
                            vectorEffect="non-scaling-stroke"
                            className={`transition-[stroke] duration-300 ${k === hover && k !== active ? "stroke-cream-muted" : "stroke-line-dark"}`}
                          />
                          {RINGS.map((rr) => {
                            const [x, y] = at(rr, ak);
                            return <rect key={rr} x={f(x - 0.45)} y={f(y - 0.45)} width="0.9" height="0.9" className="fill-line-strong" />;
                          })}
                        </g>
                      );
                    })}
                  </g>

                  {/* The chosen spoke, lit ring by ring from the policy in to your AI */}
                  {seen ? (
                    <g key={active}>
                      <line
                        className="spoke-in stroke-cream"
                        x1={f(at(CORE + 1.5, a)[0])}
                        y1={f(at(CORE + 1.5, a)[1])}
                        x2={f(at(RINGS[0], a)[0])}
                        y2={f(at(RINGS[0], a)[1])}
                        vectorEffect="non-scaling-stroke"
                        strokeWidth={2}
                      />
                      {RINGS.map((rr, i) => {
                        const [x, y] = at(rr, a);
                        const s = ring === i ? 3.2 : 2.3;
                        return (
                          <g key={rr}>
                            {i === RINGS.length - 1 ? <rect className="map-ping fill-signal" x={f(x - 1.15)} y={f(y - 1.15)} width="2.3" height="2.3" /> : null}
                            <rect
                              className="scan-node fill-signal transition-[width,height,x,y] duration-300"
                              style={{ animationDelay: `${80 + i * 150}ms` }}
                              x={f(x - s / 2)}
                              y={f(y - s / 2)}
                              width={f(s)}
                              height={f(s)}
                            />
                          </g>
                        );
                      })}
                    </g>
                  ) : null}

                  {/* Your AI, at the core */}
                  <rect x={C - CORE} y={C - CORE} width={CORE * 2} height={CORE * 2} className="fill-cream" />
                  <text x={C} y={C + 1.15} textAnchor="middle" className="fill-ink font-display" style={{ fontSize: 3.2, letterSpacing: "-0.04em" }}>
                    AI
                  </text>
                </svg>

                {/* Depth labels, down the gap between the last spoke and the first */}
                <div aria-hidden className="pointer-events-none absolute inset-0 hidden sm:block">
                  {DEPTH.map((d, i) => {
                    const [x, y] = at(RINGS[i] * Math.cos(rad(STEP / 2)), edgeAngle(0));
                    return (
                      <span
                        key={d.key}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 bg-ink-2 px-1.5 font-mono text-[0.5625rem] uppercase leading-4 tracking-[0.14em] transition-colors duration-300 ${
                          ring === i ? "text-cream" : "text-subtle"
                        }`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        {d.short}
                      </span>
                    );
                  })}
                </div>

                {/* The risks: one tab per spoke, by the end of it */}
                <div role="tablist" aria-label="Ways AI goes wrong" className="pointer-events-none absolute inset-0">
                  {RISKS.map((r, k) => {
                    const ak = spokeAngle(k);
                    const [x, y] = at(LABEL_R, ak);
                    const right = Math.cos(ak) >= 0;
                    const on = k === active;
                    return (
                      <button
                        key={r.short}
                        ref={(el) => {
                          tabs.current[k] = el;
                        }}
                        type="button"
                        role="tab"
                        id={`risk-tab-${k}`}
                        aria-selected={on}
                        aria-controls={`risk-panel-${k}`}
                        tabIndex={on ? 0 : -1}
                        onClick={() => choose(k)}
                        onKeyDown={(e) => onKey(e, k)}
                        onMouseEnter={() => setHover(k)}
                        onMouseLeave={() => setHover(null)}
                        className={`pointer-events-auto absolute flex min-h-9 min-w-9 -translate-y-1/2 items-center justify-center gap-2 px-2 py-1 text-[0.8125rem] font-medium leading-tight tracking-[-0.01em] transition-colors duration-300 ${
                          right ? "text-left" : "-translate-x-full flex-row-reverse text-right"
                        } ${on ? "bg-cream text-ink" : k === hover ? "bg-surface text-cream shadow-[var(--shadow-card)]" : "text-cream-muted hover:text-cream"}`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <span className={`font-mono text-[0.6875rem] ${on ? "text-ink/60" : "text-subtle"}`}>{pad(k)}</span>
                        <span className="hidden w-max max-w-[6.75rem] sm:inline">{r.short}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-line-strong pt-5" onMouseLeave={() => setRing(null)}>
              <p className="eyebrow !text-[0.625rem] text-subtle">How deep we test, from the outside in</p>
              <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-4">
                {DEPTH.map((d, i) => (
                  <li
                    key={d.key}
                    onMouseEnter={() => setRing(i)}
                    className={`flex items-center gap-2 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${ring === i ? "text-cream" : "text-cream-muted"}`}
                  >
                    <DepthGlyph level={i} />
                    {d.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The chosen risk */}
          <div className="flex flex-col border-t border-line-dark p-6 sm:p-10 xl:border-l xl:border-t-0 xl:px-10 xl:py-9">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs tabular-nums text-cream-muted">
                <span className="text-cream">{pad(active)}</span> / {pad(COUNT - 1)}
              </p>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => choose(active - 1)}
                  aria-label="Previous risk"
                  className="flex h-9 w-9 items-center justify-center border border-line-strong text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => choose(active + 1)}
                  aria-label="Next risk"
                  className="flex h-9 w-9 items-center justify-center border border-line-strong text-cream transition-colors hover:border-cream hover:bg-cream hover:text-ink"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Every panel is in the page; the others are hidden in place so the height never jumps */}
            <div className="mt-6 grid">
              {RISKS.map((r, n) => {
                const on = n === active;
                return (
                  <div
                    key={r.short}
                    role="tabpanel"
                    id={`risk-panel-${n}`}
                    aria-labelledby={`risk-tab-${n}`}
                    inert={!on}
                    className={`col-start-1 row-start-1 ${on ? "" : "invisible"}`}
                  >
                    <p className={`font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-cream-muted ${on ? "anim-in" : ""}`}>{r.short}</p>
                    <h3 className={`font-display mt-2 text-balance text-[1.75rem] leading-[1.05] tracking-[-0.036em] text-cream sm:text-[2.125rem] ${on ? "anim-in" : ""}`}>
                      {r.headline}
                    </h3>
                    <p className={`mt-2 text-base leading-snug tracking-[-0.012em] text-cream-muted sm:text-[1.0625rem] ${on ? "anim-in" : ""}`} style={{ animationDelay: "60ms" }}>
                      {r.line}
                    </p>

                    <div className={`mt-6 border-l-2 border-signal pl-4 ${on ? "anim-in" : ""}`} style={{ animationDelay: "120ms" }}>
                      <p className="eyebrow !text-[0.65625rem] text-cream-muted">Why it matters</p>
                      <p className="mt-1.5 text-base font-medium leading-snug tracking-[-0.014em] text-cream">{r.why}</p>
                      {r.record ? (
                        <p className="mt-2 text-[0.8125rem] leading-relaxed text-cream-muted">
                          <span className="eyebrow mr-1.5 !text-[0.59375rem] text-cream">On record</span>
                          {r.record.text}
                          <Cite s={r.record.s} />
                        </p>
                      ) : null}
                    </div>

                    <p className="eyebrow mt-7 !text-[0.65625rem] text-cream-muted">How deep we test it</p>
                    <ol className="mt-2.5 border-t border-cream" onMouseLeave={() => setRing(null)}>
                      {DEPTH.map((d, i) => (
                        <li
                          key={d.key}
                          onMouseEnter={() => setRing(i)}
                          className={`grid grid-cols-[1.25rem_minmax(0,1fr)] gap-x-3 border-b border-line-dark py-2.5 transition-colors duration-300 sm:grid-cols-[1.25rem_7.25rem_minmax(0,1fr)] ${
                            ring === i ? "bg-ink-2" : ""
                          } ${on ? "anim-in" : ""}`}
                          style={{ animationDelay: `${200 + i * 100}ms` }}
                        >
                          <DepthGlyph level={i} />
                          <p className="pt-px text-[0.8125rem] font-semibold tracking-[-0.01em] text-cream">{d.name}</p>
                          <p className="col-start-2 text-[0.8125rem] leading-relaxed text-cream-muted sm:col-start-3 sm:pt-px">{r.depth[d.key]}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>

            <p className="mt-6 text-[0.875rem] leading-relaxed text-cream-muted xl:mt-auto xl:pt-6">
              Your checks are built from your use case, not a template.{" "}
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="link-signal font-medium text-cream">
                Talk to us
              </a>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
