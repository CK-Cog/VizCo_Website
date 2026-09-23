"use client";

import Link from "next/link";
import Wordmark from "@/components/Wordmark";
import { Button, BOOKING_URL } from "@/components/ui";

export default function SiteHeader() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Wordmark />
        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-5 sm:flex">
            <Link
              href="/#how"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500 transition-colors hover:text-ink-900"
            >
              How it works
            </Link>
            <Link
              href="/#cover"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500 transition-colors hover:text-ink-900"
            >
              Who it&apos;s for
            </Link>
          </div>
          <Button
            href={BOOKING_URL}
            external
            className="px-4 py-2 text-[13px] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </nav>
  );
}
