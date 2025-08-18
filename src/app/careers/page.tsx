import React from 'react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Careers</h1>
        <p className="text-gray-300 mb-10">Join Vizco to help brands win in AI-native shopping. We are hiring for our founding team.</p>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2 text-purple-700">Founding Engineer (Full‑Stack)</h2>
            <p className="text-gray-300 mb-4">You will be an owner from day one, building core product experiences, data pipelines, and integrations with AI-chat and commerce interfaces. You thrive in zero‑to‑one environments and care about quality, velocity, and impact.</p>

            <h3 className="font-semibold text-lg mb-2 text-white">What you’ll do</h3>
            <ul className="list-disc ml-6 text-gray-400 space-y-1 mb-4">
              <li>Design, build, and ship end‑to‑end product features across frontend and backend.</li>
              <li>Create clean, well‑tested, observable services and UIs.</li>
              <li>Integrate with LLM providers and third‑party commerce/search APIs.</li>
              <li>Set engineering standards, architecture, and developer tooling.</li>
              <li>Work directly with founders and early customers; iterate quickly on feedback.</li>
            </ul>

            <h3 className="font-semibold text-lg mb-2 text-white">What we’re looking for</h3>
            <ul className="list-disc ml-6 text-gray-400 space-y-1 mb-4">
              <li>3+ years building production web software (startup or small team experience a plus).</li>
              <li>Strong fundamentals in TypeScript/JavaScript and one backend language.</li>
              <li>Comfortable with databases, APIs, auth, testing, and cloud deployment.</li>
              <li>Bias to action, product sense, and ownership mindset.</li>
            </ul>

            <h3 className="font-semibold text-lg mb-2 text-white">Nice to have</h3>
            <ul className="list-disc ml-6 text-gray-400 space-y-1 mb-4">
              <li>Experience with LLMs/AI tooling and vector search.</li>
              <li>Background with e‑commerce, SEO/SEM, or growth tooling.</li>
              <li>Data pipelines/ETL, analytics, or experimentation platforms.</li>
            </ul>

            <h3 className="font-semibold text-lg mb-4 text-white">Apply</h3>
            <form action="/api/apply" method="post" encType="multipart/form-data" className="space-y-4">
              <input type="hidden" name="role" value="Founding Engineer (Full-Stack)" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Name</label>
                  <input name="name" required className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Email</label>
                  <input type="email" name="email" required className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Cover Letter (optional text)</label>
                <textarea name="coverLetter" rows={5} className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Resume (PDF)</label>
                  <input type="file" name="resume" accept="application/pdf,.pdf" required className="w-full text-gray-300" />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-1">Cover Letter (file, optional)</label>
                  <input type="file" name="coverLetterFile" accept="application/pdf,.pdf,.txt,.md" className="w-full text-gray-300" />
                </div>
              </div>
              <button type="submit" className="px-6 py-3 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
