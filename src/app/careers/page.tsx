import React from "react";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Hero / What We Do */}
        <header className="space-y-3">
          <h1 className="text-4xl font-bold">Careers</h1>
          <p className="text-gray-300">
            Join us to make AI safe for sensitive work. We’re building the governance
            layer that enforces data‑sharing rules and action policies before anything
            reaches an AI model or agent. We’re starting with law firms.
          </p>
        </header>

        {/* Company Snapshot */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-5">
            <h3 className="text-lg font-semibold mb-2">What we do</h3>
            <p className="text-gray-400 text-sm">
              Real‑time policy enforcement for LLMs and agents: redaction, access control,
              and allowed actions. Model‑agnostic, works with tools firms already use.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-5">
            <h3 className="text-lg font-semibold mb-2">Why it matters</h3>
            <p className="text-gray-400 text-sm">
              Firms want frontier models but can’t risk privilege or compliance. We
              make sensitive workflows safe without slowing people down.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-5">
            <h3 className="text-lg font-semibold mb-2">Stage</h3>
            <p className="text-gray-400 text-sm">
              Early. Design partners in legal. You’ll ship core systems, set standards,
              and shape the product with customers.
            </p>
          </div>
        </section>

        {/* Open Roles */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Open Roles</h2>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Founding Engineer (Full‑Stack)</h3>
            <p className="text-gray-300 mb-4">
              Own big pieces of the stack from day one: core product, policy engine,
              data pipelines, and integrations with AI providers and enterprise systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-white mb-2">You’ll work on</h4>
                <ul className="list-disc ml-5 text-gray-400 space-y-1 text-sm">
                  <li>End‑to‑end product features across web and services</li>
                  <li>Policy evaluation/redaction pipelines; audit trails</li>
                  <li>LLM/agent integrations; DMS/email/identity connectors</li>
                  <li>Architecture, testing, observability, reliability</li>
                  <li>Fast customer‑driven iterations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">What you bring</h4>
                <ul className="list-disc ml-5 text-gray-400 space-y-1 text-sm">
                  <li>3+ years shipping production software</li>
                  <li>Strong TypeScript/JavaScript plus one backend language</li>
                  <li>Databases, APIs, auth, cloud deployment</li>
                  <li>Ownership, product sense, bias to action</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Nice to have</h4>
                <ul className="list-disc ml-5 text-gray-400 space-y-1 text-sm">
                  <li>LLMs/AI tooling, vector search</li>
                  <li>Security/compliance, role‑based access control</li>
                  <li>Legal tech, DMS (iManage/NetDocuments), email systems</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfg9CWkCq2wgZmlQKKuB4BqRz-JB_DNdddzN1XDuIBaheyF0A/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition"
              >
                Apply via Google Form
              </a>
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-3">How we work</h3>
          <ul className="list-disc ml-6 text-gray-400 space-y-1 text-sm">
            <li>Small team, high trust, fast shipping</li>
            <li>Customer‑obsessed; quality without ceremony</li>
            <li>Remote‑friendly with SF Bay Area time overlap</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
