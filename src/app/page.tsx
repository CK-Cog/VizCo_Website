import Hero from "@/components/home/Hero";
import MissingLink from "@/components/home/MissingLink";
import WhoItsFor from "@/components/home/WhoItsFor";
import ClosingCta from "@/components/home/ClosingCta";
import WhatYouReceive from "@/components/home/WhatYouReceive";

export default function Home() {
  return (
    <main className="bg-paper">
      <Hero />
      <WhatYouReceive />
      <MissingLink />
      <WhoItsFor />
      <ClosingCta />
    </main>
  );
}
