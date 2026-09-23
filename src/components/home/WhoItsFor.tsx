import { ArrowUpRight, Building2, Boxes } from "lucide-react";
import { Container, Section } from "@/components/ui";

const paths = [
  {
    icon: Boxes,
    label: "AI Guarantee",
    question: "For companies that sell AI",
    body: "Insure the performance commitment behind an AI product or service, giving customers greater confidence in what you deliver.",
    outcome: "AI providers",
  },
  {
    icon: Building2,
    label: "AI Liability",
    question: "For companies that operate AI",
    body: "Insure liability arising from what your AI says and does when existing policies exclude or do not address the exposure.",
    outcome: "Enterprises",
  },
];

export default function WhoItsFor() {
  return (
    <Section id="cover" className="bg-paper !py-16 sm:!py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
            Who it is for
          </p>
          <h2 className="font-editorial mt-4 max-w-4xl text-balance text-4xl leading-[1] tracking-[-0.02em] text-ink-900 sm:text-5xl lg:text-6xl">
            Two types of cover. One deployment-level{" "}
            <span className="italic">assessment.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500">
            VizCo supports the AI you provide to customers and the AI you
            operate inside your own business.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 border-y border-border md:grid-cols-2">
          {paths.map((path) => (
            <article
              key={path.label}
              className="group border-border py-8 first:border-b md:px-10 md:py-10 md:first:border-b-0 md:first:border-r md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-subtle text-ink-900">
                  <path.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-500">
                  {path.outcome}
                </span>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                {path.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                {path.question}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-ink-500">
                {path.body}
              </p>
              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-ink-900">
                Built around your deployment
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
