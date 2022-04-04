import client from "picosanity";

const env = process.env.NODE_ENV;
export default client({
  projectId: "mfj4biie",
  dataset: env ? "production" : "development",
  useCdn: env === "production",
});
