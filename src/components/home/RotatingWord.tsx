"use client";

import { useEffect, useState } from "react";

const WORDS = ["AI agent", "chatbot", "copilot", "model"];

export default function RotatingWord() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="whitespace-nowrap">
      <span className="sr-only">AI</span>
      <span key={i} aria-hidden className="word-in">
        {WORDS[i]}
      </span>
    </span>
  );
}
