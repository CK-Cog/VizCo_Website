import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import { Container, Em, Section } from "@/components/ui";
import { INSIGHTS } from "@/content/insights";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights: AI Liability, Silent AI and Emerging Risk",
  description: "Short, sourced reads on AI liability insurance: silent AI, AI exclusions at renewal, and the trends reshaping AI risk.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main>
      <PageHero
        kicker="Insights"
        title={
          <>
            What&apos;s changing in <Em>AI risk.</Em>
          </>
        }
        sub="Short, sourced reads on AI risk."
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Link href="/the-problem" className="group block bg-cream px-6 py-10 text-ink sm:px-10 sm:py-12">
            <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-ink/60">
              <span aria-hidden className="h-2 w-2 bg-signal" />
              Guide
            </p>
            <p className="font-display mt-5 max-w-3xl text-balance text-3xl leading-tight sm:text-5xl">The AI insurance problem: exclusions and silent AI</p>
            <p className="mt-4 max-w-2xl text-ink/70">The full picture, with every source.</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm underline decoration-signal decoration-2 underline-offset-[6px]">
              Read the guide
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <ul className="mt-12 border-b border-line-dark">
            {INSIGHTS.map((p) => (
              <li key={p.slug} className="border-t border-line-dark">
                <Link href={`/insights/${p.slug}`} className="group grid gap-3 py-8 md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-10">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">{p.tag}</p>
                  <div>
                    <h2 className="font-display text-3xl leading-tight text-cream">{p.title}</h2>
                    <p className="mt-2 max-w-2xl text-cream-muted">{p.dek}</p>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">
                      <time dateTime={p.updated}>{p.dateLabel}</time> · {p.minutes} min read
                    </p>
                  </div>
                  <ArrowRight className="hidden h-5 w-5 text-cream transition-transform group-hover:translate-x-1 md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </main>
  );
}
