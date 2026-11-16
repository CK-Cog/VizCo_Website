import type { Metadata } from "next";
import { Boxes, Building2 } from "lucide-react";
import ExposureGroups from "@/components/ExposureGroups";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { InventoryCard, VendorStack } from "@/components/pages/Visuals";
import { Block, Container, Em, Section, SectionHeader, Steps } from "@/components/ui";
import { pageMeta, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Enterprise",
  description:
    "VizCo covers the AI you run and the AI you buy: we find the gaps in your insurance, check your AI vendors, and place AI liability cover.",
  path: "/enterprise",
});

const STEPS = [
  { title: "Review", body: "Every AI system you run and buy, against your policies." },
  { title: "Prove", body: "We put the evidence on record for insurers." },
  { title: "Place", body: "We negotiate cover for the gaps." },
  { title: "Defend", body: "We argue your claim, and recheck every renewal." },
];

export default function EnterprisePage() {
  return (
    <main>
      <JsonLd
        data={serviceSchema({
          name: "AI liability insurance for enterprises",
          description: "VizCo reviews an enterprise's insurance against the AI it runs and buys, checks AI vendors, and places AI liability cover for the gaps.",
          audience: "Enterprise risk, legal and procurement teams",
          path: "/enterprise",
        })}
      />
      <PageHero
        checker
        kicker="For enterprise"
        title={
          <>
            <span className="sm:block">The AI you run.</span> <span className="sm:block">The AI you buy.</span> <Em>Both covered.</Em>
          </>
        }
        sub="We review your AI, check your vendors' AI, and place the cover."
      />

      <Section id="problem">
        <Container>
          <SectionHeader number="01" kicker="The problem" title="Twelve ways enterprise AI goes wrong." />
          <ExposureGroups className="mt-12" />
        </Container>
      </Section>

      <Section id="approach">
        <Container>
          <SectionHeader number="02" kicker="What we cover" title="The AI you run, and the AI you buy." />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal className="flex h-full flex-col border-t border-line-dark pt-6">
              <Building2 className="h-6 w-6 text-cream" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your own AI</h3>
              <p className="mt-2 text-cream-muted">We map it, find the gaps, and cover them.</p>
              <div className="mt-8">
                <InventoryCard />
              </div>
            </Reveal>
            <Reveal delay={90} className="flex h-full flex-col border-t border-line-dark pt-6">
              <Boxes className="h-6 w-6 text-cream" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your vendors&apos; AI</h3>
              <p className="mt-2 text-cream-muted">See which vendors are covered, and where you&apos;re exposed.</p>
              <div className="mt-8">
                <VendorStack />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Block id="process" number="03" label="How we work" title="From inventory to covered.">
        <Steps steps={STEPS} />
      </Block>

      <FinalCta title="Send us your AI inventory." sub="We'll send back your gaps." />
    </main>
  );
}
