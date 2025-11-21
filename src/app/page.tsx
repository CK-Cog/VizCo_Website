import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-black">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900 bg-opacity-30 border border-purple-800 rounded-full mb-6">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-purple-400">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-purple-300 font-semibold">Your data never leaves your environment</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">
          The AI Governance Layer
        </h1>
        <p className="text-xl sm:text-2xl text-center max-w-3xl mb-4 text-gray-200">
          Enforce policies on content, access, and actions—<span className="text-purple-400 font-semibold">locally, before data reaches any model</span>—so your organization can adopt AI without compromise.
        </p>
        <p className="text-base text-center max-w-2xl mb-8 text-gray-400">
          Not a SaaS endpoint. Not a third-party proxy. Vizco runs in your environment, keeping sensitive data under your control while enabling AI productivity.
        </p>
        <a
          href="https://calendly.com/chris-kelly-stanford/1-1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg"
        >
          Book a Demo
        </a>
      </header>

      {/* The Difference - Visual Comparison */}
      <section className="py-12 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950 via-opacity-10 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            The Vizco Difference
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Unlike traditional SaaS AI tools, your sensitive data never leaves your control
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional SaaS */}
            <div className="bg-gradient-to-b from-red-950 from-opacity-20 to-black border border-red-900 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-red-900 bg-opacity-30 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Traditional SaaS AI</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Your data flows through third-party servers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Sensitive information exposed to external endpoints</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Limited control over data retention and access</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Compliance risks with regulated data</p>
                </div>
              </div>

              {/* Simple diagram */}
              <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-red-900">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded bg-gray-800 flex items-center justify-center">📧</div>
                    <div>Your Data</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="40" height="16" viewBox="0 0 40 16" className="text-red-500">
                      <path d="M0 8h40M32 2l8 6-8 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded bg-red-900 bg-opacity-30 flex items-center justify-center">☁️</div>
                    <div>SaaS Server</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="40" height="16" viewBox="0 0 40 16" className="text-red-500">
                      <path d="M0 8h40M32 2l8 6-8 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded bg-gray-800 flex items-center justify-center">🤖</div>
                    <div>AI Model</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vizco Approach */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border border-purple-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-900 bg-opacity-30 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Vizco (On-Premise)</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Runs locally in your environment (desktop, on-prem, VPC)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">PII redaction happens before data leaves your device</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">You control what data (if any) reaches external models</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300 text-sm">Full compliance with data residency requirements</p>
                </div>
              </div>

              {/* Simple diagram */}
              <div className="bg-black bg-opacity-40 rounded-lg p-4 border border-purple-800">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded bg-gray-800 flex items-center justify-center">📧</div>
                    <div>Your Data</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="40" height="16" viewBox="0 0 40 16" className="text-purple-500">
                      <path d="M0 8h40M32 2l8 6-8 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-12 mx-auto mb-2 rounded bg-purple-900 bg-opacity-30 flex items-center justify-center text-xs font-bold">🛡️ Vizco</div>
                    <div className="text-purple-400">Local Layer</div>
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <svg width="40" height="16" viewBox="0 0 40 16" className="text-purple-500">
                      <path d="M0 8h40M32 2l8 6-8 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded bg-gray-800 flex items-center justify-center">🤖</div>
                    <div>AI Model</div>
                    <div className="text-purple-400 text-[10px] mt-1">(redacted data)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="learn-more" className="px-6 sm:px-12 mb-16 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Enterprise-Grade AI Governance
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Every feature runs in your environment—giving you control, compliance, and confidence
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-purple-800 bg-gradient-to-b from-purple-950 from-opacity-20 to-black p-6 hover:border-purple-600 transition">
              <div className="w-12 h-12 rounded-lg bg-purple-900 bg-opacity-30 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 6h3M8 17h3M17 8v3M17 17v3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">PII Redaction</h3>
              <p className="text-gray-400 text-sm">
                Automatically detect and redact sensitive information (SSNs, account numbers, addresses) before any data reaches an AI model—locally, in real-time.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-800 bg-gradient-to-b from-purple-950 from-opacity-20 to-black p-6 hover:border-purple-600 transition">
              <div className="w-12 h-12 rounded-lg bg-purple-900 bg-opacity-30 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Matter‑Level Access</h3>
              <p className="text-gray-400 text-sm">
                Enforce case/client-specific permissions across all AI interactions. Only authorized users can query or generate content for sensitive matters.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-800 bg-gradient-to-b from-purple-950 from-opacity-20 to-black p-6 hover:border-purple-600 transition">
              <div className="w-12 h-12 rounded-lg bg-purple-900 bg-opacity-30 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Action Approvals</h3>
              <p className="text-gray-400 text-sm">
                Define allow-lists and approval workflows for high-risk actions (sending emails, filing documents). AI can draft, but humans approve.
              </p>
            </div>

            <div className="rounded-2xl border border-purple-800 bg-gradient-to-b from-purple-950 from-opacity-20 to-black p-6 hover:border-purple-600 transition">
              <div className="w-12 h-12 rounded-lg bg-purple-900 bg-opacity-30 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Model-Agnostic</h3>
              <p className="text-gray-400 text-sm">
                Works with any LLM (ChatGPT, Claude, Gemini) and integrates with your existing tools (Gmail, Drive, Slack, DMS). One policy layer, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            How Vizco Works
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Policy enforcement that runs entirely in your environment
          </p>
          
          <div className="max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-purple-900 bg-opacity-30 border-2 border-purple-700 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">Policy Enforcement</h3>
                <p className="text-gray-400 mb-4">
                  Before any data reaches an AI model, Vizco enforces your organization&apos;s policies locally on your device—controlling content, access, and actions:
                </p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">Content: Redact PII & Sensitive Data</p>
                      <p className="text-gray-400 text-sm">Automatically detect and redact PII, privileged content, and confidential information before AI processing.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">Access: Control What Agents See</p>
                      <p className="text-gray-400 text-sm">Enforce matter-level and role-based permissions—agents only access data users are authorized to see.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-1">Actions: Govern Tool Usage</p>
                      <p className="text-gray-400 text-sm">Define which tools agents can use and what actions they can perform (read-only vs. send, allow-lists, approvals).</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black bg-opacity-40 border border-gray-800 rounded-lg p-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-500 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-purple-500">
                      <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-purple-400">Example:</span>
                  </div>
                  <p className="text-gray-400 mb-1"><span className="text-red-400 line-through">John Smith, SSN: 123-45-6789, Client: Acme Corp</span></p>
                  <p className="text-gray-300 mb-3">→ <span className="text-purple-400">[REDACTED NAME], SSN: [REDACTED], Client: Acme Corp</span></p>
                  <p className="text-gray-400 text-xs">Agent restricted to: Gmail (read-only), Calendar (view), Drive (no access)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-12 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 bg-opacity-20 border border-purple-800 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Zero Trust Architecture</h3>
              <p className="text-gray-400 text-sm">
                No data leaves your environment without explicit policy approval. Your secrets stay your secrets.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 bg-opacity-20 border border-purple-800 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Compliance Ready</h3>
              <p className="text-gray-400 text-sm">
                Meets data residency, privilege protection, and audit requirements for regulated industries (legal, finance, healthcare).
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 bg-opacity-20 border border-purple-800 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Deploy in Minutes</h3>
              <p className="text-gray-400 text-sm">
                Desktop app or containerized deployment. No complex infrastructure—just download, configure policies, and go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backers Badges */}
      <div className="py-6 px-6 sm:px-12">
        <div className="flex items-center justify-center gap-6 flex-wrap text-gray-400 text-sm">
          <Image src="/entrepreneurs_first_logo.jpeg" alt="Entrepreneurs First" width={160} height={40} style={{ objectFit: "contain" }} />
          <Image src="/transposeplatform_logo.webp" alt="Transpose Platform" width={180} height={40} style={{ objectFit: "contain" }} />
          <span>Backed by Entrepreneurs First and Transpose Platform</span>
        </div>
      </div>

      <footer className="py-8 text-center text-gray-400 text-sm bg-black border-t border-gray-800 mt-auto">
        <div className="mb-2">&copy; {new Date().getFullYear()} Vizco. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-gray-400 text-sm">
          <span>Location: 501 Folsom St, San Francisco, CA 94105</span>
          <span className="hidden md:inline mx-2">|</span>
          <span>
            Email: <a href="mailto:info@vizco.co" className="underline hover:text-purple-700">info@vizco.co</a>
          </span>
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
