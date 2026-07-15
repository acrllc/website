import { Link } from 'react-router-dom';
import {
  Gamepad2,
  Newspaper,
  ShoppingBag,
  Brain,
  ArrowRight,
  Sparkles,
  Cpu,
  Rocket,
  ShieldCheck,
  Target,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { useState } from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950">
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute inset-0 bg-grid-pattern opacity-50"
        style={{ backgroundSize: '50px 50px' }}
      />
      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-navy-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Scanline */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent scanline" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-8">
          <Sparkles size={14} className="text-cyber-teal" />
          <span className="text-xs font-medium tracking-wider text-cyber-silver uppercase">
            ACR Enterprises LLC
          </span>
        </div>

        <h1 className="heading-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
          <span className="gradient-text">Engineering the Future of</span>
          <br />
          <span className="gradient-text-cyber glow-text">Digital Entertainment</span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-cyber-silver/70 max-w-2xl mx-auto leading-relaxed mb-10">
          We build and scale ventures across digital entertainment, media publishing, and
          e-commerce — paired with selective, elite consulting for founders ready to leverage
          AI and next-gen tech marketing.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pillars"
            className="btn-primary px-8 py-3.5 rounded-lg text-sm font-semibold flex items-center gap-2"
          >
            <span className="flex items-center gap-2">
              Explore Our Ventures
              <ArrowRight size={16} />
            </span>
          </a>
          <a
            href="#consulting"
            className="btn-outline px-8 py-3.5 rounded-lg text-sm font-semibold flex items-center gap-2"
          >
            <Cpu size={16} />
            Work With Us
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {[
            { value: '4', label: 'Core Verticals' },
            { value: 'AI', label: 'Driven Strategy' },
            { value: '∞', label: 'Audience Reach' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="heading-display text-3xl lg:text-4xl font-bold gradient-text-cyber mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-cyber-steel uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyber-steel/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cyber-blue/50 to-transparent" />
      </div>
    </section>
  );
}

const pillars = [
  {
    icon: Gamepad2,
    title: 'Digital Entertainment & SaaS',
    description:
      'Building immersive digital experiences and software platforms that captivate audiences and scale globally.',
    tags: ['SaaS', 'Gaming', 'Platforms'],
  },
  {
    icon: Newspaper,
    title: 'Media & Content Publishing',
    description:
      'TheTrendVibe on Substack — delivering high-signal analysis on tech, AI, and digital culture to a growing subscriber base.',
    tags: ['Substack', 'Newsletter', 'Content'],
  },
  {
    icon: ShoppingBag,
    title: 'E-Commerce & Audience Growth',
    description:
      'Dropshipping and affiliate product ventures engineered for conversion, powered by data-driven audience growth.',
    tags: ['Dropshipping', 'Affiliate', 'Growth'],
  },
  {
    icon: Brain,
    title: 'Selective Elite Consulting',
    description:
      '1:1 advisory for founders and teams on AI integration, tech marketing strategy, and scalable digital operations.',
    tags: ['AI', 'Strategy', '1:1 Advisory'],
  },
];

function Pillars() {
  return (
    <section id="pillars" className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{ backgroundSize: '60px 60px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-label">Core Pillars</span>
          <h2 className="heading-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Four Verticals. One Vision.</span>
          </h2>
          <p className="text-cyber-silver/60 max-w-2xl mx-auto text-base lg:text-lg">
            ACR Enterprises operates across four synergistic verticals — each engineered to
            compound audience, revenue, and technological advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-8 lg:p-10 group relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-blue/5 rounded-full blur-2xl group-hover:bg-cyber-blue/10 transition-all duration-500" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 border border-cyber-blue/20 mb-6 group-hover:border-cyber-blue/50 transition-colors duration-500">
                    <Icon size={26} className="text-cyber-blue group-hover:text-cyber-teal transition-colors duration-500" />
                  </div>

                  <h3 className="heading-display text-xl lg:text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm lg:text-base text-cyber-silver/60 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium text-cyber-silver/70 bg-white/5 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Number watermark */}
                <span className="absolute bottom-4 right-6 heading-display text-7xl font-bold text-white/[0.03] group-hover:text-cyber-blue/[0.05] transition-colors duration-500">
                  0{idx + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  {
    icon: Target,
    title: 'Discovery & Audit',
    description: 'We assess your current operations, tech stack, and growth bottlenecks to identify high-leverage opportunities.',
  },
  {
    icon: Cpu,
    title: 'Strategy Engineering',
    description: 'A custom roadmap integrating AI tooling, automation, and marketing systems tailored to your business model.',
  },
  {
    icon: Rocket,
    title: 'Execution & Scaling',
    description: 'Hands-on implementation support with measurable milestones, KPIs, and continuous optimization.',
  },
];

function Consulting() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', message: '' });
    }, 4000);
  };

  return (
    <section id="consulting" className="relative py-24 lg:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyber-teal/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="section-label">Selective Elite Consulting</span>
          <h2 className="heading-display text-3xl lg:text-5xl font-bold mt-3 mb-4">
            <span className="gradient-text">Work Directly With Us</span>
          </h2>
          <p className="text-cyber-silver/60 max-w-2xl mx-auto text-base lg:text-lg">
            We take on a limited number of founders and teams each quarter. If you're building
            something ambitious and need AI, tech marketing, or growth expertise — apply below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Process */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-cyber-teal" />
              <h3 className="heading-display text-lg font-bold text-white uppercase tracking-wide">
                Our Process
              </h3>
            </div>
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex gap-5 group">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 border border-cyber-blue/20 group-hover:border-cyber-blue/50 transition-colors duration-500 shrink-0">
                      <Icon size={22} className="text-cyber-blue" />
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-cyber-blue/30 to-transparent mt-2 min-h-[40px]" />
                    )}
                  </div>
                  <div className="pt-1 pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-cyber-blue/50 heading-display">
                        STEP 0{idx + 1}
                      </span>
                      <h4 className="heading-display text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-sm text-cyber-silver/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="glass-card rounded-xl p-5 flex items-start gap-3">
              <CheckCircle2 size={20} className="text-cyber-teal shrink-0 mt-0.5" />
              <p className="text-sm text-cyber-silver/70 leading-relaxed">
                <span className="text-white font-semibold">Limited availability.</span> We only
                accept clients where we can deliver outsized impact. Applications are reviewed
                within 5 business days.
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <h3 className="heading-display text-xl font-bold text-white mb-1">
              Consulting Application
            </h3>
            <p className="text-sm text-cyber-steel mb-6">
              Tell us about your venture. We'll reach out if there's a fit.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-cyber-teal/10 border border-cyber-teal/30 flex items-center justify-center mb-4 animate-pulse-glow">
                  <CheckCircle2 size={32} className="text-cyber-teal" />
                </div>
                <h4 className="heading-display text-lg font-bold text-white mb-2">
                  Application Received
                </h4>
                <p className="text-sm text-cyber-silver/60 max-w-xs">
                  Thank you. Our team will review your application and respond within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-cyber-silver/70 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-white/8 text-white text-sm placeholder:text-cyber-steel/40 focus:outline-none focus:border-cyber-blue/50 focus:shadow-glow-sm transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cyber-silver/70 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-white/8 text-white text-sm placeholder:text-cyber-steel/40 focus:outline-none focus:border-cyber-blue/50 focus:shadow-glow-sm transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cyber-silver/70 mb-2 uppercase tracking-wider">
                    Company / Venture
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-white/8 text-white text-sm placeholder:text-cyber-steel/40 focus:outline-none focus:border-cyber-blue/50 focus:shadow-glow-sm transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-cyber-silver/70 mb-2 uppercase tracking-wider">
                    What do you need help with?
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-navy-900/60 border border-white/8 text-white text-sm placeholder:text-cyber-steel/40 focus:outline-none focus:border-cyber-blue/50 focus:shadow-glow-sm transition-all duration-300 resize-none"
                    placeholder="Briefly describe your venture and what you're looking to achieve..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full px-6 py-3.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                >
                  <span className="flex items-center gap-2">
                    Submit Application
                    <Send size={15} />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <Consulting />
    </>
  );
}

export default HomePage;
