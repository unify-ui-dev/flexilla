import { $d } from "@flexilla/utilities";
import type { AccordionItemMetadata } from "./types";

/**
 * Retrieves metadata (trigger, content, and value) of the accordion item.
 */
export const getAccordionItemMetadata = (item: HTMLElement): AccordionItemMetadata => {
    const trigger = $d("[data-accordion-trigger]", item)
    const content = $d("[data-accordion-content]", item)
    const defaultOpened = item.hasAttribute("data-default-open")

    if (!(trigger instanceof HTMLButtonElement)) throw new Error("The element does't have a Valid Trigger")
    if (!(content instanceof HTMLDivElement)) throw new Error("No Valid Content Element")

    const value = item.getAttribute("data-accordion-value") ?? "";
    const isItemExpanded = trigger.getAttribute("aria-expanded") === "true"
    return { accordionTriggerElement: trigger, accordionContentElement: content, accordionItemValue: value, isItemExpanded, defaultOpened };
}