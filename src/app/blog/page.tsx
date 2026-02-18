import React from "react";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8 pt-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <p className="text-gray-300 mb-10">Research and insights on AI governance and legal tech.</p>

        <div className="grid grid-cols-1 gap-6">
          <article className="rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black p-6">
            <h2 className="text-xl font-semibold mb-1">State of AI in 2025: Best Practices for Modern Law Firms</h2>
            <div className="text-xs text-gray-500 mb-4">PDF • Abstract below</div>
            <div className="rounded-lg overflow-hidden border border-gray-800 bg-black">
              <iframe
                src="/blog/Legal_Tech_and_AI-2.pdf#view=FitH"
                title="State of AI in 2025 PDF Preview"
                className="w-full"
                style={{ height: "75vh" }}
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-200">Abstract</h3>
              <p className="text-gray-400 text-sm mb-4">
                This white paper targets firms moving beyond AI pilots to focus on compliance, security, and
                privacy aspects of agent‑driven workflows. We describe three modes of AI use in legal practice:
                private (airtight security), local AI (standard security and intelligence), and policy‑restricted
                cloud AI (maximum intelligence). Our emphasis is on actionable practices that enable law firms to
                adopt secure and efficient automation without the burden of heavyweight software or hardware platforms.
              </p>
              <a
                href="/blog/Legal_Tech_and_AI-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-800 text-white rounded-full font-semibold border border-purple-900 hover:bg-purple-900 transition text-sm"
              >
                Open in new tab
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
