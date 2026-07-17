"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Ban,
  ChevronsLeftRight,
  MoreHorizontal,
  PanelLeft,
  Plus,
  ArrowUp,
  ShieldX,
} from "lucide-react";
import { Mark } from "@/components/ui";

export default function PolicyExample() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const container = document.getElementById("policy-reveal-slider");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const clientX =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const pos = ((clientX - rect.left) / rect.width) * 100;
      setSliderPos(Math.max(0, Math.min(100, pos)));
    };
    const onUp = () => setIsDragging(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchend", onUp);
    };
  }, [isDragging]);

  return (
    <div>
      <div className="mb-5 text-center">
        <p className="text-lg font-semibold text-ink-900 sm:text-xl">
          Examples in ChatGPT Enterprise
        </p>
        <p className="mt-1 text-sm text-ink-500 sm:text-base">
          Data control · Action control
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-[#e5e5e5] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <div className="flex">
          <aside className="hidden w-[200px] shrink-0 flex-col border-r border-[#e5e5e5] bg-[#f9f9f9] p-3 sm:flex">
            <div className="mb-4 flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Image src="/chatgpt_logo.svg" alt="" width={18} height={18} />
                <span className="text-[13px] font-medium text-[#0d0d0d]">
                  ChatGPT
                </span>
              </div>
              <PanelLeft className="h-4 w-4 text-[#8e8e8e]" />
            </div>
            <button
              type="button"
              className="mb-3 flex items-center gap-2 rounded-lg border border-[#e5e5e5] bg-white px-3 py-2 text-left text-[13px] text-[#0d0d0d]"
            >
              <Plus className="h-4 w-4" />
              New chat
            </button>
            <div className="space-y-1 text-[12px]">
              <div className="rounded-lg bg-[#ececec] px-3 py-2 font-medium text-[#0d0d0d]">
                Acme contract summary
              </div>
              <div className="rounded-lg px-3 py-2 text-[#5d5d5d]">
                Q1 renewal draft
              </div>
              <div className="rounded-lg px-3 py-2 text-[#5d5d5d]">
                SharePoint lookup
              </div>
            </div>
            <div className="mt-auto border-t border-[#e5e5e5] pt-3">
              <div className="px-2 text-[11px] font-medium uppercase tracking-wide text-[#8e8e8e]">
                Workspace
              </div>
              <div className="mt-1 px-2 text-[13px] text-[#0d0d0d]">
                VizCo Enterprise
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col bg-white">
            <header className="flex items-center justify-between border-b border-[#e5e5e5] px-4 py-3">
              <div className="flex items-center gap-2">
                <Image
                  src="/chatgpt_logo.svg"
                  alt="ChatGPT"
                  width={20}
                  height={20}
                  className="sm:hidden"
                />
                <div>
                  <div className="text-[15px] font-semibold text-[#0d0d0d]">
                    ChatGPT{" "}
                    <span className="font-normal text-[#8e8e8e]">
                      Enterprise
                    </span>
                  </div>
                  <div className="text-[12px] text-[#8e8e8e]">
                    GPT-4o · Governed by VizCo
                  </div>
                </div>
              </div>
              <MoreHorizontal className="h-5 w-5 text-[#8e8e8e]" />
            </header>

            <div className="flex-1 space-y-5 overflow-hidden px-4 py-4 sm:px-6 sm:py-5">
              {/* --- Example 1: Data control --- */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-[22px] bg-[#f4f4f4] px-4 py-2.5 text-[14px] leading-relaxed text-[#0d0d0d] sm:max-w-[75%]">
                  Pull the Acme contract from SharePoint and summarize payment
                  terms and the billing contact.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white">
                  <Image
                    src="/chatgpt_logo.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="mb-1 text-[13px] font-semibold text-[#0d0d0d]">
                    ChatGPT
                  </div>
                  <p className="mb-2 text-[12px] font-medium text-[#8e8e8e]">
                    Data control · drag to compare
                  </p>

                  <div
                    id="policy-reveal-slider"
                    className="relative h-36 cursor-ew-resize select-none overflow-hidden rounded-xl border border-[#e5e5e5] sm:h-40"
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                  >
                    <div className="absolute inset-0 flex items-center bg-[#fafafa] p-4">
                      <div className="text-[13px] leading-relaxed text-[#0d0d0d] sm:text-[14px]">
                        <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-[#8e8e8e]">
                          User sees
                        </div>
                        <p>
                          Summary for{" "}
                          <span className="font-semibold">Acme Corp</span>.
                          Billing contact{" "}
                          <span className="font-semibold">Jane Smith</span> (
                          <span className="font-semibold">
                            jane.smith@acme-corp.com
                          </span>
                          ). Payment terms: Net 30.
                        </p>
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 flex items-center bg-white p-4"
                      style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                    >
                      <div className="text-[13px] leading-relaxed text-[#0d0d0d] sm:text-[14px]">
                        <div className="mb-1.5 text-[11px] font-medium uppercase tracking-wide text-[#8e8e8e]">
                          Model receives
                        </div>
                        <p>
                          Summary for <Mark>[CLIENT_01]</Mark>. Billing contact{" "}
                          <Mark>[CONTACT_01]</Mark> (<Mark>[EMAIL_01]</Mark>).
                          Payment terms: Net 30.
                        </p>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-0 top-0 z-10 w-0.5 bg-[#0d0d0d]"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-white bg-[#0d0d0d] shadow-md">
                        <ChevronsLeftRight className="h-3.5 w-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Example 2: Action blocked --- */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-[22px] bg-[#f4f4f4] px-4 py-2.5 text-[14px] leading-relaxed text-[#0d0d0d] sm:max-w-[75%]">
                  Looks good. Email that summary to jane.smith@acme-corp.com.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#e5e5e5] bg-white">
                  <Image
                    src="/chatgpt_logo.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </div>
                <div className="min-w-0 flex-1 space-y-3 pt-0.5">
                  <div className="text-[13px] font-semibold text-[#0d0d0d]">
                    ChatGPT
                  </div>
                  <p className="text-[12px] font-medium text-[#8e8e8e]">
                    Action control · call never runs
                  </p>

                  <div className="rounded-xl border border-[#f1caca] bg-[#fff8f8] px-3.5 py-3">
                    <div className="flex flex-wrap items-center gap-2 font-mono text-[12px] text-[#5d5d5d]">
                      <span className="rounded bg-white px-2 py-0.5 text-[#0d0d0d]">
                        gmail.send_message
                      </span>
                      <span>→</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-[#b42318]">
                        <Ban className="h-3.5 w-3.5" />
                        Blocked
                      </span>
                    </div>
                    <div className="mt-2.5 space-y-0.5 font-mono text-[12px] leading-relaxed text-[#7a271a]">
                      <div>policy: external_email.send</div>
                      <div>decision: DENY</div>
                      <div className="pt-1 text-[#912018]">
                        Outbound email to external addresses is not permitted
                        for this role.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-[14px] leading-relaxed text-[#0d0d0d]">
                    <ShieldX className="mt-0.5 h-4 w-4 shrink-0 text-[#b42318]" />
                    <p>
                      I can&apos;t send that email. Outbound messages to external
                      addresses aren&apos;t allowed for your role. The attempt
                      was blocked and logged.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e5e5e5] px-4 py-3 sm:px-6">
              <div className="flex items-end gap-2 rounded-[26px] border border-[#e5e5e5] bg-white px-3 py-2 shadow-sm">
                <button
                  type="button"
                  className="mb-0.5 flex h-8 w-8 items-center justify-center rounded-full text-[#8e8e8e]"
                  aria-hidden
                >
                  <Plus className="h-5 w-5" />
                </button>
                <div className="flex-1 py-1.5 text-[14px] text-[#8e8e8e]">
                  Message ChatGPT
                </div>
                <button
                  type="button"
                  className="mb-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-white"
                  aria-hidden
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-[#8e8e8e]">
                Data control on what enters context. Action control before a
                connector runs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
