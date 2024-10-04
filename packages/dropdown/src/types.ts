import type { Placement } from "flexipop"

type EventEffect = {
    disableOnScroll?: boolean,
    disableOnResize?: boolean
}
export type DropdownOptions = {
    triggerStrategy?: "click" | "hover",
    placement?: Placement,
    preventCloseFromInside?: boolean,
    preventFromCloseOutside?: boolean,
    defaultState?: "open" | "close"
    offsetDistance?: number,
    popper?: {
        eventEffect: EventEffect
    }
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}
