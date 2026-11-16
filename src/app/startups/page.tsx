import type { Metadata } from "next";
import { FileCheck, Gavel, ShieldAlert } from "lucide-react";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { CertificateCard } from "@/components/pages/Visuals";
import { Block, Card, Container, Em, ListPanel, Section, SectionHeader, Steps } from "@/components/ui";
import { pageMeta, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Startups",
  description:
    "AI liability insurance for AI startups. VizCo makes your AI insurable, places the cover and gives enterprise procurement the certificates it asks for.",
  path: "/startups",
});

const STEPS = [
  { title: "Review", body: "Your AI, and the contract you're about to sign." },
  { title: "Prove", body: "We test your AI and put the results on record." },
  { title: "Place", body: "We negotiate cover with the right insurers." },
  { title: "Defend", body: "We argue your claim for you." },
];

export default function StartupsPage() {
  return (
    <main>
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
          <SectionHeader number="01" kicker="The problem" title="Your deal stalls in procurement." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card icon={<FileCheck className="h-6 w-6" strokeWidth={1.5} />} label="Procurement" title="“Send us your certificate.”" />
            <Card icon={<Gavel className="h-6 w-6" strokeWidth={1.5} />} label="Legal" title="“Who pays if it's wrong?”" delay={80} />
            <Card icon={<ShieldAlert className="h-6 w-6" strokeWidth={1.5} />} label="Security" title="“Are you covered for a breach?”" delay={160} />
          </div>
          <p className="font-display mt-12 text-2xl text-cream sm:text-3xl">
            We give them the <Em>answer.</Em>
          </p>
        </Container>
      </Section>

      <Section id="deliverable">
        <Container>
          <SectionHeader number="02" kicker="What you get" title="Everything your buyer asks for." />
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
            <ListPanel
              items={[
                "A record of your AI, written for insurers",
                "Attack testing, with results on record",
                "AI liability cover, placed and negotiated",
                "Certificates in your buyer's format",
              ]}
            />
            <CertificateCard />
          </div>
        </Container>
      </Section>

      <Block id="process" number="03" label="How we work" title="From review to claim.">
        <Steps steps={STEPS} />
      </Block>

      <FinalCta title="Show us the deal you're closing." sub="We'll tell you what it takes to get it insured." />
    </main>
  );
}
