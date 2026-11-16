import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { CONTACT_EMAIL, DISCLAIMER, FOOTER_GROUPS, TAGLINE } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line-dark/70 bg-ink">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm text-cream-muted">{TAGLINE}.</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block text-sm text-cream underline decoration-line-dark underline-offset-4 transition-colors hover:decoration-accent"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <p className="eyebrow text-cream-muted">{g.title}</p>
              <ul className="mt-4 space-y-2.5">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-cream/85 transition-colors hover:text-cream">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-line-dark pt-8">
          <p className="max-w-2xl text-xs leading-relaxed text-cream-muted">{DISCLAIMER}</p>
        </div>
        <p className="mt-6 text-xs text-cream-muted">© {new Date().getFullYear()} VizCo. All rights reserved.</p>
      </div>
    </footer>
  );
}
