import { Placement } from "@flexilla/popper"

export type Arrow = {
    enableArrow?: boolean,
    arrowSize?: number,
    customClass?: string
}

export type TooltipOptions = {
    defineRequiredStyles?:"inject"|"custom",
    placement?: Placement,
    offsetDistance?: number,
    arrow?: Arrow,
    triggerStrategy?: "click" | "hover",
    onShow?: () => void,
    onHide?: () => void,
    onToggle?: ({ isHidden }: { isHidden?: boolean }) => void
}

export type TooltipParams = {
    containerElement: HTMLElement,
    triggerElement?:HTMLElement,
    options?: TooltipOptions
}