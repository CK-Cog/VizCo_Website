import { Server, ShieldOff, Ban, ScrollText } from "lucide-react";
import { Container, Eyebrow, Mark, SectionTitle } from "@/components/ui";

const pillars = [
  {
    icon: Server,
    title: "Runs in your environment",
    body: "Integrates into your cloud, on-prem, or air-gapped. Your infrastructure, your keys, your control.",
  },
  {
    icon: ShieldOff,
    title: "Data never leaves",
    body: "Credentials and source data stay inside your walls. Data control governs what connector responses can enter AI context.",
  },
  {
    icon: Ban,
    title: "No training on your data",
    body: "Your data is never used to train models and never shared with third parties.",
  },
  {
    icon: ScrollText,
    title: "Full audit trail",
    body: "Every call, policy decision, action, and data outcome logged on your infrastructure.",
  },
];

export default function TrustCta() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <div className="mb-4">
            <Eyebrow>Secure by architecture</Eyebrow>
          </div>
          <SectionTitle className="mt-0">
            Trust that comes from how it&apos;s <Mark>built</Mark>, not just a
            promise.
          </SectionTitle>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <span className="label text-ink-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" />
                <p.icon className="h-4 w-4 text-ink-900" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
