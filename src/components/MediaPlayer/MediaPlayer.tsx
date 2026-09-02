import { useEffect, useRef, useState } from 'react';
import type { Genre } from '../../types/Genre';
import './MediaPlayer.css';

type PlayerStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'error';

interface MediaPlayerProps {
  trackTitle: string;
  artistName: string;
  audioSrc: string;
  variant?: 'full' | 'compact' | 'hero';
  /** Tints the hero variant's glow and equalizer with a genre accent instead of the default gold. Ignored outside the hero variant. */
  genre?: Genre;
}

// Rest-height pattern for the hero equalizer, in fractions of full bar
// height. Decorative only — a generic "now playing" motif like the bar
// visualizers most players show, not a literal reading of the audio signal
// (that would need real-time analysis this component doesn't do). Kept
// deterministic so server- and client-rendered markup match.
const EQUALIZER_BARS = [0.35, 0.6, 0.4, 0.85, 0.5, 0.7, 0.3, 0.9, 0.45, 0.65, 0.35, 0.55];

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export function MediaPlayer({
  trackTitle,
  artistName,
  audioSrc,
  variant = 'full',
  genre,
}: MediaPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [status, setStatus] = useState<PlayerStatus>('idle');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoadStart = () => setStatus('loading');
    const onCanPlay = () => setStatus((s) => (s === 'loading' ? 'paused' : s));
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onError = () => setStatus('error');
    const onEnded = () => setStatus('paused');

    audio.addEventListener('loadstart', onLoadStart);
    audio.addEventListener('canplay', onCanPlay);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.addEventListener('loadedmetadata', onLoadedMetadata);
    audio.addEventListener('error', onError);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.removeEventListener('loadstart', onLoadStart);
      audio.removeEventListener('canplay', onCanPlay);
      audio.removeEventListener('timeupdate', onTimeUpdate);
      audio.removeEventListener('loadedmetadata', onLoadedMetadata);
      audio.removeEventListener('error', onError);
      audio.removeEventListener('ended', onEnded);
    };
  }, [audioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || status === 'error') return;
    if (status === 'playing') {
      audio.pause();
      setStatus('paused');
    } else {
      audio.play();
      setStatus('playing');
    }
  };

  const handleScrub = (event: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = Number(event.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const isHero = variant === 'hero';
  const isPlaying = status === 'playing';

  return (
    <div
      className={`eg-media-player eg-media-player--${variant}`}
      data-genre={isHero ? genre : undefined}
    >
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="eg-media-player__control">
        {isHero && <span className="eg-media-player__glow" aria-hidden="true" />}
        <button
          type="button"
          className="eg-media-player__toggle"
          onClick={togglePlay}
          disabled={status === 'error'}
          aria-label={status === 'playing' ? 'Pause' : 'Play'}
        >
          {status === 'loading' ? '…' : status === 'playing' ? '❚❚' : '▶'}
        </button>
      </div>

      <div className="eg-media-player__info">
        {isHero && (
          <div className="eg-media-player__equalizer" aria-hidden="true">
            {EQUALIZER_BARS.map((height, i) => (
              <span
                key={i}
                className={`eg-media-player__eq-bar${
                  isPlaying ? ' animate-eg-eq-bar motion-reduce:animate-none' : ''
                }`}
                style={{
                  '--eg-eq-rest': height,
                  animationDelay: `${(i % 4) * 0.12}s`,
                  animationDuration: `${0.9 + (i % 3) * 0.2}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        <p className="eg-media-player__title">{trackTitle}</p>
        <p className="eg-media-player__artist">{artistName}</p>

        {status === 'error' ? (
          <p className="eg-media-player__error">This track couldn't be loaded.</p>
        ) : (
          <div className="eg-media-player__scrub-row">
            <span className="eg-media-player__time">{formatTime(currentTime)}</span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              value={currentTime}
              onChange={handleScrub}
              className="eg-media-player__scrubber"
              aria-label="Seek"
            />
            <span className="eg-media-player__time">{formatTime(duration)}</span>
          </div>
        )}
      </div>
    </div>
  );
}
