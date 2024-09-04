"use client";

// sanity.config.js
import { codeInput } from "@sanity/code-input";
import { colorInput } from "@sanity/color-input";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { structure } from "@/sanity/structure";
import { schema } from "@/sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  title: "Nathan's Portfolio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), colorInput(), codeInput()],
  schema: schema,
});
