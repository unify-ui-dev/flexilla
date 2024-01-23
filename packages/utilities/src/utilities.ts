const find = ({
	selector,
	parentElement,
}: { selector: string; parentElement: HTMLElement }): HTMLElement | null =>
	parentElement.querySelector(selector);

const findAll = ({
	selector,
	parentElement,
}: { selector: string; parentElement: HTMLElement }): HTMLElement[] =>
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

const injectStyle = ({
	newStyles,
	identifier,
}: { newStyles: string; identifier: string }) => {
	const existingStyleTag = document.head.querySelector("[data-fx-style]");
	if (existingStyleTag) {
		const currentStyle = existingStyleTag.textContent || "";
		if (!currentStyle.includes(identifier))
			existingStyleTag.textContent += newStyles;
		return;
	}
	const styleElement = document.createElement("style");
	styleElement.textContent = newStyles;
	styleElement.setAttribute("data-fx-style", "");
	document.head.appendChild(styleElement);
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
	find,
	findAll,
	appendBefore,
	injectStyle,
	setAttributes,
	afterTransition,
};
