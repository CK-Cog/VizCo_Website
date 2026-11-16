import type { ReactNode } from "react";
import { Button, Container } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL } from "@/content/site";

/** Closing call to action, editorial: headline left, actions right. */
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
    <section className="pb-20 pt-8 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-8 border-t border-cream pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display max-w-2xl text-balance text-4xl leading-[1.12] text-cream sm:text-6xl">{title}</h2>
            {sub ? <p className="mt-4 max-w-xl text-balance text-lg text-cream-muted">{sub}</p> : null}
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-4">
            <Button href={BOOKING_URL} external>
              {cta}
            </Button>
            {checker ? (
              <Button href={CHECKER_URL} external variant="outline">
                Check your AI coverage
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
