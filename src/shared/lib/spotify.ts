import { AccessToken, SpotifyApi } from "@spotify/web-api-ts-sdk";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export const getRefreshToken = async (): Promise<AccessToken> => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data as Promise<AccessToken>;
};

const createSpotifyClient = () => {
  let token: AccessToken;
  let client: SpotifyApi;

  const getCurrentClient = async () => {
    if (!token || isTokenExpired(token)) {
      token = await getRefreshToken();
      client = SpotifyApi.withAccessToken(client_id!, token);
    }
    return client;
  };

  return {
    nowPlaying: async () => {
      const client = await getCurrentClient();
      return client.player.getCurrentlyPlayingTrack();
    },
    topTracks: async () => {
      const client = await getCurrentClient();
      return client.currentUser.topItems("tracks", "medium_term");
    },
    savedShows: async () => {
      const client = await getCurrentClient();
      return client.currentUser.shows.savedShows();
    },
  };
};
export const spotify = createSpotifyClient();

const isTokenExpired = (token: AccessToken) => {
  if (!token.expires_in) return true;
  return new Date(token.expires_in * 1000 + Date.now()) <= new Date();
};
