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

export default function PersonCard({ m, delay = 0, size = "md" }: { m: TeamMember; delay?: number; size?: "sm" | "md" }) {
  const img = size === "md" ? "h-20 w-20" : "h-16 w-16";
  return (
    <Reveal delay={delay} className="flex h-full flex-col border-t border-line-dark pt-6">
      {m.img ? (
        <Image src={m.img} alt={m.name} width={160} height={160} className={`${img} object-cover grayscale`} />
      ) : (
        <div aria-hidden className={`${img} flex items-center justify-center bg-ink-3 font-mono text-lg text-cream-muted`}>
          {initials(m.name)}
        </div>
      )}
      <h3 className="font-display mt-5 text-2xl text-cream">{m.name}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-cream">{m.role}</p>
      {m.prev ? <p className="mt-2 text-sm text-cream-muted">{m.prev}</p> : null}
      {m.email || m.linkedin ? (
        <div className="mt-auto flex items-center gap-4 pt-6">
          {m.email ? (
            <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`} className="text-cream-muted transition-colors hover:text-cream">
              <Mail className="h-5 w-5" />
            </a>
          ) : null}
          {m.linkedin ? (
            <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="text-cream-muted transition-colors hover:text-cream">
              <LinkedinIcon className="h-5 w-5" />
            </a>
          ) : null}
        </div>
      ) : null}
    </Reveal>
  );
}
