import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Label } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL, TAGLINE } from "@/content/site";

const AUDIENCES = [
  { href: "/enterprise", label: "For enterprises" },
  { href: "/startups", label: "For AI startups" },
];

/** Home hero: the thesis, one line on what we do, actions, and the two audiences. */
export default function Thesis() {
  return (
    <section>
      <Container className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <Label>{TAGLINE}</Label>
        <h1 className="font-display mt-8 max-w-5xl text-balance text-[2.6rem] leading-[1.06] text-cream sm:text-7xl lg:text-[5.25rem]">
          Your insurance wasn&apos;t written for AI. <span className="block-mark my-[0.08em] inline-block whitespace-nowrap leading-[1.1]">We fix that.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream-muted sm:text-xl">
          We assess and reduce your AI risk, place the cover, and keep monitoring your AI so your cover keeps up.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={BOOKING_URL} external>
            Talk to us
          </Button>
          <Button href={CHECKER_URL} external variant="outline">
            Check your AI coverage
          </Button>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 border-t border-line-dark pt-6">
          {AUDIENCES.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="group inline-flex items-center gap-2 text-base text-cream underline decoration-signal decoration-2 underline-offset-[6px]"
            >
              {a.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
