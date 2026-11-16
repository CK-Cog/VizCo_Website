import { Container } from "@/components/ui";

/** Full-width black band: the logo's "Co" block at full scale. */
export default function CoverageGap({
  kicker = "The coverage gap",
  title = "Your insurance wasn't written for AI.",
  sub = "It covers your people, and software doing what it was built to do. Not your AI acting on its own.",
  id,
}: {
  kicker?: string;
  title?: React.ReactNode;
  sub?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-cream py-24 text-ink sm:py-32">
      <Container className="text-center">
        <p className="eyebrow flex items-center justify-center gap-3 text-ink/70">
          <span aria-hidden className="h-px w-6 bg-ink/50" />
          {kicker}
          <span aria-hidden className="h-px w-6 bg-ink/50" />
        </p>
        <h2 className="font-display mx-auto mt-5 max-w-3xl text-balance text-4xl leading-[1.14] sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-ink/70">{sub}</p>
        <p className="font-display mx-auto mt-14 max-w-4xl text-balance text-3xl leading-[1.3] sm:text-5xl">
          AI liability, placed by VizCo,{" "}
          <span className="whitespace-nowrap bg-ink px-[0.14em] text-cream">closes the gap.</span>
        </p>
      </Container>
    </section>
  );
}
