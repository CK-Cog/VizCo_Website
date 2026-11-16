import type { Metadata } from "next";
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { Factory, PersonStanding, Radar, Sparkles } from "lucide-react";
import PageHero from "@/components/PageHero";
import RotatingWord from "@/components/home/RotatingWord";
import FinalCta from "@/components/FinalCta";
import { Block, Card, Container, Em, Faq, Section, SectionHeader } from "@/components/ui";
import Process from "@/components/Process";

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

const FAQ = [
  {
    q: "What counts as physical AI?",
    a: "AI that acts in the real world: humanoid robots, robots in factories and warehouses, and autonomous systems that steer machines.",
  },
  {
    q: "Is physical AI insurable today?",
    a: "Often, with the right evidence. We assess your safety and testing record and take it to insurers who will consider it.",
  },
  {
    q: "We're still in pilots. Is it too early?",
    a: "No. Pilots with customers or the public carry real risk. We size cover to the deployment you're planning.",
  },
];

export default function EmergingRiskPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Emerging risk", path: "/emerging-risk" }])} />
      <JsonLd data={faqSchema(FAQ)} />
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
          <SectionHeader
            number="01"
            kicker="What we cover"
            title="Physical AI. Real-world risk."
            sub="Physical AI moves, lifts and drives. When it fails, the harm is physical, and most policies weren't written for machines that decide for themselves."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map(({ Icon, title, body }, i) => (
              <Card key={title} icon={<Icon className="h-7 w-7" strokeWidth={1.5} />} title={title} delay={i * 60} highlight={i === AREAS.length - 1}>
                {body}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <SectionHeader number="02" kicker="How we work" title="Same method. New frontier." />
          <Process />
        </Container>
      </Section>

      <Block id="faq" number="03" label="Questions" title="What builders ask us.">
        <Faq items={FAQ} className="mt-10 max-w-3xl" />
      </Block>

      <FinalCta title="Building what comes next?" sub="Tell us about it. We'll tell you how to insure it." />
    </main>
  );
}
