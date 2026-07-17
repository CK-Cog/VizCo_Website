import Link from "next/link";

export default function Wordmark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const text = size === "sm" ? "text-lg" : "text-xl";
  return (
    <Link
      href="/"
      aria-label="VizCo home"
      className={`group inline-flex items-center font-semibold tracking-tight text-ink-900 ${text} ${className}`}
    >
      Viz
      <span className="ml-[0.12em] rounded-[3px] bg-ink-900 px-[0.22em] py-[0.02em] text-paper transition-colors group-hover:bg-accent group-hover:text-ink-900">
        Co
      </span>
    </Link>
  );
}
