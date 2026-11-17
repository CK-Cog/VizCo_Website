"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_CLOSE = 8000; // ms
const AFTER_LEAVE = 3000; // ms, once the pointer leaves the open note

/**
 * The portrait's legend. Clicking it shows one line on why there is a dog in a suit on an
 * insurance broker's home page. The note closes by itself after a few seconds (paused
 * while hovered), on any click outside it, and on Escape.
 */
export default function PlateNote({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timer = useRef(0);

  const closeIn = useCallback((ms: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(false), ms);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeIn(AUTO_CLOSE);
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      window.clearTimeout(timer.current);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, closeIn]);

  return (
    <div
      ref={root}
      className={`relative ${className}`}
      onMouseEnter={() => open && window.clearTimeout(timer.current)}
      onMouseLeave={() => open && closeIn(AFTER_LEAVE)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="plate-note"
        onClick={() => setOpen((o) => !o)}
        className="group eyebrow inline-flex items-center gap-2.5 !text-[10.5px] text-cream-muted transition-colors hover:text-cream"
      >
        <span aria-hidden className="signal-dot is-live !h-1.5 !w-1.5" />
        <span className="link-draw pb-px">On watch</span>
      </button>
      <div
        id="plate-note"
        role="note"
        aria-hidden={!open}
        className={`absolute bottom-full left-1/2 z-10 mb-3 -translate-x-1/2 w-[min(21rem,calc(100vw-3rem))] border border-line-dark bg-surface p-5 text-left shadow-[var(--shadow-lift)] transition-[opacity,translate] duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        <p className="text-[14.5px] leading-relaxed tracking-[-0.012em] text-cream">
          A good broker is a watchdog. We keep watching your AI after the policy is bound, and argue your claim when it counts.
        </p>
      </div>
    </div>
  );
}
