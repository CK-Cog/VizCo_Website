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
          
          {/* Mediation-Style Animated Path Diagram - Left to Right */}
          <div className="bg-gradient-to-b from-gray-950 to-black border-2 border-gray-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            
            {/* Single Source at Left */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              
              {/* Data Source (Left) */}
              <div className="flex-shrink-0">
                <div className="bg-blue-950 bg-opacity-40 border-2 border-blue-800 rounded-2xl p-6 shadow-2xl">
                  <div className="text-center mb-4">
                    <div className="text-white font-bold text-lg mb-3">Your Environment</div>
                    <div className="text-blue-400 text-sm mb-3">📧 Sensitive Data Lives Here</div>
                    
                    {/* Data source logos */}
                    <div className="flex flex-wrap justify-center gap-3 items-center">
                      {/* Gmail */}
                      <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                          <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                          <path fill="#FBBC04" d="M0 5.457C0 4.764.236 4.122.636 3.636L12 12 23.364 3.636c.4.486.636 1.128.636 1.82L12 14.182 0 5.457z"/>
                          <path fill="#34A853" d="M18.545 1.727L12 6.636 5.455 1.727C7.073.514 9.527.514 12 .514s4.927 0 6.545 1.213z"/>
                          <path fill="#C5221F" d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73z"/>
                          <path fill="#4285F4" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73z"/>
                        </svg>
                      </div>
                      
                      {/* Azure */}
                      <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                          <path fill="#0089D6" d="M22.379 23.343a1.62 1.62 0 0 0 1.536-2.14v.002L17.35 1.76A1.62 1.62 0 0 0 15.816.657H8.184A1.62 1.62 0 0 0 6.65 1.76L.086 21.204a1.62 1.62 0 0 0 1.536 2.139h4.741a1.62 1.62 0 0 0 1.535-1.103l.977-2.892 4.947 3.675c.28.208.618.32.966.32h7.591z"/>
                        </svg>
                      </div>
                      
                      {/* Google Drive */}
                      <div className="bg-white rounded-lg p-2 w-12 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="32" height="32">
                          <path fill="#3777E3" d="M7.71 3.5L1.15 15l3.45 6h6.28l6.56-11.5z"/>
                          <path fill="#FFCF63" d="M14.87 3.5H9.41L1.15 15l3.45 6L12 9.5z"/>
                          <path fill="#11A861" d="M22.85 15l-3.45-6H7.71l6.56 11.5H20.72z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mediation Plot - Proper Layout */}
              <div className="flex-1 relative" style={{minHeight: '450px', paddingTop: '60px', paddingBottom: '60px'}}>
                
                {/* Path 3 (Bottom): Direct - Straight Line - RED */}
                <div className="absolute bottom-16 left-0 right-0">
                  <div className="flex items-center justify-center gap-4">
                    <svg width="90%" height="60" viewBox="0 0 900 60" preserveAspectRatio="xMidYMid meet" className="mx-auto">
                      {/* Straight line */}
                      <line x1="50" y1="30" x2="850" y2="30" stroke="#ef4444" strokeWidth="5"/>
                      <polygon points="845,25 855,30 845,35" fill="#ef4444"/>
                      {/* Animated dot */}
                      <circle cx="100" cy="30" r="6" fill="#ef4444">
                        <animate attributeName="cx" from="50" to="850" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      {/* Label */}
                      <text x="450" y="55" fill="#ef4444" fontSize="14" fontWeight="bold" textAnchor="middle">
                        ❌ Path 3: Direct (No Protection)
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Path 2 (Middle): Via Vizco - GREEN */}
                <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
                  <div className="flex items-center justify-center gap-2">
                    {/* Line from data to Vizco */}
                    <svg width="25%" height="60" viewBox="0 0 250 60" preserveAspectRatio="xMidYMid meet">
                      <line x1="10" y1="30" x2="240" y2="30" stroke="#22c55e" strokeWidth="5"/>
                      <circle cx="100" cy="30" r="6" fill="#22c55e">
                        <animate attributeName="cx" from="10" to="240" dur="1.5s" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                    
                    <div className="px-2 py-1 bg-green-900 bg-opacity-50 border border-green-500 rounded">
                      <span className="text-green-300 text-xs font-bold">✅ STAYS</span>
                    </div>
                    
                    {/* Vizco in Client Environment */}
                    <div className="relative" style={{width: '240px'}}>
                      <div className="border-2 border-dashed border-blue-600 rounded-xl p-2 bg-blue-950 bg-opacity-20">
                        <div className="absolute -top-3 left-3 bg-black px-2 py-0.5 border border-blue-600 rounded-full z-10">
                          <span className="text-blue-400 text-[10px] font-bold">CLIENT ENVIRONMENT</span>
                        </div>
                        <div className="bg-purple-950 bg-opacity-70 border-2 border-purple-600 rounded-lg p-3 shadow-xl">
                          <div className="text-center">
                            <div className="text-2xl mb-1">🛡️</div>
                            <div className="text-purple-300 font-bold text-sm">Vizco</div>
                            <div className="text-purple-400 text-xs">in YOUR cloud</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Line from Vizco to AI (dashed) */}
                    <svg width="25%" height="60" viewBox="0 0 250 60" preserveAspectRatio="xMidYMid meet">
                      <line x1="10" y1="30" x2="240" y2="30" stroke="#22c55e" strokeWidth="5" strokeDasharray="10 5"/>
                      <circle cx="100" cy="30" r="6" fill="#22c55e">
                        <animate attributeName="cx" from="10" to="240" dur="1.5s" repeatCount="indefinite" begin="1.5s"/>
                      </circle>
                    </svg>
                    
                    {/* Label below */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-green-400 font-bold text-sm">✅ Path 2: Via Vizco (Stays in Your Environment)</span>
                    </div>
                  </div>
                </div>

                {/* Path 1 (Top): Via Competitor Mediator - RED with vertical arrows */}
                <div className="absolute top-8 left-0 right-0">
                  <div className="flex items-center justify-center gap-2 relative">
                    {/* Upward arrow from data to mediator */}
                    <svg width="25%" height="120" viewBox="0 0 250 120" preserveAspectRatio="xMidYMid meet">
                      {/* Horizontal line */}
                      <line x1="10" y1="110" x2="160" y2="110" stroke="#ef4444" strokeWidth="5"/>
                      {/* Upward diagonal */}
                      <line x1="160" y1="110" x2="240" y2="20" stroke="#ef4444" strokeWidth="5"/>
                      <polygon points="235,25 245,15 240,30" fill="#ef4444"/>
                      {/* Animated dot */}
                      <circle cx="50" cy="110" r="6" fill="#ef4444">
                        <animate attributeName="cx" from="10" to="160" dur="1s" repeatCount="indefinite"/>
                        <animate attributeName="cy" values="110;110;20" keyTimes="0;0.6;1" dur="1s" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                    
                    <div className="px-2 py-1 bg-red-900 bg-opacity-50 border border-red-500 rounded animate-pulse">
                      <span className="text-red-300 text-xs font-bold">⚠️ LEAVES</span>
                    </div>
                    
                    {/* Competitor Mediator - positioned above */}
                    <div className="relative" style={{width: '200px'}}>
                      <div className="bg-red-950 bg-opacity-70 border-2 border-red-800 rounded-xl p-3 shadow-2xl">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-900 px-2 py-1 border border-red-700 rounded-full whitespace-nowrap">
                          <span className="text-red-300 text-[10px] font-bold">MEDIATOR</span>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl mb-1">☁️</div>
                          <div className="text-red-300 font-bold text-sm">Competitor</div>
                          <div className="text-red-400 text-xs">Their cloud</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Downward arrow from mediator to AI */}
                    <svg width="25%" height="120" viewBox="0 0 250 120" preserveAspectRatio="xMidYMid meet">
                      {/* Downward diagonal */}
                      <line x1="10" y1="20" x2="90" y2="110" stroke="#ef4444" strokeWidth="5"/>
                      {/* Horizontal line */}
                      <line x1="90" y1="110" x2="240" y2="110" stroke="#ef4444" strokeWidth="5"/>
                      <polygon points="235,105 245,110 235,115" fill="#ef4444"/>
                      {/* Animated dot */}
                      <circle cx="50" cy="20" r="6" fill="#ef4444">
                        <animate attributeName="cx" from="10" to="240" keyTimes="0;0.4;1" dur="1s" repeatCount="indefinite" begin="1s"/>
                        <animate attributeName="cy" values="20;110;110" keyTimes="0;0.4;1" dur="1s" repeatCount="indefinite" begin="1s"/>
                      </circle>
                    </svg>
                    
                    {/* Label above */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-red-400 font-bold text-sm">❌ Path 1: Via Competitor (Data Leaves Environment)</span>
                    </div>
                  </div>
                </div>

                {/* AI Model on the right */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                  <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-4 shadow-2xl" style={{width: '180px'}}>
                    <div className="text-center">
                      <div className="text-4xl mb-2">🤖</div>
                      <div className="text-white font-bold text-lg">AI Model</div>
                      <div className="text-gray-400 text-xs mt-1">ChatGPT / Claude</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Legend at Bottom */}
            <div className="mt-8 pt-8 border-t-2 border-gray-800">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-red-900 bg-opacity-30 border border-red-800 rounded-lg mb-2">
                    <span className="text-red-300 font-bold text-sm">❌ Path 1 & 2</span>
                  </div>
                  <p className="text-gray-400 text-xs">Sensitive data crosses environment boundary—exposed to third parties or sent raw to AI</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-green-900 bg-opacity-30 border border-green-700 rounded-lg mb-2">
                    <span className="text-green-300 font-bold text-sm">✅ Path 3: Vizco</span>
                  </div>
                  <p className="text-gray-300 text-xs font-semibold">Policies enforce where data lives—sensitive info never leaves your cloud</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block px-4 py-2 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg mb-2">
                    <span className="text-blue-300 font-bold text-sm">🔒 Status Quo</span>
                  </div>
                  <p className="text-gray-400 text-xs">No new exposure—data stays in Google Workspace, Azure, or your private cloud</p>
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
            The Agent Governance Problem
          </h2>
          <p className="text-center text-gray-400 mb-3 max-w-3xl mx-auto text-lg">
            Today's AI agents have unrestricted access to everything.
          </p>
          <p className="text-center text-purple-400 mb-12 max-w-2xl mx-auto font-semibold">
            Vizco governs what agents can see and what actions they can take.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Without Vizco - Status Quo */}
            <div className="bg-gradient-to-b from-red-950 from-opacity-20 to-black border-2 border-red-900 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-900 px-4 py-2 border border-red-700 rounded-full">
                <span className="text-red-300 font-bold text-sm">⚠️ The Risk</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4 mt-4 text-white">Uncontrolled Agent Access</h3>
              <p className="text-center text-red-400 text-sm mb-8">Agents see everything, do anything</p>
              
              {/* Data Sources */}
              <div className="mb-6">
                <div className="text-center text-gray-400 text-xs mb-3 font-semibold">YOUR DATA SOURCES</div>
                <div className="flex justify-center gap-3">
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-xs text-blue-400 font-semibold">Email</div>
                    <div className="text-xs text-red-400 font-bold mt-1">Full access</div>
                  </div>
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">📁</div>
                    <div className="text-xs text-blue-400 font-semibold">Files</div>
                    <div className="text-xs text-red-400 font-bold mt-1">Full access</div>
                  </div>
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">👥</div>
                    <div className="text-xs text-blue-400 font-semibold">Contacts</div>
                    <div className="text-xs text-red-400 font-bold mt-1">Full access</div>
                  </div>
                </div>
              </div>
              
              {/* Agent accessing everything */}
              <div className="relative mb-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
                  <div className="flex flex-col items-center">
                    <svg width="4" height="40" className="animate-pulse">
                      <line x1="2" y1="0" x2="2" y2="40" stroke="#ef4444" strokeWidth="3"/>
                      <circle cx="2" cy="20" r="4" fill="#ef4444">
                        <animate attributeName="cy" from="0" to="40" dur="1.5s" repeatCount="indefinite"/>
                      </circle>
                    </svg>
                  </div>
                </div>
                
                <div className="bg-red-950 bg-opacity-60 border-2 border-red-800 rounded-xl p-4 mt-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-red-300 font-bold text-lg">AI Agent</div>
                    <div className="text-red-400 text-xs mt-2 font-semibold uppercase tracking-wide">No Restrictions</div>
                  </div>
                </div>
              </div>
              
              {/* Actions - all allowed */}
              <div>
                <div className="text-center text-gray-400 text-xs mb-3 font-semibold">WHAT AGENTS CAN DO</div>
                <div className="space-y-2">
                  <div className="bg-red-900 bg-opacity-30 border border-red-800 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-red-400 text-lg">⚠️</span>
                    <div className="flex-1">
                      <div className="text-red-300 text-sm font-semibold">Read all emails & files</div>
                      <div className="text-red-500 text-xs">Including sensitive/privileged content</div>
                    </div>
                  </div>
                  <div className="bg-red-900 bg-opacity-30 border border-red-800 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-red-400 text-lg">⚠️</span>
                    <div className="flex-1">
                      <div className="text-red-300 text-sm font-semibold">Send emails automatically</div>
                      <div className="text-red-500 text-xs">No approval required</div>
                    </div>
                  </div>
                  <div className="bg-red-900 bg-opacity-30 border border-red-800 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-red-400 text-lg">⚠️</span>
                    <div className="flex-1">
                      <div className="text-red-300 text-sm font-semibold">Delete or modify files</div>
                      <div className="text-red-500 text-xs">Irreversible actions permitted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* With Vizco - Governed */}
            <div className="bg-gradient-to-b from-purple-950 from-opacity-20 to-black border-2 border-purple-700 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-900 px-4 py-2 border border-purple-700 rounded-full">
                <span className="text-purple-300 font-bold text-sm">✅ The Solution</span>
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-4 mt-4 text-white">Vizco Governance Layer</h3>
              <p className="text-center text-purple-400 text-sm mb-8">Control what agents see and do</p>
              
              {/* Data Sources */}
              <div className="mb-6">
                <div className="text-center text-gray-400 text-xs mb-3 font-semibold">YOUR DATA SOURCES</div>
                <div className="flex justify-center gap-3">
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">📧</div>
                    <div className="text-xs text-blue-400 font-semibold">Email</div>
                    <div className="text-xs text-purple-400 font-bold mt-1">Filtered</div>
                  </div>
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">📁</div>
                    <div className="text-xs text-blue-400 font-semibold">Files</div>
                    <div className="text-xs text-purple-400 font-bold mt-1">Filtered</div>
                  </div>
                  <div className="bg-blue-950 bg-opacity-40 border border-blue-800 rounded-lg p-3 text-center flex-1 max-w-[90px]">
                    <div className="text-2xl mb-1">👥</div>
                    <div className="text-xs text-blue-400 font-semibold">Contacts</div>
                    <div className="text-xs text-purple-400 font-bold mt-1">Filtered</div>
                  </div>
                </div>
              </div>
              
              {/* Vizco Shield filtering */}
              <div className="relative mb-8">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-4">
                  <div className="flex flex-col items-center">
                    <svg width="4" height="40">
                      <line x1="2" y1="0" x2="2" y2="40" stroke="#8b5cf6" strokeWidth="3"/>
                      <circle cx="2" cy="20" r="4" fill="#8b5cf6">
                        <animate attributeName="cy" from="0" to="40" dur="1.5s" repeatCount="indefinite" begin="0.5s"/>
                      </circle>
                    </svg>
                  </div>
                </div>
                
                {/* Vizco Shield */}
                <div className="bg-purple-950 bg-opacity-60 border-2 border-purple-600 rounded-xl p-3 mt-4 relative">
                  <div className="absolute inset-0 bg-purple-500 opacity-10 rounded-xl"></div>
                  <div className="text-center relative z-10">
                    <div className="text-2xl mb-1">🛡️</div>
                    <div className="text-purple-300 font-bold text-sm">Vizco Shield</div>
                    <div className="text-purple-400 text-xs">Governs access & actions</div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-2">
                  <svg width="4" height="20">
                    <line x1="2" y1="0" x2="2" y2="20" stroke="#8b5cf6" strokeWidth="3"/>
                  </svg>
                </div>
                
                <div className="bg-purple-950 bg-opacity-60 border-2 border-purple-600 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🤖</div>
                    <div className="text-purple-300 font-bold text-lg">AI Agent</div>
                    <div className="text-purple-400 text-xs mt-2 font-semibold uppercase tracking-wide">Policy-Governed</div>
                  </div>
                </div>
              </div>
              
              {/* Actions - governed */}
              <div>
                <div className="text-center text-gray-400 text-xs mb-3 font-semibold">WHAT AGENTS CAN DO</div>
                <div className="space-y-2">
                  <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-green-400 text-lg">✓</span>
                    <div className="flex-1">
                      <div className="text-green-300 text-sm font-semibold">Read authorized content only</div>
                      <div className="text-green-500 text-xs">Redact PII, filter by matter/role</div>
                    </div>
                  </div>
                  <div className="bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-yellow-400 text-lg">⚠️</span>
                    <div className="flex-1">
                      <div className="text-yellow-300 text-sm font-semibold">Send emails with approval</div>
                      <div className="text-yellow-500 text-xs">Human review required before sending</div>
                    </div>
                  </div>
                  <div className="bg-red-900 bg-opacity-30 border border-red-800 rounded-lg p-3 flex items-center gap-3">
                    <span className="text-red-400 text-lg">✗</span>
                    <div className="flex-1">
                      <div className="text-gray-300 text-sm font-semibold">Delete or modify files</div>
                      <div className="text-gray-500 text-xs">Blocked by policy</div>
                    </div>
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

