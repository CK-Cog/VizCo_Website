"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type FocusEvent, type MouseEvent } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Wordmark from "@/components/Wordmark";
import { SwapArrow } from "@/components/ui";
import { BOOKING_URL, CHECKER_URL, LOGIN_URL, NAV, type NavItem } from "@/content/site";

const BAR = 36; // announcement strip height, px

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  return pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ind, setInd] = useState({ x: 0, w: 0, on: false, snap: true });
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const point = (e: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>) => {
    const el = e.currentTarget;
    setInd((prev) => ({ x: el.offsetLeft, w: el.offsetWidth, on: true, snap: !prev.on }));
  };

  const compact = scrolled && !open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ transform: compact ? `translateY(-${BAR}px)` : "none" }}
    >
      {/* Announcement strip */}
      <a
        href={CHECKER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-9 items-center justify-center gap-3 bg-cream px-4 text-[0.8125rem] font-medium tracking-[-0.005em] text-ink"
      >
        <span aria-hidden className="signal-dot is-live !h-1.5 !w-1.5" />
        <span className="link-draw pb-px">Check your AI insurance coverage for free</span>
        <SwapArrow className="h-3.5 w-3.5" />
      </a>

      {/* Main bar */}
      <div
        className={`border-b transition-[background-color,border-color,box-shadow] duration-500 ${
          compact
            ? "border-line-dark bg-ink/80 shadow-[0_8px_30px_-18px_rgba(10,10,10,0.25)] backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-ink"
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] w-full max-w-7xl items-center justify-between gap-6 px-6 sm:px-8 lg:px-10">
          <Wordmark />

          <nav
            className="relative hidden items-center xl:flex"
            aria-label="Primary"
            onMouseLeave={() => setInd((i) => ({ ...i, on: false }))}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 h-9 -translate-y-1/2 bg-ink-3"
              style={{
                left: ind.x,
                width: ind.w,
                opacity: ind.on ? 1 : 0,
                transition: ind.snap
                  ? "opacity 200ms ease"
                  : "left 380ms cubic-bezier(0.16,1,0.3,1), width 380ms cubic-bezier(0.16,1,0.3,1), opacity 200ms ease",
              }}
            />
            {NAV.map((item) => (
              <DesktopItem key={item.label} item={item} active={isActive(pathname, item.href)} onPoint={point} />
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden h-10 items-center px-3 text-[0.875rem] font-medium text-cream sm:inline-flex"
            >
              <span className="link-draw pb-px">Log in</span>
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-10 items-center gap-2 overflow-hidden bg-cream px-4 text-[0.875rem] font-medium text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-[background-color,scale] duration-300 hover:bg-accent-deep active:scale-[0.985]"
            >
              Talk to us
              <SwapArrow className="h-3.5 w-3.5" />
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative inline-flex h-10 w-10 items-center justify-center border border-line-strong text-cream transition-colors hover:border-cream xl:hidden"
            >
              <span aria-hidden className="relative block h-3 w-[1.125rem]">
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and tablet menu */}
      <div
        id="mobile-nav"
        className={`absolute inset-x-0 top-full overflow-y-auto bg-ink xl:hidden ${open ? "block" : "hidden"}`}
        style={{ height: `calc(100dvh - ${68 + BAR}px)` }}
      >
        <nav className="mx-auto flex min-h-full w-full max-w-7xl flex-col px-6 pb-8 pt-4 sm:px-8" aria-label="Mobile">
          <ul className="border-t border-line-dark">
            {NAV.map((item, i) => (
              <li key={item.label} className="menu-in border-b border-line-dark" style={{ animationDelay: `${60 + i * 45}ms` }}>
                <MobileLink item={item} index={i} active={isActive(pathname, item.href)} />
                {item.items ? (
                  <ul className="-mt-2 space-y-1 pb-4 pl-11">
                    {item.items
                      .filter((s) => s.href !== item.href)
                      .map((s) => (
                        <li key={s.href}>
                          <Link href={s.href} className="block py-1.5 text-[0.9375rem] text-cream-muted">
                            {s.label}
                          </Link>
                        </li>
                      ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="menu-in mt-auto grid gap-3 pt-10 sm:grid-cols-2" style={{ animationDelay: `${60 + NAV.length * 45}ms` }}>
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[3.25rem] items-center justify-center border border-line-strong bg-surface text-base font-medium text-cream"
            >
              Log in
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-[3.25rem] items-center justify-center gap-2.5 bg-cream text-base font-medium text-ink"
            >
              Talk to us
              <SwapArrow />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

function DesktopItem({
  item,
  active,
  onPoint,
}: {
  item: NavItem;
  active: boolean;
  onPoint: (e: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>) => void;
}) {
  const cls = `relative z-10 inline-flex h-9 items-center gap-1 whitespace-nowrap px-3.5 text-[0.875rem] font-medium tracking-[-0.01em] transition-colors duration-200 ${
    active ? "text-cream" : "text-cream-muted hover:text-cream"
  }`;
  const marker = active ? <span aria-hidden className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 bg-signal" /> : null;

  if (item.items) {
    return (
      <div className="group/menu relative" onMouseEnter={onPoint} onFocus={onPoint}>
        <Link href={item.href} className={cls} aria-haspopup="true">
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/menu:rotate-180" />
          {marker}
        </Link>
        <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-[opacity,visibility] duration-200 group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
          <ul className="min-w-[15rem] border border-line-dark bg-surface p-2 shadow-[var(--shadow-lift)]">
            {item.items.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="block px-3 py-2.5 text-sm text-cream-muted transition-colors hover:bg-ink-2 hover:text-cream">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls} onMouseEnter={onPoint} onFocus={onPoint}>
        {item.label}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    );
  }

  return (
    <Link href={item.href} className={cls} onMouseEnter={onPoint} onFocus={onPoint} aria-current={active ? "page" : undefined}>
      {item.label}
      {marker}
    </Link>
  );
}

function MobileLink({ item, index, active }: { item: NavItem; index: number; active: boolean }) {
  const inner = (
    <>
      <span className="w-7 shrink-0 font-mono text-[0.6875rem] text-subtle">{String(index + 1).padStart(2, "0")}</span>
      <span className="font-display flex-1 text-[1.75rem] leading-none tracking-[-0.035em] sm:text-[2rem]">{item.label}</span>
      {active ? <span aria-hidden className="h-2 w-2 bg-signal" /> : <SwapArrow className="h-5 w-5 text-subtle" />}
    </>
  );
  const cls = "group flex items-center gap-4 py-5 text-cream";
  return item.external ? (
    <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={item.href} className={cls} aria-current={active ? "page" : undefined}>
      {inner}
    </Link>
  );
}
