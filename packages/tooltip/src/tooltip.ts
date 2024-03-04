import { TooltipOptions } from "./types"
import {  $, $$ } from "@flexilla/utilities"
import { CreatePopper, Placement } from '@flexilla/popper'
import { hidePopover, initPoppoverAttributes, showTooltip } from "./helpers"


class Tooltip {
    private containerElement: HTMLElement
    private options: TooltipOptions
    private referenceElement: HTMLElement
    private popperElement: HTMLElement
    private placement: Placement
    private popper: CreatePopper
    private offsetDistance: number
    private triggerStrategy: "hover" | "click"

    constructor(tooltip: string | HTMLElement, options: TooltipOptions = {}) {
        const containerElement = typeof tooltip === "string" ? $(tooltip) : tooltip
        if (!(containerElement instanceof HTMLElement)) throw new Error("Provided Element is not a valid HTMLElement")

        this.containerElement = containerElement
        this.referenceElement = $("[data-fx-tooltip-trigger]", this.containerElement) || this.containerElement

        this.popperElement = this.findPopoverElements("[data-fx-popper]") || this.findPopoverElements("[data-tooltip-content]") as HTMLElement

        if (!(this.referenceElement instanceof HTMLElement)) throw new Error("No trigger Element in the provided Element!!!")
        if (!(this.popperElement instanceof HTMLElement)) throw new Error("No trigger Element in the provided Element!!! Trigger must have a data-tooltip-content attribute")

        this.options = options
        this.placement = this.options.placement || this.containerElement.dataset.placement as Placement || "bottom-middle"

        this.offsetDistance = this.options.offsetDistance || parseInt(`${containerElement.dataset.offsetDistance}`) || 10
        this.triggerStrategy = this.options.triggerStrategy || this.containerElement.dataset.triggerStrategy as "hover" | "click" || "hover"

        this.popper = new CreatePopper(
            this.referenceElement,
            this.popperElement,
            {
                placement: this.placement,
                offsetDistance: this.offsetDistance,
            }
        )
        this.init()
    }

    private hideOnEscPressed = (event: KeyboardEvent) => {
        if (this.triggerStrategy === "hover") return
        if (event.key === "Escape") {
            const isOpened = this.containerElement.hasAttribute("data-state") && this.containerElement.dataset.state === "open"
            if (isOpened) this.hide()
        }
    }

    private findPopoverElements(selector: string) {
        return $(selector, this.containerElement);
    }

    private onShow() {
        this.options.onShow?.()
    }
    private onHide() {
        this.options.onHide?.()
    }
    private onToggle(isHidden: boolean) {
        this.options.onToggle?.({ isHidden: isHidden })
    }

    private toggleOnClickMode(containerElement: HTMLElement) {
        if (!(containerElement instanceof HTMLElement)) return
        const state = containerElement.dataset.state || "close"
        if (state === "close") {
            this.show()
            document.addEventListener("click", (event) => this.closeWhenClickOutside(event, containerElement))
            document.addEventListener("keydown", this.hideOnEscPressed)
        } else {
            this.hide()
            document.removeEventListener("click", (event) => this.closeWhenClickOutside(event, containerElement))
            document.removeEventListener("keydown", this.hideOnEscPressed)
        }
    }

    private showOnHover = () => {
        this.show()
    }
    private hideOnHover = () => {
        this.hide()
    }

    private closeWhenClickOutside(event: MouseEvent, containerElement: HTMLElement) {
        const isOpened = containerElement.hasAttribute("data-state") && containerElement.dataset.state === "open"
        if (isOpened && !containerElement.contains(event.target as Node)) this.hide()
    }

    show() {
        this.popper.updatePosition()
        showTooltip({
            container: this.containerElement,
            trigger: this.referenceElement,
            popper: this.popperElement
        })
        this.onShow()
        this.onToggle(false)
    }
    hide() {
        hidePopover({
            container: this.containerElement,
            trigger: this.referenceElement,
            popper: this.popperElement
        })
        this.popper.cleanupEvents()
        this.onHide()
        this.onToggle(true)
    }
    private init() {
        const reference = this.referenceElement
        const containerElement = this.containerElement
        const triggerStrategy = this.triggerStrategy
        initPoppoverAttributes({
            container: this.containerElement,
            trigger: this.referenceElement,
            popper: this.popperElement
        })
        if (triggerStrategy === "click") {
            reference.addEventListener("click", () => this.toggleOnClickMode(containerElement))
        } else if (triggerStrategy === "hover") {
            reference.addEventListener("mouseenter", this.showOnHover)
            containerElement.addEventListener("mouseleave", this.hideOnHover)
        }
    }

    /**
     * auto init Tooltips based on the selector provided
     * @param selector {string} default is [data-fx-tooltip]
     */
    public static autoInit = (selector = "[data-fx-tooltip]")=>{
        const tooltips = $$(selector)
        for(const tooltip of tooltips) new Tooltip(tooltip)
    }
}

export default Tooltip