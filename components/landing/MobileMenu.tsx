import { useEffect, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ShieldCheck,
  LogOut,
  X,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Ticket,
  Heart,
  Sparkles,
  Trophy,
  Music,
  MapPin,
  HelpCircle,
  BookOpen,
} from "lucide-react";
import { Logo } from "./Logo";
import { User, EventItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onSignOut: () => void;
  onLogoClick?: () => void;
  onSearchClick?: () => void;
  onFavoritesClick?: () => void;
  onCalendarClick?: () => void;
  onContactClick?: () => void;
  onTicketsClick?: () => void;
  likedCount?: number;
  onOpenModal?: (modal: any) => void;
  currency?: string;
  searchQuery?: string;
  onSearch?: (query: string) => void;
  events?: EventItem[];
  formatPrice?: (usd: number) => string;
}

type MenuSubView = "main" | "services" | "sites" | "about" | "resources";

export function MobileMenu({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  currentUser,
  onOpenAuth,
  onSignOut,
  onLogoClick,
  onSearchClick,
  onFavoritesClick,
  onCalendarClick,
  onContactClick,
  onTicketsClick,
  likedCount = 0,
  onOpenModal,
  currency = "USD",
  searchQuery = "",
  onSearch,
  events = [],
  formatPrice,
}: MobileMenuProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [activeView, setActiveView] = useState<MenuSubView>("main");

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveView("main");
    } else {
      document.body.style.overflow = "";
      setActiveView("main");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);









  const mainNavItems = [
    {
      id: "home",
      label: "Home",
      hasSubmenu: false,
      action: () => {
        onClose();
        if (onLogoClick) onLogoClick();
        else window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      id: "services",
      label: "Services",
      hasSubmenu: true,
      action: () => setActiveView("services"),
    },
    {
      id: "sites",
      label: "Sites",
      hasSubmenu: true,
      action: () => setActiveView("sites"),
    },
    {
      id: "about",
      label: "About",
      hasSubmenu: true,
      action: () => setActiveView("about"),
    },
    {
      id: "resources",
      label: "Resources",
      hasSubmenu: true,
      action: () => setActiveView("resources"),
    },
    {
      id: "tickets",
      label: "My Ticket",
      hasSubmenu: false,
      action: () => {
        onClose();
        if (currentUser && onTicketsClick) {
          setTimeout(onTicketsClick, 180);
        } else {
          setTimeout(onOpenAuth, 180);
        }
      },
    },
  ];



  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="mobile-menu-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 md:hidden select-none overflow-hidden"
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black backdrop-blur-[4px] z-40"
          />

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full h-15  bg-textured z-50 px-3 sm:px-6 flex items-center justify-between "
          >
            <div className="flex items-center">
              <Link
                href={"/"}
                className="h-10 items-center justify-center flex"
              >
                <Image
                  src={"/logo.png"}
                  alt="stadipass_logo"
                  width={150}
                  height={100}
                  className=" object-cover items-center justify-center"
                />
              </Link>
            </div>

            <div className="flex items-center">
              <div className="relative flex items-center h-[52px] px-3 bg-secondary rounded-t-[20px] translate-y-[6px] mr-2 shadow-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="absolute bottom-0 -left-5 w-5 h-5 pointer-events-none rotate-180"
                  aria-hidden="true"
                >
                  <path
                    d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                    fill="#00B67A"
                  />
                </svg>

                <div className="flex items-center gap-2 border-2 border-black/90 px-2.5 py-1 rounded-full bg-secondary">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-black hover:opacity-75 transition-opacity"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-black hover:opacity-75 transition-opacity"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex items-center justify-center w-10 h-10 bg-primary border-2 border-black rounded-full transition-all cursor-pointer active:scale-95 shadow-xs"
                aria-label="Close menu"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className="absolute w-3.5 h-[2px] bg-white rotate-45 rounded-full" />
                  <span className="absolute w-3.5 h-[2px] bg-white -rotate-45 rounded-full" />
                </div>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[60px] left-[8px] right-[8px] bottom-[10px] bg-secondary text-black shadow-[0_25px_60px_rgba(0,0,0,0.3)] z-50 flex flex-col overflow-hidden will-change-transform"
            style={{
              borderRadius: "0px 0 30px 30px",
            }}
          >
            <div className="h-full flex flex-col justify-between p-3.5 sm:p-5 overflow-hidden">
              {/* <div className="shrink-0 mb-1">

                <div className="text-center font-bold text-[11px] sm:text-xs uppercase tracking-wider text-black/70 mb-1.5 font-mono">
                  Welcome to StadiPass
                </div>


                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className="bg-white/90 backdrop-blur-md rounded-full px-3.5 py-1.5 sm:py-2 flex items-center justify-between shadow-xs border border-black/10 focus-within:border-black transition-colors">
                    <input
                      type="text"
                      value={localSearch}
                      onChange={(e) => setLocalSearch(e.target.value)}
                      placeholder="Search teams, concerts, venues..."
                      className="bg-transparent text-black placeholder-black/50 text-xs sm:text-sm font-medium focus:outline-none w-full pr-2"
                    />
                    {localSearch && (
                      <button
                        type="button"
                        onClick={() => setLocalSearch('')}
                        className="p-1 hover:opacity-70 text-black mr-1 cursor-pointer"
                        aria-label="Clear search"
                      >
                        <X size={14} />
                      </button>
                    )}
                    <button
                      type="submit"
                      aria-label="Search"
                      className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center shrink-0 hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      <Search size={13} />
                    </button>
                  </div>
                </form>
              </div> */}

              <div className="flex-1 flex flex-col justify-center overflow-hidden my-1">
                <motion.nav
                  key="main-nav"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                  className="flex-1 flex flex-col justify-evenly "
                >
                  {mainNavItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * idx, duration: 0.2 }}
                      className="border-b border-black/25 py-1 sm:py-1.5"
                    >
                      <button
                        type="button"
                        onClick={item.action}
                        className="group w-full py-1 text-left flex items-center justify-between text-[22px] sm:text-[26px] font-bold text-black hover:text-[#005241] tracking-tight transition-colors cursor-pointer font-sans"
                      >
                        <span>{item.label}</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              <div className="shrink-0 pt-2 space-y-2 ">
                {currentUser ? (
                  <div className="bg-black/10 border border-black/15 rounded-xl p-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-black">
                          {currentUser.name}
                        </div>
                        <div className="text-[10px] text-black/60 truncate max-w-[140px]">
                          {currentUser.email}
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onSignOut();
                        onClose();
                      }}
                      className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-black/25 text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      <LogOut size={12} />
                      <span>Sign out</span>
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      setTimeout(onOpenAuth, 180);
                    }}
                    className="w-full bg-black hover:bg-neutral-900 active:scale-[0.99] text-white font-bold text-xs sm:text-sm uppercase tracking-wider py-2.5 sm:py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer font-sans"
                  >
                    <span>Buy tickets</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export { MobileMenu as MegaMenu };
