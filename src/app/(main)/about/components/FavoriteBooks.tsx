import { BookShelfEnum, getBooksByShelf } from "@/shared/lib";
import Link from "next/link";

export const FavoriteBooks = async () => {
  const favorites = await getBooksByShelf(BookShelfEnum.FAVORITES);
  return (
    <ul className={"flex flex-col gap-1"}>
      {favorites.items.map((book) => {
        return (
          <li key={book.id}>
            <Link
              href={book.volumeInfo.infoLink}
              className="flex flex-col p-1 hover:bg-slate-600 rounded"
            >
              <div>{book.volumeInfo.title}</div>
              <div className="text-xs">
                {book.volumeInfo.authors.join(", ")}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
