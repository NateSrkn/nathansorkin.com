import builder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { BookShelfPagingObject } from "../types";
import { client } from "@/sanity/lib/client";
export const urlFor = (source: SanityImageSource) => {
  return builder(client).image(source);
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

export const pullInitials = (name: string) => {
  const names = name ? name.split(" ") : [];
  if (names.length > 1) {
    return names[0].charAt(0) + names[names.length - 1].charAt(0);
  }
  return name ? name.charAt(0) : "";
};
