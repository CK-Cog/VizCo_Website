import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-300 mb-10">Research and insights on AI governance and legal tech.</p>

        <div className="grid grid-cols-1 gap-6">
          <article className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
            <h2 className="text-xl font-semibold mb-1">Legal Tech and AI</h2>
            <div className="text-xs text-gray-500 mb-2">PDF</div>
            <p className="text-gray-400 text-sm mb-4">A perspective on how firms can safely adopt AI with a unified governance layer.</p>
            <a
              href="/blog/Legal_Tech_and_AI-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition text-sm"
            >
              Read PDF
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
