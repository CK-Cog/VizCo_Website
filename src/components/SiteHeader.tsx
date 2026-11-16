"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Wordmark from "@/components/Wordmark";
import { BOOKING_URL, CHECKER_URL, NAV } from "@/content/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const hovered = useRef<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenu(null);
        setOpen(false);
      }
    };
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-dark/70 bg-ink/85 backdrop-blur-md">
      <a
        href={CHECKER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-9 items-center justify-center gap-2 bg-cream px-4 text-[13px] font-medium text-ink"
      >
        Check your AI insurance coverage for free
        <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </a>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Wordmark />

        <nav ref={navRef} className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) =>
            item.items ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  hovered.current = item.label;
                  setMenu(item.label);
                }}
                onMouseLeave={() => {
                  hovered.current = null;
                  setMenu((m) => (m === item.label ? null : m));
                }}
              >
                <button
                  type="button"
                  aria-expanded={menu === item.label}
                  aria-haspopup="true"
                  onClick={() => {
                    if (hovered.current === item.label) {
                      hovered.current = null;
                      setMenu(item.label);
                      return;
                    }
                    setMenu((m) => (m === item.label ? null : item.label));
                  }}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm whitespace-nowrap transition-colors ${
                    pathname === item.href ? "text-cream" : "text-cream-muted hover:text-cream"
                  }`}
                >
                  {item.label}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${menu === item.label ? "rotate-180" : ""}`} />
                </button>
                {menu === item.label ? (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="anim-in min-w-[220px] rounded-md border border-line-dark bg-ink-2 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]">
                      {item.items.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            onClick={() => setMenu(null)}
                            className="block rounded-xl px-3 py-2.5 text-sm text-cream-muted transition-colors hover:bg-ink-3 hover:text-cream"
                          >
                            {s.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            ) : item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-3 py-2 text-sm whitespace-nowrap text-cream-muted transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm whitespace-nowrap text-cream-muted transition-colors hover:text-cream"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-cream px-5 py-2 text-sm font-medium text-ink transition-colors hover:bg-accent-deep sm:inline-flex"
          >
            Talk to us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-dark text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`${open ? "block" : "hidden"} border-t border-line-dark/70 bg-ink lg:hidden`}>
        <nav className="mx-auto max-h-[calc(100vh-6.25rem)] w-full max-w-6xl overflow-y-auto px-6 py-4" aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.label} className="border-b border-line-dark/70 py-3 last:border-0">
              {item.external ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="block py-1.5 text-lg text-cream">
                  {item.label}
                </a>
              ) : (
                <Link href={item.href} className="block py-1.5 text-lg text-cream">
                  {item.label}
                </Link>
              )}
              {item.items ? (
                <ul className="mt-1 space-y-0.5 pl-3">
                  {item.items
                    .filter((s) => s.href !== item.href)
                    .map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="block py-1.5 text-sm text-cream-muted">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              ) : null}
            </div>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center bg-cream px-5 py-3 text-base font-medium text-ink"
          >
            Talk to us
          </a>
        </nav>
      </div>
    </header>
  );
}
