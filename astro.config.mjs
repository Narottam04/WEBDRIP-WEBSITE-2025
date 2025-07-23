// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), sitemap(), playformCompress()],
});
