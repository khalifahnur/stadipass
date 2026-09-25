import { motion } from "motion/react";
import { Menu, ShieldCheck } from "lucide-react";
import { User } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  isScrolled: boolean;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  currentUser: User | null;
  onSignOut: () => void;
  onOpenAuth: () => void;
  onOpenMenu: () => void;
  onLogoClick?: () => void;
  onSearchClick?: () => void;
  onFavoritesClick?: () => void;
  onCalendarClick?: () => void;
  onTicketsClick?: () => void;
  likedCount?: number;
}

export function Header({
  isScrolled,
  selectedCategory,
  onSelectCategory,
  currentUser,
  onSignOut,
  onOpenAuth,
  onOpenMenu,
  onLogoClick,
  onSearchClick,
  onFavoritesClick,
  onCalendarClick,
  onTicketsClick,
  likedCount = 0,
}: HeaderProps) {
  const navItems = [
    { label: "Search", href: "/#" },
    { label: "Calendar", href: "/#" },
    { label: "Contact", href: "/#" },
    { label: "My Ticket", href: "/#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 flex flex-col transition-all duration-300">
      <motion.div
        initial={{ height: 38, opacity: 1 }}
        animate={{ height: isScrolled ? 0 : 38, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="bg-[#1e1e1e] text-white flex items-center justify-center overflow-hidden shrink-0 "
      >
        <div className="text-white h-6 text-xs font-medium tracking-wide flex justify-center items-center px-4 relative z-10">
          <span className="opacity-90">
            Coming soon in playstore and appstore.
          </span>
        </div>
      </motion.div>
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? " backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]  py-3 sm:py-3.5"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="px-5 sm:px-10 lg:px-14 flex items-center justify-between max-w-[1440px] w-full mx-auto">
          <div className="flex items-center">
            <Link href={"/"} className="h-10 items-center justify-center flex">
              <Image
                src={"/logo.png"}
                alt="stadipass_logo"
                width={150}
                height={100}
                className=" object-cover items-center justify-center"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[25px] font-bold text-[#111827]/80 font-condensed">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[17px] font-bold hover:text-[#00B67A] transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-1 bg-[#00B67A] rounded-t-sm transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 sm:gap-4">
            {currentUser ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold hidden sm:inline text-[#111827] font-sans">
                  {currentUser.name}
                </span>
                <button
                  onClick={onSignOut}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-gray-700 hover:text-[#00B67A] hover:border-[#00B67A] transition-colors cursor-pointer"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="bg-[#111827] hidden md:block hover:bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium transition-all shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.18)] cursor-pointer font-sans"
              >
                Buy tickets
              </button>
            )}
            <button
  onClick={onOpenMenu}
  className="relative flex flex-col justify-center items-center w-10 h-10 gap-1.5 md:hidden"
  aria-label="Open menu"
>
  <span className="w-6 h-0.5 bg-gray-900 rounded-full transition-all"></span>
  <span className="w-6 h-0.5 bg-gray-900 rounded-full transition-all"></span>
  <span className="w-6 h-0.5 bg-gray-900 rounded-full transition-all"></span>
</button>
            {/* <div className="-mr-1.6rem ml-0.8rem !block before:w-2.4rem after:w-2.4rem sm:ml-1.6rem sm:before:w-3.2rem sm:after:w-3.2rem md:!hidden Burger-module__KJXFwG__wrap "></div> */}
          </div>
        </div>
      </div>
    </header>
  );
}
