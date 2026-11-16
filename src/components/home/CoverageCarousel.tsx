import { Bug, Copyright, Landmark, LockOpen, MessageSquareWarning, Scale, Zap } from "lucide-react";
import { Container, Section, SectionHeader } from "@/components/ui";
import { EXPOSURES, type Exposure } from "@/content/exposures";

const ICONS: Record<string, typeof Zap> = {
  "01": MessageSquareWarning,
  "02": Zap,
  "03": LockOpen,
  "04": Bug,
  "05": Copyright,
  "06": Scale,
  "07": Landmark,
};

function FailureCard({ e }: { e: Exposure }) {
  const Icon = ICONS[e.code] ?? Zap;
  return (
    <div className="flex h-full w-[260px] flex-col rounded-md border border-line-dark bg-ink-2 p-6 sm:w-[280px]">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cream text-ink">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <h3 className="mt-5 text-xl font-semibold leading-snug text-cream">{e.headline}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream-muted">{e.line}</p>
    </div>
  );
}

/** The failures run past as a continuous banner. Hovering pauses it so a card can be read. */
export default function CoverageCarousel() {
  const loop = [...EXPOSURES, ...EXPOSURES];
  return (
    <Section id="coverage">
      <Container>
        <SectionHeader
          kicker="What we cover"
          title="How AI goes wrong."
          sub="Real examples of what AI liability is there for. Not a complete list."
        />
      </Container>

      <div className="marquee relative mt-12 overflow-hidden" aria-label="Examples of AI failures we cover">
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent sm:w-32" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent sm:w-32" />
        <ul className="marquee-track flex w-max gap-5 py-2">
          {loop.map((e, i) => (
            <li key={`${e.code}-${i}`} aria-hidden={i >= EXPOSURES.length} className="shrink-0">
              <FailureCard e={e} />
            </li>
          ))}
        </ul>
      </div>

      <Container>
        <p className="mt-8 text-center text-xs text-cream-muted">Cover always depends on the policy wording.</p>
      </Container>
    </Section>
  );
}
