"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS } from "@/content/process";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/**
 * The five-step process, with what the client gets at each step. Shared by every page.
 * On large screens the step names stay pinned on the left and the current one turns
 * into a solid block as you read; on small screens it is a simple numbered list.
 */
export default function Process({ className = "mt-12" }: { className?: string }) {
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = items.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    items.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className={`grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 ${className}`}>
      {/* Pinned index (large screens) */}
      <div aria-hidden className="hidden lg:block">
        <div className="sticky top-36">
          <ol className="space-y-1.5">
            {PROCESS.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <li key={s.title}>
                  <button
                    type="button"
                    tabIndex={-1}
                    onClick={() => items.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })}
                    className="group flex w-full items-center gap-5 text-left"
                  >
                    <span className={`w-7 font-mono text-xs transition-colors duration-500 ${on ? "text-cream" : "text-subtle"}`}>{pad(i)}</span>
                    <span
                      className={`font-display inline-block px-[0.14em] text-[3.25rem] leading-[1.12] tracking-[-0.045em] transition-[background-color,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        on ? "bg-cream text-ink" : done ? "text-cream/35 group-hover:text-cream/70" : "text-cream/20 group-hover:text-cream/60"
                      }`}
                    >
                      {s.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
          <div className="mt-10 flex items-center gap-4 pl-12">
            <span className="h-px flex-1 bg-line-dark">
              <span
                className="block h-px origin-left bg-cream transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{ transform: `scaleX(${(active + 1) / PROCESS.length})` }}
              />
            </span>
            <span className="font-mono text-xs text-cream-muted">
              {pad(active)} / {pad(PROCESS.length - 1)}
            </span>
          </div>
        </div>
      </div>

      {/* Steps */}
      <ol className="border-b border-line-dark">
        {PROCESS.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.title}
              ref={(el) => {
                items.current[i] = el;
              }}
              className="relative grid grid-cols-[2.5rem_1fr] gap-x-4 border-t border-line-dark py-9 sm:grid-cols-[3rem_1fr] lg:block lg:py-14"
            >
              <span
                aria-hidden
                className={`absolute -top-px left-0 hidden h-px origin-left bg-cream transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:block lg:w-full ${
                  on ? "scale-x-100" : "scale-x-0"
                }`}
              />
              <span className="pt-1.5 font-mono text-xs text-cream-muted lg:hidden">{pad(i)}</span>
              <div>
                <h3 className="font-display text-[1.75rem] tracking-[-0.035em] text-cream lg:sr-only">{s.title}</h3>
                <p className="mt-2 text-xl font-medium tracking-[-0.025em] text-cream sm:text-2xl lg:mt-0 lg:text-[1.75rem] lg:leading-tight">
                  <span aria-hidden className="mr-3 hidden align-middle font-mono text-xs font-normal tracking-normal text-subtle lg:inline">
                    {pad(i)}
                  </span>
                  {s.short}
                </p>
                <p className={`mt-4 max-w-2xl text-base leading-relaxed transition-colors duration-500 sm:text-[17px] ${on ? "text-cream-muted" : "text-cream-muted lg:text-subtle"}`}>
                  {s.detail}
                </p>
                <p
                  className={`mt-6 inline-flex items-start gap-3 border px-4 py-3 text-[15px] transition-[border-color,background-color] duration-500 ${
                    on ? "border-line-strong bg-surface shadow-[var(--shadow-card)]" : "border-line-dark bg-transparent"
                  }`}
                >
                  <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 bg-signal" />
                  <span className="text-cream">
                    <span className="eyebrow mr-1.5 !text-[10.5px] text-cream-muted">You get </span>
                    {s.get}
                  </span>
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
