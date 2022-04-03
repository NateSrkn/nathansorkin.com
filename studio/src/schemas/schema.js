// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// Documents
import about from "./documents/about";
import general from "./documents/general";
import project from "./documents/project";

// Objects

import content from "./objects/content";
import linksObject from "./objects/links";
import experience from "./documents/experience";
import custom_image from "./objects/image";
import colored_text from "./objects/colored_text";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "portfolio",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    about,
    general,
    project,
    colored_text,
    custom_image,
    content,
    linksObject,
    experience,
  ]),
});
