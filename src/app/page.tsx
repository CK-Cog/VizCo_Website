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
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-center tracking-tight leading-tight bg-gradient-to-r from-purple-900 via-white to-purple-900 bg-clip-text text-transparent">Win in AI-Native Shopping</h1>
        <p className="text-xl sm:text-2xl text-center max-w-2xl mb-8 text-gray-200">Get found. Get chosen. Get bought—in AI-chat interfaces like ChatGPT</p>
        <a href="https://calendly.com/chris-kelly-stanford/1-1" target="_blank" rel="noopener noreferrer" className="mt-2 px-10 py-4 bg-purple-800 text-white rounded-full font-bold shadow-lg hover:bg-purple-900 transition text-lg">Book a Demo</a>
      </header>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-8 bg-black border-t border-gray-800">
        <h2 className="text-3xl font-bold text-center mb-14 text-white">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <img src="/Chris.png" alt="Chris Kelly" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-purple-900" />
            <h3 className="font-semibold text-lg mb-1 text-purple-700">Chris Kelly, Ph.D.</h3>
            <p className="text-gray-300 mb-2">Co-Founder & CEO</p>
            <p className="text-gray-500 text-sm">Prev: Stanford, MIT<br/>Email: <a href='mailto:chris@vizco.co' className='underline hover:text-purple-700'>chris@vizco.co</a><br/>
              <a href='https://www.linkedin.com/in/christopherkellyphd/' target='_blank' rel='noopener noreferrer' className='inline-block mt-1 hover:opacity-80' aria-label='Chris LinkedIn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className='text-purple-700 inline align-middle'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              </a>
            </p>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <img src="/Daniel.png" alt="Daniel Kharitonov" className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-purple-900" />
            <h3 className="font-semibold text-lg mb-1 text-purple-700">Daniel Kharitonov, Ph.D.</h3>
            <p className="text-gray-300 mb-2">Co-Founder & CTO</p>
            <p className="text-gray-500 text-sm">Prev: Stanford, Interative<br/>Email: <a href='mailto:daniel@vizco.co' className='underline hover:text-purple-700'>daniel@vizco.co</a><br/>
              <a href='https://www.linkedin.com/in/danielkharitonov/' target='_blank' rel='noopener noreferrer' className='inline-block mt-1 hover:opacity-80' aria-label='Daniel LinkedIn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className='text-purple-700 inline align-middle'><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-4 sm:px-8 bg-purple-800 text-white text-center border-t border-purple-900">
        <h2 className="text-3xl font-bold mb-4">Ready to boost your AI search visibility?</h2>
        <p className="mb-8 text-lg">Contact us today to get started or request a demo.</p>
        <a href="https://calendly.com/chris-kelly-stanford/1-1" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-black text-purple-700 rounded-full font-bold shadow-lg hover:bg-gray-900 transition text-lg border border-purple-900">Book a Demo</a>
        <div className="mt-6 text-white text-sm">Email: info@vizco.co<br/>Address: 501 Folsom St, San Francisco, CA 94105</div>
      </section>

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
          <a href="/privacy-policy" className="underline hover:text-purple-700">Privacy Policy</a>
          <span className="hidden md:inline mx-2">|</span>
          <a href="/terms-of-service" className="underline hover:text-purple-700">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
