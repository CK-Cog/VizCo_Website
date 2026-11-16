import type { Metadata } from "next";
import { breadcrumbSchema, contactPageSchema, pageMeta } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { BOOKING_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Contact: Talk to an AI Insurance Broker",
  description:
    "Talk to VizCo, the AI & emerging risk specialty broker, about AI liability insurance. Book a thirty-minute call or email info@vizco.co.",
  path: "/contact",
});

const ROUTES = [
  { href: BOOKING_URL, external: true, Icon: Calendar, title: "Book a call", body: "Thirty minutes. No preparation needed.", accent: true },
  { href: `mailto:${CONTACT_EMAIL}`, external: false, Icon: Mail, title: "Email us", body: CONTACT_EMAIL, accent: false },
];

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactPageSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])} />
      <PageHero kicker="Contact" title="Talk to us." sub="Tell us what you run or sell. We'll tell you where you stand." />
      <Container className="pb-28 sm:pb-36">
        <div className="grid gap-4 sm:grid-cols-2">
          {ROUTES.map(({ href, external, Icon, title, body, accent }, i) => (
            <Reveal key={title} delay={i * 90} className="h-full">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden p-8 transition-[translate,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-10 ${
                  accent ? "bg-cream text-ink" : "border border-line-dark bg-surface text-cream shadow-[var(--shadow-card)] hover:border-line-strong"
                }`}
              >
                {accent ? <div aria-hidden className="grid-texture pointer-events-none absolute inset-0" /> : null}
                <div className="relative flex items-start justify-between">
                  <span
                    className={`flex h-12 w-12 items-center justify-center ${accent ? "bg-signal text-signal-ink" : "border border-line-strong text-cream"}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <ArrowUpRight
                    className={`h-6 w-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:translate-x-1 ${
                      accent ? "text-ink/60 group-hover:text-ink" : "text-cream-muted group-hover:text-cream"
                    }`}
                  />
                </div>
                <div className="relative mt-14">
                  <p className="font-display t-h3">{title}</p>
                  <p className={`mt-2 text-lg tracking-[-0.015em] ${accent ? "text-ink/65" : "text-cream-muted"}`}>{body}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
