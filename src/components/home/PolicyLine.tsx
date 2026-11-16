import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { Container, QuestionMark } from "@/components/ui";

const STATES = [
  { key: "covered", label: "Covered", line: "AI is named, and covered.", Icon: Check },
  { key: "silent", label: "Silent", line: "AI is never mentioned. It's decided at claim time.", Icon: QuestionMark },
  { key: "excluded", label: "Excluded", line: "AI is written out of the policy.", Icon: X },
] as const;

/** The flagship object: where every policy sits on AI. Facts are cited on /the-problem. */
export default function PolicyLine() {
  return (
    <section className="pt-16 sm:pt-24">
      <Container>
        <div className="bg-cream px-6 py-14 text-ink sm:px-12 sm:py-20">
          <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink/60">
            <span aria-hidden className="h-2 w-2 bg-signal" />
            The problem
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-12">
            <h2 className="font-display text-balance text-4xl leading-[1.08] sm:text-6xl">Every policy sits on this line.</h2>
            <p className="text-base leading-relaxed text-ink/70 sm:text-lg">
              Most business insurance says nothing about AI. More of it now excludes AI outright. We move you to Covered.
            </p>
          </div>

          <ol className="relative mt-14 grid gap-7 border-t border-ink/25 pt-10 sm:grid-cols-3 sm:gap-0">
            {STATES.map(({ key, label, line, Icon }) => {
              const covered = key === "covered";
              return (
                <li key={key} className="grid grid-cols-[auto_1fr] gap-x-4 sm:block sm:pr-8">
                  <span
                    className={`flex h-11 w-11 items-center justify-center sm:h-14 sm:w-14 ${
                      covered ? "bg-signal text-signal-ink" : "border border-ink/60 text-ink"
                    }`}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl sm:mt-5 sm:text-3xl">{label}</h3>
                    <p className="mt-1 max-w-[16rem] text-sm leading-snug text-ink/65 sm:mt-2 sm:text-base sm:leading-relaxed">{line}</p>
                  </div>
                </li>
              );
            })}
          </ol>

          <Link
            href="/the-problem"
            className="group mt-12 inline-flex items-center gap-2 text-sm text-ink underline decoration-signal decoration-2 underline-offset-[6px]"
          >
            Read the evidence, with sources
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
