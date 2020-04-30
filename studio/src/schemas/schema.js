// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
// Documents
import about from "./documents/about";
import general from "./documents/general";
import project from "./documents/project";

// Objects
import bodyPortableText from "./objects/bodyPortableText";
import portableText from "./objects/portableText";
import linksObject from "./objects/linksObject";
import imageObject from "./objects/imageObject";
import mainImage from "./objects/mainImage";

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
    bodyPortableText,
    portableText,
    linksObject,
    imageObject,
    mainImage,
  ]),
});
