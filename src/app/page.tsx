import type { Metadata } from "next";
import { faqSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Thesis from "@/components/home/Thesis";
import Backers from "@/components/home/Backers";
import PolicyLine from "@/components/home/PolicyLine";
import FinalCta from "@/components/FinalCta";
import { Block, Faq, Steps } from "@/components/ui";
import ExposureGroups from "@/components/ExposureGroups";

export const metadata: Metadata = pageMeta({
  title: "VizCo | AI Liability Insurance & Emerging Risk Broker",
  absoluteTitle: true,
  description:
    "AI liability insurance for enterprises and AI startups. VizCo finds where your policies are silent on or exclude AI, proves your AI to insurers and places the cover.",
  path: "/",
});

const STEPS = [
  { title: "Review", body: "We read your insurance against how your AI can fail." },
  { title: "Prove", body: "We put your AI's evidence on record for insurers." },
  { title: "Place", body: "We negotiate cover with the right insurers." },
  { title: "Defend", body: "We argue your claim for you." },
];

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
    q: "How are you paid?",
    a: "By insurer commission or an agreed fee. We tell you which before anything is bound.",
  },
];

export default function Home() {
  return (
    <main>
      <JsonLd data={faqSchema(FAQ)} />
      <Thesis />
      <PolicyLine />

      <Block id="coverage" number="01" label="What we cover" title="How AI goes wrong.">
        <ExposureGroups />
      </Block>

      <Block id="process" number="02" label="How we work" title="From review to claim.">
        <Steps steps={STEPS} />
      </Block>

      <Block id="faq" number="03" label="Questions">
        <Faq items={FAQ} />
      </Block>

      <FinalCta />
      <Backers />
    </main>
  );
}
