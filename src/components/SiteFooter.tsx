import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Wordmark from "@/components/Wordmark";
import { CONTACT_EMAIL, DISCLAIMER, FOOTER_GROUPS, TAGLINE } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-cream text-ink">
      <div aria-hidden className="grid-texture pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-20 sm:px-8 sm:pb-16 sm:pt-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_repeat(3,1fr)] lg:gap-10">
          <div className="max-w-sm">
            <Wordmark tone="light" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink/60">{TAGLINE}.</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group mt-6 inline-flex items-center gap-2 border border-ink/20 px-4 py-2.5 text-[0.9375rem] text-ink transition-colors duration-300 hover:border-ink"
            >
              {CONTACT_EMAIL}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="eyebrow text-ink/45">{g.title}</p>
              <ul className="mt-5 space-y-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group text-[0.9375rem] text-ink/75 transition-colors hover:text-ink">
                      <span className="link-draw pb-px">{l.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 border-t border-ink/15 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-2xl text-xs leading-relaxed text-ink/45">{DISCLAIMER}</p>
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink/45">© {new Date().getFullYear()} VizCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
