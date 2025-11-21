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
          
          {/* Vertical Path Diagram - Top to Bottom */}
          <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-gray-800 rounded-3xl p-8 sm:p-12">
            
            {/* Data Source at Top */}
            <div className="bg-blue-950 bg-opacity-40 border-2 border-blue-800 rounded-2xl p-6 shadow-2xl mb-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-white font-bold text-lg mb-2">Your Environment</div>
                <div className="text-blue-400 text-sm mb-4">📧 Sensitive Data Lives Here</div>
                <div className="flex justify-center gap-3 items-center">
                  <span className="text-3xl">📧</span>
                  <span className="text-3xl">☁️</span>
                  <span className="text-3xl">📁</span>
                </div>
              </div>
            </div>

            {/* Three vertical paths side-by-side */}
            <div className="grid md:grid-cols-3 gap-6">
                
                {/* Path 1: Competitor (Leaves) */}
                <div className="flex flex-col items-center">
                  <div className="bg-red-900 bg-opacity-30 border-2 border-red-800 rounded-xl p-3 mb-4 w-full">
                    <div className="text-center text-red-300 font-bold">❌ Via Competitor</div>
                  </div>
                  
                  {/* Arrow down */}
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-2">
                    <line x1="30" y1="0" x2="30" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="30" cy="25" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="50" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="25,50 30,60 35,50" fill="#ef4444"/>
                  </svg>
                  
                  <div className="bg-red-950 bg-opacity-70 border-2 border-red-800 rounded-xl p-4 mb-2 w-full">
                    <div className="text-center">
                      <div className="text-3xl mb-2">☁️</div>
                      <div className="text-red-300 font-bold">Competitor</div>
                      <div className="text-red-400 text-xs">Their cloud</div>
                      <div className="text-red-500 text-xs mt-2 font-bold animate-pulse">⚠️ LEAVES YOUR ENVIRONMENT</div>
                    </div>
                  </div>
                  
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-2">
                    <line x1="30" y1="0" x2="30" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="30" cy="25" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="50" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                    <polygon points="25,50 30,60 35,50" fill="#ef4444"/>
                  </svg>
                  
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <div className="text-gray-300 font-bold">AI Model</div>
                    </div>
                  </div>
                </div>
                
                {/* Path 2: Vizco (Stays) */}
                <div className="flex flex-col items-center">
                  <div className="bg-green-900 bg-opacity-30 border-2 border-green-700 rounded-xl p-3 mb-4 w-full">
                    <div className="text-center text-green-300 font-bold">✅ Via Vizco</div>
                  </div>
                  
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-2">
                    <line x1="30" y1="0" x2="30" y2="50" stroke="#22c55e" strokeWidth="3"/>
                    <circle cx="30" cy="25" r="4" fill="#22c55e">
                      <animate attributeName="cy" from="0" to="50" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="25,50 30,60 35,50" fill="#22c55e"/>
                  </svg>
                  
                  <div className="border-2 border-dashed border-blue-600 rounded-xl p-3 bg-blue-950 bg-opacity-20 mb-2 w-full relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-2 py-0.5 border border-blue-600 rounded-full z-10 whitespace-nowrap">
                      <span className="text-blue-400 text-xs font-bold">YOUR ENVIRONMENT</span>
                    </div>
                    <div className="bg-purple-950 bg-opacity-70 border-2 border-purple-600 rounded-lg p-4 mt-2">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🛡️</div>
                        <div className="text-purple-300 font-bold">Vizco Layer</div>
                        <div className="text-purple-400 text-xs">Governs & redacts</div>
                        <div className="text-green-500 text-xs mt-2 font-bold">✅ STAYS IN YOUR CLOUD</div>
                      </div>
                    </div>
                  </div>
                  
                  <svg width="60" height="60" viewBox="0 0 60 60" className="mb-2">
                    <line x1="30" y1="0" x2="30" y2="50" stroke="#22c55e" strokeWidth="3" strokeDasharray="5,5"/>
                    <circle cx="30" cy="25" r="4" fill="#22c55e">
                      <animate attributeName="cy" from="0" to="50" dur="2s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                    <polygon points="25,50 30,60 35,50" fill="#22c55e"/>
                  </svg>
                  
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <div className="text-gray-300 font-bold">AI Model</div>
                      <div className="text-green-400 text-xs">(redacted data)</div>
                    </div>
                  </div>
                </div>
                
                {/* Path 3: Direct (No Protection) */}
                <div className="flex flex-col items-center">
                  <div className="bg-red-900 bg-opacity-30 border-2 border-red-800 rounded-xl p-3 mb-4 w-full">
                    <div className="text-center text-red-300 font-bold">❌ Direct</div>
                  </div>
                  
                  <svg width="60" height="220" viewBox="0 0 60 220" className="mb-2">
                    <line x1="30" y1="0" x2="30" y2="210" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="30" cy="100" r="4" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="210" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="25,210 30,220 35,210" fill="#ef4444"/>
                  </svg>
                  
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 w-full">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤖</div>
                      <div className="text-gray-300 font-bold">AI Model</div>
                      <div className="text-red-400 text-xs">(raw sensitive data)</div>
                    </div>
                  </div>
                </div>
                
              </div>

          </div>
        </div>
      </section>

      {/* Agent Governance Animation */}
      <section id="learn-more" className="px-6 sm:px-12 mb-16 mt-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
            How Agents Access Your Data
          </h2>
          <p className="text-center text-gray-400 mb-6 max-w-3xl mx-auto text-lg">
            A partner asks: &quot;Draft a summary of the ClientA case for opposing counsel&quot;
          </p>
          
          {/* Scenario Box */}
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 border border-blue-800 rounded-xl p-4 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="text-2xl">👨‍⚖️</span>
              <div className="text-blue-200 text-sm">
                <span className="font-bold">Partner request:</span> &quot;Draft a summary of the ClientA case for opposing counsel&quot;
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Without Vizco - Status Quo */}
            <div className="bg-gradient-to-b from-red-950 from-opacity-20 to-black border-2 border-red-900 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-900 px-4 py-2 border border-red-700 rounded-full">
                <span className="text-red-300 font-bold text-sm">❌ Without Vizco</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-8 mt-4 text-white">Unrestricted Access</h3>
              
              {/* Animated Data Flow */}
              <div className="mb-8">
                {/* Data Sources */}
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <div className="text-3xl mb-1">📧</div>
                    <div className="text-red-400 text-xs font-bold animate-pulse">All Email</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">📁</div>
                    <div className="text-red-400 text-xs font-bold animate-pulse">All Files</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">💼</div>
                    <div className="text-red-400 text-xs font-bold animate-pulse">All Matters</div>
                  </div>
                </div>
                
                {/* Arrows flowing down */}
                <div className="flex justify-center mb-4">
                  <svg width="200" height="60" viewBox="0 0 200 60">
                    <line x1="50" y1="0" x2="100" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <line x1="100" y1="0" x2="100" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <line x1="150" y1="0" x2="100" y2="50" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="100" cy="25" r="5" fill="#ef4444">
                      <animate attributeName="cy" from="0" to="50" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="95,50 100,60 105,50" fill="#ef4444"/>
                  </svg>
                </div>
                
                {/* Agent */}
                <div className="bg-red-950 bg-opacity-60 border-2 border-red-800 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-red-300 font-bold">Agent sees:</div>
                    <div className="text-red-400 text-sm mt-1">ClientA + ClientB + ClientC emails</div>
                    <div className="text-red-400 text-sm">Including privileged matters</div>
                  </div>
                </div>
              </div>
              
              {/* Result */}
              <div className="bg-red-900 bg-opacity-40 border-2 border-red-700 rounded-xl p-4">
                <div className="text-red-300 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">⚠️</span>
                  <span>Result:</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-red-400">• Accesses unauthorized matters (ClientB, ClientC)</div>
                  <div className="text-red-400">• Includes SSNs, account numbers unredacted</div>
                  <div className="text-red-400">• Sends draft with privileged info exposed</div>
                </div>
              </div>
            </div>
            
            {/* With Vizco - Governed */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border-2 border-purple-700 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-900 px-4 py-2 border border-purple-700 rounded-full">
                <span className="text-purple-300 font-bold text-sm">✅ With Vizco</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-8 mt-4 text-white">Policy-Controlled</h3>
              
              {/* Animated Data Flow with Shield */}
              <div className="mb-8">
                {/* Data Sources */}
                <div className="flex justify-around mb-4">
                  <div className="text-center">
                    <div className="text-3xl mb-1">📧</div>
                    <div className="text-gray-400 text-xs">All Email</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">📁</div>
                    <div className="text-gray-400 text-xs">All Files</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-1">💼</div>
                    <div className="text-gray-400 text-xs">All Matters</div>
                  </div>
                </div>
                
                {/* Arrows to shield */}
                <div className="flex justify-center mb-3">
                  <svg width="200" height="40" viewBox="0 0 200 40">
                    <line x1="50" y1="0" x2="100" y2="35" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                    </line>
                    <line x1="100" y1="0" x2="100" y2="35" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                    </line>
                    <line x1="150" y1="0" x2="100" y2="35" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5">
                      <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
                    </line>
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
                
                {/* Filtered arrow */}
                <div className="flex justify-center mb-3">
                  <svg width="100" height="30" viewBox="0 0 100 30">
                    <line x1="50" y1="0" x2="50" y2="25" stroke="#22c55e" strokeWidth="3"/>
                    <circle cx="50" cy="12" r="4" fill="#22c55e">
                      <animate attributeName="cy" from="0" to="25" dur="1.5s" repeatCount="indefinite"/>
                    </circle>
                    <polygon points="45,25 50,30 55,25" fill="#22c55e"/>
                  </svg>
                </div>
                
                {/* Agent */}
                <div className="bg-purple-950 bg-opacity-60 border-2 border-purple-600 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-purple-300 font-bold">Agent sees:</div>
                    <div className="text-green-400 text-sm mt-1">ClientA only (authorized)</div>
                    <div className="text-green-400 text-sm">PII redacted</div>
                  </div>
                </div>
              </div>
              
              {/* Result */}
              <div className="bg-green-900 bg-opacity-40 border-2 border-green-700 rounded-xl p-4">
                <div className="text-green-300 font-bold mb-2 flex items-center gap-2">
                  <span className="text-xl">✅</span>
                  <span>Result:</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="text-green-400">• Only ClientA matter accessed</div>
                  <div className="text-green-400">• SSNs automatically redacted: [REDACTED]</div>
                  <div className="text-yellow-400">• Draft requires partner approval before sending</div>
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


