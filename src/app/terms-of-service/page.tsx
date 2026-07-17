import type { Metadata } from "next";
import { Container, Section, Mark } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service | VizCo",
  description: "Terms and conditions for using the VizCo website.",
};

export default function TermsOfService() {
  return (
    <main className="bg-paper">
      <Section className="pb-0">
        <Container className="max-w-4xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
            Terms of <Mark>Service.</Mark>
          </h1>
          <p className="mt-4 text-ink-700">
            By using the VizCo website, you agree to the following terms and
            conditions.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-ink-900">
            Use of Site
          </h2>
          <ul className="ml-6 list-disc space-y-1 text-ink-700">
            <li>You agree to use this site only for lawful purposes.</li>
            <li>
              You will not attempt to disrupt or compromise the security of the
              site.
            </li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-ink-900">
            Intellectual Property
          </h2>
          <p className="text-ink-700">
            All content on this site is the property of VizCo and may not be used
            without permission.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-ink-900">
            Disclaimer
          </h2>
          <p className="text-ink-700">
            This site is provided &quot;as is&quot; without warranties of any
            kind. VizCo is not liable for any damages arising from use of the
            site.
          </p>

          <h2 className="mt-8 mb-2 text-2xl font-semibold text-ink-900">
            Contact
          </h2>
          <p className="text-ink-700">
            If you have any questions about these terms, please contact us at{" "}
            <a
              href="mailto:info@vizco.co"
              className="text-ink-900 underline underline-offset-4 hover:text-black"
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
