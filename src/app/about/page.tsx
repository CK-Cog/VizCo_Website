import type { Metadata } from "next";
import { aboutPageSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import PersonCard from "@/components/PersonCard";
import FinalCta from "@/components/FinalCta";
import { Container, Em, Section, SectionHeader } from "@/components/ui";
import { ADVISORS, TEAM } from "@/content/team";

export const metadata: Metadata = pageMeta({
  title: "About VizCo: The AI Researchers Making AI Insurable",
  absoluteTitle: true,
  description:
    "Meet the team behind VizCo, the AI & emerging risk specialty broker: AI researchers and engineers from Stanford, MIT and UC Berkeley making AI insurable.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd data={aboutPageSchema({ team: TEAM, advisors: ADVISORS })} />
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about" }])} />
      <PageHero
        kicker="About VizCo"
        title={
          <>
            AI researchers. <Em>On your side.</Em>
          </>
        }
        sub="We came to insurance from AI research, to make AI insurable."
      />

      <Section id="why">
        <Container>
          <SectionHeader
            number="01"
            kicker="Why we exist"
            title="Insurers can only cover what they can see."
            sub="We came from AI research to make AI visible to them. We assess your AI, reduce its risk, place the cover, and keep watching it after the policy is bound, so your insurers always see how your AI works today."
          />
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
