import Hero from "@/components/home/Hero";
import Pillars from "@/components/home/Pillars";
import HowItWorks from "@/components/home/HowItWorks";
import Budget from "@/components/home/Budget";
import RiskEvidence from "@/components/home/RiskEvidence";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <Pillars />
      <HowItWorks />
      <Budget />
      <RiskEvidence />
      <ClosingCta />
    </main>
  );
}
