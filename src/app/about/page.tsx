import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import FinalCta from "@/components/FinalCta";
import { Card, Container, Em, Section, SectionHeader } from "@/components/ui";
import { ADVISORS, TEAM } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description: "The people behind VizCo, the AI & emerging risk specialty broker.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About VizCo"
        title={
          <>
            AI researchers.
            <br />
            <Em>On your side.</Em>
          </>
        }
        sub="VizCo is the AI & emerging risk specialty broker. We came to insurance from AI research."
      />

      <Section id="emerging-risk">
        <Container>
          <SectionHeader
            kicker="Why emerging risk"
            title="New risks arrive before the policies do."
            sub="AI is the biggest emerging risk today. It won't be the last. We work where existing cover hasn't caught up."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            <Card label="We represent you" title="A broker, by design">
              Our job is to get your risk insured on the best terms, and to stand with you at claim time.
            </Card>
            <Card label="We speak both" title="Models and policies" delay={80}>
              We understand how your AI works and how insurers think about it.
            </Card>
            <Card label="We go first" title="Ahead of the market" delay={160}>
              When a new kind of risk appears, we build the evidence insurers need to cover it.
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="team">
        <Container>
          <SectionHeader kicker="The team" title="Who you'll work with." />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <PersonCard key={m.name} m={m} delay={i * 70} size="sm" />
            ))}
          </div>
          <SectionHeader kicker="Advisors" title="Advisors." className="mt-24" />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
            {ADVISORS.map((m, i) => (
              <PersonCard key={m.name} m={m} delay={i * 70} size="sm" />
            ))}
          </div>
        </Container>
      </Section>

      <FinalCta />
    </main>
  );
}
