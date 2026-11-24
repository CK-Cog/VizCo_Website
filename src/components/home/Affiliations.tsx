import Image from "next/image";
import type { CSSProperties } from "react";
import Reveal from "@/components/Reveal";
import { Container, Label } from "@/components/ui";
import { AFFILIATIONS } from "@/content/affiliations";

/**
 * How many copies of the logo list the track holds. It slides left by one copy and starts
 * over, so the copies after the first must together be wider than the widest screen.
 */
const COPIES = 3;

/** One copy of the logos. Only the first is read out; the rest are there for the loop. */
function LogoRow({ copy }: { copy: boolean }) {
  return (
    <ul className="marquee-row" aria-hidden={copy || undefined}>
      {AFFILIATIONS.map((a) => (
        <li key={a.name} className="group flex h-14 shrink-0 items-center px-7 sm:h-16 sm:px-10">
          <Image
            src={a.src}
            alt={copy ? "" : a.name}
            width={a.width}
            height={a.height}
            // Eager: lazy loading would wait until each logo slid into view and pop it in late
            loading="eager"
            draggable={false}
            // Height per logo comes from --h (see AFFILIATIONS), a little smaller on phones
            className="h-[calc(var(--h)*0.82)] w-auto max-w-none select-none opacity-55 transition-opacity duration-500 group-hover:opacity-100 sm:h-[var(--h)]"
            style={{ "--h": `${a.h}rem` } as CSSProperties}
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Under the home hero: where our team and advisors studied and worked, and who backs us,
 * as one slow, endless row of grey logos. Hover pauses it; with reduced motion it is one
 * still, centred row that wraps.
 */
export default function Affiliations() {
  return (
    <section aria-label="Expertise from" className="pb-8 sm:pb-10 lg:pb-12">
      <Container>
        <Reveal>
          <Label>Expertise from</Label>
          <div className="marquee -mx-6 mt-5 sm:-mx-8 sm:mt-6 lg:mx-0">
            <div className="marquee-track" style={{ "--copies": COPIES } as CSSProperties}>
              {Array.from({ length: COPIES }, (_, i) => (
                <LogoRow key={i} copy={i > 0} />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
