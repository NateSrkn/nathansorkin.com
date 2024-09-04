import { BookShelfEnum, getBooksByShelf } from "@/shared/lib";
import { Link } from "@/components/Link";

export const CurrentlyReading = async () => {
  const books = await getBooksByShelf(BookShelfEnum.READING);
  const [book] = books.items;
  return (
    <Link
      href={book.volumeInfo.infoLink}
      className={
        "flex flex-col bg-slate-800  hover:bg-slate-950 transition-colors rounded-xl shadow-lg relative max-w-60 mt-10 mx-auto"
      }
    >
      <img
        src={book.volumeInfo.imageLinks.thumbnail}
        alt={book.volumeInfo.title}
        className={
          "rounded-2xl max-w-[50%] mx-auto bottom-5 relative  shadow-sm -rotate-6"
        }
      />

      <div className={"py-2.5 px-3 gap-1.5 flex flex-col"}>
        <div className={"text-blue-200"}>{book.volumeInfo.title}</div>
        <div className={"text-xs"}>{book.volumeInfo.authors.join(", ")}</div>
      </div>
    </Link>
  );
};
