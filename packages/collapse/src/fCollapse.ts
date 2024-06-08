import { type CollapseOptions, Collapse } from ".";

export const fCollapse = (selector: string | HTMLElement, options: CollapseOptions = {}, triggerSelector?: string) => new Collapse(selector, options, triggerSelector)