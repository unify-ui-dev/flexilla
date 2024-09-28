
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

const afterAnimationOrTransition = ({
	element,
	callback,
	type,
	keysCheck
}: {
	type: "animation" | "transition"
	element: HTMLElement;
	callback: () => void;
	keysCheck: string[]
}) => {
	const computedStyle = getComputedStyle(element)
	const elementTransition = type === "transition" ? computedStyle.transition : computedStyle.animation;
	if (
		elementTransition !== "none" &&
		elementTransition !== "" &&
		!keysCheck.includes(elementTransition)
	) {
		const eventName = type === "transition" ? "transitionend" : "animationend"
		const handleEvent = () => {
            element.removeEventListener(eventName, handleEvent);
            callback();
        };
		element.addEventListener(eventName, handleEvent, { once: true });
	} else {
		callback();
	}
};

export const afterTransition = ({
	element,
	callback,
}: {
	element: HTMLElement;
	callback: () => void;
}) => {
	afterAnimationOrTransition({
		element,
		callback,
		type: "transition",
		keysCheck: ["all 0s ease 0s", "all"]
	})
};

export const afterAnimation = ({ element, callback, }: { element: HTMLElement; callback: () => void; }) => {

	afterAnimationOrTransition({
		element,
		callback,
		type: "animation",
		keysCheck: ["none 0s ease 0s 1 normal none running"]
	})
};

export const dispatchCustomEvent = <T extends object>(element: HTMLElement, eventName: string, detail: T): void => {
	const customEvent = new CustomEvent<T>(eventName, { detail });
	element.dispatchEvent(customEvent);
}