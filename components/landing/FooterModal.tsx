import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Smartphone,
  Globe,
  Star,
  ExternalLink,
  Search,
  MessageSquare,
  FileText,
  Sliders,
  Sparkles,
  MapPin,
  Calendar,
  Send,
  Download,
  Share2,
  HelpCircle,
  Briefcase,
  Users,
  Code,
  Lock,
  ArrowRight
} from 'lucide-react';

export type FooterModalType =
  | 'about'
  | 'jobs'
  | 'inclusion'
  | 'trust'
  | 'accessibility'
  | 'blog'
  | 'press'
  | 'help'
  | 'sell'
  | 'social-twitter'
  | 'social-facebook'
  | 'social-instagram'
  | 'social-tiktok'
  | 'platform'
  | 'dev-blog'
  | 'language'
  | 'privacy-choices'
  | 'terms'
  | 'privacy'
  | 'sitemap'
  | 'app-download'
  | 'reviews'
  | null;

interface FooterModalsProps {
  activeModal: FooterModalType;
  onClose: () => void;
  currentCurrency?: string;
  onCurrencyChange?: (currency: string) => void;
}

export { FooterModals };
export default function FooterModals({
  activeModal,
  onClose,
  currentCurrency = 'USD',
  onCurrencyChange,
}: FooterModalsProps) {
  // Support form state
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  // Sell form state
  const [sellEvent, setSellEvent] = useState('');
  const [sellSeats, setSellSeats] = useState('2');
  const [sellPrice, setSellPrice] = useState('150');
  const [sellSubmitted, setSellSubmitted] = useState(false);

  // Privacy toggles
  const [analyticsCookies, setAnalyticsCookies] = useState(true);
  const [personalizationCookies, setPersonalizationCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [savedPrivacy, setSavedPrivacy] = useState(false);

  // Currency / Language state
  const [selectedLang, setSelectedLang] = useState('English (US)');
  const [selectedCurr, setSelectedCurr] = useState(currentCurrency);

  // Job apply state
  const [applyingJob, setApplyingJob] = useState<string | null>(null);
  const [jobApplied, setJobApplied] = useState(false);

  // Copy API key state
  const [copiedKey, setCopiedKey] = useState(false);

  if (!activeModal) return null;

  const handleSupportSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSupportSent(true);
    setTimeout(() => {
      setSupportSent(false);
      setSupportMessage('');
      onClose();
    }, 2000);
  };

  const handleSellSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSellSubmitted(true);
    setTimeout(() => {
      setSellSubmitted(false);
      onClose();
    }, 2000);
  };

  const handleSavePrivacy = () => {
    setSavedPrivacy(true);
    setTimeout(() => {
      setSavedPrivacy(false);
      onClose();
    }, 1200);
  };

  const handleSaveLanguage = () => {
    if (onCurrencyChange) {
      onCurrencyChange(selectedCurr);
    }
    onClose();
  };

  const copyApiKey = () => {
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0f264a]/60 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-[0_25px_70px_rgba(27,58,107,0.25)] border border-[#CFE6FF] overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col font-['Barlow_Condensed',sans-serif]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#CFE6FF]/60 bg-[#FAFCFF] sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-7 bg-[#5AA7FF] rounded-full inline-block"></span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#1B3A6B] uppercase tracking-wide">
                {activeModal === 'about' && 'About Stadi Pass'}
                {activeModal === 'jobs' && 'Careers & Open Roles'}
                {activeModal === 'inclusion' && 'Inclusion & Equal Access'}
                {activeModal === 'trust' && '100% Stadi Pass Guarantee'}
                {activeModal === 'accessibility' && 'Digital Accessibility'}
                {activeModal === 'blog' && 'Stadi Pass Insider Blog'}
                {activeModal === 'press' && 'Press & Media Kit'}
                {activeModal === 'help' && 'Help & Support Center'}
                {activeModal === 'sell' && 'Sell Your Tickets'}
                {activeModal === 'social-twitter' && 'Twitter / X Community'}
                {activeModal === 'social-facebook' && 'Facebook Community'}
                {activeModal === 'social-instagram' && 'Instagram Highlights'}
                {activeModal === 'social-tiktok' && 'TikTok Stadium Vibes'}
                {activeModal === 'platform' && 'Developer Platform & API'}
                {activeModal === 'dev-blog' && 'Engineering & Tech Blog'}
                {activeModal === 'language' && 'Language & Currency'}
                {activeModal === 'privacy-choices' && 'Your Privacy Choices'}
                {activeModal === 'terms' && 'Terms of Service'}
                {activeModal === 'privacy' && 'Privacy Policy'}
                {activeModal === 'sitemap' && 'Stadi Pass Site Map'}
                {activeModal === 'app-download' && 'Get Stadi Pass Mobile'}
                {activeModal === 'reviews' && 'Verified Reviews & Trust'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 text-[#1B3A6B]/60 hover:text-[#1B3A6B] hover:bg-[#EAF3FF] rounded-full transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#1B3A6B] text-[17px] leading-relaxed">
            {/* 1. ABOUT */}
            {activeModal === 'about' && (
              <div className="space-y-6">
                <p className="text-xl font-bold text-[#1B3A6B]">
                  Stadi Pass is the world’s most trusted stadium access and live entertainment ticketing platform.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
                  <div className="bg-[#EAF3FF] p-4 rounded-2xl border border-[#CFE6FF]/60 text-center">
                    <div className="text-3xl font-black text-[#1B3A6B]">5M+</div>
                    <div className="text-sm font-semibold text-[#1B3A6B]/70 uppercase tracking-wider">Tickets Verified</div>
                  </div>
                  <div className="bg-[#EAF3FF] p-4 rounded-2xl border border-[#CFE6FF]/60 text-center">
                    <div className="text-3xl font-black text-[#1B3A6B]">140+</div>
                    <div className="text-sm font-semibold text-[#1B3A6B]/70 uppercase tracking-wider">Partner Stadiums</div>
                  </div>
                  <div className="bg-[#EAF3FF] p-4 rounded-2xl border border-[#CFE6FF]/60 text-center col-span-2 sm:col-span-1">
                    <div className="text-3xl font-black text-[#00b67a]">99.9%</div>
                    <div className="text-sm font-semibold text-[#1B3A6B]/70 uppercase tracking-wider">Gate Acceptance</div>
                  </div>
                </div>
                <p>
                  Founded by passionate sports fans and software engineers, Stadi Pass guarantees authentic seat passes, dynamic anti-counterfeit barcodes, and direct-to-turnstile entry at top football, basketball, and concert venues worldwide.
                </p>
                <div className="p-4 bg-[#FAFCFF] border border-[#CFE6FF] rounded-2xl flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-[#5AA7FF] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg text-[#1B3A6B]">Official Stadium Accreditation</h4>
                    <p className="text-sm text-[#1B3A6B]/80">
                      Every ticket sold through Stadi Pass is cryptographically synchronized with primary stadium access management hardware.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. JOBS */}
            {activeModal === 'jobs' && (
              <div className="space-y-6">
                <p className="text-lg font-bold">
                  Join our mission to revolutionize live stadium experiences. We are actively hiring across engineering, operations, and partner relations!
                </p>
                {jobApplied ? (
                  <div className="p-6 bg-[#EAF3FF] border border-[#5AA7FF] rounded-2xl text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#5AA7FF] mx-auto mb-2" />
                    <h4 className="text-2xl font-black">Application Received!</h4>
                    <p className="text-sm text-[#1B3A6B]/70">Our talent team will review your profile and reach out within 48 hours.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {[
                      { role: 'Senior React / Mobile Engineer', team: 'Product Engineering', loc: 'Remote / London / New York', comp: '$140k - $185k' },
                      { role: 'Stadium Access Operations Lead', team: 'Event Logistics', loc: 'Chicago / London', comp: '$95k - $125k' },
                      { role: 'Head of Sports Rights & Partnerships', team: 'Business Dev', loc: 'New York, NY', comp: '$160k - $210k' },
                      { role: '24/7 VIP Customer Experience Concierge', team: 'Fan Support', loc: 'Remote (Global)', comp: '$55k - $75k' },
                    ].map((j, i) => (
                      <div key={i} className="p-4 bg-white border border-[#CFE6FF] rounded-2xl hover:border-[#5AA7FF] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-black text-xl text-[#1B3A6B]">{j.role}</h4>
                          <div className="flex flex-wrap gap-2 text-sm text-[#1B3A6B]/70 font-semibold mt-1">
                            <span className="bg-[#EAF3FF] px-2.5 py-0.5 rounded-full">{j.team}</span>
                            <span>• {j.loc}</span>
                            <span>• {j.comp}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => {
                            setApplyingJob(j.role);
                            setTimeout(() => setJobApplied(true), 600);
                          }}
                          className="bg-[#1B3A6B] text-white hover:bg-[#5AA7FF] transition-colors px-5 py-2.5 rounded-full font-bold text-sm shrink-0 uppercase tracking-wider"
                        >
                          {applyingJob === j.role ? 'Submitting...' : 'Apply Now'}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* 3. INCLUSION */}
            {activeModal === 'inclusion' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-[#5AA7FF]" />
                  <h4 className="text-2xl font-black">Live Sports & Music for Everyone</h4>
                </div>
                <p>
                  At Stadi Pass, accessibility and inclusion are core to how we build software and partner with venues. Every fan deserves equal, dignified access to live entertainment.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-[#EAF3FF]/50 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg">Dedicated ADA & Accessible Seating Filters</h5>
                    <p className="text-sm text-[#1B3A6B]/80">Easily locate wheelchair-accessible spaces, companion seats, step-free concourse access, and sensory rooms directly in our venue seat maps.</p>
                  </div>
                  <div className="p-4 bg-[#EAF3FF]/50 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg">Community Matchday Access Initiative</h5>
                    <p className="text-sm text-[#1B3A6B]/80">We dedicate 2% of every ticket booking fee to provide free match passes and transport for local youth clubs and underrepresented communities.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 4. WHY TRUST STADI PASS */}
            {activeModal === 'trust' && (
              <div className="space-y-5">
                <div className="p-6 bg-gradient-to-r from-[#EAF3FF] to-white border border-[#CFE6FF] rounded-2xl flex items-center gap-4">
                  <ShieldCheck className="w-12 h-12 text-[#00b67a] shrink-0" />
                  <div>
                    <h4 className="text-2xl font-black text-[#1B3A6B]">The 100% Stadi Pass Buyer Guarantee</h4>
                    <p className="text-sm text-[#1B3A6B]/80">Your tickets are 100% authentic, delivered before the match, or your money back plus a 200% voucher credit.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00b67a]" /> Real-Time Barcode Validation
                    </h5>
                    <p className="text-sm text-[#1B3A6B]/70">Every pass is issued with an encrypted, rolling NFC / QR code directly synced with venue scanners.</p>
                  </div>
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00b67a]" /> Immediate Full Refund
                    </h5>
                    <p className="text-sm text-[#1B3A6B]/70">If any match or concert is officially canceled and not rescheduled, you receive a full automated refund within 3 business days.</p>
                  </div>
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00b67a]" /> 24/7 Matchday Hotline
                    </h5>
                    <p className="text-sm text-[#1B3A6B]/70">Our dedicated stadium coordinators are standing by at venue gates to help you with turnstile troubleshooting.</p>
                  </div>
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg mb-1 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#00b67a]" /> Protected Payouts
                    </h5>
                    <p className="text-sm text-[#1B3A6B]/70">Sellers are only paid once the ticket has successfully scanned at the venue gates.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. DIGITAL ACCESSIBILITY */}
            {activeModal === 'accessibility' && (
              <div className="space-y-4">
                <p>
                  Stadi Pass is committed to digital accessibility in accordance with WCAG 2.1 Level AA standards.
                </p>
                <div className="space-y-3">
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg">Keyboard Navigation & Screen Reader Support</h5>
                    <p className="text-sm text-[#1B3A6B]/80">Full ARIA labels, logical focus order, and high-contrast styling ensure easy navigation across all assistive technologies.</p>
                  </div>
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl">
                    <h5 className="font-black text-lg">Audio & Sensory Venue Support</h5>
                    <p className="text-sm text-[#1B3A6B]/80">Venue guides provide decibel level forecasts, quiet room locations, and assistive listening device pickup points.</p>
                  </div>
                </div>
                <p className="text-sm text-[#1B3A6B]/70">
                  Encountering an accessibility barrier? Email our digital inclusion desk at <span className="font-bold underline">accessibility@stadipass.com</span>.
                </p>
              </div>
            )}

            {/* 6. BLOG */}
            {activeModal === 'blog' && (
              <div className="space-y-4">
                <p className="text-lg font-bold">Latest Stadium Insider Guides & Matchday Stories:</p>
                {[
                  { title: 'The 10 Loudest Stadiums in Europe Every Fan Must Visit', date: 'Sep 18, 2026', read: '5 min read', tag: 'Football' },
                  { title: 'How Rolling QR Barcodes Are Eradicating Counterfeit Tickets in 2026', date: 'Sep 14, 2026', read: '4 min read', tag: 'Tech' },
                  { title: 'The Ultimate Guide to Catching NFL International Series in London & Munich', date: 'Sep 09, 2026', read: '6 min read', tag: 'NFL' },
                ].map((post, idx) => (
                  <div key={idx} className="p-4 bg-[#FAFCFF] border border-[#CFE6FF] rounded-2xl hover:border-[#5AA7FF] transition-all cursor-pointer group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#5AA7FF]/10 text-[#5AA7FF] text-xs font-bold px-2 py-0.5 rounded-full">{post.tag}</span>
                      <span className="text-xs text-[#1B3A6B]/60 font-medium">{post.date} • {post.read}</span>
                    </div>
                    <h4 className="font-black text-xl text-[#1B3A6B] group-hover:text-[#5AA7FF] transition-colors">{post.title}</h4>
                  </div>
                ))}
              </div>
            )}

            {/* 7. PRESS */}
            {activeModal === 'press' && (
              <div className="space-y-5">
                <p>Welcome to the Stadi Pass Press & Newsroom. For media inquiries, executive interviews, or brand guidelines, contact our communications team.</p>
                <div className="p-4 bg-[#EAF3FF] border border-[#CFE6FF] rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="font-black text-xl">Official Stadi Pass Media Kit (2026)</h4>
                    <p className="text-sm text-[#1B3A6B]/70">High-res logos, brand guidelines, stadium photography, and fact sheet.</p>
                  </div>
                  <button onClick={() => alert('Media kit downloaded!')} className="bg-[#1B3A6B] text-white px-4 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#5AA7FF] transition-colors shrink-0">
                    <Download className="w-4 h-4" /> Download ZIP
                  </button>
                </div>
                <div className="border-t border-[#CFE6FF]/60 pt-4">
                  <h5 className="font-bold text-md mb-2">Media Relations Desk:</h5>
                  <p className="text-sm text-[#1B3A6B]/80">Email: <span className="font-bold">press@stadipass.com</span> | Global Hotline: +1 (800) 555-STADI</p>
                </div>
              </div>
            )}

            {/* 8. HELP & SUPPORT */}
            {activeModal === 'help' && (
              <div className="space-y-6">
                {supportSent ? (
                  <div className="p-6 bg-[#EAF3FF] border border-[#5AA7FF] rounded-2xl text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#5AA7FF] mx-auto mb-2" />
                    <h4 className="text-2xl font-black">Support Request Sent!</h4>
                    <p className="text-sm text-[#1B3A6B]/70">Our matchday support team will reply to your email within 15 minutes.</p>
                  </div>
                ) : (
                  <>
                    <div className="bg-[#EAF3FF]/60 p-4 rounded-2xl border border-[#CFE6FF] space-y-2">
                      <h4 className="font-black text-lg">Frequently Asked Questions:</h4>
                      <div className="text-sm space-y-1.5 font-semibold text-[#1B3A6B]/80">
                        <p>• <strong>Where do I find my digital ticket?</strong> Tickets appear in your confirmation email and the Stadi Pass app 24 hours prior to kickoff.</p>
                        <p>• <strong>Can I transfer tickets to a friend?</strong> Yes! Tap "Transfer Pass" and enter their phone or email.</p>
                        <p>• <strong>What if my event is postponed?</strong> Your tickets automatically remain valid for the rescheduled date.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSupportSubmit} className="space-y-4">
                      <h4 className="font-black text-xl text-[#1B3A6B]">Ask Stadi Pass Concierge</h4>
                      <textarea
                        required
                        rows={3}
                        value={supportMessage}
                        onChange={(e) => setSupportMessage(e.target.value)}
                        placeholder="Describe your issue (order number, stadium name, ticket question)..."
                        className="w-full p-4 rounded-2xl border border-[#CFE6FF] bg-white outline-none focus:border-[#5AA7FF] focus:ring-4 focus:ring-[#5AA7FF]/10 text-[16px] font-medium"
                      />
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#5AA7FF] hover:bg-[#4693e6] text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(90,167,255,0.3)] transition-all"
                      >
                        <Send className="w-5 h-5" /> Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            )}

            {/* 9. SELL ON STADI PASS */}
            {activeModal === 'sell' && (
              <div className="space-y-5">
                {sellSubmitted ? (
                  <div className="p-6 bg-[#EAF3FF] border border-[#5AA7FF] rounded-2xl text-center">
                    <CheckCircle2 className="w-12 h-12 text-[#5AA7FF] mx-auto mb-2" />
                    <h4 className="text-2xl font-black">Listing Created Successfully!</h4>
                    <p className="text-sm text-[#1B3A6B]/70">Your tickets are now live to 5M+ verified fans with 0% seller fees!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSellSubmit} className="space-y-4">
                    <p className="text-lg font-bold">List your spare stadium or concert tickets in less than 60 seconds with zero listing fees.</p>
                    <div>
                      <label className="block text-sm font-black uppercase text-[#1B3A6B] mb-1">Event or Match Name</label>
                      <input
                        type="text"
                        required
                        value={sellEvent}
                        onChange={(e) => setSellEvent(e.target.value)}
                        placeholder="e.g. Arsenal vs Chelsea, Taylor Swift Wembley..."
                        className="w-full p-3.5 rounded-xl border border-[#CFE6FF] bg-white outline-none focus:border-[#5AA7FF] text-base font-bold"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-black uppercase text-[#1B3A6B] mb-1">Quantity</label>
                        <select
                          value={sellSeats}
                          onChange={(e) => setSellSeats(e.target.value)}
                          className="w-full p-3.5 rounded-xl border border-[#CFE6FF] bg-white outline-none font-bold text-base"
                        >
                          <option value="1">1 Ticket</option>
                          <option value="2">2 Tickets (Together)</option>
                          <option value="3">3 Tickets</option>
                          <option value="4">4 Tickets (Together)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-black uppercase text-[#1B3A6B] mb-1">Price per Ticket ($)</label>
                        <input
                          type="number"
                          required
                          value={sellPrice}
                          onChange={(e) => setSellPrice(e.target.value)}
                          className="w-full p-3.5 rounded-xl border border-[#CFE6FF] bg-white outline-none font-bold text-base"
                        />
                      </div>
                    </div>
                    <div className="p-3.5 bg-[#EAF3FF] rounded-xl text-sm font-semibold flex justify-between">
                      <span>Estimated Payout to Your Bank:</span>
                      <strong className="text-[#00b67a] text-lg font-black">${(Number(sellPrice || 0) * Number(sellSeats || 1)).toFixed(2)}</strong>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#1B3A6B] hover:bg-[#5AA7FF] text-white rounded-full font-black text-lg transition-all shadow-[0_8px_20px_rgba(27,58,107,0.2)]"
                    >
                      Post Ticket Listing
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* 10-13. SOCIAL MODALS */}
            {(activeModal === 'social-twitter' || activeModal === 'social-facebook' || activeModal === 'social-instagram' || activeModal === 'social-tiktok') && (
              <div className="space-y-5 text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF3FF] border border-[#CFE6FF] flex items-center justify-center mx-auto text-[#5AA7FF]">
                  <Share2 className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-black">
                  {activeModal === 'social-twitter' && '@StadiPass on X / Twitter'}
                  {activeModal === 'social-facebook' && 'Stadi Pass Global Fan Group'}
                  {activeModal === 'social-instagram' && '@StadiPass on Instagram'}
                  {activeModal === 'social-tiktok' && '@StadiPass on TikTok'}
                </h4>
                <p className="text-base text-[#1B3A6B]/70 max-w-md mx-auto">
                  Follow us for instant matchday ticket drop alerts, behind-the-scenes stadium locker room tours, and exclusive VIP giveaways.
                </p>
                <div className="flex justify-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      alert('Redirecting to official social channel...');
                      onClose();
                    }}
                    className="px-8 py-3.5 bg-[#5AA7FF] hover:bg-[#4693e6] text-white rounded-full font-bold text-lg flex items-center gap-2 shadow-[0_8px_20px_rgba(90,167,255,0.3)] transition-all"
                  >
                    Open Channel <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* 14. PLATFORM (DEVELOPERS) */}
            {activeModal === 'platform' && (
              <div className="space-y-4">
                <p>Integrate Stadi Pass verified stadium inventory, dynamic barcode issuance, and NFC turnstile validation into your own sports apps.</p>
                <div className="bg-[#0f264a] text-white p-4 rounded-2xl font-mono text-xs overflow-x-auto">
                  <p className="text-[#5AA7FF]">// Verify Stadium Pass API</p>
                  <p>GET https://api.stadipass.com/v1/tickets/verify</p>
                  <p className="text-zinc-400">Authorization: Bearer stadi_live_94819481029</p>
                  <p className="mt-2 text-[#00b67a]">&#123; "status": "VALID", "gate": "Turnstile B4", "seat": "Sec 104, Row 12" &#125;</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#FAFCFF] border border-[#CFE6FF] rounded-2xl">
                  <div>
                    <h5 className="font-black text-base">Developer Sandbox Key</h5>
                    <p className="text-xs font-mono text-[#1B3A6B]/70">stadi_test_88f920aa902b4e</p>
                  </div>
                  <button
                    onClick={copyApiKey}
                    className="px-4 py-2 bg-[#1B3A6B] text-white rounded-full text-xs font-bold hover:bg-[#5AA7FF] transition-colors"
                  >
                    {copiedKey ? 'Copied!' : 'Copy Key'}
                  </button>
                </div>
              </div>
            )}

            {/* 15. DEVELOPER BLOG */}
            {activeModal === 'dev-blog' && (
              <div className="space-y-4">
                <p className="font-bold">Engineering articles by the Stadi Pass platform team:</p>
                <div className="space-y-3">
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl bg-white">
                    <span className="text-xs bg-[#EAF3FF] text-[#1B3A6B] px-2 py-0.5 rounded-full font-bold">Architecture</span>
                    <h4 className="font-black text-xl mt-1">Scaling Ticket Drops: Handling 75,000 Transactions/Second Without Queues</h4>
                    <p className="text-sm text-[#1B3A6B]/70 mt-1">How we utilize distributed Redis locks and multi-region read replicas during Champions League final sales.</p>
                  </div>
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl bg-white">
                    <span className="text-xs bg-[#EAF3FF] text-[#1B3A6B] px-2 py-0.5 rounded-full font-bold">Security</span>
                    <h4 className="font-black text-xl mt-1">Cryptographic Rotating NFC Tokens for Turnstile Entry</h4>
                    <p className="text-sm text-[#1B3A6B]/70 mt-1">Preventing screenshot fraud using time-based rolling barcodes and biometric device validation.</p>
                  </div>
                </div>
              </div>
            )}

            {/* 16. LANGUAGE & CURRENCY */}
            {activeModal === 'language' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-black uppercase text-[#1B3A6B] mb-2">Display Language</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['English (US)', 'English (UK)', 'Español', 'Français', 'Deutsch', 'Italiano'].map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setSelectedLang(lang)}
                        className={`p-3 rounded-xl border text-sm font-bold transition-all ${
                          selectedLang === lang
                            ? 'bg-[#1B3A6B] text-white border-[#1B3A6B]'
                            : 'bg-white text-[#1B3A6B] border-[#CFE6FF] hover:border-[#5AA7FF]'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black uppercase text-[#1B3A6B] mb-2">Billing Currency</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { code: 'USD', symbol: '$', name: 'US Dollar' },
                      { code: 'EUR', symbol: '€', name: 'Euro' },
                      { code: 'GBP', symbol: '£', name: 'British Pound' },
                      { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar' },
                      { code: 'AUD', symbol: 'AU$', name: 'Australian Dollar' },
                      { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
                    ].map((curr) => (
                      <button
                        key={curr.code}
                        type="button"
                        onClick={() => setSelectedCurr(curr.code)}
                        className={`p-3 rounded-xl border text-sm font-bold flex items-center justify-between transition-all ${
                          selectedCurr === curr.code
                            ? 'bg-[#5AA7FF] text-white border-[#5AA7FF]'
                            : 'bg-white text-[#1B3A6B] border-[#CFE6FF] hover:border-[#5AA7FF]'
                        }`}
                      >
                        <span>{curr.code}</span>
                        <span className="font-black text-base">{curr.symbol}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSaveLanguage}
                  className="w-full py-3.5 bg-[#1B3A6B] hover:bg-[#5AA7FF] text-white rounded-full font-bold text-lg transition-all"
                >
                  Save Preferences ({selectedLang} • {selectedCurr})
                </button>
              </div>
            )}

            {/* 17. PRIVACY CHOICES */}
            {activeModal === 'privacy-choices' && (
              <div className="space-y-4">
                <p>Manage how Stadi Pass uses cookies and data for personalized match notifications and stadium recommendations.</p>
                
                <div className="space-y-3">
                  <div className="p-4 border border-[#CFE6FF] rounded-2xl flex items-center justify-between bg-[#FAFCFF]">
                    <div>
                      <h5 className="font-black text-lg">Strictly Necessary Cookies</h5>
                      <p className="text-xs text-[#1B3A6B]/70">Required for secure authentication, checkout, and gate ticket scanning.</p>
                    </div>
                    <span className="text-xs font-black uppercase text-[#00b67a] bg-[#00b67a]/10 px-3 py-1 rounded-full">Always On</span>
                  </div>

                  <div className="p-4 border border-[#CFE6FF] rounded-2xl flex items-center justify-between">
                    <div>
                      <h5 className="font-black text-lg">Analytics & Performance</h5>
                      <p className="text-xs text-[#1B3A6B]/70">Helps us monitor turnstile traffic speeds and optimize seat map loading times.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={analyticsCookies}
                      onChange={(e) => setAnalyticsCookies(e.target.checked)}
                      className="w-6 h-6 accent-[#5AA7FF] cursor-pointer"
                    />
                  </div>

                  <div className="p-4 border border-[#CFE6FF] rounded-2xl flex items-center justify-between">
                    <div>
                      <h5 className="font-black text-lg">Personalized Event Alerts</h5>
                      <p className="text-xs text-[#1B3A6B]/70">Receive notifications when your favorite teams or artists play near your city.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={personalizationCookies}
                      onChange={(e) => setPersonalizationCookies(e.target.checked)}
                      className="w-6 h-6 accent-[#5AA7FF] cursor-pointer"
                    />
                  </div>

                  <div className="p-4 border border-[#CFE6FF] rounded-2xl flex items-center justify-between">
                    <div>
                      <h5 className="font-black text-lg">Partner Stadium Sponsorships</h5>
                      <p className="text-xs text-[#1B3A6B]/70">Allow verified venue partners to offer concession and parking discounts.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={marketingCookies}
                      onChange={(e) => setMarketingCookies(e.target.checked)}
                      className="w-6 h-6 accent-[#5AA7FF] cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSavePrivacy}
                  className="w-full py-3.5 bg-[#5AA7FF] hover:bg-[#4693e6] text-white rounded-full font-bold text-lg transition-all shadow-[0_8px_20px_rgba(90,167,255,0.3)]"
                >
                  {savedPrivacy ? 'Preferences Saved!' : 'Save Privacy Choices'}
                </button>
              </div>
            )}

            {/* 18. TERMS OF SERVICE */}
            {activeModal === 'terms' && (
              <div className="space-y-4 text-sm text-[#1B3A6B]/80 max-h-[60vh] overflow-y-auto pr-2">
                <h4 className="font-black text-lg text-[#1B3A6B]">1. Acceptance of Terms</h4>
                <p>By browsing, reserving, purchasing, or selling passes on Stadi Pass, you agree to these Terms of Service and our Stadium Fan Code of Conduct.</p>
                <h4 className="font-black text-lg text-[#1B3A6B]">2. Ticket Authenticity & Delivery</h4>
                <p>All passes purchased on Stadi Pass are guaranteed authentic. Stadi Pass issues dynamic electronic tokens delivered securely via the mobile app or browser portal.</p>
                <h4 className="font-black text-lg text-[#1B3A6B]">3. Venue Entry & Stadium Regulations</h4>
                <p>Holders must follow all individual stadium rules, including bag policies and security checks. Venue management reserves the right to deny entry for disorderly behavior.</p>
                <h4 className="font-black text-lg text-[#1B3A6B]">4. Resale & Pricing Transparency</h4>
                <p>All prices shown are total transparent prices, clearly displaying face value, verified guarantee charges, and applicable local stadium admissions taxes.</p>
              </div>
            )}

            {/* 19. PRIVACY POLICY */}
            {activeModal === 'privacy' && (
              <div className="space-y-4 text-sm text-[#1B3A6B]/80 max-h-[60vh] overflow-y-auto pr-2">
                <h4 className="font-black text-lg text-[#1B3A6B]">1. Information Collected</h4>
                <p>We collect essential order information (name, email, encrypted payment token, and chosen ticket seats) to fulfill entry barcodes and provide live match updates.</p>
                <h4 className="font-black text-lg text-[#1B3A6B]">2. Barcode Encryption & Protection</h4>
                <p>Your ticket barcodes are encrypted with time-synced HMAC cryptography. We never sell your personal contact information to unapproved third-party data brokers.</p>
                <h4 className="font-black text-lg text-[#1B3A6B]">3. Your GDPR & CCPA Rights</h4>
                <p>You may request a full export of your match history or complete deletion of your Stadi Pass account at any time by contacting privacy@stadipass.com.</p>
              </div>
            )}

            {/* 20. SITE MAP */}
            {activeModal === 'sitemap' && (
              <div className="space-y-4">
                <p className="font-bold">Explore all sections and categories across Stadi Pass:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-[#EAF3FF] rounded-xl">
                    <h5 className="font-black text-[#1B3A6B] text-base mb-1">Sports</h5>
                    <ul className="text-xs space-y-1 text-[#1B3A6B]/80 font-semibold">
                      <li>• NFL Football</li>
                      <li>• NBA Basketball</li>
                      <li>• Premier League</li>
                      <li>• Champions League</li>
                      <li>• MLB Baseball</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-[#EAF3FF] rounded-xl">
                    <h5 className="font-black text-[#1B3A6B] text-base mb-1">Concerts & Shows</h5>
                    <ul className="text-xs space-y-1 text-[#1B3A6B]/80 font-semibold">
                      <li>• Stadium Tours</li>
                      <li>• Music Festivals</li>
                      <li>• Broadway & West End</li>
                      <li>• Comedy Clubs</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-[#EAF3FF] rounded-xl">
                    <h5 className="font-black text-[#1B3A6B] text-base mb-1">Company & Tools</h5>
                    <ul className="text-xs space-y-1 text-[#1B3A6B]/80 font-semibold">
                      <li>• Download Mobile App</li>
                      <li>• Sell Passes</li>
                      <li>• Help & FAQ</li>
                      <li>• Developer API</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 21. APP DOWNLOAD */}
            {activeModal === 'app-download' && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-[#EAF3FF] rounded-2xl flex items-center justify-center mx-auto text-[#5AA7FF]">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h4 className="text-3xl font-black text-[#1B3A6B]">Get Stadi Pass for iOS & Android</h4>
                <p className="text-base text-[#1B3A6B]/70 max-w-md mx-auto">
                  Experience turnstile NFC tap-to-enter, offline barcode storage, real-time gate queue forecasts, and last-minute seat upgrades.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => alert('Redirecting to Apple App Store...')}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#1B3A6B] hover:bg-[#5AA7FF] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                  >
                    <Download className="w-5 h-5" /> Download for iOS
                  </button>
                  <button
                    onClick={() => alert('Redirecting to Google Play Store...')}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#1B3A6B] hover:bg-[#5AA7FF] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
                  >
                    <Download className="w-5 h-5" /> Download for Android
                  </button>
                </div>
              </div>
            )}

            {/* 22. REVIEWS */}
            {activeModal === 'reviews' && (
              <div className="space-y-5">
                <div className="p-5 bg-[#EAF3FF] rounded-2xl border border-[#CFE6FF] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-[#00b67a] fill-[#00b67a]" />
                      ))}
                    </div>
                    <h4 className="text-2xl font-black">4.9 out of 5 Stars</h4>
                    <p className="text-xs text-[#1B3A6B]/70 font-semibold">Based on 17,420+ verified stadium check-ins</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-black tracking-wider text-[#00b67a] bg-[#00b67a]/10 px-3 py-1 rounded-full">
                      Verified Trustpilot
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { user: 'Marcus T.', event: 'Arsenal vs Real Madrid', review: 'Entered the Emirates Stadium in literally 4 seconds with the NFC pass on my phone. Flawless experience!' },
                    { user: 'Elena R.', event: 'Coldplay World Tour', review: 'Bought tickets 2 hours before the show. Barcode loaded immediately and seats were even better than advertised.' },
                    { user: 'David K.', event: 'Super Bowl LX', review: 'Zero fake ticket anxiety. Stadi Pass guarantee gave our whole family total peace of mind.' },
                  ].map((rev, i) => (
                    <div key={i} className="p-4 border border-[#CFE6FF] rounded-2xl bg-white">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-black text-lg text-[#1B3A6B]">{rev.user}</span>
                        <span className="text-xs text-[#1B3A6B]/60 font-semibold">{rev.event}</span>
                      </div>
                      <p className="text-sm text-[#1B3A6B]/80 font-medium">"{rev.review}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
