import type { ReactNode } from "react";
import { Button, Container, Label } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL } from "@/content/site";

/** Editorial page hero: label, left-aligned headline, one line of support, actions. */
export default function PageHero({
  kicker,
  title,
  sub,
  cta = "Talk to us",
  checker = false,
  children,
}: {
  kicker: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  cta?: string;
  checker?: boolean;
  children?: ReactNode;
}) {
  return (
    <section>
      <Container className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Label>{kicker}</Label>
        <h1 className="font-display mt-8 max-w-4xl text-balance text-[2.5rem] leading-[1.12] text-cream sm:text-6xl lg:text-7xl [&_.block-mark]:my-[0.06em] [&_.block-mark]:inline-block [&_.block-mark]:leading-[1.1]">{title}</h1>
        {sub ? <p className="mt-6 max-w-2xl text-balance text-lg text-cream-muted sm:text-xl">{sub}</p> : null}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={BOOKING_URL} external>
            {cta}
          </Button>
          {checker ? (
            <Button href={CHECKER_URL} external variant="outline">
              Check your AI coverage
            </Button>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
