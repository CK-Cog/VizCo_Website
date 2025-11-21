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
          <span className="text-sm text-purple-300 font-semibold">Use frontier AI models without exposing sensitive data</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">
          The AI Governance Layer
        </h1>
        <p className="text-xl sm:text-2xl text-center max-w-3xl mb-4 text-gray-200">
          Enforce policies on content, access, and actions—<span className="text-purple-400 font-semibold">locally, before data reaches any model</span>—so your organization can use frontier AI models safely.
        </p>
        <p className="text-base text-center max-w-2xl mb-8 text-gray-400">
          Not a SaaS endpoint. Not a third-party proxy. Vizco runs in your environment, redacting sensitive data while enabling full AI productivity with ChatGPT, Claude, and Gemini.
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
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950 via-opacity-10 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Three Ways to Use AI—Only One Keeps Sensitive Data Private
          </h2>
          <p className="text-center text-gray-400 mb-3 max-w-3xl mx-auto text-lg">
            Your data already lives in Google Workspace, Azure, and private cloud
          </p>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            With Vizco, it never has to leave—policies enforce where your data already exists
          </p>
          
          {/* Three Paths Diagram */}
          <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-gray-800 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Path 1: Third-Party Preprocessing */}
              <div className="flex flex-col items-center">
                <div className="mb-4 px-4 py-2 bg-red-900 bg-opacity-30 border border-red-800 rounded-full">
                  <span className="text-red-300 font-semibold text-sm">❌ Path 1: Third-Party Preprocessing</span>
                </div>
                
                <div className="w-full space-y-4">
                  {/* Data Source */}
                  <div className="bg-blue-950 bg-opacity-30 border-2 border-blue-800 rounded-xl p-4">
                    <div className="text-center mb-2">
                      <div className="text-2xl mb-1">☁️</div>
                      <div className="text-white font-semibold text-sm">Your Cloud</div>
                      <div className="text-blue-400 text-xs">Google Workspace / Azure</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-red-500 animate-pulse">
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Third Party */}
                  <div className="bg-red-950 bg-opacity-40 border-2 border-red-800 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-500 opacity-10 animate-pulse"></div>
                    <div className="text-center mb-2 relative z-10">
                      <div className="text-2xl mb-1">⚠️</div>
                      <div className="text-red-300 font-semibold text-sm">Competitor API</div>
                      <div className="text-red-400 text-xs">Sensitive data exposed</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-red-500">
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* AI Model */}
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🤖</div>
                      <div className="text-white font-semibold text-sm">AI Model</div>
                      <div className="text-gray-400 text-xs">ChatGPT/Claude</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-red-400 text-xs font-semibold">❌ Data left your control</p>
                </div>
              </div>
              
              {/* Path 2: Direct to Model */}
              <div className="flex flex-col items-center">
                <div className="mb-4 px-4 py-2 bg-red-900 bg-opacity-30 border border-red-800 rounded-full">
                  <span className="text-red-300 font-semibold text-sm">❌ Path 2: Direct to Model</span>
                </div>
                
                <div className="w-full space-y-4">
                  {/* Data Source */}
                  <div className="bg-blue-950 bg-opacity-30 border-2 border-blue-800 rounded-xl p-4">
                    <div className="text-center mb-2">
                      <div className="text-2xl mb-1">☁️</div>
                      <div className="text-white font-semibold text-sm">Your Cloud</div>
                      <div className="text-blue-400 text-xs">Google Workspace / Azure</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-red-500 animate-pulse" style={{animationDelay: '0.3s'}}>
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* No preprocessing - empty space */}
                  <div className="bg-gray-950 bg-opacity-40 border-2 border-gray-700 rounded-xl p-4 border-dashed">
                    <div className="text-center mb-2">
                      <div className="text-2xl mb-1 opacity-30">∅</div>
                      <div className="text-gray-500 font-semibold text-sm">No Protection</div>
                      <div className="text-gray-600 text-xs">Raw data sent</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-red-500">
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* AI Model */}
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🤖</div>
                      <div className="text-white font-semibold text-sm">AI Model</div>
                      <div className="text-gray-400 text-xs">ChatGPT/Claude</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-red-400 text-xs font-semibold">❌ Data left your control</p>
                </div>
              </div>
              
              {/* Path 3: Vizco */}
              <div className="flex flex-col items-center">
                <div className="mb-4 px-4 py-2 bg-purple-900 bg-opacity-30 border border-purple-700 rounded-full">
                  <span className="text-purple-300 font-semibold text-sm">✅ Path 3: Vizco</span>
                </div>
                
                <div className="w-full space-y-4">
                  {/* Data Source */}
                  <div className="bg-blue-950 bg-opacity-30 border-2 border-blue-800 rounded-xl p-4">
                    <div className="text-center mb-2">
                      <div className="text-2xl mb-1">☁️</div>
                      <div className="text-white font-semibold text-sm">Your Cloud</div>
                      <div className="text-blue-400 text-xs">Google Workspace / Azure</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-purple-500">
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* Vizco Layer */}
                  <div className="bg-purple-950 bg-opacity-40 border-2 border-purple-700 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500 opacity-10"></div>
                    <div className="text-center mb-2 relative z-10">
                      <div className="text-2xl mb-1">🛡️</div>
                      <div className="text-purple-300 font-semibold text-sm">Vizco Layer</div>
                      <div className="text-purple-400 text-xs">Runs in your cloud</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <svg width="4" height="50" viewBox="0 0 4 50" className="text-purple-500">
                      <line x1="2" y1="0" x2="2" y2="50" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3"/>
                      <polygon points="0,45 2,50 4,45" fill="currentColor"/>
                    </svg>
                  </div>
                  
                  {/* AI Model */}
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 opacity-80">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🤖</div>
                      <div className="text-white font-semibold text-sm">AI Model</div>
                      <div className="text-purple-400 text-xs">Redacted data only</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-purple-400 text-xs font-semibold">✅ Sensitive data stayed in your cloud</p>
                </div>
              </div>
              
            </div>
            
            {/* Bottom Explanation */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-red-400 font-semibold mb-2 text-sm">Third-Party Risk</p>
                  <p className="text-gray-500 text-xs">Your sensitive data flows through competitor servers before reaching AI</p>
                </div>
                <div>
                  <p className="text-red-400 font-semibold mb-2 text-sm">Direct Exposure</p>
                  <p className="text-gray-500 text-xs">Raw PII and confidential data sent directly to AI models</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold mb-2 text-sm">Vizco: Policy Where Data Lives</p>
                  <p className="text-gray-400 text-xs">Enforce redaction, access, and action policies in your Google Workspace, Azure, or private cloud—status quo maintained</p>
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

      {/* How It Works - Visual Cards */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Three-Layer Policy Enforcement
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            All policies run locally—before any data leaves your device
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Content Card */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border-2 border-purple-800 rounded-2xl p-6 hover:border-purple-600 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-900 bg-opacity-30 border-2 border-purple-700 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping"></div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-purple-400 relative z-10">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 6h3M8 17h3M17 8v3M17 17v3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-white">Content</h3>
              <p className="text-center text-gray-300 font-semibold mb-2 text-sm">Redact PII & Sensitive Data</p>
              <div className="bg-black bg-opacity-40 border border-purple-800 rounded-lg p-3 text-xs mb-3">
                <div className="text-red-400 line-through mb-1">SSN: 123-45-6789</div>
                <div className="text-purple-400">SSN: [REDACTED]</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Auto-detect PII, privileged content, confidential data
              </p>
            </div>

            {/* Access Card */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border-2 border-purple-800 rounded-2xl p-6 hover:border-purple-600 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-900 bg-opacity-30 border-2 border-purple-700 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping" style={{animationDelay: '0.2s'}}></div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-purple-400 relative z-10">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-white">Access</h3>
              <p className="text-center text-gray-300 font-semibold mb-2 text-sm">Control What Agents See</p>
              <div className="bg-black bg-opacity-40 border border-purple-800 rounded-lg p-3 text-xs mb-3">
                <div className="text-purple-400 mb-1">✅ Matter A: Access Granted</div>
                <div className="text-red-400">❌ Matter B: Access Denied</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Matter-level & role-based permissions enforced locally
              </p>
            </div>

            {/* Actions Card */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border-2 border-purple-800 rounded-2xl p-6 hover:border-purple-600 transition-all hover:scale-105 duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-purple-900 bg-opacity-30 border-2 border-purple-700 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-20 animate-ping" style={{animationDelay: '0.4s'}}></div>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-purple-400 relative z-10">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-white">Actions</h3>
              <p className="text-center text-gray-300 font-semibold mb-2 text-sm">Govern Tool Usage</p>
              <div className="bg-black bg-opacity-40 border border-purple-800 rounded-lg p-3 text-xs mb-3">
                <div className="text-green-400 mb-1">✅ Gmail: Read-only</div>
                <div className="text-yellow-400 mb-1">⚠️ Send: Needs Approval</div>
                <div className="text-red-400">❌ Drive: Blocked</div>
              </div>
              <p className="text-gray-400 text-sm text-center">
                Define tools, allow-lists, approval workflows
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-purple-400 font-semibold text-lg mb-2">All enforcement happens locally—use frontier AI models without exposing sensitive data</p>
            <p className="text-gray-500 text-sm">Deploy as desktop app, on-premise, or in your VPC</p>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-12 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-900 bg-opacity-20 border border-purple-800 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Zero Trust Architecture</h3>
              <p className="text-gray-400 text-sm">
                Sensitive data never leaves your environment without explicit policy enforcement. Your secrets stay your secrets.
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

