import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { Button, Container } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL } from "@/content/site";

/** Closing call to action: a large statement, with the actions beside it. */
export default function FinalCta({
  title = (
    <>
      Find out where you <span className="block-mark">stand.</span>
    </>
  ),
  sub,
  cta = "Talk to us",
  checker = true,
}: {
  title?: ReactNode;
  sub?: string;
  cta?: string;
  checker?: boolean;
}) {
  return (
    <section className="pb-24 pt-12 sm:pb-32 sm:pt-16">
      <Container>
        <Reveal className="wipe rule-draw flex flex-col gap-10 pt-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:pt-16">
          <div>
            <h2 className="font-display t-h1 max-w-3xl text-balance text-cream [&_.block-mark]:inline-block [&_.block-mark]:leading-[1.06]">
              {title}
            </h2>
            {sub ? <p className="t-lead mt-6 max-w-xl text-pretty text-cream-muted">{sub}</p> : null}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button href={BOOKING_URL} external size="lg">
              {cta}
            </Button>
            {checker ? (
              <Button href={CHECKER_URL} external variant="outline" size="lg">
                Check your AI coverage
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
