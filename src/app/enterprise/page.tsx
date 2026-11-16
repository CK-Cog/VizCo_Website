import type { Metadata } from "next";
import { Boxes, Building2, EyeOff, Landmark, Network } from "lucide-react";
import PageHero from "@/components/PageHero";
import Expertise from "@/components/Expertise";
import FinalCta from "@/components/FinalCta";
import Timeline from "@/components/Timeline";
import Reveal from "@/components/Reveal";
import { InventoryCard, VendorStack } from "@/components/pages/Visuals";
import { Card, Container, Em, Faq, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI Liability Insurance for Enterprise",
  description:
    "VizCo covers the AI you run and the AI you buy: we find the gaps in your insurance, check your AI vendors, and place AI liability cover.",
};

const STEPS = [
  { tag: "Map", title: "Discover", body: "Every AI system you run, and every one you buy." },
  { tag: "Read", title: "Review", body: "Your policies, checked against how that AI can fail." },
  { tag: "Negotiate", title: "Place", body: "Cover for the gaps, taken to the right insurers." },
  { tag: "Ongoing", title: "Defend", body: "Claims advocacy, and a fresh look at every renewal." },
];

const FAQ = [
  { q: "Do we need many AI deployments for this to matter?", a: "No. One customer-facing or money-moving system is enough." },
  { q: "Do you need access to our systems?", a: "No. A questionnaire and a working session per major system." },
  { q: "We already have a broker.", a: "Keep them. Many clients appoint us for the AI line only." },
];

export default function EnterprisePage() {
  return (
    <main>
      <PageHero
        checker
        kicker="For enterprise"
        title={
          <>
            The AI you run. The AI you buy.
            <br />
            <Em>Both covered.</Em>
          </>
        }
        sub="AI risk review, vendor checks and AI liability placement for risk, legal and procurement teams."
        cta="Talk to our team"
      />

      <Section id="problem">
        <Container>
          <SectionHeader kicker="The problem" title="Three risks closing in on enterprise AI." />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            <Card icon={<EyeOff className="h-6 w-6" strokeWidth={1.5} />} title="Silent exclusions">
              Insurers are quietly adding AI exclusions to existing policies at renewal. Many teams haven&apos;t noticed yet.
            </Card>
            <Card icon={<Network className="h-6 w-6" strokeWidth={1.5} />} title="Vendor AI" delay={80}>
              Your suppliers&apos; AI acts in your name. When it fails, your customers blame you.
            </Card>
            <Card icon={<Landmark className="h-6 w-6" strokeWidth={1.5} />} title="Regulation" delay={160}>
              The EU AI Act and new US state laws expect documented oversight of AI.
            </Card>
          </div>
        </Container>
      </Section>

      <Section id="approach">
        <Container>
          <SectionHeader kicker="Our approach" title="Two ways we help." sub="One method, applied to the AI you run and to the AI your vendors sell you." />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 lg:grid-cols-2">
            <Reveal className="flex h-full flex-col rounded-md border border-line-dark bg-ink-2/80 p-7">
              <Building2 className="h-6 w-6 text-accent-glow" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your own AI</h3>
              <p className="mt-2 text-sm text-cream-muted">We map it, read your cover against it, and place insurance for the gaps.</p>
              <div className="mt-8">
                <InventoryCard />
              </div>
            </Reveal>
            <Reveal delay={90} className="flex h-full flex-col rounded-md border border-line-dark bg-ink-2/80 p-7">
              <Boxes className="h-6 w-6 text-accent-glow" strokeWidth={1.5} />
              <h3 className="font-display mt-5 text-3xl text-cream">Your vendors&apos; AI</h3>
              <p className="mt-2 text-sm text-cream-muted">Each vendor shares one VizCo record. You see who&apos;s covered, and where you&apos;re exposed.</p>
              <div className="mt-8">
                <VendorStack />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section id="process">
        <Container>
          <SectionHeader kicker="How it works" title="From inventory to covered, in weeks." sub="A clear process built for risk, legal and procurement teams." />
          <Timeline steps={STEPS} />
        </Container>
      </Section>

      <Expertise kicker="Why VizCo" />

      <Section>
        <Container>
          <SectionHeader kicker="Questions" title="Before you ask." />
          <div className="mt-12">
            <Faq items={FAQ} />
          </div>
        </Container>
      </Section>

      <FinalCta kicker="Talk to our team" title="Send us your AI inventory." sub="We'll send back your gaps." cta="Talk to our team" />
    </main>
  );
}
