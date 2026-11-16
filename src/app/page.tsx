import Hero from "@/components/home/Hero";
import CoverageCarousel from "@/components/home/CoverageCarousel";
import WhoItsFor from "@/components/home/WhoItsFor";
import HowItWorks from "@/components/home/HowItWorks";
import CoverageGap from "@/components/CoverageGap";
import FinalCta from "@/components/FinalCta";
import { Container, Faq, Section, SectionHeader } from "@/components/ui";

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
      <Hero />
      <CoverageGap />
      <WhoItsFor />
      <CoverageCarousel />
      <HowItWorks />
      <Section id="faq">
        <Container>
          <SectionHeader kicker="Questions" title="Before you ask." />
          <div className="mt-12">
            <Faq items={FAQ} />
          </div>
        </Container>
      </Section>
      <FinalCta />
    </main>
  );
}
