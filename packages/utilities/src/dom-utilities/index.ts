
export const appendBefore = ({
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


export const setAttributes = (
	element: HTMLElement,
	attributes: Record<string, string>,
) => {
	for (const [key, value] of Object.entries(attributes))
		element.setAttribute(key, value);
};

export const afterTransition = ({
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
		&& elementTransition !== "all"
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


export const dispatchCustomEvent = <T extends object>(
	element: HTMLElement,
	eventName: string,
	detail: T
): void => {
	const customEvent = new CustomEvent<T>(eventName, { detail });
	element.dispatchEvent(customEvent);
}