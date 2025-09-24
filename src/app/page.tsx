import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Top Nav */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 bg-black/60 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Image src="/VizCo_LinkedIn_Profile_Black.png" alt="Vizco" width={32} height={32} className="rounded-full" />
          <span className="text-sm text-gray-300">Vizco</span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#learn-more" className="text-gray-300 hover:text-white">Learn more</a>
          <a href="/team" className="text-gray-300 hover:text-white">Team</a>
          <a href="/careers" className="text-gray-300 hover:text-white">Careers</a>
          <a
            href="https://calendly.com/chris-kelly-stanford/1-1"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition"
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 bg-black">
        <Image
          src="/VizCo_LinkedIn_Profile_Black.png"
          alt="Vizco Logo"
          width={180}
          height={180}
          className="mb-6 drop-shadow-lg object-cover rounded-full"
          priority
        />
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">
          The AI Governance Layer
        </h1>
        <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">
          Enforce redaction, access, and safe actions—before data reaches any model—so
          sensitive teams can adopt AI with confidence.
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

      {/* Company Snapshot */}
      <section id="learn-more" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 sm:px-12 mb-10">
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <h3 className="text-lg font-semibold mb-2">Privilege‑Safe by Default</h3>
          <p className="text-gray-400 text-sm">
            Automatic redaction and matter‑aware access control before any prompt, file,
            or action reaches a model.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <h3 className="text-lg font-semibold mb-2">Policy‑Enforced Agents</h3>
          <p className="text-gray-400 text-sm">
            Allow‑listed actions with approvals and audit trails. Prevent unintended sends,
            filings, or data pulls—no exceptions.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
          <h3 className="text-lg font-semibold mb-2">Deploy Fast, Anywhere</h3>
          <p className="text-gray-400 text-sm">
            Model‑agnostic layer with connectors (email, DMS, identity). Go live across
            ChatGPT, Claude, Gemini, and internal agents in days.
          </p>
        </div>
      </section>

      {/* EF Badge */}
      <div className="py-6 px-6 sm:px-12">
        <div className="flex items-center justify-center gap-3 text-gray-400 text-sm">
          <Image src="/entrepreneurs_first_logo.jpeg" alt="Entrepreneurs First" width={120} height={36} className="rounded" />
          <span>Backed by Entrepreneurs First</span>
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
          <a href="/privacy-policy" className="underline hover:text-purple-700">Privacy Policy</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/terms-of-service" className="underline hover:text-purple-700">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
