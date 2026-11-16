"use client";

import { useEffect, useState } from "react";

const DEFAULT_WORDS = ["AI agent", "chatbot", "copilot", "model"];

/**
 * A word or phrase that cycles through a list with a soft blur-in.
 * `srText` is what screen readers hear instead of the changing words.
 * `className` styles the wrapper. `wordClassName` styles each word.
 * With `reserve`, the wrapper is always as wide as the longest word, so the
 * surrounding text never reflows (or changes line count) as words change.
 */
export default function RotatingWord({
  words = DEFAULT_WORDS,
  srText = "AI",
  className = "whitespace-nowrap",
  wordClassName = "",
  reserve = false,
}: {
  words?: string[];
  srText?: string;
  className?: string;
  wordClassName?: string;
  reserve?: boolean;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 3000);
    return () => clearInterval(t);
  }, [words.length]);

  if (reserve) {
    return (
      <span className={`inline-grid justify-items-center align-bottom ${className}`}>
        <span className="sr-only">{srText}</span>
        {words.map((w) => (
          <span key={w} aria-hidden className={`invisible col-start-1 row-start-1 ${wordClassName}`}>
            {w}
          </span>
        ))}
        <span key={i} aria-hidden className={`word-in col-start-1 row-start-1 ${wordClassName}`}>
          {words[i]}
        </span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span className="sr-only">{srText}</span>
      <span key={i} aria-hidden className={`word-in ${wordClassName}`}>
        {words[i]}
      </span>
    </span>
  );
}
