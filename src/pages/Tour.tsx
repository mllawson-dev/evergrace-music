import { TourDateList } from '../components/TourDateList/TourDateList';
import { sampleArtists, sampleTourDates } from '../data/sampleData';
import './Tour.css';

const statusOrder = { upcoming: 0, 'sold-out': 1, past: 2 };

export function Tour() {
  const artistNames = Object.fromEntries(sampleArtists.map((a) => [a.id, a.name]));
  const sortedDates = [...sampleTourDates].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status]
  );

  return (
    <main className="eg-tour-page eg-grain-surface">
      <h1 className="eg-tour-page__heading">On tour</h1>
      <p className="eg-tour-page__note">Every Evergrace artist, one calendar.</p>
      <TourDateList dates={sortedDates} artistNames={artistNames} />
    </main>
  );
}
