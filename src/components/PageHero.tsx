import type { ReactNode } from "react";
import BlockField from "@/components/BlockField";
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
    <section className="relative overflow-hidden">
      <BlockField className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" density={0.7} fadeFrom={0.42} fadeTo={0.85} />
      <Container className="relative pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pt-24">
        <div data-field-avoid className="anim-in inline-block">
          <Label>{kicker}</Label>
        </div>
        <h1
          data-field-avoid="text"
          className="wipe font-display t-h1 anim-in mt-8 max-w-[14em] text-balance text-cream sm:mt-10 [&_.block-mark]:my-[0.05em] [&_.block-mark]:inline-block [&_.block-mark]:leading-[1.06]"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        {sub ? (
          <p data-field-avoid="text" className="t-lead anim-in mt-8 max-w-[34rem] text-pretty text-cream-muted" style={{ animationDelay: "180ms" }}>
            {sub}
          </p>
        ) : null}
        <div data-field-avoid className="anim-in mt-10 flex w-fit flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
          <Button href={BOOKING_URL} external size="lg">
            {cta}
          </Button>
          {checker ? (
            <Button href={CHECKER_URL} external variant="outline" size="lg">
              Check your AI coverage
            </Button>
          ) : null}
        </div>
        {children ? (
          <div data-field-avoid className="w-fit">
            {children}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
