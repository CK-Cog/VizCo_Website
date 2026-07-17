import Link from "next/link";
import type { ReactNode } from "react";

/* Shared typography — keep page and section titles consistent site-wide */
export const pageTitleClass =
  "text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl md:leading-[1.08]";

export const sectionTitleClass =
  "text-3xl font-semibold tracking-tight text-ink-900 sm:text-4xl md:text-[2.75rem] md:leading-[1.08]";

export function PageTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1 className={`text-balance ${pageTitleClass} ${className}`}>{children}</h1>
  );
}

export function SectionTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}) {
  return (
    <Tag className={`text-balance ${sectionTitleClass} ${className}`}>
      {children}
    </Tag>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      {children}
    </section>
  );
}

/* A solid marker block that keeps its label readable. The redaction motif. */
export function Mark({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`mark ${className}`}>{children}</span>;
}

/* Mono eyebrow with a leading redaction tick. Recurring brand signature. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="label inline-flex items-center gap-2 text-ink-500">
      <span
        aria-hidden
        className="inline-block h-3 w-5 rounded-[2px] bg-ink-900"
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow && (
        <div className="mb-4">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <SectionTitle>{title}</SectionTitle>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-ink-900 text-paper hover:bg-black"
      : "border border-border-strong bg-transparent text-ink-900 hover:bg-surface-muted";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export const CALENDLY_URL = "https://calendly.com/chris-kelly-stanford/1-1";
