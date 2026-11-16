import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

const TRIGGERS = [
  { title: "A model update", line: "The model underneath changes, and so does how your AI behaves." },
  { title: "New data", line: "It reaches data it didn't before, or learns from it." },
  { title: "A new use", line: "Someone points it at a task it was never assessed for." },
  { title: "A new vendor", line: "AI arrives inside software you buy." },
];

const LOOP = ["We monitor", "We report to your insurers", "Your cover stays current"];

/** Why VizCo keeps working after the policy is bound: AI risk changes between renewals. */
export default function RiskChanges() {
  return (
    <section id="monitoring" className="py-8 sm:py-12">
      <Container>
        <div className="bg-cream px-6 py-14 text-ink sm:px-12 sm:py-20">
          <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink/60">
            <span aria-hidden className="h-2 w-2 bg-signal" />
            Why we don&apos;t stop at the policy
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-12">
            <h2 className="font-display text-balance text-4xl leading-[1.08] sm:text-6xl">AI risk can change overnight.</h2>
            <p className="text-lg leading-relaxed text-ink/70">
              Insurance is set at renewal. Your AI doesn&apos;t wait for it. Any of these can change your risk, and your cover, in a day.
            </p>
          </div>

          <ul className="mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRIGGERS.map((t) => (
              <li key={t.title} className="border-t border-ink/25 py-6">
                <h3 className="font-display text-xl">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{t.line}</p>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t border-ink/25 pt-8">
            <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              {LOOP.map((step, i) => (
                <li key={step} className="flex items-center gap-3 sm:gap-4">
                  <span className={`px-4 py-2.5 text-sm font-medium ${i === LOOP.length - 1 ? "bg-signal text-signal-ink" : "border border-ink/50"}`}>{step}</span>
                  {i < LOOP.length - 1 ? <ArrowRight aria-hidden className="hidden h-4 w-4 text-ink/60 sm:block" /> : null}
                </li>
              ))}
            </ol>
            <p className="font-display mt-8 text-2xl sm:text-3xl">So you&apos;re never guessing whether you&apos;re covered.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
