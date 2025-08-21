import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
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
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">AI Governance Layer</h1>
        <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">Enable LLMs to use email, docs, and other connectors securely — enforcing policies and protecting confidentiality so teams can adopt AI with confidence.</p>
        <a href="https://calendly.com/chris-kelly-stanford/1-1" target="_blank" rel="noopener noreferrer" className="mt-2 px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg">Book a Demo</a>
      </header>

      {/* Footer */}
      <div className="flex flex-col items-center py-8 bg-black">
        <img src="/entrepreneurs_first_logo.jpeg" alt="Entrepreneurs First Logo" style={{ maxWidth: 240, width: '100%', height: 'auto' }} />
        <div className="mt-4 text-2xl font-bold text-white text-center">Backed by Entrepreneurs First</div>
      </div>
      <footer className="py-8 text-center text-gray-400 text-sm bg-black border-t border-gray-800 mt-auto">
        <div className="mb-2">&copy; {new Date().getFullYear()} Vizco. All rights reserved.</div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center text-gray-400 text-sm">
          <span>Location: 501 Folsom St, San Francisco, CA 94105</span>
          <span className="hidden md:inline mx-2">|</span>
          <span>Email: <a href="mailto:info@vizco.co" className="underline hover:text-purple-700">info@vizco.co</a></span>
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
