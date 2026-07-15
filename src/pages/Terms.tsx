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
          Last Updated: May 21, 2026
        </p>

        <div className="h-px bg-gradient-to-r from-cyber-blue/30 via-white/10 to-transparent mb-12" />

        {/* ==================== EDIT CONTENT BELOW ==================== */}

        <div className="space-y-8">
          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            Welcome to <strong>ACR Enterprises LLC</strong> (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;,
            or &ldquo;our&rdquo;). These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of our corporate website acrenterprises.us, as well as all products, services, SaaS applications, media publications TheTrendVibe and Nexo24, e-commerce storefronts, and elite consulting engagements operated by us (collectively, the &ldquo;Services&rdquo;).
          </p>
          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to all of these Terms, you may not access or use our Services.
          </p>

          {/* 1 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">1.</span> Our Business Verticals & Scope of Services
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] mb-3">
              ACR Enterprises LLC operates a diverse portfolio of digital initiatives. By using our Services, you acknowledge that our operations span the following distinct business sectors:
            </p>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">Digital Entertainment & SaaS:</span> We offer subscription-based access to proprietary digital entertainment software and Software-as-a-Service (SaaS) platforms.
              </li>
              <li>
                <span className="text-white font-semibold">Media & Content Publishing:</span> We publish informational, tech-forward, and cultural content across our media properties and platforms, including <em>TheTrendVibe</em> and <em>Nexo24</em>.
              </li>
              <li>
                <span className="text-white font-semibold">E-Commerce & Audience Growth:</span> We operate online storefronts and market digital products (such as downloadable guides, books, and courses) as well as physical goods via dropshipping and affiliate program channels.
              </li>
              <li>
                <span className="text-white font-semibold">Selective Elite Consulting:</span> We provide high-end, tailored advisory and consulting services in technology, information systems, digital marketing, and artificial intelligence (AI) for entrepreneurs.
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">2.</span> Eligibility & User Accounts
            </h2>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">Age Requirements:</span> You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to use our Services or register for an account.
              </li>
              <li>
                <span className="text-white font-semibold">Account Responsibility:</span> If any of our Services require you to create an account, you are solely responsible for maintaining the confidentiality of your credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information at all times.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">3.</span> SMS & Mobile Communications
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] mb-4">
              By providing your phone number to ACR Enterprises LLC or through any of our storefronts, subscription platforms, or consulting application forms, you expressly consent to receive transactional, operational, and promotional text messages (including SMS and MMS) from us or our third-party service providers.
            </p>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">Opt-Out:</span> You can opt-out of receiving SMS communications at any time by replying &ldquo;STOP&rdquo; to any text message you receive from us.
              </li>
              <li>
                <span className="text-white font-semibold">Rates:</span> Message and data rates may apply depending on your mobile carrier plan. Frequency of messages varies based on your interactions with our Services.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">4.</span> Intellectual Property Rights
            </h2>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">Our Content:</span> All content, software, code, designs, graphics, logos, trademarks, and educational materials provided through our Services are the intellectual property of ACR Enterprises LLC or our licensors and are protected by copyright, trademark, and other proprietary laws.
              </li>
              <li>
                <span className="text-white font-semibold">Limited License:</span> We grant you a limited, non-exclusive, non-transferable, and revocable license to access our publicly available content and platforms strictly for your personal, non-commercial use, or as expressly permitted under a separate written agreement (such as a Consulting Statement of Work).
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">5.</span> Payments, Subscriptions & Refunds
            </h2>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">Billing:</span> Access to certain SaaS products, premium publishing tiers, or consulting services may require one-time payments or recurring subscriptions. You agree to provide valid payment information and authorize us (or our third-party payment processors) to charge all due amounts.
              </li>
              <li>
                <span className="text-white font-semibold">Cancellations & Refunds:</span> All subscription billing, cancellations, and product refund rules are strictly subject to our official **Refund & Return Policy**. Each business vertical handles cancellations and refunds independently (e.g., e-commerce physical returns are managed by suppliers, digital product and SaaS subscription purchases are generally non-refundable).
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">6.</span> Third-Party Links & Services
            </h2>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>
                <span className="text-white font-semibold">External Platforms:</span> Our Services may contain links to third-party websites, platforms, dropshipping suppliers, or affiliate networks.
              </li>
              <li>
                <span className="text-white font-semibold">No Endorsement:</span> We do not own, control, or monitor these third-party platforms. ACR Enterprises LLC is not responsible for the content, privacy policies, terms, or transactions executed on any third-party website. Your interactions with third parties are solely between you and the respective third party.
              </li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">7.</span> Prohibited Conduct
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] mb-3">
              When using our Services, you agree not to:
            </p>
            <ul className="space-y-3 pl-5 list-disc text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              <li>Violate any applicable local, state, national, or international laws.</li>
              <li>Copy, distribute, modify, reverse engineer, or scrape any part of our website, SaaS applications, or digital products without prior written authorization.</li>
              <li>Use our systems to transmit malware, viruses, or spam, or attempt to compromise our cyber-security infrastructure.</li>
              <li>Impersonate any individual or entity or misrepresent your affiliation with ACR Enterprises LLC.</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">8.</span> DISCLAIMER OF WARRANTIES
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] uppercase tracking-wide">
              YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK. THE SERVICES ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. ACR ENTERPRISES LLC EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">9.</span> LIMITATION OF LIABILITY
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] uppercase tracking-wide">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ACR ENTERPRISES LLC, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) OUR SERVICES.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">10.</span> Governing Law & Dispute Resolution
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              These Terms and any dispute arising out of your use of our Services shall be governed by and construed in accordance with the laws of the United States and the State where ACR Enterprises LLC is officially registered, without regard to conflict of law principles. Any legal action or proceeding shall be brought exclusively in the appropriate courts of that jurisdiction.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">11.</span> Modifications to Terms
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              We reserve the right to update or modify these Terms at any time without prior notice. The &ldquo;Last Updated&rdquo; date at the top of this document will indicate when the latest revisions were made. Your continued use of our Services following any updates constitutes your acceptance of the new Terms of Service.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">12.</span> Contact Information
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              If you have any questions, concerns, or legal inquiries regarding these Terms, please contact us through our official corporate communication channels.
            </p>
          </section>
        </div>

        {/* ==================== EDIT CONTENT ABOVE ==================== */}
      </div>
    </div>
  );
}

export default Terms;
