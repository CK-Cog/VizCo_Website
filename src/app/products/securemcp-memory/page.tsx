import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SecureMCP Memory | An institutional memory layer for frontier AI",
  description:
    "Turn your archive into a living memory layer that frontier AI models can use — without any of it leaving your environment. Compliant by design.",
};

export default function SecureMCPMemoryPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-purple-700/10 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto relative text-center">
          <Link href="/products" className="inline-block text-xs text-purple-300 hover:text-white mb-6 uppercase tracking-[0.2em] font-semibold">
            ← All Products
          </Link>
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-5">
            🧠 SecureMCP Memory
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            AI that learns how <span className="text-purple-400">you</span> work — without anything leaving your walls
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl mb-8">
            Your archive is your edge. SecureMCP Memory turns it into a living memory layer that compounds over time, so frontier models start sounding like your organization — not the internet.
          </p>
          <a
            href="https://calendly.com/chris-kelly-stanford/1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
          >
            Book a Demo
          </a>
        </div>
      </section>

      {/* The problem */}
      <section className="py-12 sm:py-16 px-6 sm:px-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Frontier models are smart. They just don&apos;t know <em className="text-purple-400 not-italic">you</em>.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🤷</div>
              <h3 className="font-bold text-white mb-2">Generic answers</h3>
              <p className="text-sm text-gray-400">Every prompt starts from zero. The model has no idea how your firm has handled this before.</p>
            </div>
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🔁</div>
              <h3 className="font-bold text-white mb-2">Context never accumulates</h3>
              <p className="text-sm text-gray-400">RAG re-discovers everything on every query. Nothing is built up. Nothing gets sharper.</p>
            </div>
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-2xl p-6">
              <div className="text-2xl mb-3">🚪</div>
              <h3 className="font-bold text-white mb-2">Sending data out is off the table</h3>
              <p className="text-sm text-gray-400">Fine-tuning on a vendor&apos;s cloud means handing over your most sensitive content. Most regulated orgs can&apos;t.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The approach — 3-step flow */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-4">
              How it works
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">A memory layer that compounds — locally</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              SecureMCP Memory sits between your raw archive and your AI. It reads, organizes, and maintains an evolving knowledge layer in place — and updates itself as new work lands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            <div className="bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">📚</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">Step 01</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Your archive stays put</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Memos, prior matters, playbooks, transcripts, emails — read in place inside your environment. Sources are immutable. Nothing copies out.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-900/40 to-black border border-purple-700 rounded-2xl p-6 sm:p-7 shadow-[0_0_40px_-15px_rgba(168,85,247,0.6)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-800/60 border border-purple-600 flex items-center justify-center text-xl">🧠</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">Step 02</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Memory compounds it</h3>
              <p className="text-sm sm:text-base text-gray-400">
                A maintained memory layer captures entities, decisions, precedent, and tone — all interlinked, all updated as new work lands. Compiled once, kept current.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-950/40 to-black border border-purple-900/60 rounded-2xl p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xl">✨</div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">Step 03</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">AI that knows you</h3>
              <p className="text-sm sm:text-base text-gray-400">
                Frontier models answer using your firm&apos;s actual logic and language — grounded in real precedent, with citations back to the source.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">What it gives you</h2>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: "📈",
                title: "Answers that get sharper over time",
                body: "Every new memo, transcript, or matter strengthens the memory. Today&apos;s answer is better than last month&apos;s — without anyone re-uploading anything.",
              },
              {
                icon: "🧭",
                title: "Cited, traceable reasoning",
                body: "Every AI response links back to the original source. No hallucinated precedent. Reviewers can audit the chain.",
              },
              {
                icon: "🏛️",
                title: "Institutional voice, not generic AI",
                body: "Drafts read like your firm. Recommendations match how you actually decide. The model uses your playbook, not the public internet&apos;s.",
              },
              {
                icon: "🔐",
                title: "Compliant by design",
                body: "Reading, organizing, and serving — all inside your environment. No external training. No data egress. Fits SOC 2, HIPAA, GLBA, and air-gapped requirements.",
              },
              {
                icon: "🔄",
                title: "No re-ingestion treadmill",
                body: "Drop new work in. The memory updates itself: new entities are added, prior pages are revised, contradictions are flagged for review.",
              },
              {
                icon: "🛡️",
                title: "Same governance you already trust",
                body: "Role and matter access, redaction, and audit logging from SecureMCP apply throughout. The memory layer doesn&apos;t bypass policy — it inherits it.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 rounded-2xl p-6 hover:border-purple-700 transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: f.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">Where it makes a difference</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">A few of the patterns we see most often.</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "⚖️", title: "Legal", body: "Prior matters, opinions, and clauses become live precedent that drafts can cite." },
              { icon: "💼", title: "Financial Services", body: "Policy memos, deal notes, and research compound into a sharper analyst on day one." },
              { icon: "🏥", title: "Healthcare", body: "Internal protocols and case notes inform clinical and operational AI — without exposing PHI." },
            ].map((u) => (
              <div key={u.title} className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{u.icon}</div>
                <h3 className="font-bold text-white mb-2">{u.title}</h3>
                <p className="text-sm text-gray-400">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance assurance */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-black">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-950/30 via-purple-900/20 to-purple-950/30 border border-purple-900/60 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-4">
              The compliance line
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">If it can&apos;t leave, it stays compliant.</h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              SecureMCP Memory is built on the same foundation as the rest of the Vizco platform: nothing sensitive ever crosses your perimeter. Reads happen in place. The memory layer lives in your environment. Frontier models see only what your policies allow.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {["No external training", "No data egress", "Air-gap deployable", "Full audit trail"].map((p) => (
              <div key={p} className="text-xs sm:text-sm text-purple-200 bg-purple-950/40 border border-purple-900/60 rounded-xl px-3 py-2.5">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 sm:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">See your archive come to life</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">A 30-minute walkthrough on a sandboxed copy of your data. We deploy in your environment from day one.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://calendly.com/chris-kelly-stanford/1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
          >
            Book a Demo
          </a>
          <Link href="/products/securemcp-chat" className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors px-4 py-2">
            Or explore SecureMCP Chat
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
