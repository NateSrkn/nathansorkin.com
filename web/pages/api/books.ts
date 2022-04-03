import type { NextApiRequest, NextApiResponse } from "next";
import { getBooks } from "../../shared/lib";
import { BookShelfPagingObject } from "../../shared/types";

const handleBooks = async (
  req: NextApiRequest,
  res: NextApiResponse<{
    favorites: BookShelfPagingObject;
    reading: BookShelfPagingObject;
  }>
) => {
  const books = await getBooks();
  res.status(200).json({ favorites: books[0], reading: books[1] });
};

export default handleBooks;
