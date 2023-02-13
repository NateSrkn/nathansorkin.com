import axios, { AxiosResponse } from "axios";
import { NowPlaying } from "../types";
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET;
const refresh_token = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
const auth = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
export const REDIRECT_URL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read%20user-library-read`;

const getToken = async () => {
  const response = await axios({
    baseURL: TOKEN_ENDPOINT,
    method: "post",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: `grant_type=refresh_token&refresh_token=${refresh_token}`,
  });
  return response.data;
};

export const getNowPlaying = async () => {
  const token = await getToken();
  const response: AxiosResponse<NowPlaying> = await axios({
    baseURL: NOW_PLAYING,
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  return response.data;
};

export const getTopTracks = async (limit: number) => {
  const token = await getToken();
  const response: AxiosResponse<any> = await axios({
    baseURL: TOP_TRACKS(limit),
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  return response.data;
};

export const getShows = async (limit: number) => {
  const token = await getToken();
  const response: AxiosResponse<any> = await axios({
    baseURL: SHOWS(limit),
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  return response.data;
};

const BASE_URL = "https://api.spotify.com/v1";
const TOP_TRACKS = (limit: number) =>
  `${BASE_URL}/me/top/tracks?limit=${limit}&time_range=short_term`;

const SHOWS = (limit: number) => `${BASE_URL}/me/shows?limit=${limit}`;
const NOW_PLAYING = `${BASE_URL}/me/player/currently-playing`;
