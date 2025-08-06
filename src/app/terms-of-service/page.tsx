import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">By using the Vizco website, you agree to the following terms and conditions.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Site</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You agree to use this site only for lawful purposes.</li>
        <li>You will not attempt to disrupt or compromise the security of the site.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Intellectual Property</h2>
      <p className="mb-4">All content on this site is the property of Vizco and may not be used without permission.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Disclaimer</h2>
      <p className="mb-4">This site is provided "as is" without warranties of any kind. Vizco is not liable for any damages arising from use of the site.</p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact</h2>
      <p>If you have any questions about these terms, please contact us at <a href="mailto:info@vizco.co" className="underline hover:text-purple-700">info@vizco.co</a>.</p>
    </div>
  );
} 