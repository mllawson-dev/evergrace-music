import type { Track } from '../../types/Artist';
import './TrackList.css';

interface TrackListProps {
  tracks: Track[];
}

export function TrackList({ tracks }: TrackListProps) {
  return (
    <ol className="eg-track-list">
      {tracks.map((track, i) => (
        <li key={track.title} className="eg-track-list__row">
          <span className="eg-track-list__number">{String(i + 1).padStart(2, '0')}</span>
          <span className="eg-track-list__title">{track.title}</span>
          <span className="eg-track-list__duration">{track.duration}</span>
        </li>
      ))}
    </ol>
  );
}
