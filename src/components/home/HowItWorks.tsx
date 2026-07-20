import { ArrowRight, Bot, Code2, Plug, ShieldOff } from "lucide-react";
import Link from "next/link";
import { Container, Section, SectionHeading, Mark } from "@/components/ui";
import PolicyExample from "@/components/home/PolicyExample";
import { securityControls } from "@/lib/platform-content";

const fits = [
  {
    icon: Bot,
    title: "Vendor-controlled platforms",
    body: "ChatGPT Enterprise, Claude, Gemini, Copilot, and other vendor UIs your teams already use.",
  },
  {
    icon: Code2,
    title: "Internally built systems",
    body: "Your own chat apps, agents, and APIs. Same security policies as the vendor platforms.",
  },
  {
    icon: Plug,
    title: "Apps you already run",
    body: "Microsoft 365 and the other systems your teams already work in. Governed access, not a marketplace.",
  },
  {
    icon: ShieldOff,
    title: "Sensitive data stays inside your walls",
    body: "Sensitive data and credentials remain in your environment. Only policy-approved context reaches the model.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <Section id="how" className="!py-16 sm:!py-20 bg-surface-subtle">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                One layer between AI and your <Mark>systems.</Mark>
              </>
            }
            subtitle="Connect AI to the systems you already run, then govern every call."
          />

          <div className="mt-8 grid grid-cols-1 rounded-lg border border-border bg-surface sm:grid-cols-2">
            {fits.map((f) => (
              <div
                key={f.title}
                className="border-border px-5 py-5 sm:px-6 sm:py-5 [&:not(:first-child)]:border-t sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(n+3)]:border-t"
              >
                <div className="flex items-center gap-2">
                  <f.icon className="h-4 w-4 shrink-0 text-ink-900 sm:h-5 sm:w-5" />
                  <h3 className="text-base font-semibold leading-snug text-ink-900 sm:text-lg">
                    {f.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-500 sm:text-base">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="security" className="!py-16 sm:!py-20">
        <Container>
          <SectionHeading
            eyebrow="Security policy enforcement"
            title={
              <>
                Security policies we <Mark>enforce.</Mark>
              </>
            }
            subtitle="Identity, data, actions, connectivity, and audit, on every call."
          />

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="rounded-lg border border-border bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-3 rounded-md border border-border bg-paper px-3 py-3">
                <span className="rounded-[3px] bg-ink-900 px-2 py-1 text-xs font-semibold text-paper">
                  VizCo
                </span>
                <div className="text-sm font-semibold text-ink-900 sm:text-base">
                  Security policy enforcement
                </div>
              </div>
              <div className="mt-3 space-y-2">
                {securityControls.map((c) => (
                  <div
                    key={c.t}
                    className="flex items-start gap-3 rounded-md border border-border bg-paper px-3 py-2.5 sm:px-4 sm:py-3"
                  >
                    <c.icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-ink-900 sm:h-5 sm:w-5" />
                    <div>
                      <div className="text-sm font-semibold text-ink-900 sm:text-base">
                        {c.t}
                      </div>
                      <div className="mt-0.5 text-xs leading-relaxed text-ink-500 sm:text-sm">
                        {c.b}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <PolicyExample />
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:underline sm:text-base"
              >
                Integrations & deployment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
