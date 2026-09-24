import { Trophy, Music, CircleDashed, Ticket, Mic, Flag } from 'lucide-react';
import { EventItem, CategoryItem } from '@/types';

export const trendingEvents: EventItem[] = [

  {
    id: 1,
    title: "Muranga Seal vs Posta Rangers",
    venue:"SportPesa Arena",
    date: "Sep 24",
    category: "Sports",
    price: 160,
    image: "/Sportpesa_league_logo.png"
  },
  {
    id: 2,
    title: "Muranga Seal vs Posta Rangers",
    venue:"Sportpesa Arena",
    date: "Sep 28",
    category: "Sports",
    price: 125,
    image: "/Sportpesa_league_logo.png"
  }
];

export const categories: CategoryItem[] = [
  { name: "NFL", icon: Trophy },
  { name: "Concerts", icon: Music },
  { name: "NBA", icon: CircleDashed },
  { name: "NCAA Football", icon: Trophy },
  { name: "NHL", icon: Trophy },
  { name: "MLB", icon: Trophy },
  { name: "MLS", icon: CircleDashed },
  { name: "WNBA", icon: CircleDashed },
  { name: "NCAA Basketball", icon: CircleDashed },
  { name: "Broadway Shows", icon: Ticket },
  { name: "Comedy", icon: Mic },
  { name: "WWE", icon: Trophy },
  { name: "Tennis", icon: CircleDashed },
  { name: "Golf", icon: Flag },
  { name: "Music Festivals", icon: Music },
];
