import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import FinalCta from "@/components/FinalCta";
import { Card, Container, Em, Section, SectionHeader } from "@/components/ui";
import { ADVISORS, TEAM } from "@/content/team";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "The people behind VizCo, the AI & emerging risk specialty broker: AI researchers from Stanford and MIT working on AI liability insurance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="About VizCo"
        title={
          <>
            AI researchers. <Em>On your side.</Em>
          </>
        }
        sub="VizCo is the AI & emerging risk specialty broker. We came to insurance from AI research."
      />

      <Section id="emerging-risk">
        <Container>
          <SectionHeader
            number="01"
            kicker="Why emerging risk"
            title="New risks arrive before the policies do."
            sub="AI is the biggest emerging risk today. It won't be the last. We work where existing cover hasn't caught up."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
          <SectionHeader number="02" kicker="The team" title="Who you'll work with." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <PersonCard key={m.name} m={m} delay={i * 70} size="sm" />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="advisors">
        <Container>
          <SectionHeader number="03" kicker="Advisors" title="Advised by." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
