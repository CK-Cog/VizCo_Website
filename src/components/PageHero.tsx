import type { ReactNode } from "react";
import { Button, Container, Kicker } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL } from "@/content/site";

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
    <section className="relative isolate overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/3 rounded-full bg-white/[0.05] blur-[140px]"
        aria-hidden
      />
      <Container className="pb-20 pt-20 text-center sm:pb-28 sm:pt-28">
        <Kicker>{kicker}</Kicker>
        <h1 className="font-display mx-auto mt-7 max-w-4xl text-balance text-[2.9rem] leading-[1.14] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {sub ? <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-cream-muted sm:text-xl">{sub}</p> : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
