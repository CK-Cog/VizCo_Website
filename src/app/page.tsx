'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    let drops: number[] = [];
    
    function initCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 600; // Fixed height for hero section
      const columns = canvas.width / fontSize;
      drops = Array(Math.floor(columns)).fill(1);
    }
    
    initCanvas();
    
    function draw() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
      initCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!isDragging) return;
    const onMove = (e: MouseEvent | TouchEvent) => {
      const container = document.getElementById("reveal-slider");
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const clientX = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
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
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* 1. Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <canvas id="matrix-canvas" className="w-full h-full"></canvas>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900 bg-opacity-30 border border-purple-800 rounded-full mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-purple-300 font-semibold">Use frontier AI models without exposing sensitive data</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent px-4">
          Vizco&apos;s SecureMCP:
          <br />
          The AI Governance Layer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-3xl mb-4 text-gray-200 px-4">
          Enforce policies on content, access, and actions—<span className="text-purple-400 font-semibold">locally, before data reaches any model</span>—so your organization can use frontier AI models safely.
        </p>
        <p className="text-sm sm:text-base text-center max-w-2xl mb-8 text-gray-400 px-4">
          Not a SaaS endpoint. Not a third-party proxy. Vizco&apos;s SecureMCP runs in your environment, redacting sensitive data while enabling full AI productivity with ChatGPT, Claude, and Gemini.
        </p>
        <a
          href="https://calendly.com/chris-kelly-stanford/1-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
        >
          Book a Demo
        </a>
        </div>
      </header>

      {/* 2. Compact "Backed by" trust strip — immediate credibility under the hero */}
      <div className="py-5 px-6 sm:px-12 bg-black border-y border-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-gray-500">Backed by</span>
          <div className="flex items-center gap-6 sm:gap-10 flex-wrap justify-center">
            <Image
              src="/nextgen_venture_partners_logo.png"
              alt="NextGen Venture Partners"
              width={130}
              height={32}
              style={{ objectFit: "contain", height: "32px", width: "auto", opacity: 0.85 }}
            />
            <Image
              src="/entrepreneurs_first_logo.jpeg"
              alt="Entrepreneurs First"
              width={130}
              height={32}
              style={{ objectFit: "contain", height: "32px", width: "auto", opacity: 0.85 }}
            />
            <Image
              src="/transposeplatform_logo.webp"
              alt="Transpose Platform"
              width={150}
              height={32}
              style={{ objectFit: "contain", height: "32px", width: "auto", opacity: 0.85 }}
            />
          </div>
        </div>
      </div>

      {/* 3. Three Ways to Connect Your Data — problem framing */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-5 text-white px-4">
            Three Ways to Connect Your Data to AI
          </h2>
          <p className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto px-4 text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
            Only <span className="relative inline-block">
              <span className="relative z-10 text-purple-300">one</span>
              <span className="absolute inset-x-0 bottom-0.5 h-2 bg-purple-700/40 -z-0 rounded-sm" aria-hidden="true" />
            </span> keeps sensitive data inside your environment.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-gradient-to-b from-zinc-950/80 to-black border border-purple-900/40 rounded-3xl overflow-hidden shadow-[0_0_80px_-20px_rgba(168,85,247,0.25)]">
              {/* Path 1 — HIGH RISK: Direct AI Use */}
              <div className="p-5 sm:p-7 grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-950/60 border border-red-800 text-[10px] font-bold uppercase tracking-wider text-red-300 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    High Risk
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">Direct AI Use</h3>
                  <p className="text-xs text-gray-400">No policy layer — ChatGPT, Claude, Gemini used directly</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-black/40 border border-red-900/40 rounded-xl p-3 sm:p-4">
                    {/* YOUR ENV containing Your data */}
                    <div className="relative border-2 border-dashed border-cyan-700/60 rounded-lg p-2 pt-3.5 flex-shrink-0 min-w-[90px]">
                      <div className="absolute -top-2 left-2 bg-black px-1.5 text-[9px] text-cyan-300 font-bold uppercase tracking-wider">Your env</div>
                      <div className="text-[11px] sm:text-xs text-blue-300 border border-blue-900 rounded px-2 py-2 bg-blue-950/30 text-center leading-tight">
                        Your<br />data
                      </div>
                    </div>
                    {/* Animated red arrow leaving env */}
                    <svg width="60" height="16" viewBox="0 0 60 16" className="flex-shrink-0 flex-1 max-w-[80px]">
                      <line x1="0" y1="8" x2="54" y2="8" stroke="#ef4444" strokeWidth="2" />
                      <polygon points="54,4 60,8 54,12" fill="#ef4444" />
                      <circle r="2.5" fill="#ef4444">
                        <animate attributeName="cx" from="0" to="54" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                    {/* AI model outside env */}
                    <div className="text-[11px] sm:text-xs text-gray-300 border border-gray-700 rounded px-2 py-3 bg-gray-900/60 text-center leading-tight flex-shrink-0 min-w-[80px]">
                      AI<br />model
                    </div>
                    <div className="hidden sm:block flex-1" />
                  </div>
                  <p className="text-[11px] sm:text-xs text-red-400 mt-2 font-semibold flex items-center gap-1.5">
                    <span className="text-base leading-none">✕</span> Sensitive data leaves your environment
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-800/80 mx-5 sm:mx-7" />

              {/* Path 2 — MEDIUM RISK: External Policy Layer */}
              <div className="p-5 sm:p-7 grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-8 items-center">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-950/60 border border-amber-800 text-[10px] font-bold uppercase tracking-wider text-amber-300 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Medium Risk
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">External Policy Layer</h3>
                  <p className="text-xs text-gray-400">Cloud proxies &amp; network gateways enforce policy in their cloud</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-2.5 bg-black/40 border border-amber-900/40 rounded-xl p-3 sm:p-4">
                    {/* YOUR ENV */}
                    <div className="relative border-2 border-dashed border-cyan-700/60 rounded-lg p-2 pt-3.5 flex-shrink-0 min-w-[90px]">
                      <div className="absolute -top-2 left-2 bg-black px-1.5 text-[9px] text-cyan-300 font-bold uppercase tracking-wider">Your env</div>
                      <div className="text-[11px] sm:text-xs text-blue-300 border border-blue-900 rounded px-2 py-2 bg-blue-950/30 text-center leading-tight">
                        Your<br />data
                      </div>
                    </div>
                    {/* Arrow exits */}
                    <svg width="32" height="14" viewBox="0 0 32 14" className="flex-shrink-0">
                      <line x1="0" y1="7" x2="26" y2="7" stroke="#f59e0b" strokeWidth="2" />
                      <polygon points="26,3 32,7 26,11" fill="#f59e0b" />
                    </svg>
                    {/* 3rd party box outside */}
                    <div className="text-[11px] sm:text-xs text-amber-300 border border-amber-800 rounded px-2 py-2 bg-amber-950/30 text-center leading-tight flex-shrink-0 min-w-[78px]">
                      ☁️<br />3rd-party
                    </div>
                    <svg width="32" height="14" viewBox="0 0 32 14" className="flex-shrink-0">
                      <line x1="0" y1="7" x2="26" y2="7" stroke="#f59e0b" strokeWidth="2" />
                      <polygon points="26,3 32,7 26,11" fill="#f59e0b" />
                    </svg>
                    <div className="text-[11px] sm:text-xs text-gray-300 border border-gray-700 rounded px-2 py-3 bg-gray-900/60 text-center leading-tight flex-shrink-0 min-w-[80px]">
                      AI<br />model
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-amber-400 mt-2 font-semibold flex items-center gap-1.5">
                    <span className="text-base leading-none">⚠</span> Data leaves your env — now held by a third party
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-800/80 mx-5 sm:mx-7" />

              {/* Path 3 — LOW RISK: Vizco SecureMCP (winner treatment) */}
              <div className="relative p-5 sm:p-7 grid sm:grid-cols-[200px_1fr] gap-5 sm:gap-8 items-center bg-gradient-to-r from-purple-950/40 via-purple-950/15 to-transparent">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500" />
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-purple-900/70 border border-purple-500 text-[10px] font-bold uppercase tracking-wider text-purple-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Low Risk
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-green-900/40 border border-green-700 text-[9px] font-bold uppercase tracking-wider text-green-300">
                      Recommended
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">Vizco SecureMCP</h3>
                  <p className="text-xs text-purple-200/80">Policy enforced locally — only redacted data ever leaves</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-black/40 border border-purple-900/40 rounded-xl p-3 sm:p-4">
                    {/* YOUR ENV containing Your data + SecureMCP */}
                    <div className="relative border-2 border-dashed border-cyan-700/60 rounded-lg p-2 pt-3.5 flex-shrink-0">
                      <div className="absolute -top-2 left-2 bg-black px-1.5 text-[9px] text-cyan-300 font-bold uppercase tracking-wider">Your env</div>
                      <div className="flex items-center gap-1.5">
                        <div className="text-[11px] sm:text-xs text-blue-300 border border-blue-900 rounded px-2 py-2 bg-blue-950/30 text-center leading-tight min-w-[58px]">
                          Your<br />data
                        </div>
                        <svg width="22" height="14" viewBox="0 0 22 14" className="flex-shrink-0">
                          <line x1="0" y1="7" x2="16" y2="7" stroke="#22c55e" strokeWidth="2" />
                          <polygon points="16,3 22,7 16,11" fill="#22c55e" />
                        </svg>
                        <div className="text-[11px] sm:text-xs text-purple-100 border-2 border-purple-400 rounded px-2 py-1.5 bg-purple-900/60 text-center leading-tight min-w-[78px]">
                          🛡️<br />SecureMCP
                        </div>
                      </div>
                    </div>
                    {/* Redacted output (dashed) crosses to model */}
                    <svg width="60" height="16" viewBox="0 0 60 16" className="flex-shrink-0 flex-1 max-w-[80px]">
                      <line x1="0" y1="8" x2="54" y2="8" stroke="#22c55e" strokeWidth="2" strokeDasharray="4,3" />
                      <polygon points="54,4 60,8 54,12" fill="#22c55e" />
                    </svg>
                    {/* AI model outside env */}
                    <div className="text-[11px] sm:text-xs text-gray-300 border border-gray-700 rounded px-2 py-3 bg-gray-900/60 text-center leading-tight flex-shrink-0 min-w-[80px]">
                      AI<br />model
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-green-400 mt-2 font-semibold flex items-center gap-1.5">
                    <span className="text-base leading-none">✓</span> Only redacted data leaves your environment
                  </p>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-[11px] text-gray-500">
              <span className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 border-2 border-dashed border-cyan-700/60 rounded-sm" />
                Inside your environment
              </span>
              <span className="flex items-center gap-2">
                <svg width="20" height="6" viewBox="0 0 20 6">
                  <line x1="0" y1="3" x2="14" y2="3" stroke="#ef4444" strokeWidth="2" />
                  <polygon points="14,0 20,3 14,6" fill="#ef4444" />
                </svg>
                Sensitive data
              </span>
              <span className="flex items-center gap-2">
                <svg width="20" height="6" viewBox="0 0 20 6">
                  <line x1="0" y1="3" x2="14" y2="3" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,2" />
                  <polygon points="14,0 20,3 14,6" fill="#22c55e" />
                </svg>
                Redacted / safe data
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What SecureMCP Enforces — three themed pillars (the solution) */}
      <section id="learn-more" className="py-16 px-6 sm:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white px-4">
            What SecureMCP Enforces
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-14 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Three layers of governance — for every prompt and every response.
          </p>

          <div className="space-y-10 sm:space-y-12">
            {/* Theme 1 — CONTROL DATA */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1">
                  01 · Control Data
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-800/60 to-transparent" />
                <span className="text-xs text-gray-500 hidden sm:inline">What AI can see</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="group bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7 hover:border-purple-600 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">
                      🛡️
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Redact, then restore</h3>
                      <p className="text-xs text-purple-300 font-medium mt-0.5">Sensitive data never leaves</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300">
                    Identifiers leave as placeholders like <code className="text-purple-300 bg-purple-950/60 px-1.5 py-0.5 rounded text-xs">[SSN_01]</code>. They come back as real values — but only inside your environment.
                  </p>
                </div>

                <div className="group bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7 hover:border-purple-600 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] transition-all">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">
                      🔑
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Data without credentials</h3>
                      <p className="text-xs text-purple-300 font-medium mt-0.5">Agents get answers, never your keys</p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300">
                    SecureMCP brokers every data-source call. The model gets the result it needs — your API keys, tokens, and service accounts stay inside your environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Theme 2 — CONTROL ACTIONS */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1">
                  02 · Control Actions
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-800/60 to-transparent" />
                <span className="text-xs text-gray-500 hidden sm:inline">What AI can do</span>
              </div>
              <div className="group bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7 hover:border-purple-600 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">
                    🚦
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Gate access &amp; approve actions</h3>
                    <p className="text-xs text-purple-300 font-medium mt-0.5">Role-based access · human-in-the-loop for risk</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Role and matter rules decide what data an agent can read. High-risk tool calls — <span className="text-white">send</span>, <span className="text-white">delete</span>, <span className="text-white">transfer</span> — pause for human approval before they fire.
                </p>
              </div>
            </div>

            {/* Theme 3 — DEFEND & PROVE */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1">
                  03 · Defend &amp; Prove
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-purple-800/60 to-transparent" />
                <span className="text-xs text-gray-500 hidden sm:inline">Resilience &amp; accountability</span>
              </div>
              <div className="group bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7 hover:border-purple-600 hover:shadow-[0_0_40px_-15px_rgba(168,85,247,0.5)] transition-all">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">
                    🧾
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Block attacks, log everything</h3>
                    <p className="text-xs text-purple-300 font-medium mt-0.5">Defend the boundary · prove what happened</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Catch prompt injection and jailbreaks before they reach the model. Every prompt, response, and override written to an immutable audit trail — ready for SOC&nbsp;2, HIPAA, or your next regulator visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. See SecureMCP In Action — drag-to-reveal slider (proof) */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white px-4">
            See SecureMCP In Action
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Drag the slider — left side is what your user sees, right side is what the model sees after SecureMCP.
          </p>

          <div className="flex justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs sm:text-sm font-semibold text-gray-300">What your user sees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-semibold text-purple-200">What the model sees</span>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            </div>
          </div>

          <div
            id="reveal-slider"
            className="relative bg-gray-950 border border-purple-700 rounded-2xl overflow-hidden shadow-[0_0_60px_-15px_rgba(168,85,247,0.4)] select-none cursor-ew-resize"
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = ((e.clientX - rect.left) / rect.width) * 100;
              setSliderPos(Math.max(0, Math.min(100, pos)));
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              const rect = e.currentTarget.getBoundingClientRect();
              const pos = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
              setSliderPos(Math.max(0, Math.min(100, pos)));
            }}
          >
            <div className="relative">
              <div className="px-5 py-3 border-b border-purple-900 bg-purple-950/40 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span className="text-sm font-semibold text-purple-200">What the model sees (after SecureMCP)</span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-sm text-gray-300 leading-relaxed min-h-[200px]">
                <div className="text-gray-500 mb-2">Draft a reply to this client email:</div>
                <div>
                  Hi team,{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[PERSON_01]</span> (
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[EMAIL_01]</span>,{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[PHONE_01]</span>) is asking about the{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[PROJECT_01]</span> acquisition. Her SSN on file is{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[SSN_01]</span>, DOB{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[DOB_01]</span>. Internal deal value is{" "}
                  <span className="bg-purple-900/60 text-purple-200 px-1 rounded">[AMOUNT_01]</span>. Please confirm next steps.
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <div className="px-5 py-3 border-b border-gray-800 bg-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm font-semibold text-gray-200">What your user sees</span>
              </div>
              <div className="p-5 sm:p-6 font-mono text-sm text-gray-300 leading-relaxed min-h-[200px] bg-gray-950">
                <div className="text-gray-500 mb-2">Draft a reply to this client email:</div>
                <div>
                  Hi team, <span className="text-white">Jane Smith</span> (
                  <span className="text-white">jane.smith@acme-corp.com</span>,{" "}
                  <span className="text-white">+1-415-555-0142</span>) is asking about the{" "}
                  <span className="text-white">Project Orion</span> acquisition. Her SSN on file is{" "}
                  <span className="text-white">123-45-6789</span>, DOB{" "}
                  <span className="text-white">04/21/1984</span>. Internal deal value is{" "}
                  <span className="text-white">$42M</span>. Please confirm next steps.
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-400 via-white to-purple-400 pointer-events-none shadow-[0_0_12px_rgba(168,85,247,0.8)]"
              style={{ left: `calc(${sliderPos}% - 1px)` }}
            />

            <div
              className="absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-purple-600 shadow-lg flex items-center justify-center cursor-ew-resize z-10 hover:scale-110 transition-transform"
              style={{ left: `calc(${sliderPos}% - 20px)` }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-purple-700">
                <path d="M8 6l-4 6 4 6M16 6l4 6-4 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6 max-w-2xl mx-auto px-4">
            When the model replies, SecureMCP restores placeholders inside your environment — the user sees a normal, personalized response.
          </p>
        </div>
      </section>

      {/* 6. Vizco vs. Comparison Table — differentiation */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black to-purple-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white px-4">
            Why Vizco SecureMCP
          </h2>
          <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Most AI governance tools protect your data <span className="italic">after</span> it has left your environment, or stop at the prompt layer. SecureMCP governs the full agent — content, access, <span className="italic">and</span> actions — inside your environment.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full min-w-[760px] text-left text-sm sm:text-base">
              <thead className="bg-gray-950">
                <tr>
                  <th className="px-4 sm:px-6 py-4 text-gray-400 font-semibold">Capability</th>
                  <th className="px-4 sm:px-6 py-4 text-gray-400 font-semibold text-center">
                    <div>Direct AI Use</div>
                    <div className="text-xs font-normal text-gray-500 mt-1">ChatGPT · Claude · Gemini</div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-gray-400 font-semibold text-center">
                    <div>External Policy Layer</div>
                    <div className="text-xs font-normal text-gray-500 mt-1">Cloud proxies &amp; network gateways</div>
                  </th>
                  <th className="px-4 sm:px-6 py-4 text-purple-300 font-bold text-center bg-purple-950/30">
                    <div>Vizco SecureMCP</div>
                    <div className="text-xs font-normal text-purple-400 mt-1">Full agent governance</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-900">
                {[
                  ["Data stays in your environment", "no", "no", "yes"],
                  ["PII & secrets redaction", "no", "yes", "yes"],
                  ["Prompt injection detection", "no", "yes", "yes"],
                  ["Role & project-based data access control", "no", "limited", "yes"],
                  ["Action approval gates (send, delete, transfer)", "no", "no", "yes"],
                  ["End-to-end agent & tool-call governance", "no", "no", "yes"],
                  ["Full audit trail of every prompt & action", "no", "partial", "yes"],
                  ["Policy on consumer AI apps (ChatGPT.com, Claude.ai)", "no", "limited", "yes"],
                  ["Air-gapped / on-prem deployment", "n/a", "no", "yes"],
                  ["Third-party data exposure", "high", "moderate", "none"],
                ].map((row, idx) => {
                  const [cap, a, b, c] = row;
                  const render = (val: string, highlight = false) => {
                    if (val === "yes") return <span className="text-green-400 font-bold">✓</span>;
                    if (val === "no") return <span className="text-red-400">✕</span>;
                    return <span className={highlight ? "text-purple-300" : "text-yellow-400"}>{val}</span>;
                  };
                  return (
                    <tr key={idx} className="hover:bg-gray-950/60">
                      <td className="px-4 sm:px-6 py-4 text-gray-200">{cap}</td>
                      <td className="px-4 sm:px-6 py-4 text-center">{render(a)}</td>
                      <td className="px-4 sm:px-6 py-4 text-center">{render(b)}</td>
                      <td className="px-4 sm:px-6 py-4 text-center bg-purple-950/20">{render(c, true)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center max-w-3xl mx-auto px-4">
            Category-level comparison, not a product-by-product assessment. Individual vendors vary within each category.
          </p>
        </div>
      </section>

      {/* 7. SecureMCP Memory teaser — the bonus capability the architecture unlocks */}
      <section className="py-14 sm:py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-5">
            The On-Prem Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white px-4">
            AI that learns how <span className="text-purple-400">you</span> work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg px-4 mb-7">
            Because data stays inside your environment, so can the learning. Your archive becomes a living memory layer — compliant by design — so frontier models start sounding like your organization, not the internet.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            <span className="text-xs sm:text-sm text-purple-200 bg-purple-950/40 border border-purple-900/60 rounded-full px-3 py-1.5">📚 Reads your archive in place</span>
            <span className="text-xs sm:text-sm text-purple-200 bg-purple-950/40 border border-purple-900/60 rounded-full px-3 py-1.5">🧠 Compounds over time</span>
            <span className="text-xs sm:text-sm text-purple-200 bg-purple-950/40 border border-purple-900/60 rounded-full px-3 py-1.5">🔒 Same governance applies</span>
          </div>
          <a
            href="/products/securemcp-memory"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors"
          >
            Learn more about SecureMCP Memory
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      {/* 8. Industries — fit */}
      <section className="py-16 px-6 sm:px-12 bg-black relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(168,85,247,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 text-white px-4">
            Built for Regulated Industries
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Where sensitive data, strict oversight, and AI productivity have to coexist.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { t: "Legal", i: "⚖️" },
              { t: "Financial Services", i: "💼" },
              { t: "Healthcare", i: "🏥" },
              { t: "Defense & Gov", i: "🛡️" },
              { t: "Insurance", i: "📋" },
              { t: "Enterprise IT", i: "🏢" },
            ].map((ind) => (
              <div
                key={ind.t}
                className="group relative flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-purple-950/20 via-black to-black border border-purple-900/40 hover:border-purple-500/80 hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-900/70 to-purple-950/30 border border-purple-700/60 flex items-center justify-center text-2xl sm:text-3xl mb-3 group-hover:scale-110 group-hover:border-purple-400 transition-transform duration-300">
                  {ind.i}
                </div>
                <div className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {ind.t}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Deploy Anywhere — practical close (deployment) */}
      <section className="py-16 px-6 sm:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white px-4">
            Deploy SecureMCP Anywhere
          </h2>
          <p className="text-center text-gray-400 mb-10 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Runs entirely inside your environment—desktop, cloud, or air-gapped. Zero changes to existing workflows.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "On-Premises", sub: "Kubernetes, Docker", logo: "/kubernetes_logo.svg" },
              { title: "Private Cloud", sub: "VMware, OpenStack", logo: "/vmware_logo.svg" },
              { title: "AWS", sub: "EKS, ECS, Lambda", logo: "/aws_logo.svg" },
              { title: "Azure", sub: "AKS, Container Apps", logo: "/azure_logo.svg" },
              { title: "Google Cloud", sub: "GKE, Cloud Run", logo: "/google_logo.svg" },
              { title: "Desktop", sub: "macOS, Windows", logo: "/apple_logo.svg", logoSecondary: "/windows_logo.svg" },
            ].map((env) => (
              <div
                key={env.title}
                className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-purple-700 transition rounded-xl p-5 text-center flex flex-col items-center"
              >
                <div className="h-12 flex items-center justify-center gap-2 mb-3">
                  <Image
                    src={env.logo}
                    alt={env.title}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain", height: "40px", width: "auto" }}
                  />
                  {env.logoSecondary && (
                    <Image
                      src={env.logoSecondary}
                      alt={env.title}
                      width={40}
                      height={40}
                      style={{ objectFit: "contain", height: "32px", width: "auto" }}
                    />
                  )}
                </div>
                <div className="text-white font-semibold text-sm mb-1">{env.title}</div>
                <div className="text-gray-500 text-xs">{env.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final CTA — close the loop */}
      <section className="py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-700/10 blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto relative text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Ready to give your team frontier AI — <span className="text-purple-400">safely</span>?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            30 minutes with the team. We&apos;ll walk through SecureMCP in your environment, with your policies, on a sandboxed copy of your data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://calendly.com/chris-kelly-stanford/1-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
            >
              Book a Demo
            </a>
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors px-4 py-2"
            >
              Explore products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 text-sm bg-black border-t border-gray-800 mt-auto">
        <div className="mb-2">&copy; {new Date().getFullYear()} Vizco. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-gray-400 text-sm">
          <span>Location: 501 Folsom St, San Francisco, CA 94105</span>
          <span className="hidden md:inline mx-2">|</span>
          <span>
            Email: <a href="mailto:info@vizco.co" className="underline hover:text-purple-700">info@vizco.co</a>
          </span>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/products" className="underline hover:text-purple-700">Products</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/careers" className="underline hover:text-purple-700">Careers</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/team" className="underline hover:text-purple-700">Team</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/blog" className="underline hover:text-purple-700">Blog</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/privacy-policy" className="underline hover:text-purple-700">Privacy Policy</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/terms-of-service" className="underline hover:text-purple-700">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
