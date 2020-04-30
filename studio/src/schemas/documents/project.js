export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "projectTitle",
      type: "string",
      title: "Project Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug",
      options: {
        source: "projectTitle",
      },
    },
    {
      name: "technologies",
      type: "array",
      title: "Technologies",
      description: "Add the languages used in making the project",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "body",
      type: "bodyPortableText",
      title: "Body",
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ name: "links", type: "links" }],
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ name: "gallery", type: "gallery" }],
    },
  ],
};
