import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionRail from "@/components/SectionRail";

/* ---------- Layout ---------- */

export function Container({
  children,
  className = "",
  size = "lg",
}: {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const max = size === "md" ? "max-w-3xl" : "max-w-7xl";
  return <div className={`mx-auto w-full ${max} px-6 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
  border = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 lg:py-32 ${border ? "border-t border-line-dark" : ""} ${className}`}>
      {children}
    </section>
  );
}

/* ---------- Headings ---------- */

export function Em({ children }: { children: ReactNode }) {
  return <span className="block-mark">{children}</span>;
}

/** Editorial section heading: a rule that draws in, a small label, then a left-aligned title. */
export function SectionHeader({
  kicker,
  number,
  title,
  sub,
  className = "",
}: {
  kicker?: ReactNode;
  number?: string;
  title: ReactNode;
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={`rule-draw pt-7 ${className}`}>
      {kicker ? <Label number={number}>{kicker}</Label> : null}
      <h2 className={`font-display t-h2 max-w-4xl text-balance text-cream ${kicker ? "mt-7" : ""}`}>{title}</h2>
      {sub ? <p className="t-lead mt-6 max-w-2xl text-pretty text-cream-muted">{sub}</p> : null}
    </Reveal>
  );
}

/** Small mono label with the signal square, e.g. "01  What we cover". */
export function Label({
  number,
  children,
  className = "",
  live = false,
}: {
  number?: string;
  children: ReactNode;
  className?: string;
  live?: boolean;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-cream-muted ${className}`}>
      <span aria-hidden className={`signal-dot ${live ? "is-live" : ""}`} />
      {number ? <span className="text-cream">{number}</span> : null}
      <span>{children}</span>
    </p>
  );
}

/** Editorial section: a pinned label rail on the left, the content on the right. */
export function Block({
  id,
  number,
  label,
  title,
  sub,
  children,
}: {
  id?: string;
  number?: string;
  label: ReactNode;
  title?: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal className="rule-draw grid gap-7 pt-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
          <SectionRail>
            <Label number={number} className="lg:pt-3">
              {label}
            </Label>
          </SectionRail>
          <div className="min-w-0">
            {title ? <h2 className="font-display t-h2 max-w-3xl text-balance text-cream">{title}</h2> : null}
            {sub ? <p className="t-lead mt-6 max-w-2xl text-pretty text-cream-muted">{sub}</p> : null}
            {children}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Buttons ---------- */

/** An arrow that slides out to the right and back in from the left on hover. */
export function SwapArrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span aria-hidden className={`relative inline-block shrink-0 overflow-hidden ${className}`}>
      <ArrowRight className="absolute inset-0 h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[160%]" />
      <ArrowRight className="absolute inset-0 h-full w-full -translate-x-[160%] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0" />
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  arrow?: boolean;
}) {
  const base =
    "group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap font-medium tracking-[-0.012em] transition-[background-color,border-color,color,scale] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.985]";
  const s = size === "lg" ? "h-[52px] px-7 text-base" : "h-11 px-5 text-[15px]";
  const v =
    variant === "primary"
      ? "bg-cream text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-accent-deep"
      : "border border-line-strong bg-surface text-cream hover:border-cream";
  const content = (
    <>
      <span className="relative">{children}</span>
      {arrow ? <SwapArrow /> : null}
      {variant === "primary" ? (
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
        />
      ) : null}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${s} ${v} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${s} ${v} ${className}`}>
      {content}
    </Link>
  );
}

/* ---------- Cards & panels ---------- */

export function Card({
  label,
  title,
  children,
  icon,
  highlight = false,
  className = "",
  delay = 0,
}: {
  label?: ReactNode;
  title?: ReactNode;
  children?: ReactNode;
  icon?: ReactNode;
  highlight?: boolean;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <div className="group relative flex h-full flex-col border border-line-dark bg-surface p-7 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)] sm:p-8">
        {highlight ? <span aria-hidden className="absolute inset-x-0 -top-px h-[2px] bg-signal" /> : null}
        {icon ? (
          <div className="mb-10 flex h-12 w-12 items-center justify-center border border-line-dark text-cream transition-colors duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
            {icon}
          </div>
        ) : null}
        {label ? <p className="eyebrow text-cream-muted">{label}</p> : null}
        {title ? <h3 className={`font-display t-h3 text-cream ${label ? "mt-3" : ""}`}>{title}</h3> : null}
        {children ? <div className="mt-3 text-[15px] leading-relaxed text-cream-muted sm:text-base">{children}</div> : null}
      </div>
    </Reveal>
  );
}

export function ListPanel({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`border-t border-line-dark ${className}`}>
      {items.map((it, i) => (
        <li key={it} className="border-b border-line-dark">
          <Reveal delay={i * 60} className="group flex items-center gap-4 py-5">
            <span className="w-6 shrink-0 font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <span aria-hidden className="h-2 w-2 shrink-0 bg-signal transition-transform duration-300 group-hover:scale-125" />
            <span className="text-base text-cream transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">{it}</span>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items, className = "max-w-3xl" }: { items: { q: string; a: ReactNode }[]; className?: string }) {
  return (
    <div className={`border-t border-line-dark ${className}`}>
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line-dark">
          <summary className="flex items-center justify-between gap-6 py-6 text-left">
            <span className="text-[17px] font-medium tracking-[-0.02em] text-cream transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 sm:text-xl">
              {item.q}
            </span>
            <span
              aria-hidden
              className="flex h-9 w-9 shrink-0 items-center justify-center border border-line-strong text-cream transition-colors duration-300 group-hover:border-cream group-open:border-cream group-open:bg-cream group-open:text-ink"
            >
              <Plus className="chev h-4 w-4" strokeWidth={1.75} />
            </span>
          </summary>
          <div className="max-w-2xl pb-7 pr-14 text-base leading-relaxed text-cream-muted sm:text-[17px]">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/** A bare "?" drawn like a lucide icon (lucide only ships it inside a circle). */
export function QuestionMark({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.5 8.5a4.5 4.5 0 0 1 9 0c0 3-4.5 3.6-4.5 6.5" />
      <path d="M12 20h.01" />
    </svg>
  );
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
    </svg>
  );
}
