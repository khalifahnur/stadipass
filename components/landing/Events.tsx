import { EventItem, CategoryItem } from '@/types';
import { TrendingEvents } from './TrendingEvents';
import { SpotifyBanner } from './SpotifyBanner';
import { CategoryBrowse } from './CategoryBrowse';
import Mockup from './Mockup';

export interface EventsProps {
  events: EventItem[];
  likedEvents: number[];
  onToggleLike: (id: number) => void;
  formatPrice: (usd: number) => string;
  searchQuery: string;
  onClearFilters: () => void;
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectEvent?: (event: EventItem) => void;
  onSpotifyConnect?: () => void;
}

export function Events({
  events,
  likedEvents,
  onToggleLike,
  formatPrice,
  searchQuery,
  onClearFilters,
  categories,
  selectedCategory,
  onSelectCategory,
  onSelectEvent,
  onSpotifyConnect,
}: EventsProps) {
  return (
    <div className="relative z-10">
      <div
        className="absolute inset-0 pointer-events-none opacity-35 z-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='whiteNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.22 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23whiteNoise)'/%3E%3C/svg%3E\")",
        }}
      />
            
      <TrendingEvents
        events={events}
        likedEvents={likedEvents}
        onToggleLike={onToggleLike}
        formatPrice={formatPrice}
        searchQuery={searchQuery}
        onClearFilters={onClearFilters}
        onSelectEvent={onSelectEvent}
      />

    <Mockup />
    </div>
  );
}
