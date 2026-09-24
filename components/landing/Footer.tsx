import { useState, type FormEvent } from 'react';
import { Globe, ToggleLeft } from 'lucide-react';
import { type FooterModalType } from './FooterModal';

export interface FooterProps {
  currency?: string;
  onOpenModal: (modal: FooterModalType) => void;
}

export function Footer({ currency, onOpenModal }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSendEmail = (e: FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Sending email to:', email);
    setEmail('');
  };

  // Helper component for the nav-styled footer links
  const FooterLink = ({ 
    label, 
    modal, 
    isHighlight = false,
    badge 
  }: { 
    label: string; 
    modal: FooterModalType; 
    isHighlight?: boolean;
    badge?: string;
  }) => (
    <button
      onClick={() => onOpenModal(modal)}
      className={`text-left text-base font-bold uppercase tracking-wide transition-colors relative group w-fit flex items-center gap-1.5 ${
        isHighlight ? 'text-[#00B67A]' : 'text-primary/80 hover:text-[#00B67A]'
      }`}
    >
      {label}
      {badge && (
        <span className="text-[10px] bg-[#00B67A]/10 text-[#00B67A] px-1.5 py-0.5 rounded-full font-black">
          {badge}
        </span>
      )}
      <span className="absolute -bottom-1.5 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
    </button>
  );

  return (
    <footer className=" pb-8 pt-10 sm:pt-24  font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          <div className="lg:col-span-5 pr-0 lg:pr-8">
            <h4 className="font-black text-3xl sm:text-4xl mb-3 text-primary font-display uppercase">
              Want to partner? Say hi.
            </h4>
            <p className="text-base sm:text-lg font-medium text-primary/70 mb-6">
              Drop your email below and our partnership team will reach out to discuss ticketing solutions for your next big event.
            </p>

            <form onSubmit={handleSendEmail} className="mb-3">
              <div className="flex flex-col sm:flex-row border border-secondary-light rounded-2xl sm:rounded-full overflow-hidden w-full max-w-md bg-white shadow-[0_4px_20px_rgba(27,58,107,0.04)] focus-within:border-[#00B67A]/50 focus-within:ring-4 focus-within:ring-[#00B67A]/10 transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="px-5 py-3.5 flex-1 outline-none bg-transparent text-base font-bold text-primary placeholder:text-primary/40"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-primary text-white hover:bg-[#00B67A] transition-colors font-black uppercase text-sm tracking-wider cursor-pointer shrink-0"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Right Side - Links */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-8 lg:gap-2 pt-2">
            
            {/* Resources */}
            <div>
              <h4 className="font-black text-xl mb-6 text-primary font-display uppercase tracking-wider">
                Resources
              </h4>
              <div className="flex flex-col gap-4">
                <FooterLink label="About" modal="about" />
                <FooterLink label="Jobs" modal="jobs" badge="Hiring" />
                <FooterLink label="Why Trust Stadi Pass" modal="trust" />
                <FooterLink label="Digital Accessibility" modal="accessibility" />
                <FooterLink label="Stadi Pass Blog" modal="blog" />
                <FooterLink label="Press" modal="press" />
                <FooterLink label="Help & Support" modal="help" />
                <FooterLink label="Sell on Stadi Pass" modal="sell" isHighlight={true} />
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-black text-xl mb-6 text-primary font-display uppercase tracking-wider">
                Social
              </h4>
              <div className="flex flex-col gap-4">
                <FooterLink label="Twitter / X" modal="social-twitter" />
                <FooterLink label="Facebook" modal="social-facebook" />
                <FooterLink label="Instagram" modal="social-instagram" />
                <FooterLink label="TikTok" modal="social-tiktok" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-secondary-light/60 mt-12 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="text-sm text-primary/60 font-semibold tracking-wide">
              © 2026 Stadi Pass. All rights reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-8 text-sm font-bold uppercase tracking-wider text-primary/80">
            <button
              onClick={() => onOpenModal('language')}
              className="flex items-center gap-1.5 hover:text-[#00B67A] transition-colors relative group py-1"
            >
              <Globe className="w-4 h-4 text-[#00B67A]" /> English 
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => onOpenModal('privacy-choices')}
              className="flex items-center gap-1.5 hover:text-[#00B67A] transition-colors relative group py-1"
            >
              <ToggleLeft className="w-5 h-5 text-[#00B67A]" /> Your privacy choices
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => onOpenModal('terms')}
              className="hover:text-[#00B67A] transition-colors relative group py-1"
            >
              Terms
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => onOpenModal('privacy')}
              className="hover:text-[#00B67A] transition-colors relative group py-1"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
            </button>
          </div>
        </div>

        {/* Big Logo Text */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 text-center select-none overflow-hidden">
          <h2 className="font-display font-black text-[16vw] sm:text-[14vw] lg:text-[13vw] leading-[0.85] uppercase tracking-tighter text-primary/20 hover:text-primary/30 transition-colors select-none whitespace-nowrap">
            STADI PASS
          </h2>
        </div>
      </div>
    </footer>
  );
}