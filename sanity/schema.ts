// Documents
import about from "./documents/about";
import project from "./documents/project";

// Objects
import content from "./objects/content";
import linksObject from "./objects/links";
import experience from "./documents/experience";
import customImage from "./objects/image";
import { type SchemaTypeDefinition } from "sanity";
const schema: SchemaTypeDefinition[] = [
  about,
  project,
  customImage,
  content,
  linksObject,
  experience,
];
export default schema;
