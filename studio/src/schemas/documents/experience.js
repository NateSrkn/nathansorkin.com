export default {
  name: "experience",
  type: "document",
  title: "Job Experience",
  fields: [
    {
      name: "organization",
      type: "string",
      title: "Company Name",
    },
    {
      name: "job_title",
      type: "string",
      title: "Job Title",
    },
    {
      name: "href",
      type: "url",
      title: "Link to Company Website",
    },
    {
      name: "color",
      title: "Brand Color",
      type: "color",
    },
    {
      name: "order",
      title: "order",
      type: "number",
    },
  ],
};
