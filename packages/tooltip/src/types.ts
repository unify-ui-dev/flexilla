import { Placement } from "@flexilla/popper"


export type TooltipOptions = {
    placement?: Placement,
    offsetDistance?: number,
    triggerStrategy?: "click" | "hover",
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}