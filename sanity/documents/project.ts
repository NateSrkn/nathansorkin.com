import { DocumentDefinition } from "sanity";

const project: DocumentDefinition = {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Project Title",
    },
    {
      name: "type",
      type: "string",
      title: "Project Type",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "color",
      title: "Project Color",
      type: "color",
    },
    {
      name: "content",
      title: "Content",
      type: "content",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ name: "links", type: "links" }],
    },
    {
      name: "order",
      title: "order",
      type: "number",
    },
  ],
  orderings: [
    {
      title: "order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
export default project;
