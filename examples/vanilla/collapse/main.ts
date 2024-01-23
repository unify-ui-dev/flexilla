import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Collapse } from "fx-lib"

new Collapse({
    collapseElement: document.querySelector("[data-collapsible-1]") as HTMLElement
})
new Collapse({
    collapseElement: document.querySelector("[data-collapsible-2]") as HTMLElement,
    options: {
        orientation: "horizontal"
    }
})
new Collapse({
    collapseElement: document.querySelector("[data-collapsible-3]") as HTMLElement,
})

new Collapse({
    collapseElement: document.querySelector("[data-collapsible-4]") as HTMLElement,
    options: {
        orientation: "horizontal"
    }
})
new Collapse({
    collapseElement: document.querySelector("[data-collapsible-5]") as HTMLElement,
})