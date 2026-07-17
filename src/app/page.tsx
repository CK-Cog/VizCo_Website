import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import TrustCta from "@/components/home/TrustCta";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <HowItWorks />
      <TrustCta />
    </main>
  );
}
