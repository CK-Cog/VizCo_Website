import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Vizco",
  description:
    "Vizco builds the AI governance layer for regulated industries — SecureMCP, SecureMCP Chat, and SecureMCP Memory.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-5">
            Products
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            One governance layer. <span className="text-purple-400">Two front doors.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Every Vizco product runs on the same foundation — <Link href="/" className="text-purple-300 hover:text-white underline">SecureMCP</Link>, the policy enforcement layer that keeps sensitive data inside your environment. Pick the way your team wants to use it.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="py-8 sm:py-12 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* SecureMCP Chat */}
          <Link
            href="/products/securemcp-chat"
            className="group block bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-3xl p-7 sm:p-9 hover:border-purple-600 hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-2xl">
                💬
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-900 rounded-full px-2.5 py-1">
                For everyone
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">SecureMCP Chat</h2>
            <p className="text-purple-300 text-sm font-medium mb-4">A governed front door to ChatGPT, Claude, and Gemini</p>
            <p className="text-gray-400 text-base mb-6">
              Give your whole team a familiar chat interface that runs on frontier models — but with every prompt and response governed by your policies, automatically.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex gap-2"><span className="text-purple-400">→</span> Drop-in replacement for direct ChatGPT use</li>
              <li className="flex gap-2"><span className="text-purple-400">→</span> Per-user, per-team policy enforcement</li>
              <li className="flex gap-2"><span className="text-purple-400">→</span> Full audit trail for every conversation</li>
            </ul>
            <span className="inline-flex items-center gap-2 text-purple-300 group-hover:text-white font-semibold transition-colors">
              Explore SecureMCP Chat
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          {/* SecureMCP Memory */}
          <Link
            href="/products/securemcp-memory"
            className="group block bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-3xl p-7 sm:p-9 hover:border-purple-600 hover:shadow-[0_0_60px_-15px_rgba(168,85,247,0.5)] transition-all"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-2xl">
                🧠
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-950/60 border border-purple-900 rounded-full px-2.5 py-1">
                For your archive
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">SecureMCP Memory</h2>
            <p className="text-purple-300 text-sm font-medium mb-4">An institutional memory layer that compounds over time</p>
            <p className="text-gray-400 text-base mb-6">
              Turn your archive — memos, prior matters, playbooks, transcripts — into a living memory layer that frontier models can use, without any of it leaving your walls.
            </p>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li className="flex gap-2"><span className="text-purple-400">→</span> Reads your archive in place — sources stay immutable</li>
              <li className="flex gap-2"><span className="text-purple-400">→</span> Compounds with every new document</li>
              <li className="flex gap-2"><span className="text-purple-400">→</span> Same governance you already trust</li>
            </ul>
            <span className="inline-flex items-center gap-2 text-purple-300 group-hover:text-white font-semibold transition-colors">
              Explore SecureMCP Memory
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      {/* Foundation strip */}
      <section className="py-12 sm:py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-950/30 via-purple-900/20 to-purple-950/30 border border-purple-900/60 rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-3">Built on</p>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">SecureMCP — the AI governance layer</h3>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-5">
            Every Vizco product runs through SecureMCP&apos;s policy engine: PII redaction, role and matter access, action approval gates, prompt-injection defense, and immutable audit — enforced locally, before data ever reaches a model.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors">
            See how SecureMCP works
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 sm:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">See it for yourself</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">Walk through a live deployment with the team and decide which front door fits your org.</p>
        <a
          href="https://calendly.com/chris-kelly-stanford/1-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
        >
          Book a Demo
        </a>
      </section>
    </div>
  );
}
