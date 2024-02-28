const $ = (selector: string, parentElement: HTMLElement = document.body): HTMLElement | null =>
	parentElement.querySelector(selector);

/**
 * Find direct descendant Element
 * @param selector 
 * @param parentElement 
 * @returns 
 */
const $d = (selector: string, parentElement: HTMLElement = document.body): HTMLElement | undefined => {
	const allItems = $$(selector, parentElement);
	// Find the first direct descendant
	const directDescendant = Array.from(allItems).find((item) => item.parentElement === parentElement);
	return directDescendant
};

const $$ = (selector: string, parentElement: HTMLElement = document.body): HTMLElement[] =>
	Array.from(parentElement.querySelectorAll(selector));


const appendBefore = ({
	newElement,
	existingElement,
}: { newElement: HTMLElement; existingElement: HTMLElement }) => {
	if (
		!(newElement instanceof HTMLElement) ||
		!(existingElement instanceof HTMLElement)
	)
		throw new Error("Both parameters must be valid HTML elements.");
	const parentElement = existingElement.parentElement;
	if (parentElement) parentElement.insertBefore(newElement, existingElement);
	else throw new Error("Existing element must have a parent element.");
};


const setAttributes = (
	element: HTMLElement,
	attributes: Record<string, string>,
) => {
	for (const [key, value] of Object.entries(attributes))
		element.setAttribute(key, value);
};

const afterTransition = ({
	element,
	callback,
}: {
	element: HTMLElement;
	callback: () => void;
}) => {
	const elementTransition = getComputedStyle(element).transition;
	if (
		elementTransition !== "none" &&
		elementTransition !== "" &&
		elementTransition !== "all 0s ease 0s"
	) {
		element.addEventListener(
			"transitionend",
			function handleTransitionEnd() {
				element.removeEventListener("transitionend", handleTransitionEnd);
				callback();
			},
			{ once: true },
		);
	} else callback();
};

export {
	$,
	$$,
	$d,
	appendBefore,
	setAttributes,
	afterTransition,
};
