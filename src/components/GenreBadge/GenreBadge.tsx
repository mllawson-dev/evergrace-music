import type { Genre } from '../../types/Genre';
import { GENRE_LABELS } from '../../types/Genre';
import './GenreBadge.css';

interface GenreBadgeProps {
  genre: Genre;
  interactive?: boolean;
  active?: boolean;
  onClick?: () => void;
}

export function GenreBadge({ genre, interactive = false, active = true, onClick }: GenreBadgeProps) {
  const className = `eg-badge eg-badge--${genre} ${interactive ? 'eg-badge--interactive' : ''} ${
    interactive && !active ? 'eg-badge--inactive' : ''
  }`;

  if (interactive) {
    return (
      <button type="button" className={className} onClick={onClick} aria-pressed={active}>
        {GENRE_LABELS[genre]}
      </button>
    );
  }

  return <span className={className}>{GENRE_LABELS[genre]}</span>;
}
