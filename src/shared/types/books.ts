export type BookShelfPagingObject = {
  kind: string;
  totalItems: number;
  items: Book[];
};

type Book = {
  id: string;
  kind: string;
  etag: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: Array<{ type: string; identifier: string }>;
    readingModes: { text: boolean; image: boolean };
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    previewLink: string;
    subtitle: string;
    infoLink: string;
  };
};
