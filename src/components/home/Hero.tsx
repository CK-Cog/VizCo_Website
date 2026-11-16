import PageHero from "@/components/PageHero";
import RotatingWord from "@/components/home/RotatingWord";
import { Em } from "@/components/ui";
import { TAGLINE } from "@/content/site";

export default function Hero() {
  return (
    <PageHero
      kicker={TAGLINE}
      title={
        <>
          Your <RotatingWord /> made a mistake.
          <br />
          <Em>Who pays?</Em>
        </>
      }
      sub="We find the gaps in your insurance, make your AI insurable, and place the cover."
      checker
    />
  );
}
