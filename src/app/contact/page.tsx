import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { Container } from "@/components/ui";
import { BOOKING_URL, CONTACT_EMAIL } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to VizCo about AI liability insurance and emerging risk.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero kicker="Contact" title="Talk to us." sub="Tell us what you run or sell. We'll tell you where you stand." />
      <Container className="-mt-6 pb-28">
        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          <Reveal>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-start justify-between gap-6 rounded-md border border-accent/50 bg-gradient-to-b from-accent/10 to-ink-2 p-7 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <Calendar className="h-6 w-6 text-accent-glow" strokeWidth={1.5} />
                <p className="font-display mt-5 text-2xl text-cream">Book a call</p>
                <p className="mt-1 text-sm text-cream-muted">Thirty minutes. No preparation needed.</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-cream-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex h-full items-start justify-between gap-6 rounded-md border border-line-dark bg-ink-2/80 p-7 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <Mail className="h-6 w-6 text-accent-glow" strokeWidth={1.5} />
                <p className="font-display mt-5 text-2xl text-cream">Email us</p>
                <p className="mt-1 text-sm text-cream-muted">{CONTACT_EMAIL}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-cream-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
