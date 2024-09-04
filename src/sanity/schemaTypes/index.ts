import { type SchemaTypeDefinition } from "sanity";
import about from "@/sanity/documents/about";
import project from "@/sanity/documents/project";
import customImage from "@/sanity/objects/image";
import content from "@/sanity/objects/content";
import linksObject from "@/sanity/objects/links";
import experience from "@/sanity/documents/experience";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, project, customImage, content, linksObject, experience],
};
