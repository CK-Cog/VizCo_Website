import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { QuestionMark } from "@/components/ui";

/**
 * The problem as one everyday claim: a chatbot's wrong promise, and the three
 * answers a policy can give. Yes / Maybe / No map to Covered / Silent / Excluded.
 * Facts behind each answer are cited on /the-problem.
 */
const ANSWERS = [
  { key: "yes", answer: "Yes", tag: "Covered", line: "Only if your policy names AI and covers it.", Icon: Check },
  { key: "maybe", answer: "Maybe", tag: "Silent", line: "Most policies say nothing about AI. Whether they pay is argued after the loss.", Icon: QuestionMark },
  { key: "no", answer: "No", tag: "Excluded", line: "More policies now write AI out altogether.", Icon: X },
] as const;

const TONES = {
  dark: {
    kicker: "text-ink/60",
    scenario: "text-ink/70",
    title: "text-ink",
    rule: "border-ink/25",
    tag: "text-ink/55",
    line: "text-ink/70",
    box: "border border-ink/60 text-ink",
    yes: "bg-ink px-[0.14em] text-cream",
  },
  light: {
    kicker: "text-cream-muted",
    scenario: "text-cream-muted",
    title: "text-cream",
    rule: "border-line-dark",
    tag: "text-cream-muted",
    line: "text-cream-muted",
    box: "border border-cream text-cream",
    yes: "block-mark",
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
  return (
    <div>
      <p className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] ${t.kicker}`}>
        <span aria-hidden className="h-2 w-2 bg-signal" />
        {number ? <span className={t.title}>{number}</span> : null}
        {kicker}
      </p>
      <p className={`mt-6 max-w-2xl text-balance text-lg leading-relaxed sm:text-2xl sm:leading-snug ${t.scenario}`}>
        Your chatbot promises a customer a refund it shouldn&apos;t have. They claim against you.
      </p>
      <h2 className={`font-display mt-4 text-balance text-4xl leading-[1.08] sm:text-6xl ${t.title}`}>Does your insurance pay?</h2>

      <ol className={`mt-10 border-b ${t.rule}`}>
        {ANSWERS.map(({ key, answer, tag, line, Icon }) => (
          <li
            key={key}
            className={`grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-2 border-t py-5 sm:grid-cols-[auto_9rem_1fr] sm:items-center sm:gap-x-6 ${t.rule}`}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12 ${key === "yes" ? "bg-signal text-signal-ink" : t.box}`}
            >
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
            </span>
            <div>
              <h3 className={`font-display text-2xl leading-none sm:text-3xl ${t.title}`}>{answer}</h3>
              <p className={`mt-1.5 font-mono text-[11px] uppercase tracking-[0.16em] ${t.tag}`}>{tag}</p>
            </div>
            <p className={`col-start-2 text-[15px] leading-relaxed sm:col-start-3 sm:text-base ${t.line}`}>{line}</p>
          </li>
        ))}
      </ol>

      {note ? <p className={`mt-6 max-w-2xl text-sm ${t.line}`}>{note}</p> : null}

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className={`font-display text-3xl sm:text-4xl ${t.title}`}>
          We get you to <span className={t.yes}>Yes.</span>
        </p>
        {footer}
      </div>
    </div>
  );
}
