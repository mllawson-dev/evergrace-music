import type { Artist } from '../../types/Artist';
import type { Genre } from '../../types/Genre';
import './AlbumCover.css';

interface AlbumCoverProps {
  artist: Artist;
}

// Deterministic hash so a given artist always renders the same cover across
// visits/builds, without needing to store extra "seed" fields in the data —
// the artist's own id is the seed.
function hashSeed(id: string): number {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
  }
  return hash;
}

const ACCENT_VAR: Record<Genre, string> = {
  worship: 'var(--eg-worship-500)',
  rock: 'var(--eg-rock-500)',
  country: 'var(--eg-country-500)',
};

const GRADIENT_DIRECTIONS = [
  { x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
  { x1: '100%', y1: '0%', x2: '0%', y2: '100%' },
  { x1: '0%', y1: '100%', x2: '100%', y2: '0%' },
  { x1: '50%', y1: '0%', x2: '50%', y2: '100%' },
];

export function AlbumCover({ artist }: AlbumCoverProps) {
  const seed = hashSeed(artist.id);
  const accent = ACCENT_VAR[artist.genre];
  const gradientId = `eg-cover-grad-${artist.id}`;
  const dir = GRADIENT_DIRECTIONS[seed % GRADIENT_DIRECTIONS.length];

  const waveCount = 3 + (seed % 3); // 3-5 wave lines, echoing the logo's wave motif
  const ringCx = 30 + (seed % 40);
  const ringCy = 20 + ((seed >> 4) % 30);
  const ringR = 28 + ((seed >> 8) % 24);

  const waves = Array.from({ length: waveCount }, (_, i) => {
    const s = seed + i * 97;
    const y = 58 + i * 13 + (s % 10) - 5;
    const amplitude = 6 + (s % 10);
    const opacity = 0.55 - i * 0.09;
    return { y, amplitude, opacity, key: i };
  });

  return (
    <div className="eg-album-cover eg-grain-surface">
      <svg
        viewBox="0 0 200 200"
        role="img"
        aria-label={`${artist.name} cover art`}
        className="eg-album-cover__svg"
      >
        <defs>
          <linearGradient id={gradientId} x1={dir.x1} y1={dir.y1} x2={dir.x2} y2={dir.y2}>
            <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--eg-charcoal-900)" stopOpacity="1" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#${gradientId})`} />
        <circle
          cx={ringCx}
          cy={ringCy}
          r={ringR}
          fill="none"
          stroke={accent}
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />
        {waves.map((w) => (
          <path
            key={w.key}
            d={`M -10 ${w.y} Q 50 ${w.y - w.amplitude} 100 ${w.y} T 210 ${w.y}`}
            fill="none"
            stroke={accent}
            strokeOpacity={w.opacity}
            strokeWidth="2"
          />
        ))}
      </svg>
    </div>
  );
}
