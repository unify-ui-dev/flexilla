export type CollapseOptions = {
    orientation?: "vertical" | "horizontal",
    defaultState?: "open" | "close",
    onToggle?: ({ isExpanded }: { isExpanded: boolean }) => void
}