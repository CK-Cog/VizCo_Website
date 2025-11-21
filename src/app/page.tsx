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
            Data Flow Paths to AI Models
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
            Three paths—only one keeps sensitive data in your environment
          </p>
          
          {/* Clean 3-Column Comparison */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Column 1: Direct */}
            <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-red-900 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="bg-red-900 bg-opacity-40 rounded-xl p-3 mb-4">
                  <div className="text-red-300 font-bold">❌ Direct</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                {/* Data source */}
                <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-blue-400 text-xs">Your Data</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <svg width="40" height="100" viewBox="0 0 40 100">
                  <line x1="20" y1="0" x2="20" y2="90" stroke="#ef4444" strokeWidth="3"/>
                  <circle cx="20" cy="45" r="4" fill="#ef4444">
                    <animate attributeName="cy" from="0" to="90" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <polygon points="15,90 20,100 25,90" fill="#ef4444"/>
                </svg>
                
                {/* AI Model */}
                <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-white font-semibold text-sm">AI Model</div>
                    <div className="text-red-400 text-xs mt-2">Raw sensitive data</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2: Third-Party */}
            <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-red-900 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="bg-red-900 bg-opacity-40 rounded-xl p-3 mb-4">
                  <div className="text-red-300 font-bold">❌ Third-Party</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                {/* Data source */}
                <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-blue-400 text-xs">Your Data</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <line x1="20" y1="0" x2="20" y2="30" stroke="#ef4444" strokeWidth="3"/>
                  <circle cx="20" cy="15" r="4" fill="#ef4444">
                    <animate attributeName="cy" from="0" to="30" dur="1s" repeatCount="indefinite"/>
                  </circle>
                  <polygon points="15,30 20,40 25,30" fill="#ef4444"/>
                </svg>
                
                {/* Competitor cloud */}
                <div className="bg-red-950 bg-opacity-70 border-2 border-red-800 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl mb-1">☁️</div>
                    <div className="text-red-300 font-semibold text-sm">Competitor</div>
                    <div className="text-red-500 text-xs mt-1 animate-pulse">⚠️ Leaves environment</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <line x1="20" y1="0" x2="20" y2="30" stroke="#ef4444" strokeWidth="3"/>
                  <circle cx="20" cy="15" r="4" fill="#ef4444">
                    <animate attributeName="cy" from="0" to="30" dur="1s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  <polygon points="15,30 20,40 25,30" fill="#ef4444"/>
                </svg>
                
                {/* AI Model */}
                <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-white font-semibold text-sm">AI Model</div>
                    <div className="text-red-400 text-xs mt-2">Raw sensitive data</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 3: Vizco */}
            <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-green-700 rounded-2xl p-6">
              <div className="text-center mb-6">
                <div className="bg-green-900 bg-opacity-40 rounded-xl p-3 mb-4">
                  <div className="text-green-300 font-bold">✅ Vizco</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                {/* Data source */}
                <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-blue-400 text-xs">Your Data</div>
                  </div>
                </div>
                
                {/* Arrow */}
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <line x1="20" y1="0" x2="20" y2="30" stroke="#22c55e" strokeWidth="3"/>
                  <circle cx="20" cy="15" r="4" fill="#22c55e">
                    <animate attributeName="cy" from="0" to="30" dur="1s" repeatCount="indefinite"/>
                  </circle>
                  <polygon points="15,30 20,40 25,30" fill="#22c55e"/>
                </svg>
                
                {/* Vizco shield */}
                <div className="border-2 border-dashed border-blue-600 bg-blue-950 bg-opacity-20 rounded-xl p-3 w-full relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-2 py-0.5 border border-blue-600 rounded text-xs text-blue-400 font-bold whitespace-nowrap">
                    YOUR ENVIRONMENT
                  </div>
                  <div className="bg-purple-950 bg-opacity-70 border-2 border-purple-600 rounded-lg p-4 mt-2">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🛡️</div>
                      <div className="text-purple-300 font-semibold text-sm">Vizco</div>
                      <div className="text-green-500 text-xs mt-1">✅ Stays in cloud</div>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <line x1="20" y1="0" x2="20" y2="30" stroke="#22c55e" strokeWidth="3" strokeDasharray="4,4"/>
                  <circle cx="20" cy="15" r="4" fill="#22c55e">
                    <animate attributeName="cy" from="0" to="30" dur="1s" repeatCount="indefinite" begin="1s"/>
                  </circle>
                  <polygon points="15,30 20,40 25,30" fill="#22c55e"/>
                </svg>
                
                {/* AI Model */}
                <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-white font-semibold text-sm">AI Model</div>
                    <div className="text-green-400 text-xs mt-2">Redacted data only</div>
                  </div>
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
              
              <div className="space-y-4">
                <div className="bg-red-950 bg-opacity-40 border border-red-800 rounded-xl p-4">
                  <div className="text-red-300 font-semibold mb-2">Agent accesses:</div>
                  <div className="text-red-400 text-sm space-y-1">
                    <div>• ClientA emails</div>
                    <div>• ClientB emails (unauthorized)</div>
                    <div>• ClientC emails (unauthorized)</div>
                  </div>
                </div>
                
                <div className="bg-red-950 bg-opacity-40 border border-red-800 rounded-xl p-4">
                  <div className="text-red-300 font-semibold mb-2">Draft includes:</div>
                  <div className="text-red-400 text-sm space-y-1">
                    <div>• Unredacted SSNs</div>
                    <div>• Privileged information from other matters</div>
                    <div>• No approval required</div>
                  </div>
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
              
              <div className="space-y-4">
                <div className="bg-green-950 bg-opacity-40 border border-green-800 rounded-xl p-4">
                  <div className="text-green-300 font-semibold mb-2">Agent accesses:</div>
                  <div className="text-green-400 text-sm space-y-1">
                    <div>• ClientA emails only (authorized)</div>
                    <div>• ClientB blocked</div>
                    <div>• ClientC blocked</div>
                  </div>
                </div>
                
                <div className="bg-green-950 bg-opacity-40 border border-green-800 rounded-xl p-4">
                  <div className="text-green-300 font-semibold mb-2">Draft includes:</div>
                  <div className="text-green-400 text-sm space-y-1">
                    <div>• SSNs auto-redacted: [REDACTED]</div>
                    <div>• Only authorized matter content</div>
                    <div>• Requires partner approval to send</div>
                  </div>
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


