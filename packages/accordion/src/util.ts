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


export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let timer: NodeJS.Timeout;
    return function (...args: Parameters<T>) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    } as T;
  }
  
  export function throttle<T extends (...args: any[]) => void>(fn: T, delay: number): T {
    let lastCall = 0;
    return function (...args: Parameters<T>) {
      const now = Date.now();
      if (now - lastCall > delay) {
        fn.apply(this, args);
        lastCall = now;
      }
    } as T;
  }