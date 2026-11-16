"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts the first number in a figure up from zero when it scrolls into view,
 * keeping any text around it ("80%+", "3 of 9"). Server render and reduced motion
 * show the final figure.
 */
export default function CountUp({ value, className = "", duration = 1400 }: { value: string; className?: string; duration?: number }) {
  const parts = value.match(/^(\D*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState<number | null>(null);
  const target = parts ? Number(parts[2]) : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el || !parts || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top > window.innerHeight) setN(0);
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(2, -10 * p);
          setN(p >= 1 ? target : Math.round(target * eased));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  if (!parts) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span className="sr-only">{value}</span>
      <span aria-hidden>
        {parts[1]}
        {n ?? parts[2]}
        {parts[3]}
      </span>
    </span>
  );
}
