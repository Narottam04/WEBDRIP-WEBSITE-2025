// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://webdrip.in",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    robotsTxt({
      sitemap: [
        "https://webdrip.in/sitemap-index.xml",
        "http://webdrip.in/sitemap-0.xml",
      ],
    }),
    icon(),
    sitemap(),
    playformCompress(),
  ],
});
