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
  border = false,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  border?: boolean;
}) {
  return (
    <section id={id} className={`relative py-16 sm:py-24 ${border ? "border-t border-line-dark/70" : ""} ${className}`}>
      {children}
    </section>
  );
}

/* ---------- Headings ---------- */

export function Em({ children }: { children: ReactNode }) {
  return <span className="block-mark">{children}</span>;
}

/** Editorial section heading: a rule, a small label, then a left-aligned title. */
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
    <div className={`border-t border-cream pt-6 ${className}`}>
      {kicker ? <Label number={number}>{kicker}</Label> : null}
      <h2 className={`font-display max-w-3xl text-balance text-4xl leading-[1.08] text-cream sm:text-5xl ${kicker ? "mt-6" : ""}`}>{title}</h2>
      {sub ? <p className="mt-4 max-w-2xl text-balance text-base text-cream-muted sm:text-lg">{sub}</p> : null}
    </div>
  );
}

/** Small mono label with the signal square, e.g. "01  What we cover". */
export function Label({ number, children, className = "" }: { number?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-cream-muted ${className}`}>
      <span aria-hidden className="h-2 w-2 shrink-0 bg-signal" />
      {number ? <span className="text-cream">{number}</span> : null}
      <span>{children}</span>
    </p>
  );
}

/** Editorial section: a narrow label column on the left, the content on the right. */
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
    <section id={id} className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 border-t border-cream pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
          <Label number={number} className="self-start lg:pt-3">
            {label}
          </Label>
          <div className="min-w-0">
            {title ? <h2 className="font-display max-w-3xl text-balance text-4xl leading-[1.08] text-cream sm:text-5xl">{title}</h2> : null}
            {sub ? <p className="mt-4 max-w-2xl text-balance text-base text-cream-muted sm:text-lg">{sub}</p> : null}
            {children}
          </div>
        </div>
      </Container>
    </section>
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
    <Reveal delay={delay} className={`flex h-full flex-col border-t pt-6 ${highlight ? "border-t-2 border-signal" : "border-line-dark"} ${className}`}>
      {icon ? <div className="mb-5 text-cream">{icon}</div> : null}
      {label ? <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">{label}</p> : null}
      {title ? <h3 className={`font-display text-2xl leading-tight text-cream ${label ? "mt-3" : ""}`}>{title}</h3> : null}
      {children ? <div className="mt-3 text-[15px] leading-relaxed text-cream-muted">{children}</div> : null}
    </Reveal>
  );
}

export function ListPanel({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`divide-y divide-line-dark border-y border-line-dark ${className}`}>
      {items.map((it) => (
        <li key={it} className="flex items-center gap-3 py-4 text-base text-cream">
          <span aria-hidden className="h-2 w-2 shrink-0 bg-signal" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export function Faq({ items, className = "max-w-3xl" }: { items: { q: string; a: ReactNode }[]; className?: string }) {
  return (
    <div className={`divide-y divide-line-dark border-y border-line-dark ${className}`}>
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
