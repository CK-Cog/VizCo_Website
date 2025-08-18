import React from 'react';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-14 text-white">Meet the Team</h1>
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
      </div>
    </div>
  );
}
