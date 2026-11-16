import type { Metadata } from "next";
import { FileCheck, Gavel, ShieldAlert } from "lucide-react";
import PageHero from "@/components/PageHero";
import CoverageGap from "@/components/CoverageGap";
import FinalCta from "@/components/FinalCta";
import Timeline from "@/components/Timeline";
import { CertificateCard } from "@/components/pages/Visuals";
import { Card, Container, Em, Faq, ListPanel, Section, SectionHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "AI Liability Insurance for Startups",
  description:
    "VizCo makes your AI insurable and places AI liability cover, so your enterprise deals clear procurement.",
};

const STEPS = [
  { tag: "Day one", title: "Tell us", body: "What your AI does, and who you're selling it to." },
  { tag: "Evidence", title: "Prove", body: "We build your VizCo record and test your AI." },
  { tag: "The market", title: "Place", body: "We take your record to insurers and negotiate." },
  { tag: "Outcome", title: "Close the deal", body: "Certificates and answers your buyer accepts." },
];

const FAQ = [
  { q: "We're pre-revenue. Is it too early?", a: "Not if a pilot contract is coming. We size cover to that first deal." },
  { q: "What do insurers want to see?", a: "Your evaluations, monitoring and controls. Better evidence, better terms." },
  { q: "Can you work to our deal timeline?", a: "Tell us the date on the first call. We plan the work back from it." },
];

export default function StartupsPage() {
  return (
    <main>
      <PageHero
        checker
        kicker="For AI startups"
        title={
          <>
            Your AI might fail.
            <br />
            <Em>We&apos;ll get it covered.</Em>
          </>
        }
        sub="Insurer-ready evidence · AI liability cover · Procurement-ready certificates"
      />

      <Section id="problem">
        <Container>
          <SectionHeader
            kicker="The problem"
            title="Your enterprise deal stalls in procurement."
            sub="You built AI enterprises want to buy. Then procurement, legal and security each ask what happens when it gets something wrong. With no answer, the deal waits."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
            <Card icon={<FileCheck className="h-6 w-6" strokeWidth={1.5} />} label="Procurement" title="“Send us your certificate.”" />
            <Card icon={<Gavel className="h-6 w-6" strokeWidth={1.5} />} label="Legal" title="“Who pays if it's wrong?”" delay={80} />
            <Card icon={<ShieldAlert className="h-6 w-6" strokeWidth={1.5} />} label="Security" title="“Are you covered for a breach?”" delay={160} />
          </div>
          <p className="mt-10 text-center text-base text-accent-glow">VizCo gives them the answer.</p>
        </Container>
      </Section>

      <CoverageGap
        title="Standard insurance wasn't built for your AI."
        sub="Your buyer knows it. The policies you both hold weren't written for software that acts on its own."
      />

      <Section>
        <Container>
          <SectionHeader kicker="What's at stake" title="Two kinds of harm. Both insurable." sub="When your AI goes wrong, the damage lands in one of two places." />
          <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
            <Card label="Third-party" title="Your AI harmed your customer">
              It gave wrong advice, leaked their data or acted without permission. They claim against you.
            </Card>
            <Card label="First-party" title="Your AI harmed you" delay={80}>
              It corrupted your data, paid the wrong account or took your service down. The loss is yours.
            </Card>
          </div>
          <p className="font-display mt-10 text-center text-2xl text-cream">
            Either way, <Em>we find the policy that responds.</Em>
          </p>
        </Container>
      </Section>


      <Section id="process">
        <Container>
          <SectionHeader kicker="The process" title="Covered, without the runaround." sub="Four steps, planned around the deal you're trying to close." />
          <Timeline steps={STEPS} />
        </Container>
      </Section>

      <Section id="deliverable">
        <Container>
          <SectionHeader kicker="What you get" title="Everything your buyer's legal team asks for." />
          <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 lg:grid-cols-2">
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


      <Section>
        <Container>
          <SectionHeader kicker="Questions" title="Before you ask." />
          <div className="mt-12">
            <Faq items={FAQ} />
          </div>
        </Container>
      </Section>

      <FinalCta title="Show us the deal you're closing." sub="We'll tell you what it takes to get it insured." />
    </main>
  );
}
