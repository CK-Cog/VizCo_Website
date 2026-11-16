import Image from "next/image";
import { Mail } from "lucide-react";
import Reveal from "@/components/Reveal";
import { LinkedinIcon } from "@/components/ui";
import type { TeamMember } from "@/content/team";

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function PersonCard({ m, delay = 0 }: { m: TeamMember; delay?: number; size?: "sm" | "md" }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col">
        <div className="relative aspect-square w-full overflow-hidden bg-ink-3">
          {m.img ? (
            <Image
              src={m.img}
              alt={m.name}
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
              className="object-cover grayscale contrast-[1.05] transition-[filter,scale] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
            />
          ) : (
            <div aria-hidden className="flex h-full w-full items-center justify-center font-mono text-2xl text-cream-muted">
              {initials(m.name)}
            </div>
          )}
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
          />
        </div>
        <h3 className="font-display mt-6 text-[1.375rem] leading-tight tracking-[-0.03em] text-cream">{m.name}</h3>
        <p className="eyebrow mt-2 !text-[10.5px] text-cream">{m.role}</p>
        {m.prev ? <p className="mt-2.5 text-[15px] leading-snug text-cream-muted">{m.prev}</p> : null}
        {m.email || m.linkedin ? (
          <div className="mt-auto flex items-center gap-2 pt-6">
            {m.email ? (
              <a
                href={`mailto:${m.email}`}
                aria-label={`Email ${m.name}`}
                className="flex h-9 w-9 items-center justify-center border border-line-dark text-cream-muted transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                <Mail className="h-4 w-4" />
              </a>
            ) : null}
            {m.linkedin ? (
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="flex h-9 w-9 items-center justify-center border border-line-dark text-cream-muted transition-colors hover:border-cream hover:bg-cream hover:text-ink"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}
