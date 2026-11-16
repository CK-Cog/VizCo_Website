import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { BOOKING_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description:
    "Talk to VizCo about AI liability insurance and emerging risk. Book a thirty-minute call or email us.",
  path: "/contact",
});

const ROUTES = [
  { href: BOOKING_URL, external: true, Icon: Calendar, title: "Book a call", body: "Thirty minutes. No preparation needed.", accent: true },
  { href: `mailto:${CONTACT_EMAIL}`, external: false, Icon: Mail, title: "Email us", body: CONTACT_EMAIL, accent: false },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero kicker="Contact" title="Talk to us." sub="Tell us what you run or sell. We'll tell you where you stand." />
      <Container className="pb-28">
        <div className="grid gap-8 sm:grid-cols-2">
          {ROUTES.map(({ href, external, Icon, title, body, accent }) => (
            <a
              key={title}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`group flex items-start justify-between gap-6 pt-6 ${accent ? "border-t-2 border-signal" : "border-t border-line-dark"}`}
            >
              <div>
                <Icon className="h-6 w-6 text-cream" strokeWidth={1.5} />
                <p className="font-display mt-5 text-3xl text-cream">{title}</p>
                <p className="mt-1 text-cream-muted">{body}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-cream-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream" />
            </a>
          ))}
        </div>
      </Container>
    </main>
  );
}
