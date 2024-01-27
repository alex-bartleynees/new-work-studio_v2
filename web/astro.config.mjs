import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";

import svelte from "@astrojs/svelte";

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
  ],
  compressHTML: true,
  build: {
    format: "file",
  },
  prefetch: true,
});
