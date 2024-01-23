import { TooltipOptions, TooltipParams, Arrow } from "./types"
import { find } from "@fx-lib/utilities"
import { CreatePopper, Placement } from '@fx-lib/popper'
import { hidePopover, initPoppoverAttributes, showTooltip } from "./helpers"
import { injectStyles } from "./injectStyle"


class Tooltip {
    private containerElement: HTMLElement
    private options: TooltipOptions
    private referenceElement: HTMLElement
    private popperElement: HTMLElement
    private placement: Placement
    private arrow: Arrow | undefined
    private popper: CreatePopper
    private offsetDistance: number
    private triggerStrategy: "hover" | "click"
    private defineRequiredStyles: "inject" | "custom"

    constructor({ containerElement, triggerElement, options = {} }: TooltipParams) {
        if (!(containerElement instanceof HTMLElement)) {
            throw new Error("Provided Element is not a valid HTMLElement")
        }
        this.containerElement = containerElement
        this.referenceElement = triggerElement || this.containerElement

        this.popperElement = this.findPopoverElements("[data-tooltip-content]") as HTMLElement

        if (!(this.referenceElement instanceof HTMLElement)) throw new Error("No trigger Element in the provided Element!!!")
        if (!(this.popperElement instanceof HTMLElement)) throw new Error("No trigger Element in the provided Element!!! Trigger must have a data-tooltip-content attribute")

        this.options = options
        this.placement = this.options.placement || this.containerElement.dataset.placement as Placement || "bottom-middle"

        this.offsetDistance = this.options.offsetDistance || parseInt(`${containerElement.dataset.offsetDistance}`) || 10
        this.triggerStrategy = this.options.triggerStrategy || this.containerElement.dataset.triggerStrategy as "hover" | "click" || "hover"
        this.defineRequiredStyles = this.options.defineRequiredStyles || this.containerElement.dataset.defineStyles as "inject" | "custom" || "inject"
        this.arrow = this.options.arrow
        this.popper = new CreatePopper({
            reference: this.referenceElement,
            popper: this.popperElement,
            options: {
                placement: this.placement,
                offsetDistance: this.offsetDistance,
                arrow: this.arrow
            }
        })
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
        return find({
            selector: `${selector}`,
            parentElement: this.containerElement,
        });
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
        this.defineRequiredStyles === "inject" && injectStyles()
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
}

export default Tooltip