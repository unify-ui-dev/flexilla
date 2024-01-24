import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { CustomRange } from "@flexilla/flexilla"

const constumRanges = Array.from(document.querySelectorAll("[data-custom-range-wrapper]")) as HTMLElement[]

for (const customRange of constumRanges) {
    new CustomRange({ containerElement: customRange })
}