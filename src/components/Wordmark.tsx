import Link from "next/link";

/** The VizCo logo in code: "Viz" in type, "Co" reversed out of a solid block. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="VizCo home"
      className={`inline-flex items-center text-[22px] font-bold leading-none tracking-[-0.01em] ${className}`}
      style={{ fontFamily: 'Verdana, "DejaVu Sans", var(--font-display), sans-serif' }}
    >
      <span className="text-cream">Viz</span>
      <span className="ml-[0.14em] bg-cream px-[0.16em] pb-[0.12em] pt-[0.1em] text-ink">Co</span>
    </Link>
  );
}
