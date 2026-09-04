import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { GenreBadge } from '../components/GenreBadge/GenreBadge';
import { ArtistCard } from '../components/ArtistCard/ArtistCard';
import { TourDateList } from '../components/TourDateList/TourDateList';
import { StreamingMerchButtons } from '../components/StreamingMerchButtons/StreamingMerchButtons';
import { MediaPlayer } from '../components/MediaPlayer/MediaPlayer';
import { sampleArtists, sampleTourDates } from '../data/sampleData';
import type { Genre } from '../types/Genre';
import './StyleGuide.css';

const colorGroups: { label: string; swatches: { name: string; varName: string }[] }[] = [
  {
    label: 'Brand core',
    swatches: [
      { name: 'Charcoal 900', varName: '--eg-charcoal-900' },
      { name: 'Charcoal 800', varName: '--eg-charcoal-800' },
      { name: 'Gold 500', varName: '--eg-gold-500' },
      { name: 'Cream 100', varName: '--eg-cream-100' },
    ],
  },
  {
    label: 'Genre accents',
    swatches: [
      { name: 'Worship 500', varName: '--eg-worship-500' },
      { name: 'Rock 500', varName: '--eg-rock-500' },
      { name: 'Country 500', varName: '--eg-country-500' },
    ],
  },
];

const genres: Genre[] = ['worship', 'rock', 'country'];

export function StyleGuide() {
  const [activeGenres, setActiveGenres] = useState<Genre[]>(genres);

  const toggleGenre = (genre: Genre) => {
    setActiveGenres((current) =>
      current.includes(genre) ? current.filter((g) => g !== genre) : [...current, genre]
    );
  };

  return (
    <div className="eg-style-guide">
      <h1>Evergrace Music — design system</h1>
      <p className="eg-style-guide__note">
        Internal documentation. Not part of the public site navigation.
      </p>

      <section>
        <h2>Color</h2>
        {colorGroups.map((group) => (
          <div key={group.label} className="eg-style-guide__row">
            <h3>{group.label}</h3>
            <div className="eg-swatch-grid">
              {group.swatches.map((swatch) => (
                <div key={swatch.varName} className="eg-swatch">
                  <div
                    className="eg-swatch__color"
                    style={{ background: `var(${swatch.varName})` }}
                  />
                  <p>{swatch.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2>Type scale</h2>
        <div className="eg-type-scale">
          <p
            className="eg-style-guide__display-sample"
            style={{ fontSize: 'var(--eg-text-display)', fontFamily: 'var(--eg-font-heading)' }}
          >
            Grace
          </p>
          <p className="eg-style-guide__note">
            <code>--eg-text-display</code> (Tailwind: <code>text-eg-display</code>) — fluid,
            clamp(4rem, 6rem + 8vw, 13rem). For oversized/ghosted wordmark treatments only, like
            the homepage hero — never for ordinary headings.
          </p>
          <p style={{ fontSize: 'var(--eg-text-4xl)', fontFamily: 'var(--eg-font-heading)' }}>
            4xl heading
          </p>
          <p style={{ fontSize: 'var(--eg-text-3xl)', fontFamily: 'var(--eg-font-heading)' }}>
            One faith. Every voice.
          </p>
          <p style={{ fontSize: 'var(--eg-text-xl)', fontFamily: 'var(--eg-font-heading)' }}>
            Section heading
          </p>
          <p style={{ fontSize: 'var(--eg-text-base)' }}>
            Body copy sets in Karla at 16px with 1.6 line height.
          </p>
        </div>
      </section>

      <section>
        <h2>Motion</h2>
        <p className="eg-style-guide__note">
          Durations and easings live as tokens (<code>--eg-motion-*</code>,{' '}
          <code>--eg-ease-*</code>) and are used two ways: plain CSS transitions/
          <code>@keyframes</code> inside component stylesheets, or — for the handful of
          ambient/decorative animations below — named Tailwind utilities aliased in{' '}
          <code>global.css</code> (<code>animate-eg-eq-bar</code>,{' '}
          <code>animate-eg-sunrise-ray-spin</code>, <code>animate-eg-hero-reveal</code>,{' '}
          <code>ease-eg-standard</code>). Arbitrary{' '}
          <code>animate-[…]</code>/<code>duration-[…]</code> bracket values are avoided — they
          don't reliably generate in this project's Vite/Tailwind combination — so any new motion
          gets a named token first.
        </p>
        <div className="eg-style-guide__demo-row">
          <div className="eg-style-guide__motion-chip">
            <span className="eg-style-guide__motion-dot" style={{ transitionDuration: 'var(--eg-motion-fast)' }} />
            <p>--eg-motion-fast — 150ms</p>
          </div>
          <div className="eg-style-guide__motion-chip">
            <span className="eg-style-guide__motion-dot" style={{ transitionDuration: 'var(--eg-motion-base)' }} />
            <p>--eg-motion-base — 300ms</p>
          </div>
          <div className="eg-style-guide__motion-chip">
            <span className="eg-style-guide__motion-dot" style={{ transitionDuration: 'var(--eg-motion-slow)' }} />
            <p>--eg-motion-slow — 600ms</p>
          </div>
          <div className="eg-style-guide__motion-chip">
            <span className="eg-style-guide__motion-dot" style={{ transitionDuration: 'var(--eg-motion-ambient)' }} />
            <p>--eg-motion-ambient — 4000ms (glow pulses, ray drift)</p>
          </div>
        </div>
        <p className="eg-style-guide__note">
          All decorative motion (equalizer bars, hero light rays, glow pulse, hero entrance)
          respects <code>prefers-reduced-motion</code> — via the Tailwind{' '}
          <code>motion-reduce:</code> variant where applied, or a matching media query in plain
          CSS otherwise.
        </p>
      </section>

      <section>
        <h2>Buttons</h2>
        <div className="eg-style-guide__demo-row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="streaming">Streaming</Button>
          <Button variant="merch">Merch</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section>
        <h2>Genre badge</h2>
        <div className="eg-style-guide__demo-row">
          {genres.map((genre) => (
            <GenreBadge key={genre} genre={genre} />
          ))}
        </div>
        <p className="eg-style-guide__note">Interactive (filter chip) variant:</p>
        <div className="eg-style-guide__demo-row">
          {genres.map((genre) => (
            <GenreBadge
              key={genre}
              genre={genre}
              interactive
              active={activeGenres.includes(genre)}
              onClick={() => toggleGenre(genre)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>Artist card</h2>
        <p className="eg-style-guide__note">Default (grid tile):</p>
        <div className="eg-style-guide__card-grid">
          {sampleArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
          <ArtistCard artist={sampleArtists[0]} loading />
        </div>
        <p className="eg-style-guide__note">Compact (list row):</p>
        <div className="eg-style-guide__compact-list">
          {sampleArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} variant="compact" />
          ))}
        </div>
      </section>

      <section>
        <h2>Tour date list</h2>
        <p className="eg-style-guide__note">Full — upcoming, sold out, and past states:</p>
        <TourDateList dates={sampleTourDates} />
        <p className="eg-style-guide__note">Compact (artist page embed, first 3):</p>
        <TourDateList dates={sampleTourDates} variant="compact" />
      </section>

      <section>
        <h2>Streaming / merch buttons</h2>
        {sampleArtists.map((artist) => (
          <div key={artist.id} className="eg-style-guide__row">
            <p className="eg-style-guide__note">{artist.name}:</p>
            <StreamingMerchButtons artist={artist} />
          </div>
        ))}
      </section>

      <section>
        <h2>Media player</h2>
        <p className="eg-style-guide__note">
          Each artist carries a short original demo track (synthesized in-house — no samples, no
          licensing questions) so the player below is wired to real audio rather than faking a
          working state. The equalizer only animates once playback actually starts. The idle/error
          states still render honestly too — pass an empty <code>audioSrc</code> to see them.
        </p>
        <p className="eg-style-guide__note">Full (artist page):</p>
        <MediaPlayer
          trackTitle="Featured track"
          artistName={sampleArtists[0].name}
          audioSrc={sampleArtists[0].audioSrc}
        />

        <p className="eg-style-guide__note" style={{ marginTop: 'var(--eg-space-4)' }}>
          Hero — the label-level &ldquo;glowing focal object&rdquo; used on the homepage. Defaults
          to Warm Gold; pass a <code>genre</code> to tint it with that division&rsquo;s accent for
          an artist-specific placement instead.
        </p>
        <div className="eg-style-guide__hero-player-grid">
          <MediaPlayer
            variant="hero"
            trackTitle="Featured track"
            artistName={sampleArtists[0].name}
            audioSrc={sampleArtists[0].audioSrc}
          />
          <MediaPlayer
            variant="hero"
            trackTitle="Featured track"
            artistName={sampleArtists[0].name}
            audioSrc={sampleArtists[0].audioSrc}
            genre="worship"
          />
          <MediaPlayer
            variant="hero"
            trackTitle="Featured track"
            artistName={sampleArtists[2].name}
            audioSrc={sampleArtists[2].audioSrc}
            genre="rock"
          />
          <MediaPlayer
            variant="hero"
            trackTitle="Featured track"
            artistName={sampleArtists[4].name}
            audioSrc={sampleArtists[4].audioSrc}
            genre="country"
          />
        </div>
      </section>
    </div>
  );
}
