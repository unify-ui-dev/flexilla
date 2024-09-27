import type { Placement } from "flexipop"

export type EventEffect = {
    disableOnScroll?: boolean,
    disableOnResize?: boolean
}

export type PopoverOptions = {
    defaultState?: "open" | "close",
    preventFromCloseOutside?: boolean
    preventCloseFromInside?: boolean
    placement?: Placement,
    offsetDistance?: number,
    triggerStrategy?: "click" | "hover",
    popper?: {
        eventEffect: EventEffect
    }
    beforeShow?: () => void,
    beforeHide?: () => void,
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}

