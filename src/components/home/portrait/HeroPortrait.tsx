"use client";

import { useEffect, useRef } from "react";
import { createEngraving, type Engraving } from "./engraving";
import { drawInner, drawOuter } from "./guilloche";
import PlateNote from "./PlateNote";

/**
 * The home hero's portrait, set like the vignette on a banknote or share certificate:
 * an engraved wolfhound in a suit, in front of a guilloché medallion with a microprinted
 * rim. Paper and ink, with the signal orange only in the eyes and the live marks.
 *
 * Intro (once, when the plate is in view): a rose-engine sweep draws the medallion, then
 * the engraving develops outward from the eyes in WebGL (see engraving.ts), and hands
 * over to the full-resolution <img>. Afterwards the medallion's two rings turn slowly
 * against each other. The portrait itself stays still: it does not follow the pointer.
 *
 * States, on `data-intro` (CSS keys off them):
 * - none: server render or no JS. The CSS fallback reveal runs on its own.
 * - "late": JS arrived after the fallback started; let it finish.
 * - "wait": hidden until the plate is in view and the image is decoded.
 * - "run": WebGL intro playing. "css": no WebGL, so the CSS reveal plays instead.
 * - "done": settled on the <img>.
 * Reduced motion gets the finished plate, still.
 */

/** Midpoint between the eyes, as a fraction of the image. */
const EYES: [number, number] = [0.5646, 0.1947];
/** The asset's paper tone. The image was graded to this; keep it in step with --ink. */
const PAPER = "#fafaf8";
/* Non-breaking spaces around the dots, so the seam where the text meets itself keeps its spacing. */
const NB = String.fromCharCode(160);
const MICROPRINT = `VIZCO${NB}\u00b7${NB}THE AI & EMERGING RISK SPECIALTY BROKER${NB}\u00b7${NB}`;
const LATE_MS = 1100;
const INTRO_DELAY = 380;
/** How long the intro canvas takes to fade into the <img> (matches .plate-gl in CSS). */
const HANDOVER_MS = 700;

const ALT = "Engraved portrait of a wolfhound in a suit and tie";

export default function HeroPortrait({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const gl = useRef<HTMLCanvasElement>(null);
  const ringA = useRef<HTMLCanvasElement>(null);
  const ringB = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = root.current;
    const pic = img.current;
    const glc = gl.current;
    const a = ringA.current;
    const b = ringB.current;
    if (!el || !pic || !glc || !a || !b) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const late = performance.now() > LATE_MS;
    el.dataset.intro = reduce ? "done" : late ? "late" : "wait";

    let disposed = false;
    let eng: Engraving | null = null;
    const timers: number[] = [];
    const cleanups: (() => void)[] = [];

    const release = () => {
      glc.removeEventListener("webglcontextlost", onLost);
      eng?.dispose();
      eng = null;
    };
    const onLost = () => {
      eng = null;
      el.dataset.intro = "done";
    };
    glc.addEventListener("webglcontextlost", onLost);

    /* ---------- Medallion ---------- */

    let ringSize = 0;
    const drawRings = () => {
      const size = a.parentElement?.getBoundingClientRect().width ?? 0;
      if (size < 8 || Math.abs(size - ringSize) < 0.5) return;
      ringSize = size;
      drawOuter(a, size);
      drawInner(b, size);
    };
    drawRings();

    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        drawRings();
        eng?.resize();
      }, 120);
    });
    ro.observe(el);
    cleanups.push(() => {
      ro.disconnect();
      window.clearTimeout(resizeTimer);
    });

    // Pause the turning rings while the plate is off screen.
    const vis = new IntersectionObserver(([entry]) => {
      el.toggleAttribute("data-offscreen", !entry.isIntersecting);
    });
    vis.observe(el);
    cleanups.push(() => vis.disconnect());

    /* ---------- Engraving ---------- */

    // Hand over to the <img>, then free the GPU once the canvas has faded out.
    const settle = () => {
      if (disposed) return;
      el.dataset.intro = "done";
      timers.push(window.setTimeout(release, HANDOVER_MS + 100));
    };
    const settleAfterReveal = () => {
      const onEnd = (e: AnimationEvent) => {
        if (e.target === pic) settle();
      };
      pic.addEventListener("animationend", onEnd);
      cleanups.push(() => pic.removeEventListener("animationend", onEnd));
    };

    const startIntro = () => {
      if (disposed) return;
      if (eng) {
        el.dataset.intro = "run";
        timers.push(window.setTimeout(() => eng?.intro(settle), INTRO_DELAY));
      } else {
        el.dataset.intro = "css";
        settleAfterReveal();
      }
    };

    const ready = async () => {
      if (el.dataset.intro === "done") return;
      if (el.dataset.intro === "late") {
        // The CSS fallback is already revealing the image; let it land.
        const running = pic.getAnimations?.().some((x) => x.playState === "running") ?? false;
        if (running) settleAfterReveal();
        else settle();
        return;
      }

      try {
        if (!pic.complete || !pic.naturalWidth) await pic.decode();
      } catch {
        // A failed decode leaves the plain <img> to do its best.
      }
      if (disposed) return;
      if (pic.naturalWidth) {
        const signal = getComputedStyle(document.documentElement).getPropertyValue("--signal") || "#ff5a1f";
        eng = createEngraving(glc, pic, { eye: EYES, paper: PAPER, signal });
      }

      // Play once, when at least a third of the plate is on screen.
      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          startIntro();
        },
        { threshold: 0.33 },
      );
      io.observe(el);
      cleanups.push(() => io.disconnect());
    };
    ready();

    return () => {
      disposed = true;
      timers.forEach((t) => window.clearTimeout(t));
      cleanups.forEach((fn) => fn());
      release();
    };
  }, []);

  return (
    <div ref={root} className={`plate ${className}`}>
      <div className="plate-stage">
        <div aria-hidden className="plate-medallion">
          <div className="plate-hatch" />
          <canvas ref={ringB} className="plate-ring plate-ring-b" />
          <canvas ref={ringA} className="plate-ring plate-ring-a" />
          <svg className="plate-ring plate-ring-a plate-microprint" viewBox="0 0 1000 1000">
            <defs>
              <path id="plate-rim" d="M 500 30 a 470 470 0 1 1 0 940 a 470 470 0 1 1 0 -940" />
            </defs>
            <text>
              <textPath href="#plate-rim" textLength={2953} lengthAdjust="spacing">
                {MICROPRINT.repeat(8)}
              </textPath>
            </text>
          </svg>
        </div>
        <div className="plate-figure">
          {/* A plain <img>: the WebGL layer reads this exact file as its texture. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={img}
            className="plate-img"
            src="/hero/wolfhound-1200.webp"
            srcSet="/hero/wolfhound-800.webp 800w, /hero/wolfhound-1200.webp 1200w, /hero/wolfhound-1600.webp 1600w"
            sizes="(min-width: 1024px) min(36vw, 31rem), min(calc(100vw - 3rem), 26rem)"
            width={1200}
            height={1313}
            alt={ALT}
            fetchPriority="high"
            decoding="async"
            draggable={false}
          />
          <canvas ref={gl} aria-hidden className="plate-gl" />
        </div>
        <div className="plate-caption absolute inset-x-0 bottom-[2%] z-10 flex justify-center">
          <PlateNote />
        </div>
      </div>
    </div>
  );
}
