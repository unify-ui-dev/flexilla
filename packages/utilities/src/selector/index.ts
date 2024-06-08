export const $ = (selector: string, parentElement: HTMLElement = document.body): HTMLElement | null =>
	parentElement.querySelector(selector);

/**
 * Find direct descendant Element
 * @param selector 
 * @param parentElement 
 * @returns 
 */
export const $d = (selector: string, parentElement: HTMLElement = document.body): HTMLElement | undefined => {
	const allItems = $$(selector, parentElement);
	// Find the first direct descendant
	const directDescendant = Array.from(allItems).find((item) => item.parentElement === parentElement);
	return directDescendant
};

export const $$ = (selector: string, parentElement: HTMLElement = document.body): HTMLElement[] =>
	Array.from(parentElement.querySelectorAll(selector));

/**
 * Ge
 * @param element 
 * @returns 
 */
export const $getEl = (element: HTMLElement | string) => (typeof element === "string" ? $(element) : element) as HTMLElement
