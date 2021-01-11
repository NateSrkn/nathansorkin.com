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
      name: "projectType",
      type: "string",
      title: "Project Type",
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
      name: "projectColor",
      title: "Project Color",
      type: "color",
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
