import Hero from "@/components/home/Hero";
import EnablingFrame from "@/components/home/EnablingFrame";
import HowItWorks from "@/components/home/HowItWorks";
import Budget from "@/components/home/Budget";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <EnablingFrame />
      <HowItWorks />
      <Budget />
      <ClosingCta />
    </main>
  );
}
