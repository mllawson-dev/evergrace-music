import { Link, useParams } from 'react-router-dom';
import { GenreBadge } from '../components/GenreBadge/GenreBadge';
import { ArtistPhoto } from '../components/ArtistPhoto/ArtistPhoto';
import { StreamingMerchButtons } from '../components/StreamingMerchButtons/StreamingMerchButtons';
import { MediaPlayer } from '../components/MediaPlayer/MediaPlayer';
import { TourDateList } from '../components/TourDateList/TourDateList';
import { sampleArtists, sampleTourDates } from '../data/sampleData';
import './ArtistPage.css';

export function ArtistPage() {
  const { artistId } = useParams<{ artistId: string }>();
  const artist = sampleArtists.find((a) => a.id === artistId);

  if (!artist) {
    return (
      <main className="eg-artist-page eg-artist-page--not-found">
        <p>We couldn&rsquo;t find that artist.</p>
        <Link to="/" className="eg-artist-page__back">
          Back to Evergrace Music
        </Link>
      </main>
    );
  }

  const artistDates = sampleTourDates.filter((date) => date.artistId === artist.id);

  return (
    <main className={`eg-artist-page eg-artist-page--${artist.genre} eg-grain-surface`}>
      <Link to="/" className="eg-artist-page__back">
        &larr; All artists
      </Link>

      <header className="eg-artist-page__header">
        <div className="eg-artist-page__photo">
          <ArtistPhoto artist={artist} />
        </div>
        <div className="eg-artist-page__intro">
          <GenreBadge genre={artist.genre} />
          <h1 className="eg-artist-page__name">{artist.name}</h1>
          <p className="eg-artist-page__tagline">{artist.tagline}</p>
          <StreamingMerchButtons artist={artist} />
        </div>
      </header>

      <section className="eg-artist-page__section">
        <h2>About</h2>
        <p className="eg-artist-page__bio">{artist.bio}</p>
      </section>

      <section className="eg-artist-page__section">
        <h2>Listen</h2>
        <div className="eg-artist-page__player">
          <MediaPlayer
            variant="hero"
            genre={artist.genre}
            trackTitle="Featured track"
            artistName={artist.name}
            audioSrc=""
          />
        </div>
      </section>

      {artistDates.length > 0 && (
        <section className="eg-artist-page__section">
          <h2>Tour dates</h2>
          <TourDateList dates={artistDates} />
        </section>
      )}
    </main>
  );
}
