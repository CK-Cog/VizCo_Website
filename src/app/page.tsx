import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-black">
        <Image
          src="/VizCo_Logo_New_transparent.png"
          alt="Vizco Logo"
          width={220}
          height={80}
          className="mb-6 drop-shadow-lg"
          style={{ objectFit: "contain" }}
          priority
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">
          The AI Governance Layer
        </h1>
        <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">
          Enforce firm policies across content, access, and actions—before data reaches any
          model—so your organization can adopt AI with confidence.
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

      {/* Benefits */}
      <section id="learn-more" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 sm:px-12 mb-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <div className="flex items-center gap-2 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-purple-500"><path d="M4 4h16v4H4V4zm0 6h10v4H4v-4zm0 6h16v4H4v-4z"/></svg>
            <h3 className="text-lg font-semibold">Prevent Data Exposure</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Redact sensitive content before prompts/files hit a model. Privilege‑safe by default.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <div className="flex items-center gap-2 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-purple-500"><path d="M12 17a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/><path d="M12 3l7 4v6c0 5-7 8-7 8s-7-3-7-8V7l7-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3 className="text-lg font-semibold">Matter‑Aware Access</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Enforce who can see what with case/matter‑level permissions across models and tools.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <div className="flex items-center gap-2 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-purple-500"><path d="M6 12h6m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3 className="text-lg font-semibold">Control Human & Agent Actions</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Allow‑listed actions, approvals, and guardrails stop unintended sends, filings, or updates.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <div className="flex items-center gap-2 mb-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-purple-500"><path d="M3 12h4l3 7 4-14 3 7h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h3 className="text-lg font-semibold">Deploy Fast, Anywhere</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Model‑agnostic layer with email/DMS/identity connectors. Go live across ChatGPT, Claude, Gemini.
          </p>
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
