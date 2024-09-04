import { BookShelfEnum, getBooksByShelf } from "@/shared/lib";
import Link from "next/link";

export const FavoriteBooks = async () => {
  const favorites = await getBooksByShelf(BookShelfEnum.FAVORITES);
  return (
    <ul>
      {favorites.items.map((book) => {
        return (
          <li key={book.id}>
            <Link
              href={book.volumeInfo.infoLink}
              className="flex items-center gap-4 p-1 hover:bg-slate-600 rounded"
            >
              <div>
                <div>{book.volumeInfo.title}</div>
                <div className="text-xs">
                  {book.volumeInfo.authors.join(", ")}
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
