import { type DocumentDefinition } from "sanity";

const about: DocumentDefinition = {
  name: "about",
  type: "document",
  title: "About",
  fields: [
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "content",
    },
  ],
};
export default about;
