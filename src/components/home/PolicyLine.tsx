import Link from "next/link";
import DoesItPay from "@/components/DoesItPay";
import Reveal from "@/components/Reveal";
import { Container, SwapArrow } from "@/components/ui";

/** The problem, on the home page: one everyday claim and the three answers a policy can give. */
export default function PolicyLine() {
  return (
    <section className="pt-4 sm:pt-8">
      <Container>
        <Reveal className="relative overflow-hidden bg-cream px-6 py-16 text-ink sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
          <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] bg-[radial-gradient(closest-side,rgba(255,255,255,0.07),transparent)]" />
          <div className="relative">
            <DoesItPay
              tone="dark"
              kicker="The problem"
              footer={
                <Link href="/the-problem" className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-ink">
                  <span className="link-signal">Read the evidence, with sources</span>
                  <SwapArrow />
                </Link>
              }
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
