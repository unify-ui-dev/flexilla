type AttributeMap = { [key: string]: string }
export type TogglerOptions = {
	trigger: HTMLElement | string,
	onToggle?: ({ isExpanded }: { isExpanded: boolean }) => void,
	targets: {
		element: HTMLElement | string,
		attributes: { initial: AttributeMap, to: AttributeMap }
	}[]
}