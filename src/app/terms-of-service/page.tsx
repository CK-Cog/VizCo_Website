import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = pageMeta({
  title: "Terms of Service",
  description:
    "Terms and conditions for using the VizCo website.",
  path: "/terms-of-service",
});

export default function TermsOfService() {
  return (
    <main>
      <Section border={false} className="pt-16">
        <Container size="md">
          <h1 className="font-display text-4xl text-cream sm:text-5xl">
            Terms of Service.
          </h1>
          <p className="mt-4 text-cream-muted">
            By using the VizCo website, you agree to the following terms and
            conditions.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-cream">
            Use of Site
          </h2>
          <ul className="ml-6 list-disc space-y-1 text-cream-muted">
            <li>You agree to use this site only for lawful purposes.</li>
            <li>
              You will not attempt to disrupt or compromise the security of the
              site.
            </li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-cream">
            Intellectual Property
          </h2>
          <p className="text-cream-muted">
            All content on this site is the property of VizCo and may not be used
            without permission.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-cream">
            Disclaimer
          </h2>
          <p className="text-cream-muted">
            This site is provided &quot;as is&quot; without warranties of any
            kind. VizCo is not liable for any damages arising from use of the
            site.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-cream">
            Contact
          </h2>
          <p className="text-cream-muted">
            If you have any questions about these terms, please contact us at{" "}
            <a
              href="mailto:info@vizco.co"
              className="text-cream underline underline-offset-4 hover:text-accent-glow"
            >
              info@vizco.co
            </a>
            .
          </p>
        </Container>
      </Section>
    </main>
  );
}
