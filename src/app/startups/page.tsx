import type { Metadata } from "next";
import { FileCheck, Gavel, ShieldAlert } from "lucide-react";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CertificateCard } from "@/components/pages/Visuals";
import { Block, Card, Container, Em, Faq, ListPanel, Section, SectionHeader } from "@/components/ui";
import Process from "@/components/Process";
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Startups",
  description:
    "AI liability insurance for AI startups. VizCo makes your AI insurable, places the cover and gives enterprise procurement the certificates it asks for.",
  path: "/startups",
});

const FAQ = [
  { q: "We're pre-revenue. Is it too early?", a: "Not if a pilot contract is coming. We size cover to that first deal." },
  { q: "What do insurers want to see?", a: "Your evaluations, monitoring and controls. We help you build that evidence." },
  { q: "Can you work to our deal timeline?", a: "Tell us the date on the first call. We plan the work back from it." },
  {
    q: "Our AI runs on someone else's model. Who's liable?",
    a: "Your customer will look to you, whoever built the model. We make sure your cover is written with that in mind.",
  },
  {
    q: "What happens when we ship a new model or feature?",
    a: "We assess the change and update your insurers, so your cover and certificates stay current.",
  },
];

export default function StartupsPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "For AI startups", path: "/startups" }])} />
      <JsonLd data={faqSchema(FAQ)} />
      <JsonLd
        data={serviceSchema({
          name: "AI liability insurance for AI startups",
          description: "VizCo makes an AI startup's AI insurable, places AI liability cover and provides the certificates enterprise procurement asks for.",
          audience: "AI startups selling to enterprises",
          path: "/startups",
        })}
      />
      <PageHero
        checker
        kicker="For AI startups"
        title={
          <>
            Get your AI through <Em>procurement.</Em>
          </>
        }
        sub="Enterprise buyers want proof your AI is insured before they sign. We get you that proof."
      />

      <Section id="problem">
        <Container>
          <SectionHeader
            number="01"
            kicker="The problem"
            title="Your deal stalls in procurement."
            sub="Enterprise contracts make you liable if your AI gets something wrong. Procurement, legal and security each want proof you can pay."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <Card icon={<FileCheck className="h-5 w-5" strokeWidth={1.5} />} label="Procurement" title="“Send us your certificate.”" />
            <Card icon={<Gavel className="h-5 w-5" strokeWidth={1.5} />} label="Legal" title="“Who pays if it's wrong?”" delay={80} />
            <Card icon={<ShieldAlert className="h-5 w-5" strokeWidth={1.5} />} label="Security" title="“Are you covered for a breach?”" delay={160} />
          </div>
          <Reveal className="wipe mt-14">
            <p className="font-display text-[2rem] leading-tight tracking-[-0.04em] text-cream sm:text-5xl">
              We give them the <Em>answer.</Em>
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section id="deliverable">
        <Container>
          <SectionHeader number="02" kicker="What you get" title="Everything your buyer asks for." />
          <div className="mt-14 grid items-center gap-16 lg:grid-cols-2">
            <ListPanel
              items={[
                "A record of your AI, written for insurers",
                "Attack testing, with results on record",
                "AI liability cover, placed and negotiated",
                "Monitoring, with updates to your insurers",
                "Certificates in your buyer's format",
              ]}
            />
            <CertificateCard />
          </div>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <SectionHeader number="03" kicker="How we work" title="Insured for the deal, and after it." />
          <Process />
        </Container>
      </Section>

      <Block id="faq" number="04" label="Questions" title="What founders ask us.">
        <Faq items={FAQ} className="mt-10 max-w-3xl" />
      </Block>

      <FinalCta title="Show us the deal you're closing." sub="We'll tell you what it takes to get it insured." />
    </main>
  );
}
