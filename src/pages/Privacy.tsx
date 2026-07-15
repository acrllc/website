import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Privacy() {
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
            <Shield size={26} className="text-cyber-blue" />
          </div>
          <span className="section-label">Legal</span>
        </div>

        <h1 className="heading-display text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Privacy Policy
        </h1>
        <p className="text-cyber-silver/60 text-base lg:text-lg mb-3">
          How ACR Enterprises LLC collects, uses, and protects your information.
        </p>
        <p className="text-xs text-cyber-steel/50 uppercase tracking-wider mb-12">
          Last Updated: May 21, 2026
        </p>

        <div className="h-px bg-gradient-to-r from-cyber-blue/30 via-white/10 to-transparent mb-12" />

        {/* ==================== EDIT CONTENT BELOW ==================== */}

        <div className="space-y-8">
          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            At <strong className="text-white">ACR Enterprises LLC</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
            &ldquo;our&rdquo;), operating our corporate website, SaaS applications, e-commerce storefronts, 
            and media publications including <em className="text-cyber-blue not-italic font-semibold">TheTrendVibe</em> and <em className="text-cyber-blue not-italic font-semibold">Nexo24</em> (collectively, the &ldquo;Services&rdquo;), one of our main priorities is the privacy of our visitors, customers, and subscribers. This Privacy Policy document contains the types of information that is collected and recorded by us and how we use it.
          </p>

          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            If you have additional questions or require more information about our Privacy Policy, do
            not hesitate to contact us through our official corporate communication channels.
          </p>

          {/* 1 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">1.</span> Information We Collect
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              The personal information that you are asked to provide, and the reasons why you are
              asked to provide it, will be made clear to you at the point we ask you to provide your
              personal information.
            </p>
            <div className="mt-5 space-y-4">
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Account and Subscription Information: </span>
                  When you register on our platforms, purchase a SaaS subscription, or sign up for our media publications and newsletters, we collect your email address and profile details to deliver our content, tools, and updates.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Transaction and Billing Data: </span>
                  For purchases made through our SaaS platforms, digital products, or e-commerce storefronts, we or our third-party payment processors collect payment details, billing addresses, and necessary order fulfillment information.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Mobile Device Information: </span>
                  If you explicitly choose to provide your mobile phone number for transactional
                  notifications, automated digital delivery updates, or operational alerts, we collect your phone number
                  and communication preferences.
                </p>
              </div>
              <div className="pl-4 border-l border-cyber-blue/15">
                <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
                  <span className="text-white font-semibold">Log Files: </span>
                  We follow a standard procedure of using log files through our hosting
                  platforms. These files log visitors when they visit websites. The information
                  collected by log files includes internet protocol (IP) addresses, browser type,
                  Internet Service Provider (ISP), date and time stamps, referring/exit pages, and
                  possibly the number of clicks.
                </p>
              </div>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">2.</span> How We Use Your Information
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="mt-4 space-y-2.5 pl-1">
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Provide, operate, and maintain our corporate website, publications, and SaaS platforms.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Improve, personalize, and expand our digital content, products, and online stores.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Understand and analyze how users interact with our publications, storefronts, and applications.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Develop new products, services, features, and functionality.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Communicate with you, either directly or through our service partners, to provide you with customer service, updates, and transactional notes.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Process mobile alerts and SMS notifications under strictly compliant protocols, with your express consent.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Process payments and fulfill physical or digital product orders.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                Find and prevent fraudulent activities.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">3.</span> Third-Party Privacy Policies
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              Our Privacy Policy does not apply to external advertisers, external services, payment processors, or third-party websites that we link to (such as dropshipping fulfillment networks or affiliate partner sites). We advise you to consult the respective Privacy Policies of these third-party platforms for more detailed information regarding their data handling operations and instructions on how to opt-out of certain options.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">4.</span> California Consumer Privacy Act (CCPA) &amp;
              GDPR Rights
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              Depending on your geographical location, you may have the following rights regarding
              your personal data:
            </p>
            <ul className="mt-4 space-y-2.5 pl-1">
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                The right to request that a business disclose the categories and specific pieces of
                personal data that a business has collected about consumers.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                The right to request that a business delete any personal data about the consumer that
                a business has collected, subject to certain legal exceptions.
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="text-cyber-blue mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                The right to data portability and restriction of processing. If you make a request, we
                have one month to respond to you. If you would like to exercise any of these rights,
                please contact us.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">5.</span> Strict Mobile Information Privacy (A2P
              10DLC Standard)
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              We strictly adhere to the highest privacy principles regarding mobile numbers and
              messaging consent.
            </p>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] mt-3">
              <span className="text-white font-semibold">SMS Consent and Phone Numbers Privacy
              Protection: </span>
              Notwithstanding anything to the contrary in this Privacy Policy, mobile phone numbers
              collected for the purpose of SMS notifications, text messaging consent, or mobile
              alerts will NEVER be shared, sold, rented, leased, or disclosed to third parties, affiliates, or
              close partners for marketing, commercial, or promotional purposes. Your mobile data
              consent is kept entirely confidential within ACR Enterprises LLC and is used
              exclusively for the transactional, operational, or requested promotional purposes specified at the moment of collection.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">6.</span> Children&rsquo;s Information
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              Another part of our priority is adding protection for children while using the
              internet. We encourage parents and guardians to observe, participate in, and/or
              monitor and guide their online activity. ACR Enterprises LLC does not knowingly collect any
              Personal Identifiable Information from children under the age of 13.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">7.</span> Consent
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              By using our websites, purchasing our products, subscribing to our digital properties, or providing your contact
              information, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>
        </div>

        {/* ==================== EDIT CONTENT ABOVE ==================== */}
      </div>
    </div>
  );
}

export default Privacy;
