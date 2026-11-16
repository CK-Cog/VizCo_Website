import type { ReactNode } from "react";
import { Container } from "@/components/ui";

/** Black feature panel: one statement about the gap, then how VizCo closes it. */
export default function CoverageGap({
  kicker = "The gap",
  title,
  sub,
  statement,
  id,
}: {
  kicker?: string;
  title: ReactNode;
  sub?: string;
  statement?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-8 sm:py-12">
      <Container>
        <div className="bg-cream px-6 py-14 text-ink sm:px-12 sm:py-20">
          <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink/60">
            <span aria-hidden className="h-2 w-2 bg-signal" />
            {kicker}
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-12">
            <h2 className="font-display text-balance text-4xl leading-[1.08] sm:text-6xl">{title}</h2>
            {sub ? <p className="text-base leading-relaxed text-ink/70 sm:text-lg">{sub}</p> : null}
          </div>
          {statement ? (
            <p className="font-display mt-12 max-w-3xl border-t border-ink/25 pt-8 text-balance text-2xl leading-snug sm:text-3xl">{statement}</p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
