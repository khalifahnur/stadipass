"use client";

import { useState, useRef, useEffect } from 'react';
import { Heart, ArrowLeft, ArrowRight } from 'lucide-react';
import { EventItem } from '@/types';

interface TrendingEventsProps {
  events: EventItem[];
  likedEvents: number[];
  onToggleLike: (id: number) => void;
  formatPrice: (usd: number) => string;
  searchQuery: string;
  onClearFilters: () => void;
  onSelectEvent?: (event: EventItem) => void;
}

export function TrendingEvents({
  events,
  likedEvents,
  onToggleLike,
  formatPrice,
  searchQuery,
  onClearFilters,
  onSelectEvent,
}: TrendingEventsProps) {
  const [pageIndex, setPageIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true); // Default to true for SSR
  
  const itemsPerPage = 4;
  const maxPages = Math.ceil(events.length / itemsPerPage);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Run once on mount to get the actual client width
    const handleResize = () => setIsDesktop(window.innerWidth >= 640);
    
    handleResize(); // Set initial value on client load
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    // Safe to use window here because click handlers only run on the client
    if (mobileScrollRef.current && window.innerWidth < 640) {
      mobileScrollRef.current.scrollBy({ left: -window.innerWidth * 0.52, behavior: 'smooth' });
    } else {
      setPageIndex(Math.max(0, pageIndex - 1));
    }
  };

  const handleNext = () => {
    if (mobileScrollRef.current && window.innerWidth < 640) {
      mobileScrollRef.current.scrollBy({ left: window.innerWidth * 0.52, behavior: 'smooth' });
    } else {
      setPageIndex(Math.min(maxPages - 1, pageIndex + 1));
    }
  };

  return (
    <section id="events-section" className="px-4 sm:px-8 pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-28 max-w-[1440px] mx-auto relative z-10">
      <div className="flex items-center justify-between mb-6 sm:mb-10">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] font-sans tracking-tight">
            Most Popular Events
          </h2>
          <p className="text-xs sm:hidden text-gray-500 font-medium mt-0.5">
            Swipe horizontally to explore
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            disabled={pageIndex === 0 && (!mobileScrollRef.current || isDesktop)}
            className={`p-2 sm:p-2.5 rounded-full transition-all cursor-pointer ${
              pageIndex === 0 && isDesktop
                ? 'text-gray-300 cursor-not-allowed opacity-40'
                : 'text-[#111827] hover:bg-[#F0FDF4] hover:text-[#00B67A] active:scale-95'
            }`}
            aria-label="Previous events"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <span className="hidden sm:inline text-[13px] font-semibold px-1 text-gray-500 font-sans">
            {pageIndex + 1} / {Math.max(1, maxPages)}
          </span>

          <button
            onClick={handleNext}
            disabled={pageIndex >= maxPages - 1 && (!mobileScrollRef.current || isDesktop)}
            className={`p-2 sm:p-2.5 rounded-full transition-all cursor-pointer ${
              pageIndex >= maxPages - 1 && isDesktop
                ? 'text-gray-300 cursor-not-allowed opacity-40'
                : 'text-[#111827] hover:bg-[#F0FDF4] hover:text-[#00B67A] active:scale-95'
            }`}
            aria-label="Next events"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>

      {events.length === 0 ? (
        <div className="p-8 sm:p-12 text-center bg-white rounded-3xl border border-secondary-light">
          <p className="text-lg sm:text-xl font-bold text-[#111827]">No events match "{searchQuery}"</p>
          <button
            onClick={onClearFilters}
            className="mt-3 text-secondary underline font-bold cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div
            ref={mobileScrollRef}
            className="flex sm:hidden flex-row overflow-x-auto gap-3 pb-3 pt-1 no-scrollbar snap-x snap-mandatory -mx-4 px-4 scroll-smooth"
          >
            {events.map((event) => (
              <div
                key={`mobile-${event.id}`}
                onClick={() => onSelectEvent?.(event)}
                className="w-[48vw] min-w-[165px] max-w-[210px] shrink-0 snap-start group cursor-pointer flex flex-col bg-white p-2.5 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-secondary-light/60 hover:border-secondary transition-all"
              >
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-2 bg-gray-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-1/2 h-1/2 object-cover"
                    loading="lazy"
                  />
                  {/* <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(event.id);
                    }}
                    className={`absolute top-1.5 right-1.5 p-1.5 rounded-full backdrop-blur-md transition-all shadow-xs cursor-pointer ${
                      likedEvents.includes(event.id)
                        ? 'bg-secondary text-white'
                        : 'bg-white/60 text-white hover:bg-secondary'
                    }`}
                    aria-label="Save event to favorites"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedEvents.includes(event.id) ? 'fill-white' : ''}`} />
                  </button> */}
                  <span className="absolute bottom-1.5 left-1.5 bg-[#052E16]/90 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[13px] leading-snug line-clamp-1 mb-0.5 text-[#111827] font-display">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-[11px] font-medium truncate">{event.date}</p>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-secondary-light/50 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-gray-500">From</span>
                    <strong className="text-sm font-black text-[#111827] font-display">
                      {formatPrice(event.price)}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {events.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((event) => (
              <div
                key={`desktop-${event.id}`}
                onClick={() => onSelectEvent?.(event)}
                className="group cursor-pointer flex flex-col bg-white p-4 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-secondary-light/50 hover:border-secondary/50 hover:shadow-[0_20px_40px_rgba(0,182,122,0.1)] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleLike(event.id);
                    }}
                    className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all shadow-sm cursor-pointer ${
                      likedEvents.includes(event.id)
                        ? 'bg-secondary text-white'
                        : 'bg-white/40 text-white hover:bg-secondary'
                    }`}
                    aria-label="Save event to favorites"
                  >
                    <Heart className={`w-5 h-5 ${likedEvents.includes(event.id) ? 'fill-white' : ''}`} />
                  </button> */}
                  <span className="absolute bottom-3 left-3 bg-[#052E16]/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>
                <div className="px-2 pb-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-xl leading-snug mb-1 text-[#111827] font-display">
                      {event.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-semibold">{event.date}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-secondary-light/50 flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-gray-500">From</span>
                    <strong className="text-xl font-black text-[#111827] font-display">
                      {formatPrice(event.price)}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}