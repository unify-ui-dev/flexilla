import { Tabs, Accordion } from "@flexilla/flexilla";


const allTabs = Array.from(document.querySelectorAll("[data-tab-fx-site]"))

for(const tabs of allTabs){
    new Tabs(tabs as HTMLElement);
}

const allAccordionWithAttribute = Array.from(document.querySelectorAll("[data-accordion-example]"))
if (allAccordionWithAttribute.length > 0) {
    for(const accordion of allAccordionWithAttribute){
        new Accordion(accordion as HTMLElement)
    }
}

const acExampleWithOp1 = document.querySelector("[data-accordion-with-options]")
if (acExampleWithOp1 instanceof HTMLElement) {
    new Accordion(acExampleWithOp1,
        {
            accordionType: "single"
        })
}