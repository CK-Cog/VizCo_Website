import { Container, Section } from "@/components/ui";

export default function MissingLink() {
  return (
    <Section className="bg-surface !py-16 sm:!py-24">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-500">
              Why VizCo
            </p>
            <h2 className="font-editorial mt-4 text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
              Insurers need evidence, not another{" "}
              <span className="italic">questionnaire.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-relaxed text-ink-500">
              Traditional underwriting captures a point-in-time snapshot. AI
              deployments change between renewals as models, data, tools, and
              permissions change.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-ink-900">
              VizCo shows how each deployment operates, where its liability
              gaps are, and whether its guardrails materially reduce the risk.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 border-y border-border md:grid-cols-2">
          <div className="py-6 md:pr-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
              Without VizCo
            </p>
            <p className="mt-3 text-xl font-semibold text-ink-900">
              Risk is self-reported at renewal.
            </p>
          </div>
          <div className="border-t border-border py-6 md:border-l md:border-t-0 md:pl-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
              With VizCo
            </p>
            <p className="mt-3 text-xl font-semibold text-ink-900">
              Risk reduction is verified per deployment.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
