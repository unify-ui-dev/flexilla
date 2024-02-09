import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Accordion } from "@flexilla/flexilla"

new Accordion({
    accordionElement: document.querySelector("[data-accordion-1]") as HTMLElement
})

new Accordion({
    accordionElement: document.querySelector("[data-accordion-nested]") as HTMLElement
})
new Accordion({
    accordionElement: document.querySelector("[data-accordion-nested-child]") as HTMLElement
})

new Accordion({
    accordionElement: document.querySelector("[data-accordion-2]") as HTMLElement,
    options: {
        defaultValue: "accordion-1",
    }
})

new Accordion({
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