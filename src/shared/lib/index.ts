import builder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BookShelfPagingObject, Weather } from "../types";
import { client } from "@/sanity/lib/client";
export const urlFor = (source: SanityImageSource) => {
  return builder(client).image(source);
};

export const getWeather = async () => {
  const response: AxiosResponse<Weather> = await axios(
    `http://api.openweathermap.org/data/2.5/weather?q=Columbus&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`,
  );
  return response.data;
};

export enum BookShelfEnum {
  FAVORITES = 0,
  PURCHASED = 1,
  TO_READ = 2,
  READING = 3,
  READ = 4,
  REVIEWED = 5,
  RECENTLY_VIEWED = 6,
}

const BOOKS_URL = `https://www.googleapis.com/books/v1/users/110654047935577037763/bookshelves`;

export const getBooksByShelf = async (
  shelf: BookShelfEnum,
): Promise<BookShelfPagingObject> => {
  const url = new URL(`${BOOKS_URL}/${shelf}/volumes`);
  url.searchParams.set("key", process.env.NEXT_PUBLIC_BOOKS_KEY!);
  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(
      `${response.status} Failed to fetch books from shelf ${shelf}:  ${error}`,
    );
  }
  return response.json();
};

export const getBooks = async () => {
  const response: Array<BookShelfPagingObject> = await Promise.all([
    fetcher({
      url: `https://www.googleapis.com/books/v1/users/110654047935577037763/bookshelves/0/volumes?key=${process.env.NEXT_PUBLIC_BOOKS_KEY}`,
    }),
    fetcher({
      url: `https://www.googleapis.com/books/v1/users/110654047935577037763/bookshelves/3/volumes?key=${process.env.NEXT_PUBLIC_BOOKS_KEY}`,
    }),
  ]);
  return response;
};

export const fetcher = (args: AxiosRequestConfig) =>
  axios(args).then((r) => r.data);

export const pullInitials = (name: string) => {
  const names = name ? name.split(" ") : [];
  if (names.length > 1) {
    return names[0].charAt(0) + names[names.length - 1].charAt(0);
  }
  return name ? name.charAt(0) : "";
};
