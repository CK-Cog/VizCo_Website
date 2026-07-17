import { ArrowRight } from "lucide-react";
import { Container, SectionTitle, CALENDLY_URL } from "@/components/ui";

export default function ClosingCta() {
  return (
    <section className="border-t border-border bg-ink-900 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle className="text-paper">
            See it on your workflows.
          </SectionTitle>
          <p className="mt-3 text-base leading-relaxed text-brand-100 sm:text-lg">
            Book a short demo and we&apos;ll walk through policy enforcement on
            the AI clients and systems you already use.
          </p>
          <div className="mt-8">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-paper px-7 py-3.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-white"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4 text-ink-900" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
