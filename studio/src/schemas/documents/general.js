export default {
  name: "general",
  type: "document",
  title: "General",
  fields: [
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
        {
          type: "code",
        },
      ],
    },
    {
      name: "featured",
      title: "Featured",
      type: "array",
      of: [
        {
          name: "reference",
          title: "Reference",
          type: "reference",
          to: [{ type: "project" }],
        },
      ],
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [{ name: "links", type: "links" }],
    },
  ],
};
