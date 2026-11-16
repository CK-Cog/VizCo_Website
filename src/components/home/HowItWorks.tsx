import Reveal from "@/components/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui";
import { AttackVisual, ClaimVisual, GapVisual, PlacedVisual } from "@/components/home/StepVisuals";

const STEPS = [
  { title: "Review", body: "We read your insurance against how your AI can fail. You get a clear gap analysis.", Visual: GapVisual },
  { title: "Prove", body: "We put your AI's evidence on record and test it under attack.", Visual: AttackVisual },
  { title: "Place", body: "We take one record to the right insurers, negotiate terms and issue certificates.", Visual: PlacedVisual },
  { title: "Defend", body: "When a claim lands, we prepare it and argue it for you.", Visual: ClaimVisual },
];

/** The four steps, each with a picture of what you get at that step. */
export default function HowItWorks() {
  return (
    <Section id="process">
      <Container>
        <SectionHeader kicker="How it works" title="From first review to claim time." sub="Four steps, and what you get at each one." />
        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, body, Visual }, i) => (
            <Reveal as="li" key={title} delay={i * 60} className="flex flex-col rounded-md border border-line-dark bg-ink-2 p-4">
              <Visual />
              <div className="px-2 pb-2 pt-5">
                <p className="font-mono text-xs text-cream-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="font-display mt-1 text-2xl text-cream">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-muted">{body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
