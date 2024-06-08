import { setAttributes } from "../dom-utilities";
import { $getEl } from "./../selector";
import { TogglerOptions } from "./types";


export const toggleDataAttribute = (
	options: TogglerOptions
) => {
	const { trigger, target, attributes } = options
	const triggerElement = $getEl(trigger)
	const targetElement = $getEl(target)
	let isStateFrom = true;
	triggerElement.addEventListener("click", () => {
		const newAttributes = isStateFrom ? attributes.from : attributes.to
		setAttributes(targetElement, newAttributes)
		isStateFrom = !isStateFrom
	})
}