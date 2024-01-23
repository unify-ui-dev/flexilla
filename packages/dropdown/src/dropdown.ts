import { DropdownOptions, DropdownParams, Placement } from "./types"
import { CreatePopper } from '@fx-lib/popper'
import { handleDocKeyDown, hideDropdown, initDropdownAttributes, showDropdown } from "./helpers"
import { findAll, find, afterTransition } from "@fx-lib/utilities"
import { injectStyles } from "./injectStyle"


class Dropdown {
    private dropdownElement: HTMLElement
    private triggerElement: HTMLElement
    private contentElement: HTMLElement
    private triggerStrategy: "click" | "hover"
    private placement: Placement
    private offsetDistante: number
    private preventFromCloseOutside: boolean
    private preventFromCloseInside: boolean
    private options: DropdownOptions
    private dropdownItems: HTMLElement[]
    private defineRequiredStyles: "inject" | "custom"

    private popper: CreatePopper
    constructor({ dropdownElement, options = {} }: DropdownParams) {
        if (!(dropdownElement instanceof HTMLElement)) throw new Error("Provided Element is not a valid HTMLElement")
        this.dropdownElement = dropdownElement
        this.triggerElement = this.findDropdownElement("[data-dropdown-trigger]")
        this.contentElement = this.findDropdownElement("[data-dropdown-content]")

        if (!(this.triggerElement instanceof HTMLElement)) throw new Error("")
        if (!(this.contentElement instanceof HTMLElement)) throw new Error("")

        this.options = options

        this.triggerStrategy = this.options.triggerStrategy || this.dropdownElement.dataset.triggerStrategy as "click" | "hover" || "click"
        this.placement = this.options.placement || this.dropdownElement.dataset.placement as Placement || "bottom-start"
        this.offsetDistante = this.options.offsetDistante || parseInt(`${this.dropdownElement.dataset.offsetDistance}`) | 6
        this.preventFromCloseOutside = this.options.preventCloseFromOutside || this.dropdownElement.hasAttribute("data-prevent-close-outside") && this.dropdownElement.dataset.preventCloseOutside !== "false" || false
        this.preventFromCloseInside = this.options.preventCloseFromInside || this.dropdownElement.hasAttribute("data-prevent-close-inside") && this.dropdownElement.dataset.preventCloseInside !== "false" || false
        this.defineRequiredStyles = this.options.defineRequiredStyles || this.contentElement.dataset.defineStyles as "inject" | "custom" || "inject"

        this.dropdownItems = findAll({
            selector: "a:not([disabled]), button:not([disabled])",
            parentElement: this.contentElement
        }).filter((el) => !el.classList.contains("disabled"));

        this.popper = new CreatePopper({
            reference: this.triggerElement,
            popper: this.contentElement,
            options: {
                placement: this.placement,
                offsetDistance: this.offsetDistante,
                // arrow
            }
        })
        this.init()
    }

    private handleDocumentClick = (event: MouseEvent) => {
        if (this.dropdownElement.getAttribute("data-state") === "open") {
            if (
                !this.triggerElement.contains(event.target as Node) &&
                !this.preventFromCloseInside &&
                !this.preventFromCloseOutside
            ) {
                this.hide()
            }
            else if (!this.triggerElement.contains(event.target as Node) &&
                !this.dropdownElement.contains(event.target as Node) && !this.preventFromCloseOutside)
                this.hide()
            else if (!this.triggerElement.contains(event.target as Node) && !this.dropdownElement.contains(event.target as Node) && !this.preventFromCloseOutside) this.hide()
            else if (!this.triggerElement.contains(event.target as Node) && this.dropdownElement.contains(event.target as Node) && !this.preventFromCloseInside) this.hide()
        }
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        handleDocKeyDown({
            event,
            items: this.dropdownItems,
            dropdownElement: this.dropdownElement,
            preventCloseFromOutside: this.preventFromCloseOutside,
            triggerStrategy: this.triggerStrategy,
            hideDropDown: () => this.hide()
        })
    }

    private findDropdownElement(selector: string) {
        return find({
            selector: `${selector}`,
            parentElement: this.dropdownElement
        }) as HTMLElement
    }

    private onToggleState(isHidden: boolean) {
        this.options.onToggle?.({ isHidden: isHidden })
    }

    private toggleStateOnClick = () => {
        const state = this.dropdownElement.dataset.state || "close"
        if (state === "close") {
            this.show()
            document.addEventListener("click", this.handleDocumentClick)
        } else {
            this.hide()
        }
    }

    private showOnMouseEnter = () => {
        this.show()
    }

    private hideOnMouseLeave = () => {
        this.hide()
    }

    show() {
        this.popper.updatePosition()
        showDropdown({
            container: this.dropdownElement,
            trigger: this.triggerElement,
            popper: this.contentElement
        })
        this.onToggleState(false)
        document.addEventListener("keydown", this.handleKeyDown)
    }

    hide() {
        hideDropdown({
            container: this.dropdownElement,
            trigger: this.triggerElement,
            popper: this.contentElement
        })
        this.triggerStrategy === "click" && document.removeEventListener("click", this.handleDocumentClick)
        document.removeEventListener("keydown", this.handleKeyDown)
        afterTransition({
            element: this.contentElement,
            callback: () => {
                this.onToggleState(true)
                this.popper.cleanupEvents()
            }
        })

    }

    private init() {
        this.defineRequiredStyles === "inject" && injectStyles()
        initDropdownAttributes({
            container: this.dropdownElement,
            trigger: this.triggerElement,
            popper: this.contentElement
        })

        if (this.triggerStrategy === "click") {
            this.triggerElement.addEventListener("click", this.toggleStateOnClick)
        } else {
            this.triggerElement.addEventListener("mouseenter", this.showOnMouseEnter)
            this.dropdownElement.addEventListener("mouseleave", this.hideOnMouseLeave)
        }
    }
}

export default Dropdown