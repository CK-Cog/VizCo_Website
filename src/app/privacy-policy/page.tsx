import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-8 pb-8 pt-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy – SecureMCP</h1>
        <p className="text-gray-400 mb-6">
          <strong>Effective date:</strong> 1.11.2025
        </p>
        <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mb-6">
          <p className="text-gray-300 mb-2">
            <strong>Company:</strong> VizCo (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;)
          </p>
          <p className="text-gray-300 mb-2">
            <strong>Contact:</strong> <a href="mailto:admin@vizco.co" className="text-purple-700 underline hover:text-purple-600">admin@vizco.co</a>
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Scope of this Policy</h2>
          <p className="text-gray-300 mb-4">
            This policy explains how VizCo handles information in connection with a Google OAuth application registration (&quot;OAuth Client&quot;) that is used by applications connecting to Google Workspace services—specifically SecureMCP, a user-run application that operates locally on users&apos; computers—to enable end-users to link their Google accounts, including services such as Gmail, Google Calendar, and Google Drive. This policy covers VizCo&apos;s role as the owner/host of the OAuth Client configuration and consent screen identity in Google Cloud.
          </p>
          <div className="bg-purple-900 bg-opacity-20 border border-purple-800 rounded-lg p-4 mt-4">
            <p className="text-gray-300 text-sm mb-2">
              <strong>Important:</strong> In this arrangement, SecureMCP application controls the OAuth redirect and token handling on the user&apos;s device.
            </p>
            <p className="text-gray-300 text-sm">
              VizCo does not receive OAuth tokens through this authorization flow.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Roles: Who Processes What</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>SecureMCP as Controller/Processor of User Data:</strong> When you authorize SecureMCP to access your Google account, SecureMCP determines what data is accessed and how it is used, subject to the scopes you approve and SecureMCP&apos;s privacy practices. This data always stays local to end users.</li>
            <li><strong>VizCo as OAuth Client Provider:</strong> VizCo maintains the OAuth Client configuration in its Google Cloud project. VizCo does not receive your OAuth authorization codes or tokens from Google as part of this flow and does not see any data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Information VizCo Does Not Collect or Receive</h2>
          <p className="text-gray-300 mb-4">
            Because the OAuth redirect and token exchange occur within SecureMCP&apos;s local application flow, VizCo does not receive from Google:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Your OAuth authorization code</li>
            <li>Your access token or refresh token</li>
            <li>Your Google account identifier (such as your email address or Google account &quot;sub&quot; ID) as part of this OAuth flow</li>
            <li>Your data from Google services, including (without limitation):
              <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                <li><strong>Gmail:</strong> email content, attachments, message metadata, labels</li>
                <li><strong>Google Calendar:</strong> calendars, event details, attendees, meeting links, reminders</li>
                <li><strong>Google Drive:</strong> file contents, file names, folder structure, sharing metadata, file permissions, file versions</li>
                <li><strong>Other Google services</strong> that SecureMCP may request access to via OAuth scopes (e.g., Contacts, Docs, Sheets)</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-300 mb-4">
            VizCo also cannot:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>View or modify the contents of your emails, calendar events, or Drive files through this OAuth authorization</li>
            <li>Act on your behalf in Google services via OAuth (since VizCo does not hold your tokens)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Information VizCo May Collect</h2>
          <p className="text-gray-300 mb-4">
            Even though VizCo does not receive your tokens or Google data, VizCo may have visibility into aggregate operational information related to the OAuth Client, such as:
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">4.1 Aggregate and Technical Usage Data</h3>
          <p className="text-gray-300 mb-4">
            Through Google Cloud Console and related tooling, VizCo may see aggregated metrics such as:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Total number of API requests made using the OAuth Client (aggregated)</li>
            <li>Error rates and request latency (aggregated)</li>
            <li>Quota and rate-limit utilization (aggregated)</li>
            <li>Service availability and performance indicators (aggregated)</li>
          </ul>
          <p className="text-gray-300 mb-4">
            These metrics are generally not tied to individual end users and are used for reliability, security, and abuse prevention.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">4.2 Support and Communications</h3>
          <p className="text-gray-300 mb-4">
            If users or SecureMCP application contact VizCo directly, VizCo may collect information they provide (e.g., name, email address, message content) for support and troubleshooting.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">4.3 VizCo Website/Service Data (if applicable)</h3>
          <p className="text-gray-300 mb-4">
            If you visit VizCo websites or portals, VizCo may collect standard web analytics and device information as described in VizCo&apos;s general privacy notice, if available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. How VizCo Uses Information</h2>
          <p className="text-gray-300 mb-4">
            VizCo uses the limited information described above to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Operate, maintain, and secure the OAuth Client configuration</li>
            <li>Monitor aggregated performance and troubleshoot outages</li>
            <li>Detect and prevent fraud, abuse, or policy violations involving the OAuth Client</li>
            <li>Comply with legal obligations and enforce agreements related to use of the OAuth Client</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. What VizCo Can Control</h2>
          <p className="text-gray-300 mb-4">
            As the OAuth Client owner, VizCo may:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Configure the OAuth consent screen identity shown to users (app name/logo/support email)</li>
            <li>Manage the OAuth Client in Google Cloud (including disabling or deleting it)</li>
            <li>Configure project-level security settings relevant to the OAuth Client</li>
            <li>Review and enforce compliance requirements applicable to use of VizCo&apos;s OAuth Client</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. What VizCo Cannot See or Do</h2>
          <p className="text-gray-300 mb-4">
            In this architecture, VizCo cannot:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>See which specific Google accounts authorized their SecureMCP applications</li>
            <li>Retrieve user tokens from Google, since they are delivered to SecureMCP&apos;s redirect endpoint and local data flow</li>
            <li>Access user Gmail, Google Calendar, or Google Drive data via OAuth (without tokens)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. SecureMCP (Client-Side Application)</h2>
          <p className="text-gray-300 mb-4">
            SecureMCP is a client-side application designed to run autonomously on a customer-controlled environment. SecureMCP does not transmit customer data to VizCo. The only communication between SecureMCP and VizCo is for user authentication via the VizCo OAuth application (to verify identity and authorize access).
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">How SecureMCP Handles Google Workspace Data</h3>
          <p className="text-gray-300 mb-4">
            When SecureMCP receives data from Google Workspace (which may include private or sensitive information), it processes that data locally and applies privacy protections before any information is used in downstream AI interactions:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li><strong>Local redaction and minimization:</strong> SecureMCP automatically redacts private data where appropriate.</li>
            <li><strong>Tokenization of identifiers:</strong> Private identifiers (such as names, emails, employee IDs, document IDs, or similar identifiers) are replaced with non-identifying tokens before any context is sent outside the customer environment.</li>
            <li><strong>No sharing with VizCo:</strong> The redacted/tokenized context is not sent to VizCo at any time.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">Use of Third-Party Frontier AI Model Providers</h3>
          <p className="text-gray-300 mb-4">
            SecureMCP enables a chat interface that can send the redacted and tokenized context to third-party AI model providers (for example, OpenAI or other frontier AI vendors) to generate responses. These providers receive only the processed context produced by SecureMCP, not the original unredacted data.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">Token Mapping Security</h3>
          <p className="text-gray-300 mb-4">
            To preserve functionality (e.g., referencing entities consistently across a session), SecureMCP maintains token mappings from tokens back to private identifiers. These mappings are protected as follows:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li><strong>Encrypted at rest:</strong> Token mappings are stored encrypted on the customer-controlled device or environment.</li>
            <li><strong>Not accessible to VizCo:</strong> VizCo does not receive, store, or have access to token mappings.</li>
            <li><strong>Resilience to device compromise:</strong> Because mappings are encrypted at rest, they remain protected even if a client computer or environment is compromised (subject to the strength of encryption and protection of encryption keys within the customer environment).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">9. Sharing of Information</h2>
          <p className="text-gray-300 mb-4">
            VizCo does not sell personal information.
          </p>
          <p className="text-gray-300 mb-4">
            VizCo may share information only as follows:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li><strong>Service Providers:</strong> VizCo may use vendors to host infrastructure and provide monitoring/support services. They are bound by confidentiality and data protection obligations.</li>
            <li><strong>Legal and Safety:</strong> VizCo may disclose information if required by law or to protect rights, safety, and security.</li>
            <li><strong>Business Transfers:</strong> If VizCo undergoes a merger, acquisition, or sale of assets, information may be transferred as part of that transaction.</li>
          </ul>
          <div className="bg-purple-900 bg-opacity-20 border border-purple-800 rounded-lg p-4 mt-4">
            <p className="text-gray-300 text-sm">
              <strong>Note:</strong> VizCo does not share user OAuth tokens or Google user data because VizCo does not receive them in this integration model.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">10. Data Retention</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Aggregate operational metrics may be retained for as long as necessary for security, reliability, and compliance purposes, consistent with VizCo&apos;s internal retention schedules.</li>
            <li>Support communications are retained as needed to address requests and maintain records.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">11. Security</h2>
          <p className="text-gray-300 mb-4">
            VizCo implements administrative, technical, and organizational measures designed to protect the OAuth Client configuration and related systems. No system is 100% secure; however, because VizCo does not receive OAuth tokens or Google user data in this model, the risk of exposure of such data through VizCo systems is reduced.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">12. Your Choices and Controls</h2>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>You can review and revoke SecureMCP&apos;s access to your Google account at any time through your Google Account settings (e.g., &quot;Third-party access&quot; / &quot;Security&quot; pages).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">13. International Transfers</h2>
          <p className="text-gray-300 mb-4">
            If VizCo processes any information described above outside your jurisdiction, VizCo does so with appropriate safeguards consistent with applicable law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">14. Children&apos;s Privacy</h2>
          <p className="text-gray-300 mb-4">
            VizCo&apos;s OAuth Client is not intended for use by children, and VizCo does not knowingly collect personal information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">15. Changes to This Policy</h2>
          <p className="text-gray-300 mb-4">
            VizCo may update this policy from time to time. VizCo will post the updated version with a new effective date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">16. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            For privacy questions or requests, contact:
          </p>
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-300 mb-2">
              <strong>VizCo Privacy Team</strong>
            </p>
            <p className="text-gray-300">
              <a href="mailto:admin@vizco.co" className="text-purple-700 underline hover:text-purple-600">admin@vizco.co</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
