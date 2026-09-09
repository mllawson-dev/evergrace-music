import type { Artist } from '../../types/Artist';
import { Button } from '../Button/Button';
import './StreamingMerchButtons.css';

interface StreamingMerchButtonsProps {
  artist: Artist;
  layout?: 'row' | 'stacked';
}

function openExternalLink(url: string) {
  // Open external links without granting the new tab access to window.opener
  // (prevents tabnabbing) and without leaking the current page's referrer.
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function StreamingMerchButtons({ artist, layout = 'row' }: StreamingMerchButtonsProps) {
  const { streaming, merchUrl } = artist;

  return (
    <div className={`eg-stream-merch eg-stream-merch--${layout}`}>
      {streaming.spotify && (
        <Button variant="streaming" onClick={() => openExternalLink(streaming.spotify!)}>
          Spotify
        </Button>
      )}
      {streaming.appleMusic && (
        <Button variant="streaming" onClick={() => openExternalLink(streaming.appleMusic!)}>
          Apple Music
        </Button>
      )}
      {streaming.youtube && (
        <Button variant="streaming" onClick={() => openExternalLink(streaming.youtube!)}>
          YouTube
        </Button>
      )}
      {merchUrl && (
        <Button variant="merch" onClick={() => openExternalLink(merchUrl)}>
          Shop merch
        </Button>
      )}
    </div>
  );
}
