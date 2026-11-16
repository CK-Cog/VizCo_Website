import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import FinalCta from "@/components/FinalCta";
import JsonLd from "@/components/JsonLd";
import { Container, Label } from "@/components/ui";
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
          <Container className="pb-10 pt-12 sm:pb-14 sm:pt-16">
            <Link href="/insights" className="group inline-flex items-center gap-2 text-sm text-cream-muted hover:text-cream">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              All insights
            </Link>
            <Label className="mt-10">{post.tag}</Label>
            <h1 className="font-display mt-6 max-w-4xl text-balance text-[2.5rem] leading-[1.08] text-cream sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-2xl text-balance text-lg text-cream-muted sm:text-xl">{post.dek}</p>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">
              <time dateTime={post.updated}>{post.dateLabel}</time> · {post.minutes} min read · {sources.length} sources
            </p>
          </Container>
        </header>
        <Container>
          <div className="border-t border-cream pt-10 sm:pt-14">
            <div
              className="max-w-2xl text-lg leading-relaxed text-cream-muted
                [&_h2]:font-display [&_h2]:mt-14 [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:text-cream [&_h2:first-child]:mt-0
                [&_p]:mt-5 [&_strong]:font-medium [&_strong]:text-cream
                [&_ul]:mt-5 [&_ul]:space-y-3 [&_li]:relative [&_li]:pl-5
                [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:bg-signal"
            >
              {children}
            </div>
          </div>
        </Container>
      </article>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="border-t border-cream pt-6">
            <Label>Keep reading</Label>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              <li>
                <Link href="/the-problem" className="group block border-t-2 border-signal pt-5">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">Guide</p>
                  <p className="font-display mt-3 text-2xl leading-tight text-cream">The AI insurance problem, with sources</p>
                  <ArrowRight className="mt-4 h-4 w-4 text-cream transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={`/insights/${r.slug}`} className="group block border-t border-line-dark pt-5">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-cream-muted">{r.tag}</p>
                    <p className="font-display mt-3 text-2xl leading-tight text-cream">{r.title}</p>
                    <ArrowRight className="mt-4 h-4 w-4 text-cream transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCta />
    </main>
  );
}
