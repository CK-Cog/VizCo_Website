import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";

/** Black-on-transparent versions of each investor's logo live in /public/investors. */
const BACKERS = [
  { name: "NextGen Venture Partners", src: "/investors/ngvp.png", width: 1024, height: 254, className: "h-6 sm:h-7" },
  { name: "XRC Ventures", src: "/investors/xrc-ventures.png", width: 1238, height: 186, className: "h-[1.125rem] sm:h-[1.375rem]" },
  { name: "Entrepreneurs First", src: "/investors/entrepreneurs-first.png", width: 154, height: 76, className: "h-9 sm:h-10" },
  { name: "Transpose Platform", src: "/investors/transpose.png", width: 2338, height: 300, className: "h-[1.125rem] sm:h-[1.375rem]" },
];

/** A quiet proof band at the foot of the home page. */
export default function Backers() {
  return (
    <section aria-label="Investors and attestation" className="pb-24 sm:pb-32">
      <Container>
        <Reveal className="grid border-y border-line-dark lg:grid-cols-[auto_1fr_auto]">
          <p className="eyebrow flex items-center py-6 text-cream-muted lg:pr-10">Backed by</p>
          <ul className="grid grid-cols-2 border-t border-line-dark sm:grid-cols-4 lg:border-l lg:border-t-0">
            {BACKERS.map((b, i) => (
              <li
                key={b.name}
                className={`group flex h-24 items-center justify-center border-line-dark px-6 transition-colors duration-500 hover:bg-surface sm:h-28 ${
                  i % 2 === 1 ? "border-l" : ""
                } ${i >= 2 ? "border-t sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}
              >
                <Image
                  src={b.src}
                  alt={b.name}
                  width={b.width}
                  height={b.height}
                  className={`w-auto opacity-55 grayscale transition-[opacity,scale] duration-500 group-hover:scale-[1.04] group-hover:opacity-100 ${b.className}`}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-t border-line-dark py-6 lg:border-l lg:border-t-0 lg:py-0 lg:pl-10">
            <span aria-hidden className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-cream">
              <span className="absolute inset-[3px] border border-line-strong" />
              <ShieldCheck className="relative h-5 w-5 text-cream" strokeWidth={1.5} />
            </span>
            <p className="eyebrow flex items-center gap-2.5 text-cream">
              <span aria-hidden className="signal-dot !h-1.5 !w-1.5" />
              SOC 2 Type I attested
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
