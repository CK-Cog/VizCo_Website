import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import ClosingCta from "@/components/home/ClosingCta";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <HowItWorks />
      <ClosingCta />
    </main>
  );
}
