"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { QuestionMark } from "@/components/ui";

/**
 * The problem as one everyday claim: a chatbot's wrong promise, and the three
 * answers a policy can give. Yes / Maybe / No map to Covered / Silent / Excluded.
 * Facts behind each answer are cited on /the-problem.
 *
 * While on screen it walks through the answers (Maybe, then No, then Yes, where
 * we get you), and hovering a row takes over. Reduced motion shows all three, still.
 */
const ANSWERS = [
  { key: "yes", answer: "Yes", tag: "Covered", line: "Only if your policy names AI and covers it.", Icon: Check },
  { key: "maybe", answer: "Maybe", tag: "Silent", line: "Most policies say nothing about AI. Whether they pay is argued after the loss.", Icon: QuestionMark },
  { key: "no", answer: "No", tag: "Excluded", line: "More policies now write AI out altogether.", Icon: X },
] as const;

const ORDER = [1, 2, 0];
const DWELL = [2600, 2600, 3600];

const TONES = {
  dark: {
    kicker: "text-ink/55",
    scenario: "text-ink/70",
    title: "text-ink",
    rule: "border-ink/15",
    tag: "text-ink/50",
    line: "text-ink/65",
    lineOn: "text-ink",
    box: "border border-ink/35 text-ink",
    boxOn: "border border-ink bg-ink text-cream",
    rowOn: "bg-ink/[0.045]",
    yes: "bg-ink px-[0.12em] text-cream",
    track: "bg-ink/15",
  },
  light: {
    kicker: "text-cream-muted",
    scenario: "text-cream-muted",
    title: "text-cream",
    rule: "border-line-dark",
    tag: "text-cream-muted",
    line: "text-cream-muted",
    lineOn: "text-cream",
    box: "border border-line-strong text-cream",
    boxOn: "border border-cream bg-cream text-ink",
    rowOn: "bg-surface shadow-[var(--shadow-card)]",
    yes: "block-mark",
    track: "bg-line-dark",
  },
} as const;

export default function DoesItPay({
  tone = "light",
  number,
  kicker,
  note,
  footer,
}: {
  tone?: "dark" | "light";
  number?: string;
  kicker: string;
  note?: ReactNode;
  footer?: ReactNode;
}) {
  const t = TONES[tone];
  const root = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const [canMove, setCanMove] = useState(false);

  useEffect(() => {
    setCanMove(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!canMove || !inView || hover !== null) return;
    const s = step ?? -1;
    const next = (s + 1) % ORDER.length;
    const wait = step === null ? 500 : DWELL[s];
    const id = window.setTimeout(() => setStep(next), wait);
    return () => window.clearTimeout(id);
  }, [canMove, inView, hover, step]);

  const active = hover ?? (step === null ? null : ORDER[step]);
  const autoKey = hover === null && step !== null ? `${step}` : null;

  return (
    <div ref={root}>
      <p className={`eyebrow flex items-center gap-3 ${t.kicker}`}>
        <span aria-hidden className="signal-dot" />
        {number ? <span className={t.title}>{number}</span> : null}
        {kicker}
      </p>
      <p className={`mt-7 max-w-2xl text-balance text-lg leading-relaxed tracking-[-0.015em] sm:text-2xl sm:leading-snug ${t.scenario}`}>
        Your chatbot promises a customer a refund it shouldn&apos;t have. They claim against you.
      </p>
      <h2 className={`font-display t-h2 mt-5 text-balance ${t.title}`}>Does your insurance pay?</h2>

      <ol className={`mt-12 border-b ${t.rule}`} onMouseLeave={() => setHover(null)}>
        {ANSWERS.map(({ key, answer, tag, line, Icon }, i) => {
          const on = active === i;
          const dim = active !== null && !on;
          return (
            <li
              key={key}
              onMouseEnter={() => setHover(i)}
              className={`relative grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-2 border-t px-3 py-6 transition-[background-color,opacity,box-shadow] duration-500 sm:grid-cols-[auto_10rem_1fr] sm:items-center sm:gap-x-8 sm:px-5 ${t.rule} ${
                on ? t.rowOn : ""
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center transition-[background-color,border-color,color,opacity] duration-500 sm:h-14 sm:w-14 ${dim && key !== "yes" ? "opacity-50" : ""} ${
                  key === "yes" ? "bg-signal text-signal-ink" : on ? t.boxOn : t.box
                }`}
              >
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </span>
              <div className={`transition-opacity duration-500 ${dim ? "opacity-40" : ""}`}>
                <h3 className={`font-display text-[1.75rem] leading-none tracking-[-0.035em] sm:text-4xl ${t.title}`}>{answer}</h3>
                <p className={`eyebrow mt-2 !text-[10.5px] ${t.tag}`}>{tag}</p>
              </div>
              <p
                className={`col-start-2 text-[15px] leading-relaxed transition-[color,opacity] duration-500 sm:col-start-3 sm:text-[17px] ${on ? t.lineOn : t.line} ${
                  dim ? "opacity-40" : ""
                }`}
              >
                {line}
              </p>
              {on && autoKey !== null ? (
                <span aria-hidden className={`absolute inset-x-0 bottom-0 h-[2px] ${t.track}`}>
                  <span
                    key={autoKey}
                    className="group-progress absolute inset-0 bg-signal"
                    style={{ animationDuration: `${DWELL[step ?? 0]}ms` }}
                  />
                </span>
              ) : null}
            </li>
          );
        })}
      </ol>

      {note ? <p className={`mt-6 max-w-2xl text-[15px] ${t.line}`}>{note}</p> : null}

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className={`font-display text-3xl tracking-[-0.035em] sm:text-5xl ${t.title}`}>
          We get you to <span className={`transition-colors ${t.yes}`}>Yes.</span>
        </p>
        {footer}
      </div>
    </div>
  );
}
