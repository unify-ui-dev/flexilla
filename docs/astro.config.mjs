import { defineConfig } from 'astro/config';
import UnoCSS from "unocss/astro";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), preact(), mdx()],
  output: "server",
  adapter: vercel()
});