import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Accordion } from "@fx-lib/accordion"

new Accordion({
    accordionElement: document.querySelector("[data-accordion-1]") as HTMLElement,
})
const accordion2 = new Accordion({
    accordionElement: document.querySelector("[data-accordion-2]") as HTMLElement,
    options: {
        defaultValue: "accordion-1",
    }
})

const accordion3 = new Accordion({
    accordionElement: document.querySelector("[data-accordion-3]") as HTMLElement,
    options: {
        defaultValue: "accordion-2",
        accordionType: "multiple"
    }
})

new Accordion({
    accordionElement: document.querySelector("[data-accordion-4]") as HTMLElement,
    options: {
        defaultValue: "accordion-2",
        preventClosingAll: true
    }
})

new Accordion({
    accordionElement: document.querySelector("[data-accordion-5]") as HTMLElement,
    options: {
        defaultValue: "accordion-1",
        allowTriggerOnFocus: true
    }
})