import { useEffect, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Search,
  Trophy,
  Music,
  Ticket,
  MapPin,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Smartphone,
  Globe,
  LogOut,
  ArrowRight,
  Sparkles,
  Heart,
  Star,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { FooterModalType } from './FooterModal';
import { User } from '@/types';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
  onOpenModal: (modal: FooterModalType) => void;
  currency: string;
  searchQuery: string;
  onSearch: (query: string) => void;
  likedCount?: number;
}

export function MobileMenu(props: MegaMenuProps) {
  return <MegaMenu {...props} />;
}

export function MegaMenu({
  isOpen,
  onClose,

  currentUser,
  onOpenAuth,
  onSignOut,
  onOpenModal,
  currency,

  likedCount = 0,
}: MegaMenuProps) {

  const [activeSection, setActiveSection] = useState<'sports' | 'concerts' | 'shows' | 'cities'>('sports');



  // Lock body scroll when menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    // onSearch(localSearch);
    onClose();
  };

  const navCategories = [
    {
      id: 'sports' as const,
      index: '01',
      title: 'Sports',
      badge: 'Live Pass',
      highlights: [
        'NFL Football',
        'Premier League',
        'NBA Basketball',
        'Champions League',
        'MLB Baseball',
        'NCAA College Football'
      ],
      description: 'Guaranteed turnstile entry to top stadiums worldwide.',
    },
    {
      id: 'concerts' as const,
      index: '02',
      title: 'Concerts',
      badge: 'Hot Tours',
      highlights: [
        'Taylor Swift Eras',
        'Coldplay World Tour',
        'Billie Eilish',
        'Karol G',
        'Drake',
        'Summer Stadium Festivals'
      ],
      description: 'Verified floor passes, VIP club lounges, and arena seats.',
    },
    {
      id: 'shows' as const,
      index: '03',
      title: 'Shows',
      badge: 'Exclusive',
      highlights: [
        'Broadway NYC',
        'West End London',
        'Stand-up Comedy',
        'Cirque du Soleil',
        'Las Vegas Residencies'
      ],
      description: 'Premium orchestra views and direct digital passes.',
    },
    {
      id: 'cities' as const,
      index: '04',
      title: 'Cities',
      badge: 'Venues',
      highlights: [
        'London Stadiums',
        'New York Venues',
        'Chicago Soldier Field',
        'Madrid Bernabéu',
        'Munich Allianz Arena'
      ],
      description: 'Explore live event schedules mapped by international host city.',
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex flex-col h-[100dvh] w-screen overflow-hidden font-['Barlow_Condensed',sans-serif] bg-[#0A1A36] text-white"
        >
          {/* Subtle Ambient Lighting Elements (Non-card, purely atmospheric) */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B3A6B]/50 rounded-full blur-[140px] pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5AA7FF]/15 rounded-full blur-[130px] pointer-events-none -z-0" />

          {/* Top Bar */}
          <header className="relative z-10 flex items-center justify-between px-6 sm:px-12 py-5 border-b border-white/10 shrink-0 bg-[#0A1A36]/80 backdrop-blur-md">
            {/* Curved Logo (White) */}
            <div 

              className="flex items-center cursor-pointer"
            >
              <svg viewBox="0 0 200 90" className="w-[120px] h-[52px] text-white fill-current overflow-visible">
                <path id="curveTop-mega" d="M 20,34 Q 100,42 180,34" fill="transparent" />
                <path id="curveBottom-mega" d="M 25,80 Q 100,72 175,80" fill="transparent" />
                <text className="font-black text-[30px] tracking-[0.16em] uppercase select-none font-display">
                  <textPath href="#curveTop-mega" startOffset="50%" textAnchor="middle">
                    STADI
                  </textPath>
                </text>
                <text className="font-black text-[30px] tracking-[0.24em] uppercase select-none font-display">
                  <textPath href="#curveBottom-mega" startOffset="50%" textAnchor="middle">
                    PASS
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              {currentUser ? (
                <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-white/15 text-sm">
                  <span className="text-white/60 uppercase tracking-wider font-semibold">Account:</span>
                  <span className="font-bold text-[#5AA7FF]">{currentUser.name}</span>
                </div>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onOpenAuth();
                  }}
                  className="text-xs uppercase font-black tracking-widest text-[#5AA7FF] hover:text-white transition-colors px-4 py-2 border border-[#5AA7FF]/40 rounded-full hover:border-[#5AA7FF]"
                >
                  Sign In
                </button>
              )}

              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#5AA7FF] text-white flex items-center justify-center transition-all active:scale-95 border border-white/15 cursor-pointer group"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 stroke-[2.5] group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
          </header>

          {/* Main Content Area: High-End Typographic Layout without cards */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-12 lg:px-16 py-8 flex flex-col justify-between max-w-[1440px] w-full mx-auto">
            
            {/* Search Input: Minimalist Architectural Line */}
            <div className="mb-10 sm:mb-14">
              <form onSubmit={handleSearchSubmit} className="relative w-full max-w-3xl">
                <div className="flex items-center border-b-2 border-white/20 hover:border-white/50 focus-within:border-[#5AA7FF] transition-colors py-3 gap-3">
                  <Search className="w-6 h-6 text-[#5AA7FF] shrink-0" />
                  {/* <input
                    type="text"
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    placeholder="Search teams, performers, tours, or venues..."
                    className="w-full bg-transparent text-xl sm:text-3xl font-bold uppercase tracking-wide text-white placeholder:text-white/30 outline-none"
                  />
                  {localSearch && (
                    <button
                      type="button"
                      onClick={() => {
                        setLocalSearch('');
                        onSearch('');
                      }}
                      className="text-white/50 hover:text-white p-1"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )} */}
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#5AA7FF] hover:bg-[#4693e6] text-white text-sm font-black uppercase tracking-wider rounded-full transition-all shrink-0"
                  >
                    Find Passes
                  </button>
                </div>
              </form>
            </div>

            {/* Primary Navigation Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-12">
              
              {/* Left Column: Big Typographic Category Index */}
              

              {/* Right Column: Dynamic Sub-Category Exploration (Pure Typography & Clean Grid) */}
              <div className="lg:col-span-6 lg:pl-8 lg:border-l lg:border-white/10 flex flex-col justify-between">
                <div>
                  <div className="text-[12px] font-black uppercase tracking-[0.25em] text-[#5AA7FF] mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                    <span>Explore {navCategories.find((c) => c.id === activeSection)?.title}</span>
                    <span className="text-white/40 lowercase text-xs font-normal">
                      verified authentic inventory
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-white/70 mb-6 font-medium max-w-lg">
                    {navCategories.find((c) => c.id === activeSection)?.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                    {navCategories
                      .find((c) => c.id === activeSection)
                      ?.highlights.map((item) => (
                        <button
                          key={item}
                         
                          className="text-left text-lg sm:text-xl font-bold uppercase tracking-wide text-white/85 hover:text-[#5AA7FF] flex items-center justify-between py-1 group transition-colors"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                          <span className="text-xs text-white/30 group-hover:text-[#5AA7FF] transition-colors">↗</span>
                        </button>
                      ))}
                  </div>
                </div>

                {/* VIP Services & Direct Actions Strip (Clean typographic rows) */}
                <div className="mt-10 pt-6 border-t border-white/10 space-y-4">
                  <div className="text-[12px] font-black uppercase tracking-[0.25em] text-[#5AA7FF]">
                    Direct Stadium Services
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        onClose();
                        onOpenModal('sell');
                      }}
                      className="text-left group py-2"
                    >
                      <div className="text-base font-black uppercase text-white group-hover:text-[#5AA7FF] transition-colors flex items-center gap-1.5">
                        Sell Your Tickets <span className="text-[#5AA7FF]">→</span>
                      </div>
                      <p className="text-xs text-white/50">0% seller commission • Verified fan payout</p>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenModal('trust');
                      }}
                      className="text-left group py-2"
                    >
                      <div className="text-base font-black uppercase text-white group-hover:text-[#5AA7FF] transition-colors flex items-center gap-1.5">
                        100% Stadi Pass Guarantee <span className="text-[#5AA7FF]">→</span>
                      </div>
                      <p className="text-xs text-white/50">Direct turnstile gate sync • 200% money back</p>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenModal('app-download');
                      }}
                      className="text-left group py-2"
                    >
                      <div className="text-base font-black uppercase text-white group-hover:text-[#5AA7FF] transition-colors flex items-center gap-1.5">
                        Get Stadi Pass Mobile <span className="text-[#5AA7FF]">→</span>
                      </div>
                      <p className="text-xs text-white/50">NFC turnstile tap • Offline rolling QR barcodes</p>
                    </button>

                    <button
                      onClick={() => {
                        onClose();
                        onOpenModal('help');
                      }}
                      className="text-left group py-2"
                    >
                      <div className="text-base font-black uppercase text-white group-hover:text-[#5AA7FF] transition-colors flex items-center gap-1.5">
                        24/7 Matchday Support <span className="text-[#5AA7FF]">→</span>
                      </div>
                      <p className="text-xs text-white/50">Instant concierge & stadium gate assistance</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Utility & Footer Line */}
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-white/60">
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={() => {
                    onClose();
                    onOpenModal('language');
                  }}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#5AA7FF]" /> English | {currency}
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenModal('reviews');
                  }}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Star className="w-3.5 h-3.5 text-[#00b67a] fill-[#00b67a]" /> 4.9/5 Rated by 17k+ Fans
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenModal('about');
                  }}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenModal('terms');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Terms
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenModal('privacy');
                  }}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </button>
              </div>

              <div className="text-white/40 tracking-normal text-[11px] font-medium">
                © 2026 Stadi Pass Inc. Official Stadium Access Hardware Integration.
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
