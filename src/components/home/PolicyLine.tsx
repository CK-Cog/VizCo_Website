import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DoesItPay from "@/components/DoesItPay";
import { Container } from "@/components/ui";

/** The problem, on the home page: one everyday claim and the three answers a policy can give. */
export default function PolicyLine() {
  return (
    <section className="pt-16 sm:pt-24">
      <Container>
        <div className="bg-cream px-6 py-14 text-ink sm:px-12 sm:py-20">
          <DoesItPay
            tone="dark"
            kicker="The problem"
            footer={
              <Link
                href="/the-problem"
                className="group inline-flex items-center gap-2 text-sm text-ink underline decoration-signal decoration-2 underline-offset-[6px]"
              >
                Read the evidence, with sources
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            }
          />
        </div>
      </Container>
    </section>
  );
}
