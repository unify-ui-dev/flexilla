import { AccordionOptions, Accordion } from ".";

/**
 * Shortcut of : new Accordion(...)
 * @param accordion 
 * @param options 
 * @returns 
 */
export const fAccordion = (accordion: string | HTMLElement, options: AccordionOptions = {}) => new Accordion(accordion, options)