import type { Artist } from '../../types/Artist';
import { Button } from '../Button/Button';
import './StreamingMerchButtons.css';

interface StreamingMerchButtonsProps {
  artist: Artist;
  layout?: 'row' | 'stacked';
}

export function StreamingMerchButtons({ artist, layout = 'row' }: StreamingMerchButtonsProps) {
  const { streaming, merchUrl } = artist;

  return (
    <div className={`eg-stream-merch eg-stream-merch--${layout}`}>
      {streaming.spotify && (
        <Button variant="streaming" onClick={() => window.open(streaming.spotify, '_blank')}>
          Spotify
        </Button>
      )}
      {streaming.appleMusic && (
        <Button variant="streaming" onClick={() => window.open(streaming.appleMusic, '_blank')}>
          Apple Music
        </Button>
      )}
      {streaming.youtube && (
        <Button variant="streaming" onClick={() => window.open(streaming.youtube, '_blank')}>
          YouTube
        </Button>
      )}
      {merchUrl && (
        <Button variant="merch" onClick={() => window.open(merchUrl, '_blank')}>
          Shop merch
        </Button>
      )}
    </div>
  );
}
