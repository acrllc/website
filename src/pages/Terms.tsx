import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Terms() {
  return (
    <div className="relative min-h-screen bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-20"
        style={{ backgroundSize: '50px 50px' }}
      />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyber-blue/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-cyber-silver/60 hover:text-cyber-blue transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 border border-cyber-blue/20">
            <FileText size={26} className="text-cyber-blue" />
          </div>
          <span className="section-label">Legal</span>
        </div>

        <h1 className="heading-display text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Terms of Service
        </h1>
        <p className="text-cyber-silver/60 text-base lg:text-lg mb-3">
          The terms and conditions governing the use of ACR Enterprises LLC products and services.
        </p>
        <p className="text-xs text-cyber-steel/50 uppercase tracking-wider mb-12">
          Last Updated: July 14, 2026
        </p>

        <div className="h-px bg-gradient-to-r from-cyber-blue/30 via-white/10 to-transparent mb-12" />

        {/* ==================== EDIT CONTENT BELOW ==================== */}

        <div className="space-y-8">
          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            Welcome to TheTrendVibe (the &ldquo;Service&rdquo;), a digital media property owned and
            operated by ACR Enterprises LLC (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo;). By accessing or using our website, subscribing to our newsletter
            via Substack, or interacting with our digital properties, you agree to be bound by these
            Terms of Service (&ldquo;Terms&rdquo;). If you do not agree with these Terms, please do
            not use our Service.
          </p>

          {/* 1 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">1.</span> Acceptance of Terms
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              By utilizing TheTrendVibe, you affirm that you are at least 18 years of age or possess
              legal parental or guardian consent, and are fully able and competent to enter into the
              terms, conditions, obligations, affirmations, representations, and warranties set
              forth in these Terms.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">2.</span> Intellectual Property Rights
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              All content published on TheTrendVibe, including text, graphics, logos, images, sports
              summaries, data analyses, and software scripts, is the property of ACR Enterprises LLC
              or its content creators and is protected by United States and international copyright,
              trademark, and intellectual property laws. You may not reproduce, distribute, modify,
              or exploit any content without express written permission from us.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">3.</span> Third-Party Services
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              Our Service integrates with third-party platforms to deliver content and manage user
              subscriptions, including Substack for newsletter delivery. By interacting with these
              platforms through our Service, you also agree to comply with their respective terms and
              conditions.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">4.</span> SMS and Mobile Messaging (A2P 10DLC
              Compliance)
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              In the event that you provide your mobile phone number to us through any of our
              registration forms, subscription checkout, or contact channels, you expressly
              acknowledge and agree that your number will be managed and used strictly under the A2P
              10DLC Compliance regulations of the United States telecommunications network.
            </p>
            <div className="mt-5 space-y-4">
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Purpose of Messages: </span>
                  If applicable, text messages will be used solely to deliver transactional updates,
                  digital delivery confirmations, account notifications, or requested summaries.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Opt-Out (Stop): </span>
                  You can cancel any SMS service at any time by replying STOP to any message received.
                  Upon receiving your &ldquo;STOP&rdquo; request, we will send a final confirmation
                  message, and no further text messages will be sent to your number.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Support (Help): </span>
                  For assistance or inquiries regarding mobile notifications, you may reply with the
                  keyword HELP or contact our support channels directly.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Carrier Rates: </span>
                  Standard message and data rates may apply depending on your wireless
                  provider&rsquo;s mobile plan.
                </p>
              </div>
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">5.</span> Privacy and Data Sharing
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              Your privacy is critically important to us. We collect and process user data in
              accordance with our Privacy Policy.
            </p>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] mt-3">
              <span className="text-white font-semibold">Mobile Information Privacy: </span>
              Notwithstanding anything to the contrary in our policies, mobile phone numbers
              collected for the purpose of text messaging notifications and consent will strictly
              NOT be shared, sold, or rented to third parties, partners, or affiliates for marketing
              or promotional purposes.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">6.</span> Limitation of Liability
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              In no event shall ACR Enterprises LLC, its directors, employees, or agents, be liable
              for any indirect, incidental, special, consequential, or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other intangible losses,
              resulting from your access to or use of the Service.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">7.</span> Governing Law
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              These Terms shall be governed and construed in accordance with the laws of the United
              States and the State in which ACR Enterprises LLC is legally registered, without
              regard to its conflict of law provisions.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">8.</span> Changes to Terms
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any
              time. We will provide notice of any material changes by updating the &ldquo;Last
              Updated&rdquo; date at the top of this page.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">9.</span> Contact Information
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              If you have any questions about these Terms, please contact us through our official
              corporate communication channels.
            </p>
          </section>
        </div>

        {/* ==================== EDIT CONTENT ABOVE ==================== */}
      </div>
    </div>
  );
}

export default Terms;
