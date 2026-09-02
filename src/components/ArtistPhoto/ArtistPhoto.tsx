import type { Artist } from '../../types/Artist';
import genreWorship from '../../assets/brand/genre-worship.svg';
import genreRock from '../../assets/brand/genre-rock.svg';
import genreCountry from '../../assets/brand/genre-country.svg';
import './ArtistPhoto.css';

const genreSymbols = {
  worship: genreWorship,
  rock: genreRock,
  country: genreCountry,
};

interface ArtistPhotoProps {
  artist: Artist;
}

export function ArtistPhoto({ artist }: ArtistPhotoProps) {
  if (artist.photoUrl) {
    return (
      <div className="eg-artist-photo">
        {/* Decorative: the artist's name is always shown as adjacent visible text
            (card body text, or the page h1) — a duplicate alt would double-announce
            the name for screen reader users. */}
        <img src={artist.photoUrl} alt="" />
      </div>
    );
  }

  return (
    <div className={`eg-artist-photo eg-artist-photo--fallback eg-artist-photo--${artist.genre}`}>
      <img src={genreSymbols[artist.genre]} alt="" className="eg-artist-photo__watermark" />
    </div>
  );
}
