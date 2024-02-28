import { Placement } from "@flexilla/popper"


export type TooltipOptions = {
    defineRequiredStyles?:"inject"|"custom",
    placement?: Placement,
    offsetDistance?: number,
    triggerStrategy?: "click" | "hover",
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}