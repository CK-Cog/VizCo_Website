import type { Metadata } from "next";
import { faqSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Thesis from "@/components/home/Thesis";
import Affiliations from "@/components/home/Affiliations";
import Backers from "@/components/home/Backers";
import PolicyLine from "@/components/home/PolicyLine";
import FinalCta from "@/components/FinalCta";
import { Block, Container, Faq, Section, SectionHeader } from "@/components/ui";
import Process from "@/components/Process";
import RiskChanges from "@/components/RiskChanges";
import ExposureGroups from "@/components/ExposureGroups";

export const metadata: Metadata = pageMeta({
  title: "VizCo | AI Liability Insurance & Emerging Risk Broker",
  absoluteTitle: true,
  description:
    "AI liability insurance for enterprises and AI startups. We find where your policies are silent on or exclude AI, prove your AI to insurers and place the cover.",
  path: "/",
});

const FAQ = [
  {
    q: "What is AI liability insurance?",
    a: "Cover for the harm your AI causes: wrong answers people relied on, actions it took without permission, data it exposed.",
  },
  {
    q: "Doesn't my existing insurance already cover AI?",
    a: "Usually not clearly. Most policies say nothing about AI, and more now exclude it. We read yours and tell you where you stand.",
  },
  {
    q: "What is silent AI?",
    a: "A policy that never mentions AI. Whether it pays for an AI loss is only decided when you claim.",
  },
  {
    q: "How do you assess AI risk?",
    a: "We map the AI you run and buy, test it, review its controls, and read your policies against how it can fail.",
  },
  {
    q: "What happens if our AI changes after we're insured?",
    a: "We monitor for changes like model updates, new data and new uses, and report them to your insurers so your cover keeps up.",
  },
  {
    q: "Do you help if we need to claim?",
    a: "Yes. We keep the record of your AI that insurers need, and argue the claim for you.",
  },
  {
    q: "How are you paid?",
    a: "By insurer commission or an agreed fee. We tell you which before anything is bound.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(FAQ)} />
      <Thesis />
      <Affiliations />
      <PolicyLine />

      <Block id="coverage" number="01" label="What we cover" title="How AI goes wrong.">
        <ExposureGroups />
      </Block>

      <Section id="process">
        <Container>
          <SectionHeader number="02" kicker="How we work" title="Cover that keeps up with your AI." />
          <Process />
        </Container>
      </Section>

      <RiskChanges />

      <Block id="faq" number="03" label="Questions" title="What buyers ask us.">
        <Faq items={FAQ} className="mt-10 max-w-3xl" />
      </Block>

      <FinalCta />
      <Backers />
    </main>
  );
}
