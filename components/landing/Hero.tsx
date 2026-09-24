"use client"
import { useState, useRef, useEffect } from 'react';
import { Calendar, MapPin, LayoutGrid, X, Search, ChevronDown } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSearchSubmit?: () => void;
  selectedLocation?: string | null;
  onSelectLocation?: (location: string | null) => void;
  selectedDateFilter?: string | null;
  onSelectDateFilter?: (date: string | null) => void;
}

export function Hero({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onSearchSubmit,
  selectedLocation = null,
  onSelectLocation,
  selectedDateFilter = null,
  onSelectDateFilter,
}: HeroProps) {
  const [openDropdown, setOpenDropdown] = useState<'date' | 'location' | 'type' | null>(null);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const datesList = ['All Dates', 'This Weekend', 'Next Week', 'This Month', 'Sep 2026'];
  const locationsList = ['All Locations', 'London, UK', 'New York, US', 'Los Angeles, US', 'Berlin, DE', 'Chicago, US'];
  const eventTypesList = ['All Types', 'Techno & Electronic', 'Concerts', 'Stadium Sports', 'Music Festivals'];

  const handleSearchClick = () => {
    setOpenDropdown(null);
    if (onSearchSubmit) {
      onSearchSubmit();
    } else {
      const el = document.getElementById('events-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative w-full hero-mesh-gradient pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24 lg:pb-28 overflow-visible">
      <div
        className="absolute inset-0 pointer-events-none opacity-35 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='whiteNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23whiteNoise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-10 lg:px-14 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-[68px] lg:text-[76px] font-extrabold text-[#111827] tracking-tight leading-[1.05] font-sans">
            Discover. Secure.<br />
            Attend. Experience<span className="text-[#00C278]">.</span>
          </h1>
        </div>
      </div>
      <div 
        ref={searchBarRef}
        className="absolute left-0 right-0 bottom-0 translate-y-1/2 px-4 sm:px-6 lg:px-10 z-30"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl md:rounded-full p-2.5 sm:p-3 md:py-2 md:px-3 md:pl-7 shadow-[0_16px_50px_rgba(0,0,0,0.08)] border border-gray-100 hover:border-[#86efac] focus-within:border-[#86efac] focus-within:ring-2 focus-within:ring-[#99f6b4]/25 transition-all">
            <div className="hidden md:flex items-center justify-between gap-2">
              <div className="flex-1 flex items-center min-w-0 pr-2">
                <Search className="w-4 h-4 text-[#00B67A] mr-2.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearchClick();
                  }}
                  placeholder="Search by name or type..."
                  className="w-full bg-transparent outline-none text-[#111827] font-medium text-[15px] lg:text-[16px] placeholder:text-gray-400 py-2 font-sans"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => onSearchChange('')}
                    className="p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer mr-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer font-sans ${
                    selectedDateFilter || openDropdown === 'date'
                      ? 'text-[#065F46] bg-[#DCFCE7] border border-[#86EFAC]'
                      : 'text-gray-600 hover:text-[#00B67A]'
                  }`}
                >
                  <Calendar className="w-4 h-4 text-[#00B67A] shrink-0" />
                  <span className="truncate max-w-[105px]">
                    {selectedDateFilter || 'Date'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {openDropdown === 'date' && (
                  <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-bold text-gray-400 px-3 py-1.5 uppercase tracking-wider">
                      Select Date
                    </div>
                    {datesList.map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          onSelectDateFilter?.(d === 'All Dates' ? null : d);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                          (d === 'All Dates' && !selectedDateFilter) || selectedDateFilter === d
                            ? 'bg-[#111827] text-white'
                            : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer font-sans ${
                    selectedLocation || openDropdown === 'location'
                      ? 'text-[#065F46] bg-[#DCFCE7] border border-[#86EFAC]'
                      : 'text-gray-600 hover:text-[#00B67A]'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#00B67A] shrink-0" />
                  <span className="truncate max-w-[110px]">
                    {selectedLocation ? selectedLocation.split(',')[0] : 'Location'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>

                {openDropdown === 'location' && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-bold text-gray-400 px-3 py-1.5 uppercase tracking-wider">
                      Select City
                    </div>
                    {locationsList.map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => {
                          onSelectLocation?.(loc === 'All Locations' ? null : loc);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                          (loc === 'All Locations' && !selectedLocation) || selectedLocation === loc
                            ? 'bg-[#111827] text-white'
                            : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-[14px] font-medium transition-all cursor-pointer font-sans ${
                    selectedCategory || openDropdown === 'type'
                      ? 'text-[#065F46] bg-[#DCFCE7] border border-[#86EFAC]'
                      : 'text-gray-600 hover:text-[#00B67A]'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 text-[#00B67A] shrink-0" />
                  <span className="truncate max-w-[120px]">
                    {selectedCategory || 'Type of event'}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </button>


                {openDropdown === 'type' && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-gray-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="text-[11px] font-bold text-gray-400 px-3 py-1.5 uppercase tracking-wider">
                      Event Category
                    </div>
                    {eventTypesList.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          onSelectCategory(type === 'All Types' ? null : type);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                          (type === 'All Types' && !selectedCategory) || selectedCategory === type
                            ? 'bg-[#111827] text-white'
                            : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={handleSearchClick}
                className="bg-[#111827] hover:bg-black text-[#fff] font-semibold text-[15px] px-8 py-3 rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md shrink-0 flex items-center justify-center font-sans"
              >
                <span>Search</span>
              </button>
            </div>

            <div className="flex md:hidden flex-col gap-2.5">
              <div className="flex items-center gap-2">
                <div className="flex-1 flex items-center bg-gray-50/80 rounded-2xl px-3 py-2 border border-gray-200/80 focus-within:border-[#86efac] focus-within:bg-white transition-all">
                  <Search className="w-4 h-4 text-[#00B67A] mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSearchClick();
                    }}
                    placeholder="Search by name or type..."
                    className="w-full bg-transparent outline-none text-[#111827] font-medium text-[14px] placeholder:text-gray-400 font-sans"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => onSearchChange('')}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleSearchClick}
                  className="bg-[#111827] hover:bg-black active:scale-95 text-[#fff] font-semibold text-sm px-4 py-2.5 rounded-2xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer shrink-0"
                >
                  <Search className="w-4 h-4 text-[#111827]" />
                  <span>Search</span>
                </button>
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
                {/* Mobile Date Chip */}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'date' ? null : 'date')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedDateFilter
                        ? 'bg-[#111827] text-white shadow-sm'
                        : 'bg-[#F0FDF4] text-[#065F46] border border-[#BBF7D0]'
                    }`}
                  >
                    <Calendar className={`w-3.5 h-3.5 ${selectedDateFilter ? 'text-white' : 'text-[#00B67A]'}`} />
                    <span className="truncate max-w-[90px]">{selectedDateFilter || 'Date'}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </button>

                  {openDropdown === 'date' && (
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-3 z-50 max-w-xs mx-auto animate-in fade-in zoom-in-95">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                        <span className="text-xs font-bold text-[#111827]">Select Date</span>
                        <button onClick={() => setOpenDropdown(null)} className="p-1 text-gray-400 hover:text-black">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        {datesList.map((d) => (
                          <button
                            key={d}
                            type="button"
                            onClick={() => {
                              onSelectDateFilter?.(d === 'All Dates' ? null : d);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                              (d === 'All Dates' && !selectedDateFilter) || selectedDateFilter === d
                                ? 'bg-[#111827] text-white'
                                : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Location Chip */}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedLocation
                        ? 'bg-[#111827] text-white shadow-sm'
                        : 'bg-[#F0FDF4] text-[#065F46] border border-[#BBF7D0]'
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 ${selectedLocation ? 'text-white' : 'text-[#00B67A]'}`} />
                    <span className="truncate max-w-[90px]">
                      {selectedLocation ? selectedLocation.split(',')[0] : 'Location'}
                    </span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </button>

                  {openDropdown === 'location' && (
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-3 z-50 max-w-xs mx-auto animate-in fade-in zoom-in-95">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                        <span className="text-xs font-bold text-[#111827]">Select Location</span>
                        <button onClick={() => setOpenDropdown(null)} className="p-1 text-gray-400 hover:text-black">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        {locationsList.map((loc) => (
                          <button
                            key={loc}
                            type="button"
                            onClick={() => {
                              onSelectLocation?.(loc === 'All Locations' ? null : loc);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                              (loc === 'All Locations' && !selectedLocation) || selectedLocation === loc
                                ? 'bg-[#111827] text-white'
                                : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Type Chip */}
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      selectedCategory
                        ? 'bg-[#111827] text-white shadow-sm'
                        : 'bg-[#F0FDF4] text-[#065F46] border border-[#BBF7D0]'
                    }`}
                  >
                    <LayoutGrid className={`w-3.5 h-3.5 ${selectedCategory ? 'text-white' : 'text-[#00B67A]'}`} />
                    <span className="truncate max-w-[100px]">{selectedCategory || 'Type'}</span>
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  </button>

                  {openDropdown === 'type' && (
                    <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 p-3 z-50 max-w-xs mx-auto animate-in fade-in zoom-in-95">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
                        <span className="text-xs font-bold text-[#111827]">Event Category</span>
                        <button onClick={() => setOpenDropdown(null)} className="p-1 text-gray-400 hover:text-black">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-1">
                        {eventTypesList.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              onSelectCategory(type === 'All Types' ? null : type);
                              setOpenDropdown(null);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                              (type === 'All Types' && !selectedCategory) || selectedCategory === type
                                ? 'bg-[#111827] text-white'
                                : 'text-gray-700 hover:bg-[#DCFCE7] hover:text-[#065F46]'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
