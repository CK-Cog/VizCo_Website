import Reveal from "@/components/Reveal";

export type Step = { tag: string; title: string; body: string };

export default function Timeline({ steps }: { steps: Step[] }) {
  return (
    <div className="-mx-6 mt-16 overflow-x-auto px-6 pb-2 no-scrollbar sm:mx-0 sm:px-0">
      <ol className="grid min-w-[540px] grid-cols-4">
        {steps.map((s, i) => {
          const last = i === steps.length - 1;
          return (
            <Reveal as="li" key={s.title} delay={i * 110} className="relative flex flex-col items-center px-2 text-center">
              {!last ? (
                <span
                  aria-hidden
                  className={`absolute left-[calc(50%+28px)] right-[calc(-50%+28px)] top-6 h-px ${
                    i === steps.length - 2 ? "bg-gradient-to-r from-accent/40 to-accent" : "bg-gradient-to-r from-line-dark to-accent/40"
                  }`}
                />
              ) : null}
              <span
                className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                  last
                    ? "border-cream bg-cream text-ink"
                    : "border-line-dark bg-ink text-cream-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow mt-5 text-cream-muted">{s.tag}</p>
              <h3 className={`font-display mt-1.5 text-xl sm:text-2xl ${last ? "text-accent-glow" : "text-cream"}`}>{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-cream-muted">{s.body}</p>
            </Reveal>
          );
        })}
      </ol>
    </div>
  );
}
