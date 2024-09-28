import {
    defineConfig,
    presetIcons,
    presetUno,
    presetAttributify,
    type Preset
  } from "unocss";

import unoPreset from "@flexilla/uno-preset"
  
  export default defineConfig({
    content: {
      pipeline: {

      },
    },
    presets: [
      presetUno(),
      presetAttributify(),
      unoPreset() as Preset,
      presetIcons({
        collections: {
          carbon: () =>
            import("@iconify-json/carbon/icons.json").then((i) => i.default),
        },
      }),
    ],
  });