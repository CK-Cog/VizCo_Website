"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_CLOSE = 8000; // ms
const AFTER_LEAVE = 3000; // ms, once the pointer leaves the open note

/**
 * A quiet "Game of Life" label for the hero field. Clicking it shows one line on why it
 * matters for AI. The note closes by itself after a few seconds (paused while hovered),
 * on any click outside it, and on Escape. The label itself appears briefly once the field
 * fades in, then only while the field is hovered (see LifeField and .life-caption).
 */
export default function LifeCaption({ className = "" }: { className?: string }) {
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
      data-field-avoid
      data-life-ui
      className={`life-caption relative text-right ${open ? "is-open" : ""} ${className}`}
      onMouseEnter={() => open && window.clearTimeout(timer.current)}
      onMouseLeave={() => open && closeIn(AFTER_LEAVE)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="life-note"
        onClick={() => setOpen((o) => !o)}
        className="group eyebrow inline-flex items-center gap-2.5 !text-[10.5px] text-cream-muted transition-colors hover:text-cream"
      >
        <span aria-hidden className="h-1.5 w-1.5 bg-signal" />
        <span className="link-draw pb-px">Game of Life</span>
      </button>
      <div
        id="life-note"
        role="note"
        aria-hidden={!open}
        className={`absolute right-0 top-full z-10 mt-3 w-[21rem] border border-line-dark bg-surface p-5 text-left shadow-[var(--shadow-lift)] transition-[opacity,translate] duration-300 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-1 opacity-0"
        }`}
      >
        <p className="text-[14.5px] leading-relaxed tracking-[-0.012em] text-cream">
          Just like Conway&apos;s Game of Life, AI and agents can behave in ways no one designed. That emergent risk is what we assess, place and keep
          monitoring.
        </p>
      </div>
    </div>
  );
}
