import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading, Mark } from "@/components/ui";
import { budgetControls } from "@/lib/platform-content";

export default function Budget() {
  return (
    <Section id="budget" className="!py-16 sm:!py-20 bg-surface-subtle">
      <Container>
        <SectionHeading
          eyebrow="Budget enforcement & usage visibility"
          title={
            <>
              Keep spend tied to approved <Mark>work.</Mark>
            </>
          }
          subtitle="Frontier API calls cost real money, and at enterprise scale spend gets away from you fast."
        />

        <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-ink-500 sm:text-lg">
          VizCo enforces budgetary limits and shows both sides of the picture:
          who is spending, and what workflows that spend is for.
        </p>

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
            <div className="flex items-center gap-3 rounded-md border border-border bg-paper px-3 py-3">
              <span className="rounded-[3px] bg-ink-900 px-2 py-1 text-xs font-semibold text-paper">
                VizCo
              </span>
              <div className="text-sm font-semibold text-ink-900 sm:text-base">
                Budget enforcement & usage visibility
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {budgetControls.map((c) => (
                <div
                  key={c.t}
                  className="flex items-start gap-3 rounded-md border border-border bg-paper px-3 py-2.5 sm:px-4 sm:py-3"
                >
                  <c.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-900 sm:h-5 sm:w-5" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900 sm:text-base">
                      {c.t}
                    </div>
                    <div className="mt-0.5 text-xs leading-relaxed text-ink-500 sm:text-sm">
                      {c.b}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/platform#budget"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:underline sm:text-base"
            >
              Spend & usage in depth
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
