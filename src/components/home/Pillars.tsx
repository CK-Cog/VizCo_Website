import Link from "next/link";
import { Container, Section, Mark, leadTitleClass } from "@/components/ui";

const pillars = [
  {
    href: "#security",
    title: "AI governance",
    body: "Enforce what data AI can access and what actions it can take.",
  },
  {
    href: "#budget",
    title: "Spend optimization",
    body: "Tie cost to approved work, with limits and usage visibility.",
  },
  {
    href: "#risk",
    title: "Risk & liability evidence",
    body: "Show exposure, controls in force, and an auditable trail.",
  },
];

export default function Pillars() {
  return (
    <Section id="pillars" className="!py-14 sm:!py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className={`text-balance ${leadTitleClass}`}>
            Enterprise AI adoption rests on three <Mark>pillars.</Mark>
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            VizCo is the layer that makes each one enforceable: governance,
            spend, and the evidence leadership needs to stay accountable.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl grid grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-3">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="border-border px-5 py-5 transition-colors hover:bg-paper sm:px-6 sm:py-6 [&:not(:first-child)]:border-t sm:[&:not(:first-child)]:border-t-0 sm:[&:not(:first-child)]:border-l"
            >
              <h3 className="text-base font-semibold leading-snug text-ink-900 sm:text-lg">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                {p.body}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
