// uno.config.ts
import {
    defineConfig,
    presetIcons,
    presetUno,
    presetAttributify
  } from "unocss";
  
  export default defineConfig({
    content: {
      pipeline: {
        include: [
          /\.(js|ts)($|\?)/,
        ],
        exclude: ["node_modules"]
      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        collections: {
          carbon: () =>
            import("@iconify-json/carbon/icons.json").then((i) => i.default),
        },
      }),
    ],
  });