import type { Artist } from '../types/Artist';
import type { TourDate } from '../types/TourDate';
import lanternHymnCover from '../assets/covers/lantern-hymn-cover.jpg';
import stillWaterSoundCover from '../assets/covers/still-water-sound-cover.jpg';
import ironcladRevivalCover from '../assets/covers/ironclad-revival-cover.jpg';
import wildfireRemnantCover from '../assets/covers/wildfire-remnant-cover.jpg';
import theDustyRoadCover from '../assets/covers/the-dusty-road-cover.jpg';
import redbirdHollowCover from '../assets/covers/redbird-hollow-cover.jpg';
import lanternHymnTrack from '../assets/audio/lantern-hymn.mp3';
import stillWaterSoundTrack from '../assets/audio/still-water-sound.mp3';
import ironcladRevivalTrack from '../assets/audio/ironclad-revival.mp3';
import wildfireRemnantTrack from '../assets/audio/wildfire-remnant.mp3';
import theDustyRoadTrack from '../assets/audio/the-dusty-road.mp3';
import redbirdHollowTrack from '../assets/audio/redbird-hollow.mp3';

export const sampleArtists: Artist[] = [
  {
    id: 'lantern-hymn',
    name: 'Lantern Hymn',
    genre: 'worship',
    tagline: 'We worship. We listen. We surrender.',
    bio: 'Lantern Hymn writes worship for the room, not the stage — songs built to be sung by a congregation that\u2019s still learning the words. Their sets favor space and silence as much as sound, letting a single acoustic line carry as much weight as a full band behind it.',
    photoUrl: lanternHymnCover,
    audioSrc: lanternHymnTrack,
    streaming: { spotify: '#', appleMusic: '#' },
    merchUrl: '#',
  },
  {
    id: 'still-water-sound',
    name: 'Still Water Sound',
    genre: 'worship',
    tagline: 'We wait. We breathe. We are found.',
    bio: 'Still Water Sound leans into the quiet end of worship — ambient pads, minimal percussion, and lyrics that read more like prayer than performance. Built for the moments in a service when nobody is trying to be impressive.',
    photoUrl: stillWaterSoundCover,
    audioSrc: stillWaterSoundTrack,
    streaming: { spotify: '#', appleMusic: '#', youtube: '#' },
  },
  {
    id: 'ironclad-revival',
    name: 'Ironclad Revival',
    genre: 'rock',
    tagline: 'We rise. We play. We proclaim.',
    bio: 'Ironclad Revival plays loud on purpose. Formed out of a youth-group garage band that never stopped touring, they bring arena-sized riffs to church basements and festival main stages alike, built for a crowd that wants to sing along at full volume.',
    photoUrl: ironcladRevivalCover,
    audioSrc: ironcladRevivalTrack,
    streaming: { spotify: '#', youtube: '#' },
  },
  {
    id: 'wildfire-remnant',
    name: 'Wildfire Remnant',
    genre: 'rock',
    tagline: 'We burn. We build. We remain.',
    bio: 'Wildfire Remnant writes the kind of rock that\u2019s built for a mosh pit that turns into an altar call halfway through. Heavier and darker than most of the label\u2019s roster, they\u2019re proof Evergrace isn\u2019t chasing one sound.',
    photoUrl: wildfireRemnantCover,
    audioSrc: wildfireRemnantTrack,
    streaming: { spotify: '#' },
    merchUrl: '#',
  },
  {
    id: 'the-dusty-road',
    name: 'The Dusty Road',
    genre: 'country',
    tagline: 'We tell stories. We honor roots. We give thanks.',
    bio: 'The Dusty Road writes the kind of country gospel that sounds like it\u2019s always existed — front-porch harmonies, steel guitar, and lyrics about harvests, hard years, and grace that shows up anyway. Every song is a story first, a sermon second.',
    photoUrl: theDustyRoadCover,
    audioSrc: theDustyRoadTrack,
    streaming: { spotify: '#', appleMusic: '#', youtube: '#' },
    merchUrl: '#',
  },
  {
    id: 'redbird-hollow',
    name: 'Redbird Hollow',
    genre: 'country',
    tagline: 'We remember. We carry on. We come home.',
    bio: 'Redbird Hollow is a husband-and-wife duo writing porch-light hymns about small towns, long marriages, and the kind of faith that gets tested by ordinary years rather than dramatic ones.',
    photoUrl: redbirdHollowCover,
    audioSrc: redbirdHollowTrack,
    streaming: { spotify: '#', appleMusic: '#' },
  },
];

export const sampleTourDates: TourDate[] = [
  {
    id: 'td-1',
    artistId: 'lantern-hymn',
    date: 'Sep 12',
    city: 'Nashville, TN',
    venue: 'The Ryman',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-2',
    artistId: 'lantern-hymn',
    date: 'Sep 20',
    city: 'Franklin, TN',
    venue: 'Factory Stage',
    status: 'sold-out',
  },
  {
    id: 'td-3',
    artistId: 'lantern-hymn',
    date: 'Aug 02',
    city: 'Knoxville, TN',
    venue: 'The Mill',
    status: 'past',
  },
  {
    id: 'td-4',
    artistId: 'ironclad-revival',
    date: 'Sep 18',
    city: 'Tulsa, OK',
    venue: 'Cain\u2019s Ballroom',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-5',
    artistId: 'ironclad-revival',
    date: 'Oct 03',
    city: 'Dallas, TX',
    venue: 'The Bomb Factory',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-6',
    artistId: 'the-dusty-road',
    date: 'Sep 27',
    city: 'Franklin, TN',
    venue: 'The Barn at Berry Farms',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-7',
    artistId: 'the-dusty-road',
    date: 'Jul 14',
    city: 'Asheville, NC',
    venue: 'The Grey Eagle',
    status: 'past',
  },
  {
    id: 'td-8',
    artistId: 'still-water-sound',
    date: 'Sep 25',
    city: 'Waco, TX',
    venue: 'Baylor Chapel Sessions',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-9',
    artistId: 'wildfire-remnant',
    date: 'Oct 10',
    city: 'Springfield, MO',
    venue: 'The Complex',
    ticketUrl: '#',
    status: 'upcoming',
  },
  {
    id: 'td-10',
    artistId: 'wildfire-remnant',
    date: 'Aug 15',
    city: 'Joplin, MO',
    venue: 'Downtown Music Hall',
    status: 'past',
  },
  {
    id: 'td-11',
    artistId: 'redbird-hollow',
    date: 'Sep 30',
    city: 'Branson, MO',
    venue: 'Little Opry Theatre',
    ticketUrl: '#',
    status: 'upcoming',
  },
];
