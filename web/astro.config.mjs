import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: "snzv7bf5",
      dataset: "production",
      apiVersion: "2023-06-13",
      useCdn: false,
    }),
    svelte(),
    sitemap(),
    compress(),
  ],
  compressHTML: true,
  build: {
    format: "file",
  },
  prefetch: true,
});
