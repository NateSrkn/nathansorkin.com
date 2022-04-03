export interface SpotifyPagingObject<T> {
  items: T[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export type NowPlaying = {
  item: SpotifyTrack;
  progress_ms: number;
  is_playing: boolean;
  currently_playing_type: string;
  timestamp: number;
  [key: string]: any;
};

export type SpotifyTrack = {
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: "track";
  uri: string;
  duration_ms: number;
  explicit: boolean;
  href: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  [key: string]: any;
};

type SpotifyAlbum = {
  id: string;
  name: string;
  type: "album";
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  uri: string;
  href: string;
  images: SpotifyImage[];
  artists: SpotifyArtist[];
  [key: string]: any;
};

type SpotifyImage = {
  height: number;
  width: number;
  url: string;
};

type SpotifyArtist = {
  id: string;
  name: string;
  type: "artist";
  uri: string;
  href: string;
  [key: string]: any;
};
