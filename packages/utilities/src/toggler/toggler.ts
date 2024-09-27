import { setAttributes } from "../dom-utilities";
import { $getEl } from "./../selector";
import type { TogglerOptions } from "./types";


export const actionToggler = (options: TogglerOptions) => {
	const { trigger, targets, onToggle } = options;
	const triggerElement = $getEl(trigger);
	let initialStateSetled = false;

	const init = () => {
		for (const target of targets) {
			const targetElement = $getEl(target.element);
			setAttributes(targetElement, target.attributes.initial);
			initialStateSetled = true
		}
	}
	init()
	triggerElement.addEventListener("click", () => {
		for (const target of targets) {
			const targetElement = $getEl(target.element);
			const newAttributes = !initialStateSetled ? target.attributes.initial : target.attributes.to;
			setAttributes(targetElement, newAttributes);
		}

		initialStateSetled = !initialStateSetled;
		onToggle?.({ isExpanded: !initialStateSetled });
		triggerElement.ariaExpanded = initialStateSetled ? "false" : "true";
	});
};