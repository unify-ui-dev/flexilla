type AttributeMap = { [key: string]: string }
export type TogglerOptions = {
    trigger: HTMLElement | string,
	target: HTMLElement | string,
	attributes: { from: AttributeMap, to: AttributeMap },
}