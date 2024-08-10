import { Placement } from "@flexilla/popper"


export type TooltipOptions = {
    closeOnClickInside?:boolean
    placement?: Placement,
    offsetDistance?: number,
    triggerStrategy?: "click" | "hover",
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}