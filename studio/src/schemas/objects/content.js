export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "custom_image",
    },
    {
      type: "code",
    },
    {
      type: "colored_text",
    },
  ],
};
