import React from 'react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-gray-300 mb-10">Join Vizco to help brands win in AI-native shopping. We are hiring for our founding team.</p>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">Founding Engineer</h2>
            <p className="text-gray-300 mb-4">Own core systems end-to-end across data, product, and integrations with AI-chat interfaces.</p>
            <ul className="list-disc ml-6 text-gray-400 space-y-1 mb-4">
              <li>Ship quickly with high quality across the stack</li>
              <li>Build integrations with LLM and commerce APIs</li>
              <li>Set engineering standards and architecture</li>
            </ul>
            <p className="text-gray-400 mb-6">Ideal: startup experience, strong ownership, interest in AI-commerce.</p>
            <a href="mailto:chris@vizco.co,daniel@vizco.co?subject=Application:%20Founding%20Engineer" className="inline-block px-6 py-3 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition">Apply via Email</a>
          </div>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">Go-to-Market (Founding)</h2>
            <p className="text-gray-300 mb-4">Lead early customer development, partnerships, and revenue for AI-native shopping.</p>
            <ul className="list-disc ml-6 text-gray-400 space-y-1 mb-4">
              <li>Own pipeline: outreach, demos, and feedback loops</li>
              <li>Shape positioning and messaging with the founders</li>
              <li>Build early playbooks for repeatable growth</li>
            </ul>
            <p className="text-gray-400 mb-6">Ideal: B2B GTM background, zero-to-one motion, comfort operating with ambiguity.</p>
            <a href="mailto:chris@vizco.co,daniel@vizco.co?subject=Application:%20Go-to-Market%20(Founding)" className="inline-block px-6 py-3 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition">Apply via Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}
