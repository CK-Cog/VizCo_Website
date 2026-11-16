import Link from "next/link";
import BlockField from "@/components/BlockField";
import { Button, Container, Label, SwapArrow } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL, TAGLINE } from "@/content/site";

const AUDIENCES = [
  { href: "/enterprise", label: "For enterprises" },
  { href: "/startups", label: "For AI startups" },
];

/** Home hero: the thesis, one line on what we do, actions, and the two audiences. */
export default function Thesis() {
  return (
    <section className="relative overflow-hidden">
      <BlockField className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" />
      <Container className="relative pb-20 pt-12 sm:pb-24 sm:pt-20 lg:pb-32 lg:pt-24">
        <div data-field-avoid className="anim-in inline-block">
          <Label live>{TAGLINE}</Label>
        </div>
        <h1 data-field-avoid="text" className="wipe font-display t-display anim-in mt-8 max-w-[15em] text-balance text-cream sm:mt-10" style={{ animationDelay: "80ms" }}>
          Your insurance <br className="hidden md:inline" />
          wasn&apos;t written for AI.{" "}
          <span className="block-mark my-[0.05em] inline-block whitespace-nowrap leading-[1.06]">We fix that.</span>
        </h1>
        <p data-field-avoid="text" className="t-lead anim-in mt-8 max-w-[34rem] text-pretty text-cream-muted" style={{ animationDelay: "180ms" }}>
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
