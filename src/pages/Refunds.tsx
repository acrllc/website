import { RotateCcw, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Refunds() {
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
            <RotateCcw size={26} className="text-cyber-blue" />
          </div>
          <span className="section-label">Legal</span>
        </div>

        <h1 className="heading-display text-4xl lg:text-5xl font-bold gradient-text mb-4">
          Refund &amp; Return Policy
        </h1>
        <p className="text-cyber-silver/60 text-base lg:text-lg mb-3">
          Our policy regarding refunds for products and services offered by ACR Enterprises LLC.
        </p>
        <p className="text-xs text-cyber-steel/50 uppercase tracking-wider mb-12">
          Last Updated: May 21, 2026
        </p>

        <div className="h-px bg-gradient-to-r from-cyber-blue/30 via-white/10 to-transparent mb-12" />

        {/* ==================== EDIT CONTENT BELOW ==================== */}

        <div className="space-y-8">
          <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
            At ACR Enterprises LLC (referred to as &ldquo;Company&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we operate a diverse portfolio of digital
            initiatives, media properties (including TheTrendVibe and Nexo24), e-commerce channels, and
            consulting services. Because of the distinct nature of each of our business divisions,
            our refund and return policies are managed independently by &ldquo;vertical.&rdquo;
            Please review the specific terms below associated with the product or service you have
            acquired.
          </p>

          {/* 1 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">1.</span> Digital Entertainment, SaaS &amp; Media
              Publishing
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              This section applies to digital entertainment SaaS subscriptions and premium media
              content subscriptions (such as Substack publications).
            </p>
            <ul className="mt-4 space-y-2.5 pl-1">
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">No Refunds: </span>
                  All payments made for digital subscriptions, memberships, or SaaS services are
                  strictly non-refundable.
                </span>
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">Cancellations: </span>
                  You may cancel your subscription at any time.
                </span>
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">Access Until Expiration: </span>
                  Upon cancellation, you will continue to have full access to the premium content or
                  software service until the end of your current billing cycle.
                </span>
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">No Renewals: </span>
                  No further charges or renewals will be processed once a cancellation request is
                  active.
                </span>
              </li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">2.</span> E-Commerce &amp; Audience Growth
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              This section applies to physical products sold via dropshipping/affiliate links, as
              well as digital products.
            </p>
            <ul className="mt-4 space-y-2.5 pl-1">
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">Physical Products (Dropshipping &amp;
                  Affiliate Storefronts): </span>
                  Return and refund policies for physical goods are governed and processed directly
                  by the respective third-party supplier or merchant of record. Please refer to the
                  specific return instructions, timeframes, and shipping details provided at the
                  point of sale or on the supplier&rsquo;s checkout page.
                </span>
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">Digital Products: </span>
                  Due to the immediate, downloadable nature of digital assets (including but not
                  limited to online guides, educational courses, e-books, and templates), all sales
                  of digital products are final and non-refundable.
                </span>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">3.</span> Selective Elite Consulting
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              This section applies to bespoke advisory services in technology, social media,
              marketing, and AI.
            </p>
            <ul className="mt-4 space-y-2.5 pl-1">
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">Project-Specific Agreements: </span>
                  Consulting engagements operate under custom, individual service agreements and
                  project milestones.
                </span>
              </li>
              <li className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8] flex gap-3">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-blue" />
                <span>
                  <span className="text-white font-semibold">No General Refunds: </span>
                  Standard refund policies do not apply to consulting services. Any terms regarding
                  modifications, milestones, or termination are strictly managed as outlined in your
                  specific contract or Statement of Work (SOW).
                </span>
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="heading-display text-lg lg:text-xl font-bold text-white mb-3">
              <span className="text-cyber-blue">4.</span> Contact Us
            </h2>
            <p className="text-sm lg:text-base text-cyber-silver/70 leading-[1.8]">
              If you have questions regarding a charge, need assistance with a subscription
              cancellation, or have inquiries about our return processes, please contact us through
              our official corporate communication channels.
            </p>
          </section>
        </div>

        {/* ==================== EDIT CONTENT ABOVE ==================== */}
      </div>
    </div>
  );
}

export default Refunds;
