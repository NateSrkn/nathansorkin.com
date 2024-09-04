import { defineQuery } from "next-sanity";

export const EXPERIENCE_QUERY = defineQuery(
  `*[_type == "experience"] | order(order)`,
);

export const CURRENT_ROLE_QUERY = defineQuery(
  `*[_type == "experience"] | order(order)[0]`,
);

export const TRUNCATED_PROJECTS_QUERY = defineQuery(
  `*[_type == "project"] | order(order) [0...6]`,
);

export const ABOUT_QUERY = defineQuery(`*[_type == "about"][0]`);
