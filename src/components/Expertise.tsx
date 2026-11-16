import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PersonCard from "@/components/PersonCard";
import Reveal from "@/components/Reveal";
import { Container, Section, SectionHeader } from "@/components/ui";
import { FOUNDERS } from "@/content/team";

export default function Expertise({ kicker = "Why VizCo", number }: { kicker?: string; number?: string }) {
  return (
    <Section id="why">
      <Container>
        <SectionHeader
          number={number}
          kicker={kicker}
          title="Fluent in models and policies."
          sub="We came to insurance from AI research. We read your model card and your policy wording in the same sitting."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FOUNDERS.map((m, i) => (
            <PersonCard key={m.name} m={m} delay={i * 80} />
          ))}
          <Reveal delay={160} className="flex h-full flex-col border-t-2 border-signal pt-6">
            <h3 className="font-display text-2xl text-cream">Why it matters</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-cream-muted">
              Insurers can only cover what they can see. We turn how your AI really works into evidence they can read.
            </p>
            <Link href="/about#team" className="group mt-auto inline-flex items-center gap-1.5 pt-6 text-sm text-cream">
              Meet the team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
