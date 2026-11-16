import type { Metadata } from "next";
import { pageMeta, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Factory, PersonStanding, Radar, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import RotatingWord from "@/components/home/RotatingWord";
import FinalCta from "@/components/FinalCta";
import { Block, Card, Container, Em, Section, SectionHeader, Steps } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Emerging Risk: Physical AI, Humanoid Robots & Autonomous Systems",
  description:
    "VizCo helps companies insure physical AI, from humanoid robots to robots at work and autonomous systems, before existing insurance has caught up.",
  path: "/emerging-risk",
});

const AREAS = [
  { Icon: PersonStanding, title: "Humanoid robots", body: "Robots built to work alongside people, in homes, shops and warehouses." },
  { Icon: Factory, title: "Robots at work", body: "Robots on factory floors and in logistics, doing work once done by hand." },
  { Icon: Radar, title: "Autonomous systems", body: "The AI that steers machines, with no one at the controls." },
  { Icon: Sparkles, title: "What comes next", body: "New technology that acts in the real world." },
];

const STEPS = [
  { title: "Review", body: "We read your insurance against how your technology can fail." },
  { title: "Prove", body: "We put your safety and test evidence on record." },
  { title: "Place", body: "We negotiate cover with the insurers who will take it." },
  { title: "Defend", body: "We argue your claim for you." },
];

export default function EmergingRiskPage() {
  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: "Insurance for physical AI and emerging risk",
          description: "VizCo helps companies insure humanoid robots, robots at work and autonomous systems before existing insurance has caught up.",
          audience: "Companies building or deploying physical AI",
          path: "/emerging-risk",
        })}
      />
      <PageHero
        kicker="Emerging risk"
        title={
          <>
            <RotatingWord
              words={["Humanoid robots.", "Warehouse robots.", "Factory robots.", "Autonomous systems."]}
              srText="Humanoid robots, warehouse robots, factory robots and autonomous systems."
              className="flex min-h-[2.28em] items-end sm:block sm:min-h-0"
            />
            <Em>And what comes next.</Em>
          </>
        }
        sub="Physical AI is arriving faster than the policies written to cover it. We get it insured."
      />

      <Section id="what-we-mean">
        <Container>
          <SectionHeader number="01" kicker="What we cover" title="Physical AI. Real-world risk." />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map(({ Icon, title, body }, i) => (
              <Card key={title} icon={<Icon className="h-7 w-7" strokeWidth={1.5} />} title={title} delay={i * 60} highlight={i === AREAS.length - 1}>
                {body}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Block id="process" number="02" label="How we work" title="Same method. New frontier.">
        <Steps steps={STEPS} />
      </Block>

      <FinalCta title="Building what comes next?" sub="Tell us about it. We'll tell you how to insure it." />
    </main>
  );
}
