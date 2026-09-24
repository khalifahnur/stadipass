export type ViewState = 'home' | 'match' | 'seats' | 'checkout' | 'success' | 'profile';

export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeCode: string;
  awayCode: string;
  date: string;
  time: string;
  stadium: string;
  competition: string;
  priceFrom: number;
  image: string;
}

export interface Seat {
  id: string;
  section: string;
  row: string;
  number: number;
  status: 'available' | 'reserved' | 'selected';
  price: number;
}

export interface User {
  email: string;
  name: string;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  category: string;
  price: number;
  image: string;
  venue:string;
}

export interface CategoryItem {
  name: string;
  icon: any;
}

export type EventStatus = "ON_SALE" | "SOLD_OUT" | "LIVE" | "COMPLETED";
export type TicketStatus = "RESERVED" | "PAID" | "SCANNED" | "RESALE";

export interface Team {
  id: string;
  name: string;
  countryCode?: string;
  flagUrl?: string;
  logoUrl?:string;
}

export interface TicketCategory {
  categoryId: string;
  name: string;
  price: number;
  currency: string;
  availableSeats: number;
  colorCode: string; // For the interactive SVG map
}

export interface MatchEvent {
  id: string;
  title: string;
  competition: string;
  stage: string;
  kickoffTime: string; 
  stadium: {
    name: string;
    location: string;
    capacity: number;
  };
  homeTeam: Team;
  awayTeam: Team;
  categories: TicketCategory[];
  status: EventStatus;
}

export interface Ticket {
  id: string; // e.g., "TKS-2027-88431"
  eventId: string;
  owner: {
    name: string;
    email: string;
    fanId: string | null;
  };
  matchDetails: {
    title: string;
    stadium: string;
    kickoffTime: string;
  };
  seating: {
    categoryName: string;
    block: string;
    row: string;
    seatNumber: string;
  };
  payment: {
    amountPaid: number;
    currency: string;
    method: "M-PESA" | "AIRTEL_MONEY" | "CARD";
  };
  qrConfig: {
    token: string;
    expiresAt: string; // Used to trigger frontend 30s refresh
  };
  status: TicketStatus;
}

export interface Order {
  id: string;
  date: string;
  match: Match;
  seats: Seat[];
  totalAmount: number;
}
