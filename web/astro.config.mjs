import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import compress from "astro-compress";
import { VitePWA } from "vite-plugin-pwa";

// Helper imports
import { manifest, seoConfig } from "./utilities/seo-config";

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
  vite: {
    plugins: [
      VitePWA({
        registerType: "autoUpdate",
        manifest,
        workbox: {
          globDirectory: "dist",
          globPatterns: [
            "**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}",
          ],
          // Don't fallback on document based (e.g. `/some-page`) requests
          // This removes an errant console.log message from showing up.
          navigateFallback: null,
        },
      }),
    ],
  },
  compressHTML: true,
  build: {
    format: "file",
  },
  prefetch: true,
});
