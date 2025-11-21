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
            Three Ways to Connect Your Data to AI
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
            Only one keeps sensitive data within your environment
          </p>
          
          {/* Horizontal Mediation Plot */}
          <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-gray-800 rounded-3xl p-8">
            
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
                    <div className="text-orange-400 text-xs font-semibold">Contains PII</div>
                  </div>
                </div>
              </div>
              
              {/* Three Paths in Middle */}
              <div className="flex-1 relative" style={{height: '550px'}}>
                
                {/* Legend for red paths */}
                <div className="absolute top-0 right-0 bg-red-900 px-4 py-2 border-2 border-red-700 rounded-xl text-xs text-red-300 font-bold whitespace-nowrap animate-pulse z-10">
                  ⚠️ Sensitive data exits your environment
                </div>
                
                {/* Path 1: Direct (Bottom - Straight) */}
                <div className="absolute bottom-20 left-0 right-0 flex items-center">
                  <div className="flex-1 relative h-12">
                    <svg width="100%" height="48" viewBox="0 0 800 48" preserveAspectRatio="none" className="absolute inset-0">
                      <line x1="0" y1="24" x2="800" y2="24" stroke="#ef4444" strokeWidth="3"/>
                      <circle cx="400" cy="24" r="5" fill="#ef4444">
                        <animate attributeName="cx" from="0" to="800" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <polygon points="795,19 805,24 795,29" fill="#ef4444"/>
                    </svg>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-red-400 text-sm font-semibold">
                      ❌ Direct
                    </div>
                  </div>
                </div>
                
                {/* Path 2: Via Competitor (Top - Through Cloud) */}
                <div className="absolute top-4 left-0 right-0 flex items-center">
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
                          <div className="text-red-300 font-bold text-sm mb-1">Third-Party Service</div>
                          <div className="text-red-400 text-xs">Preprocessing layer</div>
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
                    <div className="flex-shrink-0">
                      <div className="border-2 border-dashed border-blue-600 bg-blue-950 bg-opacity-20 rounded-xl p-3 relative">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-3 py-1 border border-blue-600 rounded text-xs text-blue-400 font-bold whitespace-nowrap">
                          🔒 YOUR ENVIRONMENT
                        </div>
                        <div className="bg-purple-950 border-2 border-purple-600 rounded-lg p-4 mt-2 relative overflow-hidden">
                          <div className="absolute inset-0 bg-purple-500 opacity-10 animate-pulse"></div>
                          <div className="text-center relative z-10">
                            <div className="text-3xl mb-2">🛡️</div>
                            <div className="text-purple-300 font-bold text-sm mb-1">Vizco</div>
                            <div className="text-purple-400 text-xs">Policy enforcement</div>
                            <div className="text-purple-500 text-xs">PII redaction • Access control</div>
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
                <div className="text-red-300 font-bold text-sm mb-2">❌ Direct Connection</div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Unfiltered data transmission</div>
                  <div>• No governance layer</div>
                  <div>• PII exposed to model provider</div>
                </div>
              </div>
              
              {/* Third-Party Path Info */}
              <div className="bg-red-950 bg-opacity-30 border border-red-800 rounded-xl p-4">
                <div className="text-red-300 font-bold text-sm mb-2">❌ Via Third-Party</div>
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
        </div>
      </section>

      {/* Agent Governance  */}
      <section id="learn-more" className="px-6 sm:px-12 mb-16 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            Agent Governance
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Scenario: Partner asks agent to &quot;Draft a summary of the ClientA case for opposing counsel&quot;
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Without Vizco */}
            <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-red-900 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="bg-red-900 bg-opacity-40 rounded-xl p-3">
                  <div className="text-red-300 font-bold">❌ Without Vizco</div>
                </div>
              </div>
              
              {/* Data sources at top */}
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-red-400 text-xs font-semibold animate-pulse">ClientA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-red-400 text-xs font-semibold animate-pulse">ClientB</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-red-400 text-xs font-semibold animate-pulse">ClientC</div>
                </div>
              </div>
              
              {/* Animated arrows converging */}
              <div className="flex justify-center mb-4">
                <svg width="200" height="80" viewBox="0 0 200 80">
                  <line x1="35" y1="0" x2="100" y2="70" stroke="#ef4444" strokeWidth="3"/>
                  <line x1="100" y1="0" x2="100" y2="70" stroke="#ef4444" strokeWidth="3"/>
                  <line x1="165" y1="0" x2="100" y2="70" stroke="#ef4444" strokeWidth="3"/>
                  <circle cx="100" cy="35" r="5" fill="#ef4444">
                    <animate attributeName="cy" from="0" to="70" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <polygon points="95,70 100,80 105,70" fill="#ef4444"/>
                </svg>
              </div>
              
              {/* Agent box */}
              <div className="bg-red-950 bg-opacity-60 border-2 border-red-800 rounded-xl p-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-red-300 font-bold">Agent</div>
                  <div className="text-red-400 text-xs mt-2">Sees ALL matters</div>
                </div>
              </div>
              
              {/* Result */}
              <div className="bg-red-900 bg-opacity-40 border-2 border-red-700 rounded-xl p-4">
                <div className="text-red-300 font-bold text-sm mb-2">⚠️ Result:</div>
                <div className="text-red-400 text-xs space-y-1">
                  <div>• Exposes ClientB & ClientC (unauthorized)</div>
                  <div>• Unredacted SSNs sent to AI</div>
                  <div>• No approval process</div>
                </div>
              </div>
            </div>
            
            {/* With Vizco */}
            <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-green-700 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="bg-green-900 bg-opacity-40 rounded-xl p-3">
                  <div className="text-green-300 font-bold">✅ With Vizco</div>
                </div>
              </div>
              
              {/* Data sources at top */}
              <div className="flex justify-around mb-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-gray-400 text-xs">ClientA</div>
                </div>
                <div className="text-center opacity-50">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-gray-600 text-xs line-through">ClientB</div>
                </div>
                <div className="text-center opacity-50">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="text-gray-600 text-xs line-through">ClientC</div>
                </div>
              </div>
              
              {/* Animated arrow through shield */}
              <div className="flex justify-center mb-3">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <line x1="40" y1="0" x2="40" y2="35" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="8" to="0" dur="1s" repeatCount="indefinite"/>
                  </line>
                  <polygon points="35,35 40,40 45,35" fill="#8b5cf6"/>
                </svg>
              </div>
              
              {/* Vizco Shield */}
              <div className="bg-purple-950 bg-opacity-60 border-2 border-purple-600 rounded-xl p-3 mb-3 relative">
                <div className="absolute inset-0 bg-purple-500 opacity-10 rounded-xl animate-pulse"></div>
                <div className="text-center relative z-10">
                  <div className="text-2xl mb-1">🛡️</div>
                  <div className="text-purple-300 font-bold text-sm">Vizco Shield</div>
                  <div className="text-purple-400 text-xs">Filtering & Redacting</div>
                </div>
              </div>
              
              {/* Animated filtered arrow */}
              <div className="flex justify-center mb-3">
                <svg width="80" height="40" viewBox="0 0 80 40">
                  <line x1="40" y1="0" x2="40" y2="35" stroke="#22c55e" strokeWidth="3"/>
                  <circle cx="40" cy="17" r="4" fill="#22c55e">
                    <animate attributeName="cy" from="0" to="35" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <polygon points="35,35 40,40 45,35" fill="#22c55e"/>
                </svg>
              </div>
              
              {/* Agent box */}
              <div className="bg-green-950 bg-opacity-60 border-2 border-green-700 rounded-xl p-4 mb-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-green-300 font-bold">Agent</div>
                  <div className="text-green-400 text-xs mt-2">Sees ClientA only</div>
                </div>
              </div>
              
              {/* Result */}
              <div className="bg-green-900 bg-opacity-40 border-2 border-green-700 rounded-xl p-4">
                <div className="text-green-300 font-bold text-sm mb-2">✅ Result:</div>
                <div className="text-green-400 text-xs space-y-1">
                  <div>• Only ClientA accessed</div>
                  <div>• SSNs redacted: [REDACTED]</div>
                  <div>• Requires partner approval</div>
                </div>
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


