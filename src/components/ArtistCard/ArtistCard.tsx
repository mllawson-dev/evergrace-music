import { Link } from 'react-router-dom';
import type { Artist } from '../../types/Artist';
import { GenreBadge } from '../GenreBadge/GenreBadge';
import { ArtistPhoto } from '../ArtistPhoto/ArtistPhoto';
import './ArtistCard.css';

interface ArtistCardProps {
  artist: Artist;
  variant?: 'default' | 'compact';
  loading?: boolean;
}

export function ArtistCard({ artist, variant = 'default', loading = false }: ArtistCardProps) {
  if (loading) {
    return (
      <div className={`eg-artist-card eg-artist-card--${variant} eg-artist-card--loading`} aria-hidden="true">
        <div className="eg-artist-card__photo eg-artist-card__photo--skeleton" />
        <div className="eg-artist-card__body">
          <div className="eg-skeleton-line eg-skeleton-line--name" />
          <div className="eg-skeleton-line eg-skeleton-line--tagline" />
        </div>
      </div>
    );
  }

  return (
    <Link
      to={`/artists/${artist.id}`}
      className={`eg-artist-card eg-artist-card--${variant} eg-artist-card--${artist.genre}`}
    >
      <div className="eg-artist-card__photo">
        <ArtistPhoto artist={artist} />
      </div>
      <div className="eg-artist-card__body">
        <p className="eg-artist-card__name">{artist.name}</p>
        <GenreBadge genre={artist.genre} />
        <p className="eg-artist-card__tagline">{artist.tagline}</p>
      </div>
    </Link>
  );
}
