import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { Container, Label, SwapArrow } from "@/components/ui";
import { INSIGHTS, type Insight } from "@/content/insights";
import { SOURCES, type SourceKey } from "@/content/sources";
import { articleSchema, breadcrumbSchema } from "@/lib/seo";

/** Layout for an insight post: header, prose, related posts and a closing call to action. */
export default function Article({ post, sources, children }: { post: Insight; sources: SourceKey[]; children: ReactNode }) {
  const related = INSIGHTS.filter((i) => i.slug !== post.slug);
  return (
    <main>
      <JsonLd
        data={articleSchema({
          headline: post.title,
          description: post.description,
          path: `/insights/${post.slug}`,
          datePublished: post.published,
          dateModified: post.updated,
          citations: sources.map((k) => SOURCES[k]),
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Insights", path: "/insights" },
          { name: post.title, path: `/insights/${post.slug}` },
        ])}
      />
      <article>
        <header>
          <Container className="pb-12 pt-12 sm:pb-16 sm:pt-16">
            <Link href="/insights" className="group inline-flex items-center gap-2 text-sm font-medium text-cream-muted transition-colors hover:text-cream">
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span className="link-draw pb-px">All insights</span>
            </Link>
            <Label className="anim-in mt-12">{post.tag}</Label>
            <h1 className="font-display t-h1 anim-in mt-7 max-w-[16em] text-balance text-cream" style={{ animationDelay: "80ms" }}>
              {post.title}
            </h1>
            <p className="t-lead anim-in mt-7 max-w-2xl text-pretty text-cream-muted" style={{ animationDelay: "160ms" }}>
              {post.dek}
            </p>
            <p className="eyebrow anim-in mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-cream-muted" style={{ animationDelay: "220ms" }}>
              <time dateTime={post.updated}>{post.dateLabel}</time>
              <span aria-hidden className="h-1 w-1 bg-line-strong" />
              {post.minutes} min read
              <span aria-hidden className="h-1 w-1 bg-line-strong" />
              {sources.length} sources
            </p>
          </Container>
        </header>
        <Container>
          <div className="border-t border-cream pt-12 sm:pt-16">
            <div
              className="max-w-[42rem] text-[17px] leading-[1.75] tracking-[-0.012em] text-cream/75 sm:text-[18.5px]
                [&_h2]:font-display [&_h2]:mt-16 [&_h2]:text-[2rem] [&_h2]:leading-[1.1] [&_h2]:tracking-[-0.035em] [&_h2]:text-cream [&_h2:first-child]:mt-0
                [&_p]:mt-6 [&_strong]:font-semibold [&_strong]:text-cream
                [&_ul]:mt-6 [&_ul]:space-y-4 [&_li]:relative [&_li]:pl-6
                [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.72em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:bg-signal"
            >
              {children}
            </div>
          </div>
        </Container>
      </article>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal className="rule-draw pt-7">
            <Label>Keep reading</Label>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              <li>
                <Link
                  href="/the-problem"
                  className="group relative flex h-full flex-col gap-8 border border-line-dark bg-surface p-7 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
                >
                  <span aria-hidden className="absolute inset-x-0 -top-px h-[2px] bg-signal" />
                  <div>
                    <p className="eyebrow text-cream-muted">Guide</p>
                    <p className="font-display mt-4 text-2xl leading-tight tracking-[-0.03em] text-cream">The AI insurance problem, with sources</p>
                  </div>
                  <SwapArrow className="mt-auto h-4 w-4 text-cream" />
                </Link>
              </li>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/insights/${r.slug}`}
                    className="group flex h-full flex-col gap-8 border border-line-dark bg-surface p-7 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,translate] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)]"
                  >
                    <div>
                      <p className="eyebrow text-cream-muted">{r.tag}</p>
                      <p className="font-display mt-4 text-2xl leading-tight tracking-[-0.03em] text-cream">{r.title}</p>
                    </div>
                    <SwapArrow className="mt-auto h-4 w-4 text-cream" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
