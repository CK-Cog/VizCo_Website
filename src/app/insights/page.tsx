import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FinalCta from "@/components/FinalCta";
import Reveal from "@/components/Reveal";
import { Container, Em, Section, SwapArrow } from "@/components/ui";
import { INSIGHTS } from "@/content/insights";
import JsonLd from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Insights: AI Liability, Silent AI and Emerging Risk",
  description: "Short, sourced reads on AI liability insurance: silent AI, AI exclusions at renewal, and the trends reshaping AI risk.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <main>
      <JsonLd data={blogSchema(INSIGHTS)} />
      <JsonLd data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />
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
          <Reveal>
            <Link href="/the-problem" className="group relative block overflow-hidden bg-cream px-6 py-12 text-ink sm:px-12 sm:py-16 lg:px-16">
              <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-signal transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
              <div className="relative">
                <p className="eyebrow flex items-center gap-3 text-ink/55">
                  <span aria-hidden className="signal-dot" />
                  Guide
                </p>
                <p className="font-display t-h2 mt-6 max-w-3xl text-balance">The AI insurance problem: exclusions and silent AI</p>
                <p className="t-lead mt-5 max-w-2xl text-ink/65">The full picture, with every source.</p>
                <span className="mt-10 inline-flex h-12 items-center gap-2.5 bg-ink px-6 text-[15px] font-medium text-cream">
                  Read the guide
                  <SwapArrow />
                </span>
              </div>
            </Link>
          </Reveal>

          <ul className="mt-16 border-b border-line-dark">
            {INSIGHTS.map((p, i) => (
              <li key={p.slug} className="border-t border-line-dark">
                <Reveal delay={i * 60}>
                  <Link
                    href={`/insights/${p.slug}`}
                    className="group -mx-4 grid gap-3 px-4 py-10 transition-colors duration-500 hover:bg-surface md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-10 sm:-mx-6 sm:px-6"
                  >
                    <p className="eyebrow text-cream-muted">{p.tag}</p>
                    <div>
                      <h2 className="font-display text-[1.75rem] leading-tight tracking-[-0.035em] text-cream sm:text-[2.125rem]">
                        <span className="link-draw pb-1">{p.title}</span>
                      </h2>
                      <p className="mt-3 max-w-2xl text-base leading-relaxed text-cream-muted sm:text-[17px]">{p.dek}</p>
                      <p className="eyebrow mt-5 flex items-center gap-3 text-subtle">
                        <time dateTime={p.updated}>{p.dateLabel}</time>
                        <span aria-hidden className="h-1 w-1 bg-line-strong" />
                        {p.minutes} min read
                      </p>
                    </div>
                    <span className="hidden h-12 w-12 items-center justify-center border border-line-strong text-cream transition-colors duration-300 group-hover:border-cream group-hover:bg-cream group-hover:text-ink md:flex">
                      <SwapArrow />
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <FinalCta />
    </main>
  );
}
