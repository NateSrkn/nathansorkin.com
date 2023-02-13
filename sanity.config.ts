// sanity.config.js
import { codeInput } from "@sanity/code-input";
import { colorInput } from "@sanity/color-input";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";

export default defineConfig({
  title: "Nathan's Portfolio",
  projectId: "mfj4biie",
  dataset: "production",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("About")
              .child(
                S.editor()
                  .id("about")
                  .schemaType("about")
                  .documentId("about")
                  .title("About")
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !["about"].includes(listItem.getId() || "")
            ),
          ]),
    }),

    colorInput(),
    codeInput(),
  ],
  schema: {
    types: schemas,
  },
});
