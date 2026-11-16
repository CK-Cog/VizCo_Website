import type { Metadata } from "next";
import { faqSchema, pageMeta, serviceSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { ArrowRight, Boxes, Building2, FileWarning, Gavel, Network } from "lucide-react";
import PageHero from "@/components/PageHero";
import Expertise from "@/components/Expertise";
import ExposureList from "@/components/ExposureList";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import { InventoryCard, VendorStack } from "@/components/pages/Visuals";
import { Block, Card, Container, Em, Faq, Section, SectionHeader, Steps } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "AI Liability Insurance for Enterprise",
  description:
    "VizCo covers the AI you run and the AI you buy: we find the gaps in your insurance, check your AI vendors, and place AI liability cover.",
  path: "/enterprise",
});

const STEPS = [
  { title: "Review", body: "Every AI system you run and buy, checked against your policies." },
  { title: "Prove", body: "We put the evidence on record, for your AI and your vendors'." },
  { title: "Place", body: "Cover for the gaps, taken to the right insurers and negotiated." },
  { title: "Defend", body: "Claims advocacy, and a fresh look at every renewal." },
];

const FAQ = [
  { q: "Do we need many AI deployments for this to matter?", a: "No. One customer-facing or money-moving system is enough." },
  { q: "Do you need access to our systems?", a: "No. A questionnaire and a working session per major system." },
  { q: "We already have a broker.", a: "Keep them. Many clients appoint us for the AI line only." },
];

export default function EnterprisePage() {
  return (
    <main>
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
        sub="AI risk review, vendor checks and AI liability placement for risk, legal and procurement teams."
      />

      <Section id="problem">
        <Container>
          <SectionHeader
            number="01"
            kicker="The problem"
            title="Thirteen ways enterprise AI goes wrong."
            sub="Whether you built it or bought it, each one can end in a claim against you, a loss of your own, or both."
          />
          <ExposureList className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3" />
        </Container>
      </Section>

      <Section id="why-now">
        <Container>
          <SectionHeader
            number="02"
            kicker="Why now"
            title="The risk is growing. The cover is shrinking."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card icon={<FileWarning className="h-6 w-6" strokeWidth={1.5} />} title="Exclusions at renewal">
              Standard AI exclusion wording has been available to insurers since January 2026. It&apos;s often added at renewal, where it&apos;s easy to
              miss.
            </Card>
            <Card icon={<Network className="h-6 w-6" strokeWidth={1.5} />} title="Vendor AI" delay={80}>
              Your suppliers&apos; AI acts in your name. When it fails, your customers blame you.
            </Card>
            <Card icon={<Gavel className="h-6 w-6" strokeWidth={1.5} />} title="Growing liability" delay={160}>
              Companies have been held liable for what their chatbots say, and new EU rules treat AI as a product.
            </Card>
          </div>
          <Link
            href="/the-problem"
            className="group mt-10 inline-flex items-center gap-2 text-sm text-cream underline decoration-signal decoration-2 underline-offset-[6px]"
          >
            Read the evidence, with sources
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Container>
      </Section>

      <Section id="approach">
        <Container>
          <SectionHeader
            number="03"
            kicker="Our approach"
            title="Two ways we help."
            sub="One method, applied to the AI you run and to the AI your vendors sell you."
          />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <Reveal className="flex h-full flex-col border-t border-line-dark pt-6">
              <Building2 className="h-6 w-6 text-cream" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your own AI</h3>
              <p className="mt-2 text-cream-muted">We map it, read your cover against it, and place insurance for the gaps.</p>
              <div className="mt-8">
                <InventoryCard />
              </div>
            </Reveal>
            <Reveal delay={90} className="flex h-full flex-col border-t border-line-dark pt-6">
              <Boxes className="h-6 w-6 text-cream" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your vendors&apos; AI</h3>
              <p className="mt-2 text-cream-muted">Each vendor shares one VizCo record. You see who&apos;s covered, and where you&apos;re exposed.</p>
              <div className="mt-8">
                <VendorStack />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Block id="process" number="04" label="How it works" title="From inventory to covered." sub="A clear process built for risk, legal and procurement teams.">
        <Steps steps={STEPS} />
      </Block>

      <Expertise number="05" />

      <Block id="faq" number="06" label="Questions" title="Before you ask.">
        <Faq items={FAQ} className="mt-10" />
      </Block>

      <FinalCta title="Send us your AI inventory." sub="We'll send back your gaps." />
    </main>
  );
}
