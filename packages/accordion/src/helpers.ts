import { getAccordionItemMetadata, getAllAlwaysOpen, getElementExceptActivedAndAlwaysOpen } from "./util";
import { AccordionOptions } from "./types";
import { findAll, setAttributes } from "@flexilla/utilities";

const expandAccordionItem = (accordionItem: HTMLElement, state: "open" | "close") => {
    if (!(accordionItem instanceof HTMLElement)) throw new Error("accordion item not a valid HTMLELement")
    accordionItem.setAttribute("data-state", state)
    const { accordionTriggerElement, accordionContentElement } = getAccordionItemMetadata(accordionItem)
    setAttributes(accordionTriggerElement, { "aria-expanded": state === "open" ? "true" : "false" })
    setAttributes(accordionContentElement, {
        "aria-hidden": state === "open" ? "false" : "true",
        "data-state": state
    })
    accordionContentElement.style.height = state === "open" ?
        `${accordionContentElement.scrollHeight}px` : "0px"
    accordionContentElement.style.overflow = state === "open" ? "" : "hidden"
}


const activateDefaultAccordionItem = (defaultItem: HTMLElement) => expandAccordionItem(defaultItem, "open")

const activeAlwaysOpen = (accordion: HTMLElement) => {
    const items = getAllAlwaysOpen(accordion)
    for (const element of items) expandAccordionItem(element, "open")
}

const closeOtherAccordionItems = (accordion: HTMLElement, currentValue: string) => {
    const items = getElementExceptActivedAndAlwaysOpen(accordion, currentValue)
    for (const item of items) expandAccordionItem(item, "close")
}

const getAdjacentTrigger = (currentTrigger: HTMLElement, goUp: boolean, accordionElement: HTMLElement) => {
    const accordionItems = accordionElement.querySelectorAll('[data-accordion-item]');
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    const currentTriggerIndex = Array.from(accordionItems).indexOf(currentTrigger.closest('[data-accordion-item]')!);
    const nextIndex = goUp ? currentTriggerIndex - 1 : currentTriggerIndex + 1;
    const nextTrigger = accordionItems[nextIndex]?.querySelector('[data-accordion-trigger]') as HTMLElement
    return nextTrigger ?? (goUp ? accordionItems[accordionItems.length - 1].querySelector('[data-accordion-trigger]') : accordionItems[0].querySelector('[data-accordion-trigger]'));
}

const attachKeyEvent = (event: KeyboardEvent, accordionElement: HTMLElement, allowTriggerOnFocus: boolean) => {
    const focusedTrigger = document.activeElement;
    if (!(focusedTrigger instanceof HTMLElement)) return

    const isTriggerFocused = focusedTrigger.matches('[data-accordion-trigger]');
    if (isTriggerFocused && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
        event.preventDefault(); // Prevent default scrolling behavior
        const nextTrigger = getAdjacentTrigger(focusedTrigger, event.key === 'ArrowUp', accordionElement);
        nextTrigger.focus();
        allowTriggerOnFocus && nextTrigger.click()
    }
}

const attachAccordionItemEvents = (accordionElement: HTMLElement, accordionItem: HTMLElement, accordionType: string, preventClosingAll: boolean, options: AccordionOptions) => {
    const metadata = getAccordionItemMetadata(accordionItem);
    const { accordionTriggerElement } = metadata
    accordionTriggerElement.addEventListener("click", () => {
        const { isItemExpanded, accordionItemValue, isAlwaysOpen } = getAccordionItemMetadata(accordionItem)
        !isAlwaysOpen && !preventClosingAll && expandAccordionItem(accordionItem, isItemExpanded ? "close" : "open")
        !isAlwaysOpen && preventClosingAll && expandAccordionItem(accordionItem, "open")
        if (accordionType === "single") closeOtherAccordionItems(accordionElement, accordionItemValue)
        options.onChangeItem && (options.onChangeItem({
            expandedItem: getExpandedItem(accordionItem)
        }))
    })
}

const initItems = (accordionElement: HTMLElement, accordionType: string, preventClosingAll: boolean, allowTriggerOnFocus: boolean, options: AccordionOptions) => {
    const accordionItems = findAll({ selector: "[data-accordion-item]", parentElement: accordionElement })
    for (const element of accordionItems) {
        attachAccordionItemEvents(accordionElement, element, accordionType, preventClosingAll, options)
    }
    accordionElement.addEventListener("keydown", (e: KeyboardEvent) => {
        attachKeyEvent(e, accordionElement, allowTriggerOnFocus)
    });
}

const getExpandedItem = (expandedItem: HTMLElement) => {
    if (!(expandedItem instanceof HTMLElement)) return
    const { accordionTriggerElement: trigger, accordionContentElement: content, accordionItemValue: value, isItemExpanded: isExpanded, isAlwaysOpen } = getAccordionItemMetadata(expandedItem)
    return {
        accordionItem: expandedItem, trigger, content, value, isAlwaysOpen, isExpanded
    }
}

export { activateDefaultAccordionItem, activeAlwaysOpen, closeOtherAccordionItems, initItems, expandAccordionItem }