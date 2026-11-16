import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, Container, Label } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL, TAGLINE } from "@/content/site";

const COLUMNS = [
  {
    href: "/enterprise",
    label: "For enterprises",
    body: "Your AI, and your vendors' AI, act in your name. We make sure your insurance answers for it.",
  },
  {
    href: "/startups",
    label: "For AI startups",
    body: "Enterprise buyers want proof your AI is insured before they sign. We get you that proof.",
  },
];

/** Editorial home hero: one thesis, then a three-column statement. */
export default function Thesis() {
  return (
    <section>
      <Container className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <Label>{TAGLINE}</Label>
        <h1 className="font-display mt-8 max-w-5xl text-balance text-[2.6rem] leading-[1.06] text-cream sm:text-7xl lg:text-[5.25rem]">
          Your insurance wasn&apos;t written for AI. <span className="block-mark my-[0.08em] inline-block whitespace-nowrap leading-[1.1]">We fix that.</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href={BOOKING_URL} external>
            Talk to us
          </Button>
          <Button href={CHECKER_URL} external variant="outline">
            Check your AI coverage
          </Button>
        </div>

        <div className="mt-16 grid gap-8 border-t border-line-dark pt-8 md:grid-cols-3 md:gap-10">
          <div>
            <p className="text-base leading-relaxed text-cream-muted">
              We find the gaps in your insurance, prove your AI to insurers, and place the cover.
            </p>
            <Link href="/about#team" className="mt-4 inline-block text-sm text-cream underline decoration-line-dark underline-offset-4 hover:decoration-cream">
              Founded by AI researchers from Stanford and MIT.
            </Link>
          </div>
          {COLUMNS.map((c) => (
            <Link key={c.href} href={c.href} className="group block">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream">{c.label}</p>
              <p className="mt-3 text-base leading-relaxed text-cream-muted">{c.body}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-cream underline decoration-signal decoration-2 underline-offset-[6px]">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
