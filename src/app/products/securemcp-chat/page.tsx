import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SecureMCP Chat | A governed front door to ChatGPT, Claude, and Gemini",
  description:
    "A familiar chat experience for your whole team — running on frontier models, governed by your policies. Drop-in for direct ChatGPT use.",
};

export default function SecureMCPChatPage() {
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
            💬 SecureMCP Chat
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            The chat your team already wants — <span className="text-purple-400">governed by default</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg sm:text-xl mb-8">
            A familiar interface that runs on ChatGPT, Claude, and Gemini — but every prompt and response passes through your policies first. Same speed as direct AI. Zero shadow-AI risk.
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

      {/* Mock chat preview */}
      <section className="py-8 sm:py-12 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-purple-900/60 rounded-2xl p-5 sm:p-7 shadow-[0_0_60px_-20px_rgba(168,85,247,0.4)]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
              </div>
              <div className="text-xs text-gray-500">SecureMCP Chat · Claude 4.5</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-green-950/40 border border-green-900 rounded-full px-2 py-0.5">
                ● Governed
              </div>
            </div>

            {/* User message */}
            <div className="flex justify-end mb-4">
              <div className="max-w-[80%] bg-purple-900/40 border border-purple-800 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white">
                Draft a reply to Jane Smith (jane.smith@acme-corp.com, SSN 123-45-6789) about the $42M Project Orion deal.
              </div>
            </div>

            {/* Policy notice */}
            <div className="flex justify-center mb-4">
              <div className="text-[10px] uppercase tracking-wider text-purple-300 bg-purple-950/50 border border-purple-900 rounded-full px-3 py-1">
                🛡️ 4 identifiers redacted before sending to model
              </div>
            </div>

            {/* AI message */}
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-gray-800/60 border border-gray-700 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-gray-200">
                <p className="mb-2">Hi Jane,</p>
                <p className="mb-2">Thanks for the note on Project Orion. To confirm next steps on the $42M agreement, we&apos;ll need...</p>
                <p className="text-xs text-purple-300 mt-3 pt-2 border-t border-gray-700">↻ Identifiers restored locally before display</p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-xs mt-4">Illustrative — your policies, your model providers, your branding.</p>
        </div>
      </section>

      {/* Why teams adopt it */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">Why teams switch from direct ChatGPT</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Familiar to use, governed by default — so people stop pasting sensitive data into consumer accounts.</p>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: "🚪",
                title: "End shadow AI for good",
                body: "When the sanctioned tool is as fast and as good as ChatGPT, people use it. No more pasting client data into personal accounts.",
              },
              {
                icon: "🤖",
                title: "Bring your own model",
                body: "ChatGPT, Claude, Gemini, and your own self-hosted models — switch per task, per team, or per data class.",
              },
              {
                icon: "👥",
                title: "Policies that match your org chart",
                body: "Per-user, per-team, per-matter policies. Legal sees one set of rules; engineering sees another. All enforced before the prompt leaves.",
              },
              {
                icon: "📋",
                title: "Every conversation, fully audited",
                body: "Immutable log of every prompt, response, redaction, and override. SOC 2, HIPAA, and your compliance team can finally answer 'who used AI for what?'",
              },
              {
                icon: "🔌",
                title: "Connects to your tools, not their cloud",
                body: "Pull from internal data sources via SecureMCP — without exposing API keys, OAuth tokens, or service accounts to the model.",
              },
              {
                icon: "🏢",
                title: "Deploys inside your environment",
                body: "Desktop, private cloud, or air-gapped. SSO with your existing identity provider. No third party sees the conversation.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-900/50 rounded-2xl p-6 hover:border-purple-700 transition-all">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What flows through */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-4">
              Under the hood
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Every message takes the safe path</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">SecureMCP Chat is the front door. SecureMCP&apos;s policy engine is the bouncer.</p>
          </div>

          <div className="space-y-3">
            {[
              { step: "01", label: "User sends prompt", body: "Through a familiar chat UI. SSO-authenticated." },
              { step: "02", label: "SecureMCP policies fire", body: "Redaction, role / matter access, prompt-injection defense, action approval gates." },
              { step: "03", label: "Model receives only what&apos;s allowed", body: "Identifiers leave as placeholders. Off-limits content never enters the prompt." },
              { step: "04", label: "Response comes back through policy", body: "Output validated, identifiers restored locally, log written to immutable audit." },
              { step: "05", label: "User sees a normal answer", body: "Same speed as ChatGPT. Full personalization. Zero data exposure." },
            ].map((row) => (
              <div key={row.step} className="flex items-start gap-4 sm:gap-5 bg-gradient-to-r from-purple-950/30 to-black border border-purple-900/50 rounded-xl p-4 sm:p-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-900/50 border border-purple-700 flex items-center justify-center text-xs font-bold text-purple-200">
                  {row.step}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base sm:text-lg mb-0.5">{row.label}</h3>
                  <p className="text-sm text-gray-400" dangerouslySetInnerHTML={{ __html: row.body }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-14 sm:py-20 px-6 sm:px-12 bg-black">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-950/30 via-purple-900/20 to-purple-950/30 border border-purple-900/60 rounded-3xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-purple-200 bg-purple-900/50 border border-purple-700 rounded-full px-3 py-1 mb-4">
              Built for regulated work
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">A chat tool your compliance team will actually approve</h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              No third-party SaaS holding your prompts. No vendor cloud seeing your data. No question about where the audit log lives.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {["SOC 2 aligned", "HIPAA-ready", "Air-gap deployable", "SSO + RBAC"].map((p) => (
              <div key={p} className="text-xs sm:text-sm text-purple-200 bg-purple-950/40 border border-purple-900/60 rounded-xl px-3 py-2.5">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 sm:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Replace shadow AI with sanctioned AI</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">See SecureMCP Chat in your environment, with your policies, in 30 minutes.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="https://calendly.com/chris-kelly-stanford/1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
          >
            Book a Demo
          </a>
          <Link href="/products/securemcp-memory" className="inline-flex items-center gap-2 text-purple-300 hover:text-white font-semibold transition-colors px-4 py-2">
            Or explore SecureMCP Memory
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
