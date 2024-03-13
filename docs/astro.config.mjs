import { defineConfig } from 'astro/config';
import UnoCSS from "unocss/astro";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import { transformerNotationDiff } from 'shikiji-transformers';
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/docs': {
      status: 302,
      destination: '/docs/getting-started'
    }
  },
  site: 'https://flexilla-docs.vercel.app',
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      transformers: [transformerNotationDiff()]
    }
  },
  integrations: [UnoCSS({
    injectReset: true
  }), preact(), mdx(), sitemap(), 
  partytown(
    {
      config: {
			  forward: ["dataLayer.push"],
			},
    }
  )
],
  output: "server",
  adapter: vercel()
});