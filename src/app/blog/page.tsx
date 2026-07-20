import {
  Container,
  Section,
  Button,
  Eyebrow,
  Mark,
  PageTitle,
} from "@/components/ui";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BlogPage() {
  return (
    <main className="bg-paper">
      <Section className="pb-0">
        <Container className="max-w-4xl">
          <Eyebrow>Blog</Eyebrow>
          <PageTitle>
            Research &amp; <Mark>insights.</Mark>
          </PageTitle>
          <p className="mt-4 max-w-2xl text-lg text-ink-500">
            Perspectives on enterprise AI adoption, security policy enforcement,
            and keeping spend tied to teams, projects, and approved use cases.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6">
            <article className="rounded-lg border border-border bg-surface p-6">
              <h2 className="text-xl font-semibold text-ink-900">
                State of AI in 2025: Best Practices for Modern Enterprises
              </h2>
              <div className="mb-4 mt-1 text-xs text-ink-500">
                PDF · Abstract below
              </div>
              <div className="overflow-hidden rounded-lg border border-border bg-surface-subtle">
                <iframe
                  src="/blog/Legal_Tech_and_AI-2.pdf#view=FitH"
                  title="State of AI in 2025 PDF Preview"
                  className="w-full"
                  style={{ height: "75vh" }}
                />
              </div>
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold text-ink-900">
                  Abstract
                </h3>
                <p className="mb-4 text-sm text-ink-500">
                  This white paper targets organizations moving beyond AI pilots
                  to focus on compliance, security, and privacy in agent-driven
                  workflows. We describe three modes of AI use: private
                  (airtight security), local AI (standard security and
                  intelligence), and policy-restricted cloud AI (maximum
                  intelligence). Emphasis is on actionable practices that enable
                  enterprises to adopt secure and efficient automation without
                  heavyweight platforms.
                </p>
                <Button
                  href="/blog/Legal_Tech_and_AI-2.pdf"
                  external
                  className="px-5 py-2.5"
                >
                  Open PDF
                </Button>
              </div>
            </article>
          </div>
        </Container>
      </Section>
    </main>
  );
}
