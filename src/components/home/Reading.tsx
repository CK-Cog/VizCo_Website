import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Label } from "@/components/ui";

const ITEMS = [
  {
    href: "/the-problem#explained",
    tag: "Guide",
    tile: "Silent AI, explained",
    title: "What silent and excluded mean for your policies.",
    accent: true,
  },
  {
    href: "/the-problem#checklist",
    tag: "Checklist",
    tile: "Five things to check at renewal",
    title: "The pages, definitions and triggers to look for.",
  },
  {
    href: "/startups",
    tag: "For AI startups",
    tile: "Get through AI procurement",
    title: "Enterprise buyers want proof your AI is insured. Here's how to give it.",
  },
  {
    href: "/emerging-risk",
    tag: "Emerging risk",
    tile: "Beyond AI",
    title: "Any risk new enough that your policies haven't caught up.",
  },
];

/** AIUC-style reading cards that route visitors to the deeper pages. */
export default function Reading() {
  return (
    <section id="reading" className="py-16 sm:py-24">
      <Container>
        <div className="flex flex-col gap-4 border-t border-cream pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Label number="03">Read</Label>
            <h2 className="font-display mt-6 text-4xl leading-[1.08] text-cream sm:text-5xl">Before you renew.</h2>
          </div>
        </div>
        <ul className="mt-10 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it) => (
            <li key={it.href}>
              <Link href={it.href} className="group block">
                <div
                  className={`relative flex aspect-[16/9] flex-col sm:aspect-[4/3] justify-end overflow-hidden p-5 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    it.accent ? "bg-signal text-signal-ink" : "bg-ink-2 text-cream"
                  }`}
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:24px_24px]"
                  />
                  <p className="font-display relative text-balance text-2xl leading-[1.1]">{it.tile}</p>
                </div>
                <p className="mt-4 inline-block bg-cream px-2 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink">{it.tag}</p>
                <p className="mt-3 text-base leading-snug text-cream">{it.title}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-cream-muted group-hover:text-cream">
                  Read
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
