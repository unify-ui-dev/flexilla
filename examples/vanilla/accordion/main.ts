import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Accordion } from "flexilla"

new Accordion({
    accordionElement: document.querySelector("[data-accordion-1]") as HTMLElement
})
const accordion2 = document.querySelector("[data-accordion-2]")
if (accordion2 instanceof HTMLElement)
    new Accordion({
        accordionElement: accordion2,
        options: {
            defaultValue: "accordion-1",
        }
    })

const accordion3 = document.querySelector("[data-accordion-3]")
if (accordion3 instanceof HTMLElement)
    new Accordion({
        accordionElement: accordion3,
        options: {
            defaultValue: "accordion-2",
            accordionType: "multiple"
        }
    })

const accordion4 = document.querySelector("[data-accordion-4]")
if (accordion4 instanceof HTMLElement)
    new Accordion({
        accordionElement: accordion4,
        options: {
            defaultValue: "accordion-2",
            preventClosingAll: true
        }
    })

const accordion5 = document.querySelector("[data-accordion-5]")
if (accordion5 instanceof HTMLElement)
    new Accordion({
        accordionElement: accordion5,
        options: {
            defaultValue: "accordion-1",
            allowTriggerOnFocus: true
        }
    })