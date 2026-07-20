import { Container, Section, Mark, leadTitleClass } from "@/components/ui";

export default function EnablingFrame() {
  return (
    <Section id="enable" className="!py-14 sm:!py-16">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className={`text-balance ${leadTitleClass}`}>
            VizCo is the layer that lets your enterprise{" "}
            <Mark>say yes</Mark> to frontier AI.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
            AI is reaching your systems without real control over what it can
            do, what data it can access, or what it costs. We sit between your
            company and the models and enforce both, so leadership can sign off
            on AI at scale.
          </p>
        </div>
      </Container>
    </Section>
  );
}
