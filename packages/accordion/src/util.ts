import { $$, $d } from "@flexilla/utilities";
import { AccordionItemMetadata } from "./types";

/**
 * Retrieves metadata (trigger, content, and value) of the accordion item.
 */
function getAccordionItemMetadata(item: HTMLElement): AccordionItemMetadata {
    const trigger = $d("[data-accordion-trigger]", item)
    const content = $d("[data-accordion-content]", item)
    const isAlwaysOpen = item.hasAttribute("data-always-open") && item.dataset.alwaysOpen !== "false"

    if (!(trigger instanceof HTMLButtonElement)) throw new Error("The element does't have a Valid Trigger")
    if (!(content instanceof HTMLDivElement)) throw new Error("No Valid Content Element")

    const value = item.getAttribute("data-accordion-value") ?? "";
    const isItemExpanded = trigger.getAttribute("aria-expanded") === "true"
    return { accordionTriggerElement: trigger, accordionContentElement: content, accordionItemValue: value, isItemExpanded, isAlwaysOpen };
}

const getElementExceptActivedAndAlwaysOpen = (accordion: HTMLElement, activeValue: string) => {
    const allItems = $$(`[data-accordion-item]:not([data-always-open]):not([data-accordion-value="${activeValue}"])`, accordion)
    return allItems.filter((item) => item.parentElement === accordion);
}


const getAllAlwaysOpen = (accordion: HTMLElement) => {
    const allItems = $$("[data-accordion-item][data-always-open]", accordion)
    return allItems.filter((item) => item.parentElement === accordion);
}


export {
    getAccordionItemMetadata,
    getElementExceptActivedAndAlwaysOpen,
    getAllAlwaysOpen
}