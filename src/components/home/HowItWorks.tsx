import {
  Fingerprint,
  Plug,
  ScrollText,
  Database,
  Bot,
  Eye,
} from "lucide-react";
import { Container, Section, SectionHeading, Mark } from "@/components/ui";

const controls = [
  {
    icon: Fingerprint,
    t: "Policy & Identity",
    b: "Roles, permissions, and approvals enforced before any call runs.",
  },
  {
    icon: Database,
    t: "Data Control",
    b: "Filter fields, strip PII, or tokenize on the return path after a connector runs.",
  },
  {
    icon: Bot,
    t: "Agent & Action Control",
    b: "Constrain read, write, send, edit, and delete actions across systems.",
  },
  {
    icon: Plug,
    t: "Secure Connectivity",
    b: "Reach internal systems and data without exposing credentials or keys.",
  },
  {
    icon: ScrollText,
    t: "Audit Trail",
    b: "Immutable log on your infrastructure.",
  },
];

const features = [
  {
    icon: Bot,
    title: "Works where you already use AI",
    body: "ChatGPT Enterprise and other vendor-controlled UIs—or systems you build in-house. Same policy layer either way.",
  },
  {
    icon: Plug,
    title: "Safely connect your applications",
    body: "Governed access to the apps you already run—e.g. Microsoft 365, SharePoint, CRM, and internal APIs.",
  },
  {
    icon: Fingerprint,
    title: "Policy by identity",
    body: "Scoped by user, group, role, and agent—evaluated before any call runs.",
  },
  {
    icon: Eye,
    title: "Full visibility",
    body: "Immutable logs on your infrastructure for incidents, policy, and compliance.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Section id="how">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                Connect your systems. Govern every <Mark>call.</Mark>
              </>
            }
            subtitle="One policy layer between AI—vendor platforms or internal systems—and your applications and data sources."
          />

          <div className="mt-10 grid grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="border-border px-5 py-5 sm:px-6 sm:py-6 [&:not(:first-child)]:border-t sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(n+3)]:border-t lg:[&:not(:first-child)]:border-l lg:[&:nth-child(n+3)]:border-t-0"
              >
                <div className="flex items-center gap-2">
                  <span className="label text-ink-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <f.icon className="h-4 w-4 text-ink-900" />
                </div>
                <h3 className="mt-3 text-base font-semibold text-ink-900">
                  {f.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-ink-500">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="policies" className="bg-surface-subtle">
        <Container>
          <SectionHeading
            eyebrow="Policies we enforce"
            title={
              <>
                What the Policy Layer <Mark>controls.</Mark>
              </>
            }
            subtitle="Runs inside your environment—your cloud, on-prem, or air-gapped—not ours."
          />

          <div className="mx-auto mt-10 max-w-2xl rounded-lg border border-border bg-surface p-5 sm:p-6">
            <div className="flex items-center gap-3 rounded-md border border-border bg-paper px-3 py-3">
              <span className="rounded-[3px] bg-ink-900 px-2 py-1 text-xs font-semibold text-paper">
                VizCo
              </span>
              <div className="text-sm font-semibold text-ink-900">
                VizCo Policy Layer
              </div>
            </div>
            <div className="mt-3 space-y-2">
              {controls.map((c) => (
                <div
                  key={c.t}
                  className="flex items-start gap-3 rounded-md border border-border bg-paper px-3 py-2.5"
                >
                  <c.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-900" />
                  <div>
                    <div className="text-sm font-semibold text-ink-900">
                      {c.t}
                    </div>
                    <div className="text-xs leading-relaxed text-ink-500">
                      {c.b}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
