import Link from "next/link";

/**
 * The VizCo logo in code: "Viz" in type, "Co" reversed out of a solid block.
 * `tone="light"` is for dark backgrounds: white type, white block, dark "Co".
 */
export default function Wordmark({
  className = "",
  tone = "dark",
  href = "/",
}: {
  className?: string;
  tone?: "dark" | "light";
  href?: string | null;
}) {
  const viz = tone === "dark" ? "text-cream" : "text-ink";
  const block = tone === "dark" ? "bg-cream text-ink" : "bg-ink text-cream";
  const inner = (
    <>
      <span className={viz}>Viz</span>
      <span className={`ml-[0.14em] px-[0.16em] pb-[0.12em] pt-[0.1em] ${block}`}>Co</span>
    </>
  );
  const cls = `inline-flex items-center text-[22px] font-bold leading-none tracking-[-0.01em] ${className}`;
  const style = { fontFamily: 'Verdana, "DejaVu Sans", var(--font-inter), sans-serif' };
  if (href === null) {
    return (
      <span className={cls} style={style} aria-label="VizCo">
        {inner}
      </span>
    );
  }
  return (
    <Link href={href} aria-label="VizCo home" className={cls} style={style}>
      {inner}
    </Link>
  );
}
