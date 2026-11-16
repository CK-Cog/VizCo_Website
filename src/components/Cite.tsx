import { ArrowUpRight } from "lucide-react";
import { SOURCES, type SourceKey } from "@/content/sources";

/** Inline source links, shown right beside the claim they support. */
export default function Cite({ s }: { s: SourceKey | SourceKey[] }) {
  const list = (Array.isArray(s) ? s : [s]).map((k) => SOURCES[k]);
  return (
    <span className="ml-1.5 inline-flex flex-wrap gap-x-2 align-baseline">
      {list.map((src) => (
        <a
          key={src.href}
          href={src.href}
          target="_blank"
          rel="noopener noreferrer"
          title={src.label}
          className="inline-flex items-center gap-0.5 whitespace-nowrap font-mono text-[0.7em] font-normal uppercase tracking-wide underline decoration-1 underline-offset-2 opacity-60 transition-opacity hover:opacity-100"
        >
          {src.short}
          <ArrowUpRight aria-hidden className="h-[1em] w-[1em]" />
        </a>
      ))}
    </span>
  );
}
