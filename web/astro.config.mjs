import { defineConfig } from "astro/config";
import sanity from "astro-sanity";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "snzv7bf5",
      dataset: "production",
      apiVersion: "2023-06-13",
      useCdn: false,
    }),
    svelte(),
  ],
});
