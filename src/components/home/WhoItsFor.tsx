import Link from "next/link";
import { ArrowRight, Building2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui";

const AUDIENCES = [
  {
    href: "/startups",
    Icon: Rocket,
    label: "AI startups",
    title: "Companies that build and sell AI",
    body: "Enterprise buyers want proof your AI is insured before they sign. We make it insurable, place the cover, and hand procurement the answer.",
    cta: "For startups",
  },
  {
    href: "/enterprise",
    Icon: Building2,
    label: "Enterprises",
    title: "Companies running AI, built or bought",
    body: "Your AI, and your vendors' AI, act in your name. We find where your insurance falls short and close the gap.",
    cta: "For enterprise",
  },
];

export default function WhoItsFor() {
  return (
    <Section id="who">
      <Container>
        <SectionHeader kicker="Who it's for" title="Both sides of the AI deal." sub="Whether you build AI or buy it, the exposure is real. And it's insurable." />
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.href} delay={i * 90}>
              <Link
                href={a.href}
                className="group flex h-full flex-col rounded-md border border-line-dark bg-ink-2/80 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
              >
                <a.Icon className="h-6 w-6 text-accent-glow" strokeWidth={1.6} />
                <p className="eyebrow mt-6 text-cream-muted">{a.label}</p>
                <h3 className="font-display mt-2 text-3xl leading-tight text-cream">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-muted">{a.body}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm text-cream">
                  {a.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-6 max-w-4xl rounded-md border border-line-dark px-6 py-5 text-center text-sm text-cream-muted">
          <span className="text-cream">Beyond AI:</span> any risk new enough that your policies haven&apos;t caught up. That&apos;s what
          emerging risk means, and it&apos;s our specialty.
        </Reveal>
      </Container>
    </Section>
  );
}
