import { Container, Section } from "@/components/ui";

export default function MissingLink() {
  return (
    <Section className="bg-surface !py-16 sm:!py-20">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              Why VizCo
            </p>
            <h2 className="font-editorial mt-4 text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Insurers need evidence, not another{" "}
              <span className="italic">questionnaire.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-ink-700">
              Traditional underwriting relies on a self-reported snapshot.
              But AI deployments keep changing as models, data, tools, and
              permissions change.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-900">
              VizCo creates deployment-level evidence: where the liability
              gaps are, which guardrails are in place, and how much they reduce
              risk.
            </p>
          </div>
        </div>

      </Container>
    </Section>
  );
}
