// uno.config.ts
import {
    defineConfig,
    presetIcons,
    presetUno,
    presetAttributify
  } from "unocss";

import unifyUI from "@flexilla/uno-preset"
  
  export default defineConfig({
    content: {
      pipeline: {

      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      unifyUI({ prefix: "fx" }),
      presetIcons({
        collections: {
          carbon: () =>
            import("@iconify-json/carbon/icons.json").then((i) => i.default),
        },
      }),
    ],
  });