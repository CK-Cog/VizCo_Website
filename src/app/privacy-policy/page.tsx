import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="text-gray-400 mb-6">
          <strong>Effective Date:</strong> November 21, 2024
        </p>
        <p className="text-gray-300 mb-8">
          Vizco (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{' '}
          <a href="https://vizco.co" className="text-purple-700 underline hover:text-purple-600">
            https://vizco.co
          </a>{' '}
          (the &quot;Site&quot;) and use our AI governance services (the &quot;Services&quot;).
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-2 text-purple-700">1.1 Personal Information You Provide</h3>
          <p className="text-gray-300 mb-4">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>Schedule a demo or consultation through Calendly or other booking tools</li>
            <li>Submit a job application via Google Forms or email</li>
            <li>Contact us via email at info@vizco.co, chris@vizco.co, or daniel@vizco.co</li>
            <li>Sign up for our Services or request information</li>
            <li>Register for an account or subscribe to newsletters</li>
          </ul>
          <p className="text-gray-300 mb-4">
            This information may include:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name and job title</li>
            <li>Resume and cover letter (for job applications)</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">1.2 Automatically Collected Information</h3>
          <p className="text-gray-300 mb-4">
            When you visit our Site, we may automatically collect certain information about your device and browsing activity, including:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information (operating system, device type)</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Referring website or source</li>
            <li>Click-through data and interactions</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">1.3 Cookies and Tracking Technologies</h3>
          <p className="text-gray-300 mb-4">
            We may use cookies, web beacons, and similar tracking technologies to collect information about your browsing behavior and preferences. You can control cookies through your browser settings.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">1.4 OAuth and Third-Party Authentication Data</h3>
          <p className="text-gray-300 mb-4">
            If you use our Services and authenticate via OAuth providers (e.g., Google, Microsoft), we may collect:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Your name and email address from the OAuth provider</li>
            <li>Profile information you authorize us to access</li>
            <li>Access tokens to enable secure integration with your authorized services</li>
          </ul>
          <p className="text-gray-300 mb-4">
            We only access the minimum data necessary to provide our Services and enforce governance policies. We do not store your OAuth credentials; instead, we use secure tokens that can be revoked at any time through your OAuth provider&apos;s settings.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">1.5 Google API Services User Data</h3>
          <p className="text-gray-300 mb-4">
            Our macOS application uses Google API Services to provide productivity features with AI governance and PII (Personally Identifiable Information) redaction. When you connect your Google Account to our application, we request access to the following Google services:
          </p>

          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6 mb-4">
            <h4 className="text-lg font-semibold mb-3 text-white">Google API Scopes We Request:</h4>
            
            <div className="mb-4">
              <p className="text-purple-700 font-semibold mb-1">Gmail API</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                <li><code className="text-purple-400">auth/gmail.modify</code> - Read, compose, and send emails</li>
                <li><code className="text-purple-400">auth/gmail.compose</code> - Manage drafts and send emails</li>
              </ul>
              <p className="text-gray-400 text-sm mt-2 ml-4">
                <strong>Why we need this:</strong> To provide email productivity features through AI assistants, including reading email content, composing responses, managing drafts, and sending emails on your behalf—all with automatic PII redaction to protect sensitive information.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-purple-700 font-semibold mb-1">Google Drive API</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                <li><code className="text-purple-400">auth/drive</code> - See, edit, create, and delete Google Drive files</li>
              </ul>
              <p className="text-gray-400 text-sm mt-2 ml-4">
                <strong>Why we need this:</strong> To access, modify, and manage files from Gmail attachments and Drive, enabling AI-powered productivity features while applying PII redaction and governance policies to protect sensitive content.
              </p>
            </div>

            <div className="mb-4">
              <p className="text-purple-700 font-semibold mb-1">Google Calendar API</p>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
                <li><code className="text-purple-400">auth/calendar</code> - See, edit, share, and permanently delete calendars</li>
              </ul>
              <p className="text-gray-400 text-sm mt-2 ml-4">
                <strong>Why we need this:</strong> To schedule, update, and delete meetings based on email requests and AI assistant interactions, providing seamless calendar management with governance controls.
              </p>
            </div>
          </div>

          <div className="bg-purple-900 bg-opacity-20 border border-purple-800 rounded-lg p-4 mb-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Google API Services User Data Policy Compliance</h4>
            <p className="text-gray-300 text-sm mb-2">
              Vizco&apos;s use and transfer of information received from Google APIs adheres to the{' '}
              <a 
                href="https://developers.google.com/terms/api-services-user-data-policy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300"
              >
                Google API Services User Data Policy
              </a>, including the Limited Use requirements.
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Limited Use Disclosure:</strong> We only use the data accessed through Google APIs to provide and improve the specific features you authorize. We do not use Google user data for serving advertisements, and we do not sell Google user data to third parties.
            </p>
          </div>

          <h4 className="text-lg font-semibold mb-2 text-white">How We Process Google Data:</h4>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>PII Redaction:</strong> We automatically detect and redact personally identifiable information (names, addresses, phone numbers, SSNs, account numbers, etc.) from your emails, documents, and calendar entries before processing them through AI models. This protects sensitive information while enabling AI productivity features.</li>
            <li><strong>Local Processing:</strong> Where possible, data processing occurs locally on your device to minimize data transmission.</li>
            <li><strong>Policy Enforcement:</strong> We enforce access controls, content policies, and action restrictions based on your organization&apos;s governance rules.</li>
            <li><strong>No Advertising:</strong> We never use your Google data for advertising purposes or sell it to third parties.</li>
            <li><strong>Minimal Storage:</strong> We only store Google data temporarily and only when necessary to provide the requested service (e.g., caching for performance). Most data is processed in real-time and not retained.</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2 text-white">Google Data Retention:</h4>
          <p className="text-gray-300 mb-4">
            We retain Google user data only for as long as necessary to provide our Services:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>OAuth access tokens are stored securely on your device and can be revoked at any time</li>
            <li>Temporary cache data is automatically deleted within 24 hours</li>
            <li>When you disconnect your Google Account or uninstall our application, all associated Google data is immediately deleted</li>
            <li>You can request immediate deletion of all Google data by contacting us at info@vizco.co</li>
          </ul>

          <h4 className="text-lg font-semibold mb-2 text-white">Revoking Access to Google Data:</h4>
          <p className="text-gray-300 mb-4">
            You can revoke our application&apos;s access to your Google data at any time by:
          </p>
          <ol className="list-decimal list-inside text-gray-300 mb-4 space-y-1">
            <li>Visiting your{' '}
              <a 
                href="https://myaccount.google.com/permissions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-700 underline hover:text-purple-600"
              >
                Google Account Permissions page
              </a>
            </li>
            <li>Finding &quot;Vizco&quot; in your list of connected apps</li>
            <li>Clicking &quot;Remove Access&quot;</li>
            <li>Or by disconnecting your account directly within our application settings</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>To provide and improve our Services:</strong> Including AI governance, policy enforcement, PII redaction, access control, and audit capabilities across your email, documents, and calendar</li>
            <li><strong>To process Google API data:</strong> Reading, composing, and sending emails; managing Gmail drafts and attachments; accessing and modifying Google Drive files; scheduling and managing Google Calendar events—all with automatic PII redaction and policy enforcement</li>
            <li><strong>To communicate with you:</strong> Responding to inquiries, scheduling demos, sending updates, and providing customer support</li>
            <li><strong>To process job applications:</strong> Reviewing resumes and contacting candidates</li>
            <li><strong>To personalize your experience:</strong> Tailoring content and recommendations</li>
            <li><strong>To analyze and improve our Site:</strong> Understanding how users interact with our Site and optimizing performance</li>
            <li><strong>To enforce policies and ensure security:</strong> Detecting fraud, preventing abuse, protecting user data, and redacting sensitive information before AI processing</li>
            <li><strong>To comply with legal obligations:</strong> Responding to legal requests and enforcing our terms</li>
          </ul>
          
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-lg p-4 mt-4">
            <p className="text-gray-300 text-sm">
              <strong>Important:</strong> We do NOT use your Google user data (Gmail, Drive, Calendar) for advertising, marketing to third parties, or any purpose unrelated to providing the AI governance and productivity features you explicitly authorize. Your Google data is processed solely to deliver the services you request.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Share Your Information</h2>
          <p className="text-gray-300 mb-4">
            We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our Site and Services (e.g., hosting, analytics, email delivery, Calendly for scheduling). These providers are contractually obligated to protect your data and use it only for the purposes we specify.</li>
            <li><strong>Business Transfers:</strong> If Vizco is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or government request, or to protect the rights, property, or safety of Vizco, our users, or others.</li>
            <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your explicit consent.</li>
          </ul>

          <div className="bg-purple-900 bg-opacity-20 border border-purple-800 rounded-lg p-4 mt-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Google User Data - No Sharing or Sale</h4>
            <p className="text-gray-300 text-sm mb-2">
              <strong>We do NOT share, sell, or transfer your Google user data (Gmail, Drive, Calendar) to any third parties</strong>, except in the following limited circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 ml-4">
              <li>When required by law (e.g., valid court order, government request)</li>
              <li>To AI service providers (e.g., OpenAI, Anthropic) <strong>only after applying PII redaction</strong> to protect sensitive information, and only to provide the AI features you explicitly request</li>
              <li>With your explicit, informed consent for a specific purpose</li>
            </ul>
            <p className="text-gray-300 text-sm mt-2">
              All AI service providers we work with are bound by strict data protection agreements and use your data only to provide the requested AI services—never for training models or other purposes.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Retention</h2>
          <p className="text-gray-300 mb-4">
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymize it.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-purple-700">Google User Data Retention</h3>
          <p className="text-gray-300 mb-4">
            We follow strict retention policies for Google user data:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Real-time Processing:</strong> Most Gmail, Drive, and Calendar data is processed in real-time and not stored permanently on our servers</li>
            <li><strong>Temporary Cache:</strong> Data cached for performance purposes is automatically deleted within 24 hours</li>
            <li><strong>OAuth Tokens:</strong> Access tokens are stored securely on your local device and can be revoked at any time</li>
            <li><strong>Account Disconnection:</strong> When you disconnect your Google Account or uninstall our application, all associated Google data is immediately and permanently deleted from our systems</li>
            <li><strong>User-Requested Deletion:</strong> You can request immediate deletion of all your Google data at any time by contacting info@vizco.co, and we will comply within 48 hours</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Your Rights and Choices</h2>
          <p className="text-gray-300 mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request that we correct or update inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request that we delete your personal information, subject to certain exceptions (e.g., legal obligations)</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing emails or withdraw consent for data processing</li>
            <li><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
            <li><strong>Restriction:</strong> Request that we limit how we use your information</li>
            <li><strong>Object:</strong> Object to our processing of your personal information for certain purposes</li>
          </ul>
          <p className="text-gray-300 mb-4">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@vizco.co" className="text-purple-700 underline hover:text-purple-600">
              info@vizco.co
            </a>. We will respond to your request within 30 days.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>OAuth Data:</strong> You can revoke Vizco&apos;s access to your OAuth data at any time through your OAuth provider&apos;s account settings (e.g., Google Account Permissions, Microsoft Account Permissions).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">6. Data Security</h2>
          <p className="text-gray-300 mb-4">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-1">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication protocols</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Secure storage and processing infrastructure</li>
          </ul>
          <p className="text-gray-300 mb-4">
            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">7. Third-Party Links and Services</h2>
          <p className="text-gray-300 mb-4">
            Our Site may contain links to third-party websites and services (e.g., Calendly, Google Forms, LinkedIn). We are not responsible for the privacy practices or content of these third parties. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">8. Children&apos;s Privacy</h2>
          <p className="text-gray-300 mb-4">
            Our Site and Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child under 18, we will take steps to delete it promptly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">9. International Data Transfers</h2>
          <p className="text-gray-300 mb-4">
            Vizco is based in the United States. If you are accessing our Site or Services from outside the U.S., please be aware that your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. By using our Site or Services, you consent to such transfers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">10. Changes to This Privacy Policy</h2>
          <p className="text-gray-300 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will post the updated policy on this page and update the &quot;Effective Date&quot; at the top. We encourage you to review this Privacy Policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">11. Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-6">
            <p className="text-gray-300 mb-2">
              <strong>Vizco</strong>
            </p>
            <p className="text-gray-300 mb-2">
              501 Folsom St, San Francisco, CA 94105
            </p>
            <p className="text-gray-300 mb-2">
              Email:{' '}
              <a href="mailto:info@vizco.co" className="text-purple-700 underline hover:text-purple-600">
                info@vizco.co
              </a>
            </p>
            <p className="text-gray-300">
              Privacy Contact:{' '}
              <a href="mailto:chris@vizco.co" className="text-purple-700 underline hover:text-purple-600">
                chris@vizco.co
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">12. California Privacy Rights (CCPA)</h2>
          <p className="text-gray-300 mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>The right to know what personal information we collect, use, and disclose</li>
            <li>The right to request deletion of your personal information</li>
            <li>The right to opt-out of the sale of your personal information (note: we do not sell personal information)</li>
            <li>The right to non-discrimination for exercising your CCPA rights</li>
          </ul>
          <p className="text-gray-300 mb-4">
            To exercise these rights, please contact us at{' '}
            <a href="mailto:info@vizco.co" className="text-purple-700 underline hover:text-purple-600">
              info@vizco.co
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-white">13. European Privacy Rights (GDPR)</h2>
          <p className="text-gray-300 mb-4">
            If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the General Data Protection Regulation (GDPR):
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
            <li>The right to access, rectify, or erase your personal data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
            <li>The right to lodge a complaint with a supervisory authority</li>
          </ul>
          <p className="text-gray-300 mb-4">
            Our legal basis for processing your data includes: performance of a contract, legitimate interests, compliance with legal obligations, and your consent.
          </p>
        </section>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Last updated: November 21, 2024
          </p>
        </div>
      </div>
    </div>
  );
}
