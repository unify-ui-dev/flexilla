import type { SourceData } from "@/types/index";

export const accordionCode: SourceData = {
    "accordionDefault": [
        {
            id: "u1",
            title: "UnoCSS",
            items: [
                {
                    id: "tab1",
                    icon: "html",
                    title: "index.html",
                    lang: "html",
                    code: `
<div data-accordion-1 data-default-value="accordion-1" data-accordion-type="single" class="space-y-2 bg-zinc2/40 dark-bg-zinc9/60 rd-md">
    <div data-accordion-item data-accordion-value="accordion-1"
        class="rd-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px4 wfull flex justify-between items-center py2 text-zinc8 dark-text-zinc2 font-medium text-lg ease-linear hover-bg-zinc2/50 dark-hover-bg-zinc8/40 rd-md focus:outline-blue6 aria-expanded-text-blue6">
            Is it accessible?
        </button>
        <div aria-hidden="true" data-accordion-content
        class="text-zinc7 dark-text-zinc3 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p4">
                Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2"
        class="rd-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px4 wfull flex justify-between items-center py2 text-zinc8 dark-text-zinc2 font-medium text-lg ease-linear hover-bg-zinc2/50 dark-hover-bg-zinc8/40 rd-md focus:outline-blue6 aria-expanded-text-blue6">
            Is it unstyled?
        </button>
        <div aria-hidden="true" data-accordion-content
            class="text-zinc7 dark-text-zinc3 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p4">
            Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3"
        class="rd-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px4 wfull flex justify-between items-center py2 text-zinc8 dark-text-zinc2 font-medium text-lg ease-linear hover-bg-zinc2/50 dark-hover-bg-zinc8/40 rd-md focus:outline-blue6 aria-expanded-text-blue6">
            Can it be animated?
        </button>
        <div aria-hidden="true" data-accordion-content
            class="text-zinc7 dark-text-zinc3 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p4">
                Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
    </div>`,
                },
                {
                    id: "tab2",
                    icon: "unocss",
                    title: "uno.config.js",
                    lang: "js",
                    code: `
import { defineConfig, presetMini, presetUno} from "unocss";

import unifyUI from "@flexilla/uno-preset"

export default defineConfig({
  presets: [
    presetUno(),
    presetMini({ dark: "class" }),
    unifyUI({}),
  ],
});`,
                },
            ],
        },
        {
            id: "o1",
            title: "TailwindCSS",
            items: [
                {
                    id: "tab1",
                    icon: "html",
                    title: "index.html",
                    lang: "html",
                    code: `
<div data-accordion-1 data-default-value="accordion-1" data-accordion-type="single" class="space-y-2 bg-zinc-200/40 dark:bg-zinc-900/60">
    <div data-accordion-item data-accordion-value="accordion-1"
        class="rounded-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 wfull flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded:text-blue-600">
            Is it accessible?
        </button>
        <div aria-hidden="true" data-accordion-content
            class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p-4">
            Yes. It adheres to the WAI-ARIA design pattern.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-2"
        class="rounded-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 wfull flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded:text-blue-600">
            Is it unstyled?
        </button>
        <div aria-hidden="true" data-accordion-content
            class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p-4">
            Yes. It's unstyled by default, giving you freedom over the look and feel.
            </p>
        </div>
    </div>
    <div data-accordion-item data-accordion-value="accordion-3"
        class="rounded-md">
        <button data-accordion-trigger aria-label="toggle button"
            class="px-4 wfull flex justify-between items-center py-2 text-zinc-800 dark:text-zinc-200 font-medium text-lg ease-linear hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40 rounded-md focus:outline-blue-600 aria-expanded:text-blue-600">
            Can it be animated?
        </button>
        <div aria-hidden="true" data-accordion-content
            class="text-zinc-700 dark:text-zinc-300 duration-200 ease-linear max-h-0 overflow-hidden">
            <p class="p-4">
            Yes! You can use the transition prop to configure the animation.
            </p>
        </div>
    </div>
</div>`,
                },
                {
                    id: "tab2",
                    icon: "tailwind",
                    title: "tailwind.config.js",
                    lang: "js",
                    code: `
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require("@flexilla/tailwind-plugin")
  ],
}`,
                },
            ],
        },
    ],
}