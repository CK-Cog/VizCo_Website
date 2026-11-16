import type { Metadata } from "next";
import { Boxes, Building2 } from "lucide-react";
import ExposureGroups from "@/components/ExposureGroups";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { InventoryCard, VendorStack } from "@/components/pages/Visuals";
import { Block, Container, Em, Faq, Section, SectionHeader } from "@/components/ui";
import Process from "@/components/Process";
import RiskChanges from "@/components/RiskChanges";
import { breadcrumbSchema, faqSchema, pageMeta, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Enterprise",
  description:
    "VizCo covers the AI you run and the AI you buy: we find the gaps in your insurance, check your AI vendors, and place AI liability cover.",
  path: "/enterprise",
});

const FAQ = [
  { q: "Do we need many AI deployments for this to matter?", a: "No. One customer-facing or money-moving system is enough." },
  {
    q: "Do you need access to our systems?",
    a: "Not for the assessment: a questionnaire and a working session per major system. Monitoring works from the signals you choose to share.",
  },
  {
    q: "What about AI inside software we buy?",
    a: "We include it. Vendor AI acts in your name, so we assess it and check what your vendors' own cover leaves exposed.",
  },
  {
    q: "How do you keep our cover current?",
    a: "We monitor for changes like model updates, new data and new uses, and report them to your insurers.",
  },
  { q: "We already have a broker.", a: "Keep them. Many clients appoint us for the AI line only." },
];

export default function EnterprisePage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "For enterprise", path: "/enterprise" }])} />
      <JsonLd data={faqSchema(FAQ)} />
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
        sub="We assess your AI and your vendors' AI, reduce the risk, place the cover, and keep monitoring."
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
          <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-10">
            <Reveal className="rule-draw flex h-full flex-col pt-8">
              <span className="flex h-12 w-12 items-center justify-center border border-line-strong text-cream"><Building2 className="h-5 w-5" strokeWidth={1.5} /></span>
              <h3 className="font-display t-h3 mt-8 text-cream">Your own AI</h3>
              <p className="mt-2 text-lg tracking-[-0.015em] text-cream-muted">We map it, find the gaps, and cover them.</p>
              <div className="mt-10">
                <InventoryCard />
              </div>
            </Reveal>
            <Reveal delay={90} className="rule-draw flex h-full flex-col pt-8">
              <span className="flex h-12 w-12 items-center justify-center border border-line-strong text-cream"><Boxes className="h-5 w-5" strokeWidth={1.5} /></span>
              <h3 className="font-display t-h3 mt-8 text-cream">Your vendors&apos; AI</h3>
              <p className="mt-2 text-lg tracking-[-0.015em] text-cream-muted">See which vendors are covered, and where you&apos;re exposed.</p>
              <div className="mt-10">
                <VendorStack />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <SectionHeader number="03" kicker="How we work" title="From inventory to covered, and kept covered." />
          <Process />
        </Container>
      </Section>

      <RiskChanges />

      <Block id="faq" number="04" label="Questions" title="What risk teams ask us.">
        <Faq items={FAQ} className="mt-10 max-w-3xl" />
      </Block>

      <FinalCta title="Send us your AI inventory." sub="We'll send back your gaps." />
    </main>
  );
}
