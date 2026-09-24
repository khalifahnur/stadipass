"use client"
import { useEffect, useState } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Events } from './Events';
import { Footer } from './Footer';
import FooterModals, { type FooterModalType } from './FooterModal';
import { MobileMenu } from './MobileMenu';
import { trendingEvents, categories } from '../data/events';
import { User, EventItem } from '@/types';
import Mockup from './Mockup';
import FAQ from './Faq';

export interface MainContainerProps {
  initialEvents?: EventItem[];
  defaultCurrency?: string;
}

export function MainContainer({
  initialEvents = trendingEvents,
  defaultCurrency = 'Ksh',
}: MainContainerProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeModal, setActiveModal] = useState<FooterModalType>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currency, setCurrency] = useState(defaultCurrency);
  const [likedEvents, setLikedEvents] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleLike = (id: number) => {
    setLikedEvents((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (ksh: number) => {
    switch (currency) {
      case 'EUR':
        return `€${Math.round(ksh * 0.92)}`;
      case 'GBP':
        return `£${Math.round(ksh * 0.78)}`;
      case 'CAD':
        return `CA$${Math.round(ksh * 1.36)}`;
      case 'AUD':
        return `AU$${Math.round(ksh * 1.52)}`;
      case 'JPY':
        return `¥${Math.round(ksh * 155)}`;
      default:
        return `Ksh${ksh}`;
    }
  };

  const filteredEvents = initialEvents.filter((event: EventItem) => {
    const matchesSearch =
      searchQuery === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || event.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen">
      <div
        className="fixed inset-0 pointer-events-none opacity-30 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='whiteNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23whiteNoise)'/%3E%3C/svg%3E\")",
        }}
      />
      <Header
        isScrolled={isScrolled}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        currentUser={currentUser}
        onSignOut={() => setCurrentUser(null)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenMenu={() => setMobileMenuOpen(true)}
        onLogoClick={() => {
          handleResetFilters();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <Hero
        searchQuery={searchQuery}
        onSearchChange={(q) => setSearchQuery(q)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <Events
        events={filteredEvents}
        likedEvents={likedEvents}
        onToggleLike={toggleLike}
        formatPrice={formatPrice}
        searchQuery={searchQuery}
        onClearFilters={handleResetFilters}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      <FAQ />


      <Footer
        currency={currency}
        onOpenModal={(modal) => setActiveModal(modal)}
      />

      <FooterModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        currentCurrency={currency}
        onCurrencyChange={(curr) => setCurrency(curr)}
      />

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        currentUser={currentUser}
        onOpenAuth={() => setAuthModalOpen(true)}
        onSignOut={() => setCurrentUser(null)}
        onOpenModal={(modal) => setActiveModal(modal)}
        currency={currency}
        searchQuery={searchQuery}
        onSearch={(q) => setSearchQuery(q)}
        likedCount={likedEvents.length}
      />
    </div>
  );
}