import { ArrowRight } from "lucide-react";
import { Container, Button, Mark, PageTitle, CALENDLY_URL } from "@/components/ui";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-paper">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "100% 40px",
          maskImage:
            "radial-gradient(70% 60% at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 0%, black, transparent 75%)",
        }}
      />

      <Container className="relative py-20 sm:py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-rise">
          <PageTitle className="mx-auto max-w-4xl">
            The <Mark className="whitespace-nowrap">adoption layer</Mark> for
            enterprise AI.
          </PageTitle>

          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-500 sm:text-xl">
            Enforce your security and spend policies on every request, before
            anything leaves your environment.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Button href={CALENDLY_URL} external className="px-7 py-3.5 text-base">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#how" variant="secondary" className="px-7 py-3.5 text-base">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
