"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * The left column of an editorial section. On large screens it stays pinned while
 * the section scrolls past, and a thin line fills to show how far through it you are.
 */
export default function SectionRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest("section");
    if (!el || !section) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.7;
      const span = Math.max(1, r.height - vh * 0.25);
      const p = Math.min(1, Math.max(0, (start - r.top) / span));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="self-start lg:sticky lg:top-32" style={{ ["--p" as string]: 0 }}>
      {children}
      <div aria-hidden className="relative mt-7 hidden h-32 w-px bg-line-dark lg:block">
        <span className="absolute inset-0 origin-top bg-cream" style={{ transform: "scaleY(var(--p))" }} />
        <span className="absolute -left-[3.5px] h-2 w-2 -translate-y-1/2 bg-signal" style={{ top: "calc(var(--p) * 100%)" }} />
      </div>
    </div>
  );
}
