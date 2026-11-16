import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui";
import { FOUNDERS } from "@/content/team";

export default function Expertise({ kicker = "Why VizCo" }: { kicker?: string }) {
  return (
    <Section>
      <Container>
        <SectionHeader
          kicker={kicker}
          title="Fluent in models and policies."
          sub="We came to insurance from AI research. We read your model card and your policy wording in the same sitting."
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {FOUNDERS.map((m, i) => (
            <PersonCard key={m.name} m={m} delay={i * 80} />
          ))}
          <Reveal delay={160} className="flex h-full flex-col items-center rounded-md border border-line-dark bg-ink-2/80 p-7 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-accent-glow">
              <Sparkles className="h-7 w-7" strokeWidth={1.5} />
            </span>
            <h3 className="font-display mt-5 text-2xl text-cream">Why it matters</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-muted">
              Insurers can only cover what they can see. We turn how your AI really works into evidence they can read.
            </p>
            <Link href="/about#team" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-cream hover:text-accent-glow">
              Meet the team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
