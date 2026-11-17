import Link from "next/link";
import LifeField from "@/components/LifeField";
import FixNote from "@/components/home/FixNote";
import LifeCaption from "@/components/home/LifeCaption";
import { Button, Container, SwapArrow } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL, TAGLINE } from "@/content/site";

const AUDIENCES = [
  { href: "/enterprise", label: "For enterprises" },
  { href: "/startups", label: "For AI startups" },
];

/** Home hero: the thesis, one line on what we do, actions, and the two audiences. */
export default function Thesis() {
  return (
    <section className="relative">
      <LifeField className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" />
      <Container className="relative pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-28">
        <h1 data-field-avoid="text" className="wipe font-display t-display anim-in max-w-[15em] text-balance text-cream" style={{ animationDelay: "40ms" }}>
          Your insurance <br className="hidden md:inline" />
          wasn&apos;t written for AI.{" "}
          <FixNote className="my-[0.05em] inline-block whitespace-nowrap leading-[1.06]">We fix that.</FixNote>
        </h1>
        <p
          data-field-avoid="text"
          className="anim-in mt-9 flex items-center gap-4 text-[clamp(1.125rem,0.9rem+0.8vw,1.625rem)] font-medium leading-tight tracking-[-0.028em] text-cream sm:mt-10"
          style={{ animationDelay: "140ms" }}
        >
          <span aria-hidden className="h-[2px] w-8 shrink-0 bg-signal sm:w-10" />
          {TAGLINE}
        </p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <div>
            <p data-field-avoid="text" className="t-lead anim-in max-w-[34rem] text-pretty text-cream-muted" style={{ animationDelay: "180ms" }}>
              We assess and reduce your AI risk, place the cover, and keep monitoring your AI so your cover keeps up.
            </p>
            <div data-field-avoid className="anim-in mt-10 flex w-fit flex-wrap items-center gap-3" style={{ animationDelay: "260ms" }}>
              <Button href={BOOKING_URL} external size="lg">
                Talk to us
              </Button>
              <Button href={CHECKER_URL} external variant="outline" size="lg">
                Check your AI coverage
              </Button>
            </div>
          </div>
          <div className="relative z-20 hidden lg:block">
            <LifeCaption />
          </div>
        </div>
        <div data-field-avoid className="anim-in mt-16 grid max-w-[38rem] gap-3 sm:mt-20 sm:grid-cols-2" style={{ animationDelay: "340ms" }}>
          {AUDIENCES.map((a, i) => (
            <Link
              key={a.href}
              href={a.href}
              className="wipe-hover group flex items-center justify-between gap-4 border border-line-dark px-5 py-[18px] text-cream shadow-[var(--shadow-card)]"
            >
              <span className="flex items-center gap-4">
                <span className="font-mono text-[11px] text-subtle">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-medium tracking-[-0.015em]">{a.label}</span>
              </span>
              <SwapArrow />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
