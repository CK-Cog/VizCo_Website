import { ArrowRight, Bot, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/ui";

const paths = [
  {
    audience: "For AI providers",
    label: "AI Guarantee",
    title: "Back the outcome you promise.",
    body: "Give customers confidence that the AI product or service you deliver will meet an agreed performance commitment.",
    source: "AI product",
    sourceDetail: "You deliver",
    target: "Agreed outcome",
    targetDetail: "Customer expects",
    response: "Backs the performance promise",
    dark: false,
  },
  {
    audience: "For enterprises",
    label: "AI Liability",
    title: "Cover what your AI says and does.",
    body: "Protect the business from liability created by an AI deployment when existing policies exclude or do not address the exposure.",
    source: "AI deployment",
    sourceDetail: "You operate",
    target: "Output or action",
    targetDetail: "Creates exposure",
    response: "Covers the resulting liability",
    dark: true,
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
            Cover for the AI you sell and{" "}
            <span className="italic">operate.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-700">
            Two paths to protection, each built around evidence from the
            deployment itself.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {paths.map((path) => {
            const dark = path.dark;

            return (
            <article
              key={path.label}
              className={`flex flex-col border p-6 sm:p-7 ${
                dark
                  ? "border-ink-900 bg-ink-900 text-paper"
                  : "border-border-strong bg-surface text-ink-900"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    dark ? "text-paper/55" : "text-ink-500"
                  }`}
                >
                  {path.audience}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    dark
                      ? "bg-paper/10 text-accent"
                      : "bg-surface-subtle text-ink-900"
                  }`}
                >
                  <Bot className="h-4 w-4" />
                </span>
              </div>

              <p
                className={`mt-7 font-mono text-[10px] uppercase tracking-[0.16em] ${
                  dark ? "text-paper/55" : "text-ink-500"
                }`}
              >
                {path.label}
              </p>
              <h3 className="mt-2 max-w-md text-3xl font-semibold leading-[1.08] tracking-[-0.025em]">
                {path.title}
              </h3>
              <p
                className={`mt-3 max-w-md text-base leading-relaxed ${
                  dark ? "text-paper/65" : "text-ink-700"
                }`}
              >
                {path.body}
              </p>

              <div
                className={`mt-8 border ${
                  dark
                    ? "border-paper/15 bg-paper/[0.04]"
                    : "border-border bg-paper"
                }`}
              >
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-4">
                  <CoverageNode
                    title={path.source}
                    detail={path.sourceDetail}
                    dark={dark}
                  />
                  <ArrowRight
                    className={`h-4 w-4 ${
                      dark ? "text-accent" : "text-ink-300"
                    }`}
                  />
                  <CoverageNode
                    title={path.target}
                    detail={path.targetDetail}
                    dark={dark}
                  />
                </div>

                <div
                  className={`flex items-center gap-3 border-t px-4 py-3 ${
                    dark
                      ? "border-paper/15"
                      : "border-border bg-surface-subtle"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      dark
                        ? "bg-accent text-ink-900"
                        : "bg-ink-900 text-paper"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p
                      className={`font-mono text-[9px] uppercase tracking-[0.14em] ${
                        dark ? "text-paper/50" : "text-ink-500"
                      }`}
                    >
                      {path.label}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold">
                      {path.response}
                    </p>
                  </div>
                </div>
              </div>
            </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function CoverageNode({
  title,
  detail,
  dark,
}: {
  title: string;
  detail: string;
  dark: boolean;
}) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold leading-tight">{title}</p>
      <p
        className={`mt-1 text-[10px] leading-tight ${
          dark ? "text-paper/50" : "text-ink-500"
        }`}
      >
        {detail}
      </p>
    </div>
  );
}
