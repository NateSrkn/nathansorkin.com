import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
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
            .title("About"),
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["about"].includes(listItem.getId() || ""),
      ),
    ]);
