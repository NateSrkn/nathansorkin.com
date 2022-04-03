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
