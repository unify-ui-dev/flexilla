import type { Placement } from "@flexilla/popper"

export type DropdownOptions = {
    triggerStrategy?: "click" | "hover",
    placement?: Placement,
    preventCloseFromInside?: boolean,
    preventCloseFromOutside?: boolean,
    offsetDistante?: number,
    onToggle?: ({ isHidden }: { isHidden: boolean }) => void
}