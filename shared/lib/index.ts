import builder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../../client";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BookShelfPagingObject, Weather } from "../types";
export const urlFor = (source: SanityImageSource) => {
  return builder(client).image(source);
};

export const getWeather = async () => {
  const response: AxiosResponse<Weather> = await axios(
    `http://api.openweathermap.org/data/2.5/weather?q=Brooklyn&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`
  );
  return response.data;
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
