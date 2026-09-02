import type { Genre } from './Genre';

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
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
}
