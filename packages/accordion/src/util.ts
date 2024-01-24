import { find, findAll } from "@flexilla/utilities";
import { AccordionItemMetadata } from "./types";

/**
 * Retrieves metadata (trigger, content, and value) of the accordion item.
 */
function getAccordionItemMetadata(item: HTMLElement): AccordionItemMetadata {
    const trigger = find({ selector: "[data-accordion-trigger]", parentElement: item })
    const content = find({ selector: "[data-accordion-content]", parentElement: item })
    const isAlwaysOpen = item.hasAttribute("data-always-open") && item.dataset.alwaysOpen !== "false"

    if (!(trigger instanceof HTMLButtonElement)) throw new Error("The element does't have a Valid Trigger")
    if (!(content instanceof HTMLDivElement)) throw new Error("No Valid Content Element")

    const value = item.getAttribute("data-accordion-value") ?? "";
    const isItemExpanded = trigger.getAttribute("aria-expanded") === "true"
    return { accordionTriggerElement: trigger, accordionContentElement: content, accordionItemValue: value, isItemExpanded, isAlwaysOpen };
}

const getElementExceptActivedAndAlwaysOpen = (accordion: HTMLElement, activeValue: string) =>
    findAll({ selector: `[data-accordion-item]:not([data-always-open]):not([data-accordion-value="${activeValue}"])`, parentElement: accordion })

const getAllAlwaysOpen = (accordion: HTMLElement) => findAll({ selector: "[data-always-open]", parentElement: accordion })

export {
    getAccordionItemMetadata,
    getElementExceptActivedAndAlwaysOpen,
    getAllAlwaysOpen
}