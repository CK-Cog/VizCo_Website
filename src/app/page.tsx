import type { Metadata } from "next";
import { faqSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import Thesis from "@/components/home/Thesis";
import Backers from "@/components/home/Backers";
import PolicyLine from "@/components/home/PolicyLine";
import Reading from "@/components/home/Reading";
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
  { title: "Prove", body: "We put your AI's evidence on record and test it." },
  { title: "Place", body: "We take it to the right insurers and negotiate." },
  { title: "Reassess", body: "We reassess when your deployment changes, so you're still covered at claim time." },
  { title: "Defend", body: "We prepare your claim and argue it for you." },
];

const FAQ = [
  {
    q: "What is AI liability insurance?",
    a: "Cover for the financial harm your AI causes: wrong answers people relied on, actions it took without permission, data it exposed. It fills the space your existing policies often leave.",
  },
  {
    q: "Doesn't my existing insurance already cover AI?",
    a: "Sometimes, partly. Most policies were written before AI could act on its own, and many now exclude it. We read your wording and tell you exactly where you stand.",
  },
  {
    q: "What is silent AI?",
    a: "A policy that never mentions AI. It neither covers nor excludes it, so whether you're covered is only decided when a claim is made.",
  },
  {
    q: "What does 'emerging risk' mean?",
    a: "Risks new enough that existing policies didn't anticipate them. AI is the biggest one today. It won't be the last.",
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

      <Block
        id="coverage"
        number="01"
        label="What we cover"
        title="How AI goes wrong."
        sub="Real examples of what AI liability is there for."
      >
        <ExposureGroups />
      </Block>

      <Block
        id="process"
        number="02"
        label="How we work"
        title="From first review to claim time."
        sub="We stay with you after the policy is in place."
      >
        <Steps steps={STEPS} />
      </Block>

      <Reading />

      <Block id="faq" number="04" label="Questions" title="Before you ask.">
        <Faq items={FAQ} className="mt-10" />
      </Block>

      <FinalCta />
      <Backers />
    </main>
  );
}
