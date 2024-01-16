export type CollapseOptions = {
    orientation?: "vertical" | "horizontal",
    defaultState?: "open" | "close",
    onToggle?: ({ isExpanded }: { isExpanded: boolean }) => void
}
export type CollapseParams = {
    collapseElement: HTMLElement,
    triggerElement?: HTMLElement,
    options?: CollapseOptions
}