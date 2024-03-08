import { Tabs, Accordion, Collapse } from "@flexilla/flexilla";
import { $$ } from "./selector";


const allTabs = $$("[data-tab-fx-site]")

for(const tabs of allTabs){
    new Tabs(tabs as HTMLElement);
}

const allAccordionWithAttribute = $$("[data-accordion-example]")
for(const accordion of allAccordionWithAttribute){
    new Accordion(accordion as HTMLElement)
}

const allCollapses = $$("[data-collapsible-example]")
for(const collapse of allCollapses){
    new Collapse(collapse)
}

