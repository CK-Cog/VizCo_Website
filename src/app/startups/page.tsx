import type { Metadata } from "next";
import { faqSchema, pageMeta, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { FileCheck, Gavel, ShieldAlert } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { CertificateCard } from "@/components/pages/Visuals";
import { Block, Card, Container, Em, Faq, ListPanel, Section, SectionHeader, Steps } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Startups",
  description:
    "AI liability insurance for AI startups. VizCo makes your AI insurable, places the cover and gives enterprise procurement the certificates it asks for.",
  path: "/startups",
});

const STEPS = [
  { title: "Review", body: "Your AI, your customer contracts, and the deal you're trying to close." },
  { title: "Prove", body: "We build your VizCo record and test your AI." },
  { title: "Place", body: "We take your record to insurers and negotiate." },
  { title: "Close", body: "Certificates and answers your buyer accepts." },
];

const FAQ = [
  { q: "We're pre-revenue. Is it too early?", a: "Not if a pilot contract is coming. We size cover to that first deal." },
  { q: "What do insurers want to see?", a: "Your evaluations, monitoring and controls. Better evidence, better terms." },
  { q: "Can you work to our deal timeline?", a: "Tell us the date on the first call. We plan the work back from it." },
  {
    q: "Our AI runs on someone else's model. Who's liable?",
    a: "Your customer will look to you, whoever built the model. We make sure your cover is written with that in mind.",
  },
];

export default function StartupsPage() {
  return (
    <main>
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
        sub="Enterprise buyers want proof your AI is insured before they sign. We make it insurable, place the cover, and hand procurement the answer."
      />

      <Section id="problem">
        <Container>
          <SectionHeader
            number="01"
            kicker="The problem"
            title="Your enterprise deal stalls in procurement."
            sub="Their contract says you pay if your AI gets something wrong. Procurement, legal and security want proof you can. Until then, the deal waits."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card icon={<FileCheck className="h-6 w-6" strokeWidth={1.5} />} label="Procurement" title="“Send us your certificate.”" />
            <Card icon={<Gavel className="h-6 w-6" strokeWidth={1.5} />} label="Legal" title="“Who pays if it's wrong?”" delay={80} />
            <Card icon={<ShieldAlert className="h-6 w-6" strokeWidth={1.5} />} label="Security" title="“Are you covered for a breach?”" delay={160} />
          </div>
          <p className="font-display mt-12 text-2xl text-cream sm:text-3xl">
            VizCo gives them the <Em>answer.</Em>
          </p>
        </Container>
      </Section>

      <Section id="harm">
        <Container>
          <SectionHeader
            number="02"
            kicker="What's at stake"
            title="Two kinds of harm. Both insurable."
            sub="When your AI goes wrong, the damage lands in one of two places."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card label="Your customer" title="Your AI harmed your customer">
              It gave wrong advice, leaked their data or acted without permission. They claim against you.
            </Card>
            <Card label="Your company" title="Your AI harmed you" delay={80}>
              It corrupted your data, paid the wrong account or took your service down. The loss is yours.
            </Card>
          </div>
        </Container>
      </Section>

      <Block id="process" number="03" label="How it works" title="Covered, without the runaround." sub="Planned around the deal you're trying to close.">
        <Steps steps={STEPS} />
      </Block>

      <Section id="deliverable">
        <Container>
          <SectionHeader number="04" kicker="What you get" title="Everything your buyer's legal team asks for." />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <ListPanel
              items={[
                "A VizCo record of your AI, written for insurers",
                "A clear view of where your AI is exposed",
                "Attack testing, with results on the record",
                "The right cover for your AI, placed and negotiated",
                "Certificates in your buyer's format",
              ]}
            />
            <CertificateCard />
          </div>
        </Container>
      </Section>

      <Block id="faq" number="05" label="Questions" title="Before you ask.">
        <Faq items={FAQ} className="mt-10" />
      </Block>

      <FinalCta title="Show us the deal you're closing." sub="We'll tell you what it takes to get it insured." />
    </main>
  );
}
