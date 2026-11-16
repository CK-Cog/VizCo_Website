import { EXPOSURES } from "@/content/exposures";

/** The numbered "how AI goes wrong" list, shared by home and enterprise. */
export default function ExposureList({ className = "mt-10 grid gap-x-10 sm:grid-cols-2" }: { className?: string }) {
  return (
    <>
      <ol className={className}>
        {EXPOSURES.map((e, i) => (
          <li key={e.headline} className="flex gap-4 border-t border-line-dark py-5">
            <span className="pt-1 font-mono text-xs text-cream-muted">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-xl leading-snug text-cream">{e.headline}</h3>
              <p className="mt-1 text-sm leading-relaxed text-cream-muted">{e.line}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-cream-muted">Not a complete list. Cover always depends on the policy wording.</p>
    </>
  );
}
