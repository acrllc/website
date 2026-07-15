import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="relative border-t border-cyber-blue/10 bg-navy-950 mt-20">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <img
                src="/assets/images/Logo_ACR_Enterprises.png"
                alt="ACR Enterprises"
                className="h-14 w-14 object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <img
                src="/assets/images/Logo_ACR_Enterprises_Name_Only.png"
                alt="ACR Enterprises"
                className="h-8 object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            <p className="text-sm text-cyber-steel leading-relaxed max-w-md">
              Building the future of digital entertainment, media, e-commerce, and elite
              consulting. A technology-forward holding company engineering ventures at the
              intersection of AI and audience.
            </p>
            <div className="flex items-center gap-2 mt-5 text-sm text-cyber-silver/70">
              <Mail size={16} className="text-cyber-blue" />
              <a
                href="mailto:contact@acrenterprises.io"
                className="hover:text-cyber-blue transition-colors"
              >
                info@acrenterprises.us
              </a>
            </div>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="section-label mb-4">Ventures</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="text-cyber-silver/70">Digital Entertainment & SaaS</li>
              <li className="text-cyber-silver/70">Media & Content Publishing</li>
              <li className="text-cyber-silver/70">E-Commerce & Audience Growth</li>
              <li className="text-cyber-silver/70">Elite Consulting</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="section-label mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/terms"
                  className="text-cyber-silver/70 hover:text-cyber-blue transition-colors flex items-center gap-1 group"
                >
                  Terms of Service
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-cyber-silver/70 hover:text-cyber-blue transition-colors flex items-center gap-1 group"
                >
                  Privacy Policy
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  to="/refunds"
                  className="text-cyber-silver/70 hover:text-cyber-blue transition-colors flex items-center gap-1 group"
                >
                  Refund Policy
                  <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cyber-steel/60">
            © {new Date().getFullYear()} ACR Enterprises. All rights reserved.
          </p>
          <p className="text-xs text-cyber-steel/60">
            Engineered with precision · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
