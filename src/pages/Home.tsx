import { useNavigate } from 'react-router-dom';
import { ArtistCard } from '../components/ArtistCard/ArtistCard';
import { TourDateList } from '../components/TourDateList/TourDateList';
import { Button } from '../components/Button/Button';
import { MediaPlayer } from '../components/MediaPlayer/MediaPlayer';
import { sampleArtists, sampleTourDates } from '../data/sampleData';
import lockup from '../assets/brand/evergrace-lockup.svg';
import genreWorship from '../assets/brand/genre-worship.svg';
import genreRock from '../assets/brand/genre-rock.svg';
import genreCountry from '../assets/brand/genre-country.svg';
import type { Genre } from '../types/Genre';
import './Home.css';

const genreCards = [
  {
    genre: 'worship' as const,
    icon: genreWorship,
    label: 'Worship',
    tagline: 'We worship. We listen. We surrender.',
    cta: 'Meet the worship artists',
  },
  {
    genre: 'rock' as const,
    icon: genreRock,
    label: 'Rock',
    tagline: 'We rise. We play. We proclaim.',
    cta: 'Meet the rock artists',
  },
  {
    genre: 'country' as const,
    icon: genreCountry,
    label: 'Country',
    tagline: 'We tell stories. We honor roots. We give thanks.',
    cta: 'Meet the country artists',
  },
];

export function Home() {
  const navigate = useNavigate();
  const featuredArtists = sampleArtists.slice(0, 3);

  const goToRoster = (genre?: Genre) => {
    navigate(genre ? `/artists?genre=${genre}` : '/artists');
  };

  return (
    <main className="eg-home eg-grain-surface">
      <section className="eg-hero">
        <span className="eg-hero__rays animate-eg-ray-drift motion-reduce:animate-none" aria-hidden="true" />
        <p className="eg-hero__ghost text-eg-display" aria-hidden="true">
          Evergrace
        </p>

        <div className="eg-hero__content animate-eg-hero-reveal motion-reduce:animate-none">
          <h1>
            <img src={lockup} alt="Evergrace Music — One faith. Every voice." className="eg-hero__lockup" />
          </h1>
          <div className="eg-hero__actions">
            <Button variant="primary" onClick={() => goToRoster()}>
              Explore the roster
            </Button>
            <Button variant="secondary" onClick={() => navigate('/tour')}>
              Upcoming shows
            </Button>
          </div>

          <div className="eg-hero__player">
            <MediaPlayer
              variant="hero"
              trackTitle="Featured track"
              artistName={featuredArtists[0].name}
              audioSrc=""
            />
          </div>
        </div>
      </section>

      <section className="eg-section">
        <h2 className="eg-section__heading">Three sounds. One faith.</h2>
        <div className="eg-genre-grid">
          {genreCards.map((card) => (
            <div key={card.genre} className={`eg-genre-card eg-genre-card--${card.genre}`}>
              <img src={card.icon} alt="" className="eg-genre-card__watermark" aria-hidden="true" />
              <div className="eg-genre-card__content">
                <img src={card.icon} alt="" className="eg-genre-card__icon" />
                <p className="eg-genre-card__label">{card.label}</p>
                <p className="eg-genre-card__tagline">{card.tagline}</p>
                <Button variant="secondary" onClick={() => goToRoster(card.genre)}>
                  {card.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="eg-section">
        <h2 className="eg-section__heading">From the roster</h2>
        <div className="eg-roster-grid">
          {featuredArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
        <div className="eg-section__footer">
          <Button variant="secondary" onClick={() => goToRoster()}>
            View full roster
          </Button>
        </div>
      </section>

      <section className="eg-section eg-section--narrow">
        <h2 className="eg-section__heading">Upcoming shows</h2>
        <TourDateList dates={sampleTourDates} variant="compact" />
        <div className="eg-section__footer">
          <Button variant="secondary" onClick={() => navigate('/tour')}>
            See all tour dates
          </Button>
        </div>
      </section>
    </main>
  );
}
