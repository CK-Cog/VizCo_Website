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

      <Container className="relative py-24 sm:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-rise">
          <PageTitle className="mx-auto max-w-4xl">
            The <Mark className="whitespace-nowrap">policy layer</Mark> for safe
            AI adoption.
          </PageTitle>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-500 sm:text-xl">
            VizCo sits between your AI clients and the systems your teams already
            use—with policy and a full audit trail on your infrastructure.
          </p>
          <p className="mt-3 max-w-xl text-base text-ink-500">
            Works with vendor platforms like ChatGPT Enterprise and with
            internally built systems. Your cloud, on-prem, or air-gapped—not
            ours.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={CALENDLY_URL} external className="px-7 py-3.5">
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#how" variant="secondary" className="px-7 py-3.5">
              See how it works
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
