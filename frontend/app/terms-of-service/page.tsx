import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Energize Tech Solutions. Read our terms and conditions for using our website and services.',
  keywords: 'terms of service, terms and conditions, user agreement, Energize Tech Solutions',
  openGraph: {
    title: 'Terms of Service - Energize Tech Solutions',
    description: 'Read our terms and conditions for using our website and services',
    url: 'https://energizetechsolutions.com/terms-of-service',
    type: 'website',
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-400 mb-8">
            Last updated: January 2026
          </p>

          <div className="space-y-8 text-sm text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                1. Agreement to Terms
              </h2>
              <p className="mb-4">
                By accessing or using the Energize Tech Solutions website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                2. Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on Energize Tech Solutions' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                3. Services
              </h2>
              <p className="mb-4">
                Energize Tech Solutions provides software development, consulting, and related technology services. All services are provided subject to separate service agreements that will be executed between you and Energize Tech Solutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                4. User Accounts
              </h2>
              <p className="mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                5. Intellectual Property
              </h2>
              <p className="mb-4">
                The website and its original content, features, and functionality are owned by Energize Tech Solutions and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                6. Prohibited Uses
              </h2>
              <p className="mb-4">You may not use our website:</p>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code, viruses, or harmful data</li>
                <li>To impersonate or attempt to impersonate the company or any employee</li>
                <li>In any way that infringes upon the rights of others</li>
                <li>To engage in any automated use of the system</li>
                <li>To interfere with or disrupt the website or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                7. Disclaimer
              </h2>
              <p className="mb-4">
                The materials on Energize Tech Solutions' website are provided on an 'as is' basis. Energize Tech Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                8. Limitations
              </h2>
              <p className="mb-4">
                In no event shall Energize Tech Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Energize Tech Solutions' website, even if Energize Tech Solutions or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                9. Accuracy of Materials
              </h2>
              <p className="mb-4">
                The materials appearing on Energize Tech Solutions' website could include technical, typographical, or photographic errors. Energize Tech Solutions does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                10. Links
              </h2>
              <p className="mb-4">
                Energize Tech Solutions has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Energize Tech Solutions of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                11. Modifications
              </h2>
              <p className="mb-4">
                Energize Tech Solutions may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                12. Governing Law
              </h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of Saudi Arabia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-white">
                13. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <ul className="list-none mb-4 space-y-2 ml-4">
                <li className="text-slate-300">
                  <strong>Email:</strong> info@ets-ksa.com
                </li>
                <li className="text-slate-300">
                  <strong>Phone:</strong> +966 53 848 6109
                </li>
                <li className="text-slate-300">
                  <strong>Address:</strong> Saudi Arabia, Egypt, Dubai, Oman
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
