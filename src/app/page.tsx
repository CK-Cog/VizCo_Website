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
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent px-4">
          The AI Governance Layer
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center max-w-3xl mb-4 text-gray-200 px-4">
          Enforce policies on content, access, and actions—<span className="text-purple-400 font-semibold">locally, before data reaches any model</span>—so your organization can use frontier AI models safely.
        </p>
        <p className="text-sm sm:text-base text-center max-w-2xl mb-8 text-gray-400 px-4">
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

      {/* How Vizco Governs Agents */}
      <section className="py-16 px-6 sm:px-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-white px-4">
            How Vizco Governs Agents
          </h2> 
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3">🔍</div>
              <div className="text-purple-300 font-bold mb-2 text-base sm:text-lg">Control What Agents See</div>
              <div className="text-gray-400 text-sm sm:text-base">Filter data access by role, matter, or policy before it reaches the agent</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3">🛡️</div>
              <div className="text-purple-300 font-bold mb-2 text-base sm:text-lg">Redact Sensitive Content</div>
              <div className="text-gray-400 text-sm sm:text-base">Automatically remove PII, privileged information, and confidential data</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl sm:text-5xl mb-3">✋</div>
              <div className="text-purple-300 font-bold mb-2 text-base sm:text-lg">Restrict Actions</div>
              <div className="text-gray-400 text-sm sm:text-base">Require approvals for high-risk actions like sending emails or deleting files</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference - Visual Comparison */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-black via-purple-950 via-opacity-10 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white px-4">
            Three Ways to Connect Your Data to AI
          </h2>
          <p className="text-center text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg px-4">
            Only one keeps sensitive data within your environment
          </p>
          
          {/* Horizontal Mediation Plot - Desktop only, hidden on mobile */}
          <div className="hidden md:block bg-gradient-to-b from-gray-950 to-black border-2 border-gray-800 rounded-3xl p-8">
            
            {/* Data Source Left, AI Model Right, Three Paths */}
            <div className="flex items-center justify-between gap-4 min-h-[400px]">
              
              {/* Data Source (Left) */}
              <div className="flex-shrink-0 w-48">
                <div className="bg-blue-950 bg-opacity-40 border-2 border-blue-800 rounded-xl p-5">
                  <div className="text-center">
                    <div className="text-blue-300 font-bold text-sm mb-3">Your Data Sources</div>
                    <div className="flex justify-center gap-2 mb-3">
                      <div className="bg-white rounded p-1.5">
                        <Image src="/gmail_logo.svg" alt="Gmail" width={24} height={24} />
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <Image src="/azure_logo.svg" alt="Azure" width={24} height={24} />
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <Image src="/google_drive_logo.svg" alt="Drive" width={24} height={24} />
                      </div>
                    </div>
                    <div className="text-orange-400 text-xs font-semibold">Private data</div>
                  </div>
                </div>
              </div>
              
              {/* Three Paths in Middle */}
              <div className="flex-1 relative" style={{height: '600px'}}>
                
                {/* Red legend - positioned near the risky paths */}
                <div className="absolute top-0 right-4 z-10">
                  <div className="bg-red-900 px-3 py-1.5 border-2 border-red-700 rounded-lg text-xs text-red-300 font-bold whitespace-nowrap animate-pulse">
                    ⚠️ Sensitive data leaves your environment
                  </div>
                </div>
                
                {/* Path 1: Direct (Bottom - Straight) */}
                <div className="absolute bottom-16 left-0 right-0 flex items-center">
                  <div className="flex-1 relative h-12">
                    <svg width="100%" height="48" viewBox="0 0 800 48" preserveAspectRatio="none" className="absolute inset-0">
                      <line x1="0" y1="24" x2="800" y2="24" stroke="#ef4444" strokeWidth="3"/>
                      <circle cx="400" cy="24" r="5" fill="#ef4444">
                        <animate attributeName="cx" from="0" to="800" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <polygon points="795,19 805,24 795,29" fill="#ef4444"/>
                    </svg>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-red-400 text-sm font-semibold">
                      ⚠️ Typical AI Use (No Policy Layer)
                    </div>
                  </div>
                </div>
                
                {/* Path 2: Via Competitor (Top - Through Cloud) */}
                <div className="absolute top-8 left-0 right-0 flex items-center">
                  <div className="flex-1 flex items-center gap-2">
                    {/* Arrow to competitor */}
                    <svg width="35%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <line x1="0" y1="60" x2="280" y2="20" stroke="#ef4444" strokeWidth="3"/>
                      <circle cx="140" cy="40" r="5" fill="#ef4444">
                        <animate attributeName="cx" from="0" to="280" dur="2s" repeatCount="indefinite"/>
                        <animate attributeName="cy" from="60" to="20" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <polygon points="275,15 285,20 280,25" fill="#ef4444"/>
                    </svg>
                    
                    {/* Competitor box */}
                    <div className="flex-shrink-0">
                      <div className="bg-red-950 border-2 border-red-800 rounded-xl p-4">
                        <div className="text-center">
                          <div className="text-3xl mb-2">☁️</div>
                          <div className="text-red-300 font-bold text-sm mb-1">⚠️ SaaS Policy Enforcement</div>
                          <div className="text-red-400 text-xs">Private data sent to external endpoint</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow from competitor */}
                    <svg width="35%" height="80" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <line x1="20" y1="20" x2="300" y2="60" stroke="#ef4444" strokeWidth="3"/>
                      <circle cx="160" cy="40" r="5" fill="#ef4444">
                        <animate attributeName="cx" from="20" to="300" dur="2s" repeatCount="indefinite" begin="2s"/>
                        <animate attributeName="cy" from="20" to="60" dur="2s" repeatCount="indefinite" begin="2s"/>
                      </circle>
                      <polygon points="295,55 305,60 300,65" fill="#ef4444"/>
                    </svg>
                  </div>
                </div>
                
                {/* Path 3: Via Vizco (Middle - Through Shield) */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0 flex items-center">
                  <div className="flex-1 flex items-center gap-2">
                    {/* Arrow to Vizco */}
                    <svg width="35%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
                      <line x1="0" y1="30" x2="280" y2="30" stroke="#22c55e" strokeWidth="3"/>
                      <circle cx="140" cy="30" r="5" fill="#22c55e">
                        <animate attributeName="cx" from="0" to="280" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <polygon points="275,25 285,30 275,35" fill="#22c55e"/>
                    </svg>
                    
                    {/* Vizco box */}
                    <div className="flex-shrink-0 relative">
                      {/* Green legend to the left of Vizco box */}
                      <div className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 -ml-3 bg-green-900 px-3 py-1.5 border-2 border-green-600 rounded-lg text-xs text-green-300 font-bold whitespace-nowrap z-20">
                        ✅ Stays in your environment
                      </div>
                      <div className="border-2 border-dashed border-blue-600 bg-blue-950 bg-opacity-20 rounded-xl p-3 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 border border-blue-600 rounded text-xs text-blue-400 font-bold whitespace-nowrap">
                          🔒 YOUR ENVIRONMENT
                        </div>
                        <div className="bg-purple-950 border-2 border-purple-600 rounded-lg p-4 mt-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-purple-500 opacity-10 animate-pulse"></div>
                          <div className="text-center relative z-10">
                            <div className="text-3xl mb-2">🛡️</div>
                            <div className="text-purple-300 font-bold text-sm mb-1">Vizco</div>
                            <div className="text-purple-400 text-xs mb-1">Policy enforcement</div>
                            <div className="text-purple-500 text-xs">Including PII redaction • Access control</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow from Vizco (dashed) */}
                    <svg width="35%" height="60" viewBox="0 0 300 60" preserveAspectRatio="none">
                      <line x1="20" y1="30" x2="300" y2="30" stroke="#22c55e" strokeWidth="3" strokeDasharray="8,4"/>
                      <circle cx="160" cy="30" r="5" fill="#22c55e">
                        <animate attributeName="cx" from="20" to="300" dur="2s" repeatCount="indefinite" begin="2s"/>
                      </circle>
                      <polygon points="295,25 305,30 295,35" fill="#22c55e"/>
                    </svg>
                  </div>
                </div>
                
              </div>
              
              {/* AI Model (Right) */}
              <div className="flex-shrink-0 w-48">
                <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-5">
                  <div className="text-center">
                    <div className="text-gray-300 font-bold text-sm mb-3">AI Models</div>
                    <div className="flex justify-center gap-2 mb-2">
                      <div className="bg-white rounded p-1.5">
                        <Image src="/chatgpt_logo.svg" alt="ChatGPT" width={24} height={24} />
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <Image src="/claude_logo.svg" alt="Claude" width={24} height={24} />
                      </div>
                      <div className="bg-white rounded p-1.5">
                        <Image src="/gemini_logo.svg" alt="Gemini" width={24} height={24} />
                      </div>
                    </div>
                    <div className="text-gray-400 text-xs">Frontier models</div>
                  </div>
                </div>
              </div>
              
            </div>
            
            {/* Info boxes below paths */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {/* Direct Path Info */}
              <div className="bg-red-950 bg-opacity-30 border border-red-800 rounded-xl p-4">
                <div className="text-red-300 font-bold text-sm mb-2">⚠️ Typical AI Use</div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Using ChatGPT, Claude, Gemini directly</div>
                  <div>• No policy enforcement</div>
                  <div>• Sensitive data exposed to AI provider</div>
                </div>
              </div>
              
              {/* Third-Party Path Info */}
              <div className="bg-red-950 bg-opacity-30 border border-red-800 rounded-xl p-4">
                <div className="text-red-300 font-bold text-sm mb-2">⚠️ SaaS Policy Enforcement</div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Data exits your environment</div>
                  <div>• External preprocessing</div>
                  <div>• Compliance risk</div>
                </div>
              </div>
              
              {/* Vizco Path Info */}
              <div className="bg-green-950 bg-opacity-30 border border-green-700 rounded-xl p-4">
                <div className="text-green-300 font-bold text-sm mb-2">✅ Via Vizco</div>
                <div className="text-green-400 text-xs space-y-1">
                  <div>• Data remains in your environment</div>
                  <div>• Policy enforcement at source</div>
                  <div>• Automatic PII redaction</div>
                </div>
              </div>
          </div>
          </div>
          
          {/* Mobile Version - Vertical Stack */}
          <div className="md:hidden space-y-6 px-4">
            
            {/* Legend for mobile */}
            <div className="bg-red-900 px-3 py-2 border-2 border-red-700 rounded-xl text-xs sm:text-sm text-red-300 font-bold text-center animate-pulse">
              ⚠️ Sensitive data leaves your environment
            </div>
            
            {/* Data Source */}
            <div className="bg-blue-950 bg-opacity-40 border-2 border-blue-800 rounded-xl p-5">
              <div className="text-center">
                <div className="text-blue-300 font-bold text-sm mb-3">Your Data Sources</div>
                <div className="flex justify-center gap-2 mb-3">
                  <div className="text-2xl">📧</div>
                  <div className="text-2xl">☁️</div>
                  <div className="text-2xl">📁</div>
                </div>
                <div className="text-orange-400 text-xs font-semibold">Private data</div>
              </div>
            </div>
            
            {/* Three Paths */}
            <div className="space-y-6">
              
              {/* Direct Path */}
              <div className="bg-red-950 bg-opacity-30 border-2 border-red-800 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-red-300 font-bold mb-2">⚠️ Typical AI Use</div>
                  <svg width="60" height="80" viewBox="0 0 60 80" className="mx-auto">
                    <line x1="30" y1="0" x2="30" y2="70" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="30" cy="35" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="70" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="25,70 30,80 35,70" fill="#ef4444"/>
                  </svg>
                </div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Using ChatGPT, Claude, Gemini directly</div>
                  <div>• No policy enforcement</div>
                  <div>• Sensitive data exposed to AI provider</div>
                </div>
              </div>
              
              {/* Third-Party Path */}
              <div className="bg-red-950 bg-opacity-30 border-2 border-red-800 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-red-300 font-bold mb-2">⚠️ SaaS Policy Enforcement</div>
                  <svg width="120" height="140" viewBox="0 0 120 140" className="mx-auto">
                    <line x1="60" y1="0" x2="60" y2="40" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="60" cy="20" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="40" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <rect x="30" y="45" width="60" height="40" rx="8" fill="#7f1d1d" stroke="#ef4444" strokeWidth="2"/>
                    <text x="60" y="65" fontSize="20" textAnchor="middle">☁️</text>
                    <text x="60" y="78" fontSize="6" textAnchor="middle" fill="#fca5a5">SaaS Policy</text>
                    <line x1="60" y1="85" x2="60" y2="130" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="60" cy="107" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="85" to="130" dur="1.5s" repeatCount="indefinite" begin="1.5s"/>
                    </circle>
                    <polygon points="55,130 60,140 65,130" fill="#ef4444"/>
                  </svg>
                </div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Data exits your environment</div>
                  <div>• External preprocessing</div>
                  <div>• Compliance risk</div>
                </div>
              </div>
              
              {/* Vizco Path */}
              <div className="bg-green-950 bg-opacity-30 border-2 border-green-700 rounded-xl p-4">
                <div className="text-center mb-3">
                  <div className="text-green-300 font-bold mb-2">✅ Via Vizco</div>
                  <svg width="120" height="160" viewBox="0 0 120 160" className="mx-auto">
                    <line x1="60" y1="0" x2="60" y2="45" stroke="#22c55e" strokeWidth="3"/>
                    <circle cx="60" cy="22" r="4" fill="#22c55e">
                      <animate attributeName="cy" from="0" to="45" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <rect x="20" y="50" width="80" height="50" rx="8" fill="#7c3aed" stroke="#a78bfa" strokeWidth="2"/>
                    <text x="60" y="70" fontSize="20" textAnchor="middle">🛡️</text>
                    <text x="60" y="85" fontSize="7" textAnchor="middle" fill="#e9d5ff">Vizco Shield</text>
                    <text x="60" y="93" fontSize="6" textAnchor="middle" fill="#c4b5fd">YOUR ENVIRONMENT</text>
                    <circle cx="60" cy="75" r="30" fill="none" stroke="#a78bfa" strokeWidth="1" opacity="0.5">
                      <animate attributeName="r" from="30" to="40" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <line x1="60" y1="100" x2="60" y2="150" stroke="#22c55e" strokeWidth="3" strokeDasharray="4,4"/>
                    <circle cx="60" cy="125" r="4" fill="#22c55e">
                      <animate attributeName="cy" from="100" to="150" dur="1.5s" repeatCount="indefinite" begin="1.5s"/>
                    </circle>
                    <polygon points="55,150 60,160 65,150" fill="#22c55e"/>
                  </svg>
                </div>
                <div className="text-green-400 text-xs space-y-1">
                  <div>• Data remains in your environment</div>
                  <div>• Policy enforcement at source</div>
                  <div>• Automatic PII redaction</div>
                </div>
              </div>
            </div>
            
            {/* AI Models */}
            <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-5">
              <div className="text-center">
                <div className="text-gray-300 font-bold text-sm mb-3">AI Models</div>
                <div className="flex justify-center gap-2 mb-2">
                  <div className="text-2xl">🤖</div>
                  <div className="text-2xl">🤖</div>
                  <div className="text-2xl">🤖</div>
                </div>
                <div className="text-gray-400 text-xs">ChatGPT • Claude • Gemini</div>
              </div>
            </div>
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
                Sensitive data never leaves your environment without explicit policy enforcement.
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


