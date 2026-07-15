import React from 'react';
import { Shield, Lock, FileText, Globe, CheckCircle, Smartphone, AlertCircle, Users } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center border-b border-slate-800 pb-10 mb-12">
          <div className="inline-flex p-3 bg-blue-500/10 rounded-full text-blue-400 mb-4 animate-pulse">
            <Shield className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            How ACR Enterprises LLC collects, uses, and protects your information.
          </p>
          <div className="mt-4 inline-block bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-400 font-mono">
            Last Updated: May 21, 2026
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none mb-12 text-slate-300 leading-relaxed space-y-6">
          <p>
            At <strong className="text-white">ACR Enterprises LLC</strong> ("we", "us", or "our"), operating our corporate website, SaaS applications, e-commerce storefronts, and media publications including <em className="text-blue-400 not-italic font-semibold">TheTrendVibe</em> and <em className="text-blue-400 not-italic font-semibold">Nexo24</em> (collectively, the "Services"), one of our main priorities is the privacy of our visitors, customers, and subscribers. This Privacy Policy document contains the types of information that is collected and recorded by us and how we use it.
          </p>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our official corporate communication channels.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          
          {/* Section 1 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-slate-300 mb-4 text-sm sm:text-base leading-relaxed">
                  The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask for it.
                </p>
                <ul className="space-y-3 text-slate-400 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-bold">•</span>
                    <span>
                      <strong className="text-slate-200">Account and Subscription Information:</strong> When you register on our platforms, purchase a SaaS subscription, or sign up for our media publications and newsletters, we collect your email address and profile details to deliver our content, tools, and updates.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-bold">•</span>
                    <span>
                      <strong className="text-slate-200">Transaction and Billing Data:</strong> For purchases made through our SaaS platforms, digital products, or e-commerce storefronts, we or our third-party payment processors collect payment details, billing addresses, and necessary order fulfillment information.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-bold">•</span>
                    <span>
                      <strong className="text-slate-200">Mobile Device Information:</strong> If you explicitly choose to provide your mobile phone number for transactional notifications, automated digital delivery updates, or operational alerts, we collect your phone number and communication preferences.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2 font-bold">•</span>
                    <span>
                      <strong className="text-slate-200">Log Files:</strong> We follow a standard procedure of using log files through our hosting platforms. These files log visitors when they visit our websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamps, referring/exit pages, and possibly the number of clicks.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1">
                <Globe className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-slate-300 mb-4 text-sm sm:text-base">
                  We use the information we collect in various ways, including to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-400 text-sm">
                  {[
                    "Provide, operate, and maintain our corporate website, publications, and SaaS platforms.",
                    "Improve, personalize, and expand our digital content, products, and online stores.",
                    "Understand and analyze how users interact with our publications, storefronts, and applications.",
                    "Develop new products, services, features, and functionality.",
                    "Communicate with you (directly or via partners) for customer service, updates, and transactional notes.",
                    "Process mobile alerts and SMS notifications under strictly compliant protocols, with your express consent.",
                    "Process payments and fulfill physical or digital product orders.",
                    "Find and prevent fraudulent activities."
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/40">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400 mt-1">
                <Users className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">3. Third-Party Privacy Policies</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our Privacy Policy does not apply to external advertisers, external services, payment processors, or third-party websites that we link to (such as dropshipping fulfillment networks or affiliate partner sites). We advise you to consult the respective Privacy Policies of these third-party platforms for more detailed information regarding their data handling operations and instructions on how to opt-out of certain options.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                <Lock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">4. California Consumer Privacy Act (CCPA) & GDPR Rights</h2>
                <p className="text-slate-300 mb-4 text-sm sm:text-base">
                  Depending on your geographical location, you may have the following rights regarding your personal data:
                </p>
                <div className="space-y-3 text-slate-400 text-sm sm:text-base">
                  <p>
                    <strong className="text-slate-200">The Right to Know/Access:</strong> The right to request that we disclose the categories and specific pieces of personal data we have collected about you.
                  </p>
                  <p>
                    <strong className="text-slate-200">The Right to Delete:</strong> The right to request that we delete any of your personal data that we have collected, subject to certain legal exceptions.
                  </p>
                  <p>
                    <strong className="text-slate-200">The Right to Data Portability:</strong> The right to request that we transfer your collected data to another organization or directly to you.
                  </p>
                  <p>
                    <strong className="text-slate-200">The Right to Restrict Processing:</strong> The right to request that we limit how we process your personal data.
                  </p>
                  <p className="text-xs text-slate-500 italic mt-2">
                    If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 - STAMP 10DLC */}
          <section className="relative overflow-hidden bg-gradient-to-b from-blue-950/40 to-indigo-950/20 border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-lg shadow-blue-500/5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-start space-x-4">
              <div className="p-2.5 bg-blue-500/20 rounded-xl text-blue-400 mt-1 border border-blue-400/20">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-2 flex items-center">
                  5. Strict Mobile Information Privacy
                  <span className="ml-2 text-xs font-mono bg-blue-500/20 text-blue-300 px-2.5 py-0.5 rounded-full border border-blue-500/30">
                    A2P 10DLC Standard
                  </span>
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm font-mono mb-4">
                  We strictly adhere to the highest privacy principles regarding mobile numbers and messaging consent.
                </p>
                <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    <strong className="text-blue-400">SMS Consent and Phone Numbers Privacy Protection:</strong> Notwithstanding anything to the contrary in this Privacy Policy, mobile phone numbers collected for the purpose of SMS notifications, text messaging consent, or mobile alerts will <span className="text-white font-bold underline decoration-blue-400 underline-offset-4">NEVER</span> be shared, sold, rented, leased, or disclosed to third parties, affiliates, or close partners for marketing, commercial, or promotional purposes. Your mobile data consent is kept entirely confidential within ACR Enterprises LLC and is used exclusively for the transactional, operational, or requested promotional purposes specified at the moment of collection.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-pink-500/10 rounded-lg text-pink-400 mt-1">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">6. Children's Information</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. ACR Enterprises LLC does not knowingly collect any Personal Identifiable Information from children under the age of 13.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/50 transition-colors">
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white mb-4">7. Consent</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  By using our websites, purchasing our products, subscribing to our digital properties, or providing your contact information, you hereby consent to our Privacy Policy and agree to its terms.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer info note */}
        <div className="text-center text-xs text-slate-500 mt-16 border-t border-slate-900 pt-8">
          <p>© {new Date().getFullYear()} ACR Enterprises LLC. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}
