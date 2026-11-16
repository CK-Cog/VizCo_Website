import { Fragment } from "react";
import Reveal from "@/components/Reveal";
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
        <Reveal className="relative overflow-hidden bg-cream px-6 py-16 text-ink sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
          <div className="relative">
            <p className="eyebrow flex items-center gap-3 text-ink/55">
              <span aria-hidden className="signal-dot is-live" />
              Why we don&apos;t stop at the policy
            </p>
            <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-end lg:gap-16">
              <h2 className="font-display t-h2 text-balance">AI risk can change overnight.</h2>
              <p className="text-lg leading-relaxed tracking-[-0.015em] text-ink/65">
                Insurance is set at renewal. Your AI doesn&apos;t wait for it. Any of these can change your risk, and your cover, in a day.
              </p>
            </div>

            <ul className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
              {TRIGGERS.map((t, i) => (
                <li key={t.title} className="group relative bg-cream p-6 transition-colors duration-500 hover:bg-[#151515] sm:p-7">
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  <p className="font-mono text-[11px] text-ink/40">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-8 text-xl tracking-[-0.03em] sm:text-[1.375rem]">{t.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink/60">{t.line}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-ink/15 pt-10">
              <ol className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
                {LOOP.map((step, i) => (
                  <Fragment key={step}>
                    <li>
                      <span
                        className={`inline-flex h-11 items-center px-4 text-[15px] font-medium tracking-[-0.01em] ${
                          i === LOOP.length - 1 ? "bg-signal text-signal-ink" : "border border-ink/35 text-ink"
                        }`}
                      >
                        {step}
                      </span>
                    </li>
                    {i < LOOP.length - 1 ? (
                      <li aria-hidden className="relative ml-6 h-6 w-px bg-ink/25 sm:ml-0 sm:h-px sm:w-16 lg:w-24">
                        <span
                          className="travel absolute left-0 top-0 hidden h-[5px] w-[5px] -translate-y-[2px] bg-signal [--travel:59px] sm:block lg:[--travel:91px]"
                          style={{ animationDelay: `${i * 0.9}s` }}
                        />
                      </li>
                    ) : null}
                  </Fragment>
                ))}
              </ol>
              <p className="font-display mt-10 text-[1.75rem] leading-tight tracking-[-0.035em] sm:text-4xl">So you&apos;re never guessing whether you&apos;re covered.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
