"use client";

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { createPortal } from "react-dom";

/**
 * "We fix that." as a note you can peel off the headline and stick anywhere on screen.
 *
 * Grab it anywhere and it hangs from that point under gravity: pick it up by the right
 * edge and the left side swings down. Let go and it presses flat at a slight tilt, stuck
 * to the page at that spot, so it scrolls away with the content like anything else on
 * the page. A dashed outline marks its home; drop it near there, or double-click it, and
 * it snaps back into the headline. All positions are in page coordinates.
 *
 * Mouse and trackpad only, so touch scrolling is never hijacked. The words stay in the
 * headline for screen readers and search; the floating copy is decorative.
 */

const G = 3000; // px/s², gravity
const DRAG = 2.6; // 1/s, air damping while hanging
const MAX_TILT = 0.12; // rad, resting tilt once placed (~7°)
const HOME_SNAP = 80; // px

type Phys = {
  cx: number;
  cy: number;
  th: number;
  om: number;
  w: number;
  h: number;
  rx: number;
  ry: number;
  px: number;
  py: number;
  lpx: number;
  lpy: number;
  pvx: number;
  pvy: number;
  ax: number;
  ay: number;
  lift: number;
  vxs: number;
  vys: number;
  mode: "idle" | "drag" | "settle" | "home";
  raf: number;
  last: number;
};

export default function FixNote({ children, className = "" }: { children: string; className?: string }) {
  const slot = useRef<HTMLSpanElement>(null);
  const note = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [floating, setFloating] = useState(false);
  const s = useRef<Phys>({
    cx: 0,
    cy: 0,
    th: 0,
    om: 0,
    w: 0,
    h: 0,
    rx: 0,
    ry: 0,
    px: 0,
    py: 0,
    lpx: 0,
    lpy: 0,
    pvx: 0,
    pvy: 0,
    ax: 0,
    ay: 0,
    lift: 0,
    vxs: 0,
    vys: 0,
    mode: "idle",
    raf: 0,
    last: 0,
  });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const set = () => setEnabled(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const paint = () => {
    const p = s.current;
    const el = note.current;
    if (!el) return;
    const scale = 1 + 0.035 * p.lift;
    el.style.transform = `translate3d(${p.cx - p.w / 2}px, ${p.cy - p.h / 2}px, 0) rotate(${p.th}rad) scale(${scale})`;
    // Above everything while held; once placed it sits with the page, under the header
    el.style.zIndex = p.mode === "drag" ? "60" : "40";
    const a = 0.16 + 0.22 * p.lift;
    const y = 8 + 26 * p.lift;
    const b = 18 + 40 * p.lift;
    el.style.boxShadow = `0 ${y}px ${b}px -${b * 0.45}px rgba(10,10,10,${a.toFixed(3)}), 0 2px 6px -2px rgba(10,10,10,${(0.1 + 0.1 * p.lift).toFixed(3)})`;
  };

  const homeCentre = () => {
    const r = slot.current?.getBoundingClientRect();
    return r ? { x: r.left + r.width / 2 + window.scrollX, y: r.top + r.height / 2 + window.scrollY } : null;
  };

  const tick = (now: number) => {
    const p = s.current;
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - p.last) / 1000));
    p.last = now;

    if (p.mode === "drag") {
      // Pivot follows the pointer; estimate its acceleration for the swing
      const vx = (p.px - p.lpx) / dt;
      const vy = (p.py - p.lpy) / dt;
      const ax = (vx - p.pvx) / dt;
      const ay = (vy - p.pvy) / dt;
      p.ax += (Math.max(-30000, Math.min(30000, ax)) - p.ax) * 0.25;
      p.ay += (Math.max(-30000, Math.min(30000, ay)) - p.ay) * 0.25;
      p.pvx = vx;
      p.pvy = vy;
      p.lpx = p.px;
      p.lpy = p.py;

      const cos = Math.cos(p.th);
      const sin = Math.sin(p.th);
      // Pivot to centre of mass, in screen space
      const dX = -(p.rx * cos - p.ry * sin);
      const dY = -(p.rx * sin + p.ry * cos);
      const inertia = (p.w * p.w + p.h * p.h) / 12 + dX * dX + dY * dY;
      // Gravity, plus the pseudo-force from the pivot accelerating
      const torque = G * dX - (dX * p.ay - dY * p.ax);
      p.om += (torque / inertia) * dt;
      p.om *= Math.exp(-DRAG * dt);
      p.th += p.om * dt;
      const c2 = Math.cos(p.th);
      const s2 = Math.sin(p.th);
      p.cx = p.px - (p.rx * c2 - p.ry * s2);
      p.cy = p.py - (p.rx * s2 + p.ry * c2);
      p.lift += (1 - p.lift) * Math.min(1, dt * 14);
    } else if (p.mode === "settle") {
      // Press flat: rotate about the centre to a gentle resting tilt
      const target = Math.max(-MAX_TILT, Math.min(MAX_TILT, wrap(p.th)));
      p.th = wrap(p.th);
      const k = 170;
      const c = 2 * Math.sqrt(k) * 0.62;
      p.om += (k * (target - p.th) - c * p.om) * dt;
      p.th += p.om * dt;
      p.lift += (0 - p.lift) * Math.min(1, dt * 9);
      if (Math.abs(target - p.th) < 0.0008 && Math.abs(p.om) < 0.004 && p.lift < 0.01) {
        p.th = target;
        p.lift = 0;
        p.mode = "idle";
      }
    } else if (p.mode === "home") {
      const h = homeCentre();
      if (h) {
        const k = 140;
        const c = 2 * Math.sqrt(k) * 0.8;
        p.th = wrap(p.th);
        p.om += (k * (0 - p.th) - c * p.om) * dt;
        p.th += p.om * dt;
        p.vxs += (k * (h.x - p.cx) - c * p.vxs) * dt;
        p.vys += (k * (h.y - p.cy) - c * p.vys) * dt;
        p.cx += p.vxs * dt;
        p.cy += p.vys * dt;
        p.lift += (0 - p.lift) * Math.min(1, dt * 8);
        if (Math.hypot(h.x - p.cx, h.y - p.cy) < 0.6 && Math.abs(p.th) < 0.003 && Math.hypot(p.vxs, p.vys) < 8) {
          p.mode = "idle";
          paint();
          setFloating(false);
          return;
        }
      }
    }

    paint();
    if (p.mode !== "idle") p.raf = requestAnimationFrame(tick);
  };

  const run = () => {
    const p = s.current;
    cancelAnimationFrame(p.raf);
    p.last = performance.now();
    p.raf = requestAnimationFrame(tick);
  };

  const grab = (e: ReactPointerEvent) => {
    if (!enabled || e.button !== 0) return;
    if (floating && e.currentTarget === slot.current) return; // the outline left behind isn't grabbable
    e.preventDefault();
    const p = s.current;
    if (!floating) {
      const r = slot.current?.getBoundingClientRect();
      if (!r) return;
      p.w = r.width;
      p.h = r.height;
      p.cx = r.left + r.width / 2 + window.scrollX;
      p.cy = r.top + r.height / 2 + window.scrollY;
      p.th = 0;
      p.om = 0;
      p.lift = 0;
      setFloating(true);
    }
    // Where on the note it was grabbed, in the note's own frame
    const dx = e.pageX - p.cx;
    const dy = e.pageY - p.cy;
    const c = Math.cos(-p.th);
    const sn = Math.sin(-p.th);
    p.rx = dx * c - dy * sn;
    p.ry = dx * sn + dy * c;
    p.px = p.lpx = e.pageX;
    p.py = p.lpy = e.pageY;
    let clientX = e.clientX;
    let clientY = e.clientY;
    p.pvx = p.pvy = p.ax = p.ay = 0;
    p.vxs = p.vys = 0;
    p.mode = "drag";
    document.documentElement.classList.add("is-dragging-note");

    const move = (ev: PointerEvent) => {
      clientX = ev.clientX;
      clientY = ev.clientY;
      p.px = ev.pageX;
      p.py = ev.pageY;
    };
    // Scrolling mid-drag keeps the note under the pointer
    const scroll = () => {
      p.px = clientX + window.scrollX;
      p.py = clientY + window.scrollY;
    };
    const up = () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      document.documentElement.classList.remove("is-dragging-note");
      const h = homeCentre();
      if (h && Math.hypot(h.x - p.cx, h.y - p.cy) < HOME_SNAP) {
        p.mode = "home";
      } else {
        p.mode = "settle";
      }
      run();
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    run();
  };

  const sendHome = () => {
    s.current.mode = "home";
    s.current.vxs = s.current.vys = 0;
    run();
  };

  // Keep a placed note within the page if the window narrows
  useEffect(() => {
    if (!floating) return;
    const onResize = () => {
      const p = s.current;
      p.cx = Math.min(document.documentElement.clientWidth - 24, Math.max(24, p.cx));
      p.cy = Math.max(24, p.cy);
      paint();
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [floating]);

  useEffect(() => {
    const p = s.current;
    return () => {
      cancelAnimationFrame(p.raf);
      document.documentElement.classList.remove("is-dragging-note");
    };
  }, []);

  // Paint the first frame as soon as the floating copy mounts
  useEffect(() => {
    if (floating) paint();
  }, [floating]);

  return (
    <>
      <span
        ref={slot}
        data-note
        onPointerDown={grab}
        className={`block-mark ${enabled ? "note-slot" : ""} ${floating ? "is-ghost" : ""} ${className}`}
      >
        {children}
      </span>
      {floating
        ? createPortal(
            <div
              ref={note}
              data-note
              aria-hidden
              onPointerDown={grab}
              onDoubleClick={sendHome}
              className="note-float font-display t-display block-mark absolute left-0 top-0 z-40 whitespace-nowrap leading-[1.06]"
              style={{ transform: `translate3d(${s.current.cx - s.current.w / 2}px, ${s.current.cy - s.current.h / 2}px, 0)` }}
            >
              {children}
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function wrap(a: number) {
  let x = a % (Math.PI * 2);
  if (x > Math.PI) x -= Math.PI * 2;
  if (x < -Math.PI) x += Math.PI * 2;
  return x;
}
