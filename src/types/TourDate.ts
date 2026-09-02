export type TourDateStatus = 'upcoming' | 'sold-out' | 'past';

export interface TourDate {
  id: string;
  artistId: string;
  date: string;
  city: string;
  venue: string;
  ticketUrl?: string;
  status: TourDateStatus;
}
