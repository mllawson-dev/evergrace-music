import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArtistCard } from '../components/ArtistCard/ArtistCard';
import { GenreBadge } from '../components/GenreBadge/GenreBadge';
import { sampleArtists } from '../data/sampleData';
import type { Genre } from '../types/Genre';
import './Roster.css';

const allGenres: Genre[] = ['worship', 'rock', 'country'];

function initialGenres(param: string | null): Genre[] {
  if (param && allGenres.includes(param as Genre)) {
    return [param as Genre];
  }
  return allGenres;
}

export function Roster() {
  const [searchParams] = useSearchParams();
  const [activeGenres, setActiveGenres] = useState<Genre[]>(() =>
    initialGenres(searchParams.get('genre'))
  );

  const toggleGenre = (genre: Genre) => {
    setActiveGenres((current) =>
      current.includes(genre) ? current.filter((g) => g !== genre) : [...current, genre]
    );
  };

  const filteredArtists = sampleArtists.filter((artist) => activeGenres.includes(artist.genre));

  return (
    <main className="eg-roster-page eg-grain-surface">
      <h1 className="eg-roster-page__heading">The roster</h1>

      <div className="eg-roster-page__filters">
        {allGenres.map((genre) => (
          <GenreBadge
            key={genre}
            genre={genre}
            interactive
            active={activeGenres.includes(genre)}
            onClick={() => toggleGenre(genre)}
          />
        ))}
      </div>

      {filteredArtists.length > 0 ? (
        <div className="eg-roster-page__grid">
          {filteredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      ) : (
        <p className="eg-roster-page__empty">
          No artists match the selected genres. Try turning one back on above.
        </p>
      )}
    </main>
  );
}
