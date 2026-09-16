import type { Artist } from '../../types/Artist';
import { Button } from '../Button/Button';
import './StreamingMerchButtons.css';

interface StreamingMerchButtonsProps {
  artist: Artist;
  layout?: 'row' | 'stacked';
}

export function StreamingMerchButtons({ artist, layout = 'row' }: StreamingMerchButtonsProps) {
  const { streaming, merchUrl } = artist;
  const isPlaceholder = (url?: string) => !url || url === '#';
  const openDestination = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <div>
      <div className={`eg-stream-merch eg-stream-merch--${layout}`}>
        {streaming.spotify && (
          <Button
            variant="streaming"
            disabled={isPlaceholder(streaming.spotify)}
            title={isPlaceholder(streaming.spotify) ? 'Concept destination — intentionally inactive' : undefined}
            onClick={() => !isPlaceholder(streaming.spotify) && openDestination(streaming.spotify!)}
          >
            Spotify
          </Button>
        )}
        {streaming.appleMusic && (
          <Button
            variant="streaming"
            disabled={isPlaceholder(streaming.appleMusic)}
            title={isPlaceholder(streaming.appleMusic) ? 'Concept destination — intentionally inactive' : undefined}
            onClick={() => !isPlaceholder(streaming.appleMusic) && openDestination(streaming.appleMusic!)}
          >
            Apple Music
          </Button>
        )}
        {streaming.youtube && (
          <Button
            variant="streaming"
            disabled={isPlaceholder(streaming.youtube)}
            title={isPlaceholder(streaming.youtube) ? 'Concept destination — intentionally inactive' : undefined}
            onClick={() => !isPlaceholder(streaming.youtube) && openDestination(streaming.youtube!)}
          >
            YouTube
          </Button>
        )}
        {merchUrl && (
          <Button
            variant="merch"
            disabled={isPlaceholder(merchUrl)}
            title={isPlaceholder(merchUrl) ? 'Concept destination — intentionally inactive' : undefined}
            onClick={() => !isPlaceholder(merchUrl) && openDestination(merchUrl)}
          >
            Shop merch
          </Button>
        )}
      </div>
      <p className="eg-stream-merch__note">Concept destinations are intentionally inactive.</p>
    </div>
  );
}
