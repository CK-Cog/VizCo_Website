import React from "react";

export default function BlogPage() {
  const posts = [
    {
      title: "Why AI Governance Needs a Unified Policy Layer",
      date: "Coming soon",
      excerpt:
        "How firms can enforce content, access, and action policies consistently across models and agents.",
    },
    {
      title: "Privilege‑Safe by Default: Redaction Before the Model",
      date: "Coming soon",
      excerpt:
        "Designing redaction and matter‑aware access so sensitive work can adopt AI with confidence.",
    },
    {
      title: "Policy‑Enforced Agents: Approvals, Audit, and Guardrails",
      date: "Coming soon",
      excerpt:
        "From allow‑lists to approvals—how to make agents safe for real workflows.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-300 mb-10">Insights on AI governance, policy enforcement, and safe adoption in sensitive workflows.</p>

        <div className="grid grid-cols-1 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
              <div className="text-xs text-gray-500 mb-2">{post.date}</div>
              <p className="text-gray-400 text-sm">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
