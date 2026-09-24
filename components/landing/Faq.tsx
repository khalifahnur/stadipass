import { useState, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smile,
  Layers,
  CreditCard,
  UserPlus,
  Wallet,
  Mail,
  MessageSquare,
  PlayCircle,
  ChevronDown,
} from 'lucide-react';

interface FAQProps {
  onContactClick?: () => void;
}

interface FAQItem {
  id: string;
  icon: ComponentType<{ className?: string }>;
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    icon: Smile,
    question: 'Is there a booking guarantee or refund protection available?',
    answer:
      "Yes, you can book with confidence with our 100% Stadi Pass Buyer Guarantee. If an event is postponed, your pass automatically remains valid for the rescheduled date. If cancelled, we'll provide an immediate 100% full refund back to your original payment method. Read our buyer guarantee ",
    linkText: 'here.',
    linkHref: '#guarantee',
  },
  {
    id: 'faq-2',
    icon: Layers,
    question: 'Can I change or upgrade my seat location later?',
    answer:
      "Yes, you can upgrade your seating tier or switch stadium stands up to 48 hours prior to turnstile gate opening, subject to live venue availability. Check your booking dashboard to browse available upgrades.",
  },
  {
    id: 'faq-3',
    icon: CreditCard,
    question: 'What is your cancellation and resale policy?',
    answer:
      'If you can no longer attend a fixture or concert, you can list your pass on our official verified fan exchange at face value with one click, or securely transfer it free of charge to any family member or friend.',
  },
  {
    id: 'faq-4',
    icon: UserPlus,
    question: 'Can other fan details and ID be added to tickets?',
    answer:
      'Yes, each pass can be personalized with the attendee’s full legal name and national ID or club membership number during checkout or anytime before matchday from your ticket management portal.',
  },
  {
    id: 'faq-5',
    icon: Wallet,
    question: 'How does turnstile entry and digital billing work?',
    answer:
      'All transactions are processed through encrypted 256-bit bank channels. Once booked, your Stadi Pass generates a contactless offline NFC pass and an anti-screenshot rotating QR code for seamless 1-second admission at the turnstiles.',
  },
  {
    id: 'faq-6',
    icon: Mail,
    question: 'How do I change my ticket delivery email or phone number?',
    answer:
      'You can update your verified contact details anytime in your Account Settings. All active passes, turnstile entry barcodes, and matchday alert notifications will automatically re-route to your new address.',
  },
  {
    id: 'faq-7',
    icon: MessageSquare,
    question: 'How does matchday support work?',
    answer:
      'Our dedicated matchday support desk operates 24/7 around the clock. Whether you need gate directions at Talanta Stadium, pass re-issuance, or seating assistance, our agents are available via live chat, WhatsApp, and phone.',
  },
  {
    id: 'faq-8',
    icon: PlayCircle,
    question: 'Do you provide 3D stadium virtual seat previews?',
    answer:
      'Yes! Every fixture features our interactive 3D stadium seating viewer (including our acclaimed N5 pitch view), allowing you to experience the exact field perspective, elevation, and sightlines before booking. Explore the 3D map ',
    linkText: 'here.',
    linkHref: '#events-section',
  },
];

export function FAQ({ onContactClick }: FAQProps) {
  // First item open by default, matching Image 1
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faqs" className="relative w-full overflow-hidden hero-mesh-gradient">
      {/* 1. Tactile Film/Paper Grain Underlay (Exact match to Hero section) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay z-0"
        style={{
          backgroundImage: "url('/grain.svg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '180px 180px',
        }}
      />

      {/* 2. Modern Architectural Grid Pattern (From Image 1 Untitled UI) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '76px 76px',
        }}
      />

      {/* 3. Top Single-Color SVG Wave (Pure white organic curve connecting from above) */}
      <div className="w-full overflow-hidden leading-none z-10 relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-18 md:h-24 lg:h-28 block text-white"
        >
          <path
            d="M0,0 L1440,0 L1440,35 C1220,110 880,10 520,80 C260,130 110,45 0,55 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* 4. FAQS MAIN CONTENT (Rendered with high contrast and no boxes on the mesh gradient) */}
      <div className="relative py-10 sm:py-14 md:py-18 px-4 sm:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          {/* Centered Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-[1.1] font-sans">
              Frequently asked questions
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#111827]/75 font-medium leading-relaxed font-sans max-w-2xl mx-auto">
              These are the most commonly asked questions about Stadi Pass and matchday ticketing.{' '}
              <br className="hidden sm:inline" />
              Can't find what you're looking for?{' '}
              <button
                type="button"
                onClick={onContactClick}
                className="underline underline-offset-3 font-semibold text-[#111827] hover:text-[#00B67A] transition-colors cursor-pointer"
              >
                Chat to our friendly team!
              </button>
            </p>
          </div>

          {/* Accordion List with NO BOXES - Clean inline icons with translucent hairline dividers */}
          <div className="divide-y divide-[#111827]/10 border-y border-[#111827]/10">
            {FAQ_ITEMS.map((item) => {
              const Icon = item.icon;
              const isOpen = !!openIds[item.id];

              return (
                <div key={item.id} className="py-5 sm:py-6 transition-colors">
                  {/* Clean unboxed header button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer select-none group"
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4 flex-1 min-w-0">
                      {/* Direct unboxed icon without square border container */}
                      <Icon className="w-5 h-5 text-[#111827]/70 group-hover:text-[#00B67A] transition-colors shrink-0 mt-0.5" />
                      <span className="font-bold text-[#111827] text-base sm:text-[17px] group-hover:text-[#00B67A] transition-colors leading-snug font-sans">
                        {item.question}
                      </span>
                    </div>

                    {/* Animated Drop Menu Chevron Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="shrink-0 mt-0.5 text-[#111827]/60 group-hover:text-[#111827] transition-colors ml-2"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  {/* Expandable Answer aligned directly with question text */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-[15px] text-[#111827]/80 font-medium mt-3 pl-[34px] sm:pl-[36px] pr-6 leading-relaxed font-sans">
                          {item.answer}
                          {item.linkText && (
                            <a
                              href={item.linkHref || '#'}
                              onClick={(e) => {
                                if (item.linkHref === '#guarantee') {
                                  e.preventDefault();
                                  onContactClick?.();
                                }
                              }}
                              className="underline underline-offset-2 font-bold text-[#111827] hover:text-[#00B67A] transition-colors ml-1 cursor-pointer"
                            >
                              {item.linkText}
                            </a>
                          )}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. Bottom Single-Color SVG Wave (Pure white organic curve connecting into footer, Image 2 style) */}
      <div className="w-full overflow-hidden leading-none z-10 relative">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-18 md:h-24 lg:h-28 block text-white"
        >
          <path
            d="M0,55 C280,125 660,15 1020,85 C1220,120 1350,50 1440,35 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

export default FAQ;
