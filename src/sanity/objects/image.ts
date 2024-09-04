import { SchemaTypeDefinition } from "sanity";

const customImage: SchemaTypeDefinition = {
  name: "custom_image",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Caption",
    },
    {
      name: "alt",
      type: "string",
      title: "Alt",
      description: "Important for SEO and accessiblity.",
      validation: (rule) =>
        rule.error("You have to fill out the alternative text.").required(),
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
export default customImage;
