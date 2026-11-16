import Image from "next/image";
import { Container } from "@/components/ui";

/** Black-on-transparent versions of each investor's logo live in /public/investors. */
const BACKERS = [
  { name: "NextGen Venture Partners", src: "/investors/ngvp.png", width: 1024, height: 254, className: "h-5 sm:h-6" },
  { name: "XRC Ventures", src: "/investors/xrc-ventures.png", width: 1238, height: 186, className: "h-4 sm:h-5" },
  { name: "Entrepreneurs First", src: "/investors/entrepreneurs-first.png", width: 154, height: 76, className: "h-8 sm:h-9" },
  { name: "Transpose Platform", src: "/investors/transpose.png", width: 2338, height: 300, className: "h-4 sm:h-5" },
];

/** A quiet proof band at the foot of the home page. */
export default function Backers() {
  return (
    <section aria-label="Investors and attestation" className="pb-20 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-6 bg-ink-2 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:gap-12">
          <p className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">Backed by</p>
          <ul className="flex flex-1 flex-wrap items-center gap-x-10 gap-y-6 lg:justify-between">
            {BACKERS.map((b) => (
              <li key={b.name}>
                <Image src={b.src} alt={b.name} width={b.width} height={b.height} className={`w-auto opacity-80 ${b.className}`} />
              </li>
            ))}
          </ul>
          <p className="flex shrink-0 items-center gap-2 border-t border-line-dark pt-5 font-mono text-xs uppercase tracking-[0.16em] text-cream lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <span aria-hidden className="h-2 w-2 bg-signal" />
            SOC 2 Type I attested
          </p>
        </div>
      </Container>
    </section>
  );
}
