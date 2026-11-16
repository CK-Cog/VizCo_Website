import { Button, Container, Kicker } from "@/components/ui";
import { BOOKING_URL, CONTACT_EMAIL } from "@/content/site";

export default function FinalCta({
  kicker = "Get started",
  title = "Find out where you stand.",
  sub = "Thirty minutes. No preparation needed.",
  cta = "Talk to us",
}: {
  kicker?: string;
  title?: React.ReactNode;
  sub?: string;
  cta?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-t border-line-dark/70 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[900px] max-w-[160vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.05] blur-[150px]"
        aria-hidden
      />
      <Container className="text-center">
        <Kicker>{kicker}</Kicker>
        <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-5xl leading-[1.14] text-cream sm:text-6xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream-muted">{sub}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <Button href={BOOKING_URL} external>
            {cta}
          </Button>
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-cream-muted underline decoration-line-dark underline-offset-4 hover:text-cream">
            {CONTACT_EMAIL}
          </a>
        </div>
      </Container>
    </section>
  );
}
