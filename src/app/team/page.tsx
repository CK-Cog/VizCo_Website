import Image from "next/image";
import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Container, Section, Eyebrow, Mark, PageTitle } from "@/components/ui";

function LinkedinIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Team | VizCo",
  description: "Meet the team building the adoption layer for enterprise AI.",
};

type TeamMember = {
  name: string;
  role: string;
  prev?: string;
  img?: string;
  email?: string;
  linkedin?: string;
};

const team: TeamMember[] = [
  {
    name: "Chris Kelly, Ph.D.",
    role: "Co-Founder & CEO",
    prev: "Prev: Stanford, MIT",
    img: "/Chris.png",
    email: "chris@vizco.co",
    linkedin: "https://www.linkedin.com/in/christopherkellyphd/",
  },
  {
    name: "Daniel Kharitonov, Ph.D.",
    role: "Co-Founder & CTO",
    prev: "Prev: Stanford, Interative",
    img: "/Daniel.png",
    email: "daniel@vizco.co",
    linkedin: "https://www.linkedin.com/in/danielkharitonov/",
  },
  {
    name: "Tanay Baswa",
    role: "Founding Engineer",
  },
  {
    name: "Mark Farrelly",
    role: "Founding GTM Lead",
  },
  {
    name: "Emily Oprisan",
    role: "GTM",
  },
  {
    name: "Makayla Colombo",
    role: "GTM",
  },
];

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function TeamPage() {
  return (
    <main className="bg-paper">
      <Section>
        <Container className="max-w-4xl">
          <div className="text-center">
            <div className="flex justify-center">
              <Eyebrow>Team</Eyebrow>
            </div>
            <PageTitle className="mt-4">
              Meet the <Mark>team.</Mark>
            </PageTitle>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
            {team.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center rounded-lg border border-border bg-surface p-8 text-center"
              >
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={128}
                    height={128}
                    className="mb-4 h-32 w-32 rounded-full border border-border-strong object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="mb-4 flex h-32 w-32 items-center justify-center rounded-full border border-border-strong bg-paper font-mono text-xl font-semibold text-ink-500"
                  >
                    {initials(m.name)}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-ink-900">{m.name}</h3>
                <p className="label mt-1.5 text-ink-500">{m.role}</p>
                {m.prev ? (
                  <p className="mt-2 text-sm text-ink-500">{m.prev}</p>
                ) : null}
                {m.email || m.linkedin ? (
                  <div className="mt-4 flex items-center gap-4">
                    {m.email ? (
                      <a
                        href={`mailto:${m.email}`}
                        aria-label={`Email ${m.name}`}
                        className="text-ink-500 transition-colors hover:text-ink-900"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    ) : null}
                    {m.linkedin ? (
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="text-ink-500 transition-colors hover:text-ink-900"
                      >
                        <LinkedinIcon className="h-5 w-5" />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
