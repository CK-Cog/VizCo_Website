import { ArrowRight } from "lucide-react";
import {
  Container,
  BOOKING_URL,
} from "@/components/ui";

export default function ClosingCta() {
  return (
    <section className="border-t border-border bg-paper py-16 sm:py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl items-end gap-8 border-y border-border py-10 sm:py-14 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              Start a conversation
            </p>
            <h2 className="font-editorial mt-4 max-w-2xl text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Bring us one AI <span className="italic">deployment.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
              Show us what it does, the data and tools it can access, and the
              outcome you need covered. We&apos;ll show you what it takes to
              make the deployment insurable.
            </p>
          </div>
          <div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-7 py-3.5 text-base font-semibold text-paper transition-colors hover:bg-black md:w-auto"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
