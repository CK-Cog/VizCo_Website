import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how Vizco collects, uses, and protects your information.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Information you provide via forms or email (such as your name and email address).</li>
        <li>Basic analytics data (e.g., page views, device type).</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To respond to your inquiries and provide our services.</li>
        <li>To improve our website and offerings.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Information Sharing</h2>
      <p className="mb-4">We do not sell or share your personal information with third parties except as required by law.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>If you have any questions about this policy, please contact us at <a href="mailto:info@vizco.co" className="underline hover:text-purple-700">info@vizco.co</a>.</p>
    </div>
  );
} 