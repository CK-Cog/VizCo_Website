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
 * the engraving develops outward from the eyes in WebGL (see engraving.ts). Afterwards
 * the medallion's two rings turn slowly against each other, the plate leans a few pixels
 * toward the pointer, and a mouse over the portrait warms the strokes it passes.
 *
 * States, on `data-intro` (CSS keys off them):
 * - none: server render or no JS. The CSS fallback reveal runs on its own.
 * - "late": JS arrived after the fallback started; let it finish.
 * - "wait": hidden until the plate is in view and the image is decoded.
 * - "run": WebGL intro playing. "css": no WebGL, so the CSS reveal plays instead.
 * - "done": settled.
 * Reduced motion gets the finished plate, still.
 */

/** Midpoint between the eyes, as a fraction of the image. */
const EYES: [number, number] = [0.5646, 0.1947];
/** The asset's paper tone. The image was graded to this; keep it in step with --ink. */
const PAPER = "#fafaf8";
const MICROPRINT = "VIZCO · THE AI & EMERGING RISK SPECIALTY BROKER · ";
const LATE_MS = 1100;
const INTRO_DELAY = 380;

const ALT = "Engraved portrait of a wolfhound in a suit and tie";

export default function HeroPortrait({ className = "" }: { className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const gl = useRef<HTMLCanvasElement>(null);
  const ringA = useRef<HTMLCanvasElement>(null);
  const ringB = useRef<HTMLCanvasElement>(null);
  const figure = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const pic = img.current;
    const glc = gl.current;
    const a = ringA.current;
    const b = ringB.current;
    const fig = figure.current;
    if (!el || !pic || !glc || !a || !b || !fig) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const late = performance.now() > LATE_MS;
    el.dataset.intro = reduce ? "done" : late ? "late" : "wait";

    let disposed = false;
    let eng: Engraving | null = null;
    const timers: number[] = [];
    const cleanups: (() => void)[] = [];

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

    const settle = () => {
      if (disposed) return;
      el.dataset.intro = "done";
      eng?.finish();
    };

    const startIntro = () => {
      if (disposed) return;
      if (eng) {
        el.dataset.intro = "run";
        timers.push(window.setTimeout(() => eng?.intro(settle), INTRO_DELAY));
      } else {
        el.dataset.intro = "css";
        const onEnd = (e: AnimationEvent) => {
          if (e.target === pic) settle();
        };
        pic.addEventListener("animationend", onEnd);
        cleanups.push(() => pic.removeEventListener("animationend", onEnd));
      }
    };

    const ready = async () => {
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

      if (el.dataset.intro === "done") {
        eng?.finish();
        return;
      }
      if (el.dataset.intro === "late") {
        // The CSS fallback is already revealing the image; take over once it lands.
        const running = pic.getAnimations?.().some((x) => x.playState === "running") ?? false;
        if (running) {
          const onEnd = (e: AnimationEvent) => {
            if (e.target === pic) settle();
          };
          pic.addEventListener("animationend", onEnd);
          cleanups.push(() => pic.removeEventListener("animationend", onEnd));
        } else settle();
        return;
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

    const onLost = () => {
      eng = null;
      if (el.dataset.intro !== "done") el.dataset.intro = "done";
      el.setAttribute("data-gl-lost", "");
    };
    glc.addEventListener("webglcontextlost", onLost);
    cleanups.push(() => glc.removeEventListener("webglcontextlost", onLost));

    /* ---------- Pointer: warmth on the strokes, and a slight lean ---------- */

    if (!reduce) {
      let lx = 0;
      let ly = 0;
      let lt = 0;
      const onFigMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse" || !eng) return;
        const r = glc.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const now = e.timeStamp;
        const dt = Math.max(1, now - lt);
        const speed = lt ? (Math.hypot(e.clientX - lx, e.clientY - ly) / dt) * 1000 : 0;
        lx = e.clientX;
        ly = e.clientY;
        lt = now;
        eng.warm(x, y, speed);
      };
      const onFigLeave = () => {
        lt = 0;
      };
      fig.addEventListener("pointermove", onFigMove);
      fig.addEventListener("pointerleave", onFigLeave);
      cleanups.push(() => {
        fig.removeEventListener("pointermove", onFigMove);
        fig.removeEventListener("pointerleave", onFigLeave);
      });

      const host = el.closest("section") ?? el;
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let raf = 0;
      const step = () => {
        raf = 0;
        px += (tx - px) * 0.08;
        py += (ty - py) * 0.08;
        el.style.setProperty("--px", px.toFixed(4));
        el.style.setProperty("--py", py.toFixed(4));
        if (Math.abs(tx - px) > 0.001 || Math.abs(ty - py) > 0.001) raf = requestAnimationFrame(step);
      };
      const lean = (x: number, y: number) => {
        tx = x;
        ty = y;
        if (!raf) raf = requestAnimationFrame(step);
      };
      const onHostMove = (e: PointerEvent) => {
        if (e.pointerType !== "mouse") return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height * 0.35;
        lean(Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2))), Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2))));
      };
      const onHostLeave = () => lean(0, 0);
      host.addEventListener("pointermove", onHostMove as EventListener);
      host.addEventListener("pointerleave", onHostLeave);
      cleanups.push(() => {
        host.removeEventListener("pointermove", onHostMove as EventListener);
        host.removeEventListener("pointerleave", onHostLeave);
        cancelAnimationFrame(raf);
      });
    }

    return () => {
      disposed = true;
      timers.forEach((t) => window.clearTimeout(t));
      cleanups.forEach((fn) => fn());
      eng?.dispose();
      eng = null;
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
        <div ref={figure} className="plate-figure">
          {/* A plain <img>: the WebGL layer reads this exact file as its texture. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={img}
            className="plate-img"
            src="/hero/wolfhound-1200.webp"
            srcSet="/hero/wolfhound-760.webp 760w, /hero/wolfhound-1200.webp 1200w"
            sizes="(min-width: 1024px) 36vw, 26rem"
            width={1199}
            height={1312}
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
