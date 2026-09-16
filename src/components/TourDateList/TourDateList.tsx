import type { TourDate } from '../../types/TourDate';
import { Button } from '../Button/Button';
import './TourDateList.css';

interface TourDateListProps {
  dates: TourDate[];
  variant?: 'full' | 'compact';
  /** Optional artistId -> display name map. When provided, each row shows which artist it belongs to — used when dates from multiple artists are listed together. */
  artistNames?: Record<string, string>;
}

export function TourDateList({ dates, variant = 'full', artistNames }: TourDateListProps) {
  const visibleDates = variant === 'compact' ? dates.slice(0, 3) : dates;

  return (
    <ul className={`eg-tour-list eg-tour-list--${variant}`}>
      {visibleDates.map((date) => (
        <li key={date.id} className={`eg-tour-row eg-tour-row--${date.status}`}>
          <span className="eg-tour-row__date">{date.date}</span>
          <span className="eg-tour-row__location">
            {artistNames?.[date.artistId] && (
              <span className="eg-tour-row__artist">{artistNames[date.artistId]}</span>
            )}
            <span className="eg-tour-row__venue">
              {date.city} &middot; {date.venue}
            </span>
          </span>
          {date.status === 'upcoming' && date.ticketUrl && (
            <Button
              variant="primary"
              className="eg-tour-row__action"
              disabled={date.ticketUrl === '#'}
              title={date.ticketUrl === '#' ? 'Concept destination — intentionally inactive' : undefined}
              onClick={() => date.ticketUrl !== '#' && window.open(date.ticketUrl, '_blank', 'noopener,noreferrer')}
            >
              {date.ticketUrl === '#' ? 'Demo tickets' : 'Tickets'}
            </Button>
          )}
          {date.status === 'sold-out' && <span className="eg-tour-row__flag">Sold out</span>}
        </li>
      ))}
    </ul>
  );
}
