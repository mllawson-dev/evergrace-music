import type { Genre } from './Genre';

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
}

export interface Track {
  title: string;
  duration: string;
}

export interface Album {
  title: string;
  tracks: Track[];
}

export interface Artist {
  id: string;
  name: string;
  genre: Genre;
  tagline: string;
  bio: string;
  photoUrl: string;
  streaming: StreamingLinks;
  merchUrl?: string;
  album: Album;
}
