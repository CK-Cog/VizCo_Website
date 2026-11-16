import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

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
  const max = size === "md" ? "max-w-3xl" : "max-w-6xl";
  return <div className={`mx-auto w-full ${max} px-6 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
  border = true,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
}) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${border ? "border-t border-line-dark/70" : ""} ${className}`}>
      {children}
    </section>
  );
}

/* ---------- Headings ---------- */

export function Kicker({ children, center = true }: { children: ReactNode; center?: boolean }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-accent-glow ${center ? "justify-center" : ""}`}>
      <span aria-hidden className="h-px w-6 bg-accent/60" />
      {children}
      <span aria-hidden className="h-px w-6 bg-accent/60" />
    </p>
  );
}

export function Em({ children }: { children: ReactNode }) {
  return <span className="block-mark">{children}</span>;
}

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
  if (number) {
    return (
      <div className={`max-w-3xl ${className}`}>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent-glow">{number}</span>
          <h2 className="font-display text-balance text-4xl leading-[1.14] text-cream sm:text-5xl">{title}</h2>
        </div>
        {sub ? <p className="mt-4 text-pretty text-base text-cream-muted sm:text-lg">{sub}</p> : null}
      </div>
    );
  }
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className={`font-display text-balance text-4xl leading-[1.14] text-cream sm:text-5xl ${kicker ? "mt-5" : ""}`}>
        {title}
      </h2>
      {sub ? <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-cream-muted sm:text-lg">{sub}</p> : null}
    </div>
  );
}

/* ---------- Buttons ---------- */

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  className?: string;
  arrow?: boolean;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const v =
    variant === "primary"
      ? "bg-cream text-ink hover:bg-accent-deep"
      : "border border-line-dark text-cream hover:border-cream/40 hover:bg-cream/5";
  const content = (
    <>
      {children}
      {arrow ? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" /> : null}
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${v} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${v} ${className}`}>
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
    <Reveal
      delay={delay}
      className={`flex h-full flex-col rounded-md border p-6 sm:p-7 ${
        highlight
          ? "border-cream/50 bg-gradient-to-b from-cream/[0.06] to-ink-2 shadow-[0_0_60px_-30px_rgba(255,255,255,0.12)]"
          : "border-line-dark bg-ink-2/80"
      } ${className}`}
    >
      {icon ? <div className="mb-5 text-accent-glow">{icon}</div> : null}
      {label ? <p className={`eyebrow ${highlight ? "text-accent-glow" : "text-cream-muted"}`}>{label}</p> : null}
      {title ? <h3 className={`font-display text-2xl leading-tight text-cream ${label ? "mt-3" : ""}`}>{title}</h3> : null}
      {children ? <div className="mt-3 text-sm leading-relaxed text-cream-muted">{children}</div> : null}
    </Reveal>
  );
}

export function ListPanel({ items, title, className = "" }: { items: string[]; title?: string; className?: string }) {
  return (
    <Reveal className={`rounded-md border border-line-dark bg-ink-2/80 ${className}`}>
      {title ? <p className="eyebrow border-b border-line-dark px-6 py-4 text-center text-accent-glow">{title}</p> : null}
      <ul className="divide-y divide-line-dark">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 px-6 py-4 text-sm text-cream/90">
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-glow" />
            {it}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-line-dark border-y border-line-dark">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex items-start justify-between gap-6 text-left text-base font-medium text-cream sm:text-lg">
            <span>{item.q}</span>
            <span aria-hidden className="chev mt-0.5 text-xl leading-none text-accent-glow">+</span>
          </summary>
          <div className="mt-3 max-w-2xl text-sm leading-relaxed text-cream-muted sm:text-base">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

export function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
    </svg>
  );
}
