import { DropdownOptions } from "./types"
import { CreatePopper, Placement } from '@flexilla/popper'
import { handleDocKeyDown, hideDropdown, initDropdownAttributes, removeFocusOnItem, showDropdown } from "./helpers"
import { $$, $, afterTransition } from "@flexilla/utilities"



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

    private popper: CreatePopper
    constructor(dropdown: string | HTMLElement, options: DropdownOptions = {}) {
        const dropdownElement = typeof dropdown === "string" ? $(dropdown) : dropdown
        if (!(dropdownElement instanceof HTMLElement)) throw new Error("Provided Element is not a valid HTMLElement")
        this.dropdownElement = dropdownElement
        this.triggerElement = this.findDropdownElement("[data-dropdown-trigger]")
        this.contentElement = this.findDropdownElement("[data-fx-popper]") || this.findDropdownElement("[data-dropdown-content]")

        if (!(this.triggerElement instanceof HTMLElement)) throw new Error("")
        if (!(this.contentElement instanceof HTMLElement)) throw new Error("")

        this.options = options

        this.triggerStrategy = this.options.triggerStrategy || this.dropdownElement.dataset.triggerStrategy as "click" | "hover" || "click"
        this.placement = this.options.placement || this.dropdownElement.dataset.placement as Placement || "bottom-start"
        this.offsetDistante = this.options.offsetDistante || parseInt(`${this.dropdownElement.dataset.offsetDistance}`) | 6
        this.preventFromCloseOutside = this.options.preventCloseFromOutside || this.dropdownElement.hasAttribute("data-prevent-close-outside") && this.dropdownElement.dataset.preventCloseOutside !== "false" || false
        this.preventFromCloseInside = this.options.preventCloseFromInside || this.dropdownElement.hasAttribute("data-prevent-close-inside") && this.dropdownElement.dataset.preventCloseInside !== "false" || false

        this.dropdownItems = $$("a:not([disabled]), button:not([disabled])", this.contentElement).filter((el) => !el.classList.contains("disabled"));

        this.popper = new CreatePopper(
            this.triggerElement,
            this.contentElement,
            {
                placement: this.placement,
                offsetDistance: this.offsetDistante,
            }
        )
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
        return $(`${selector}`, this.dropdownElement) as HTMLElement
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
        removeFocusOnItem(this.dropdownItems)
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

    /**
     * auto init dropdown Components based on the selector provided
     * @param selector {string} default is [data-fx-dropdown] attribute
     */
    public static autoInit = (selector="[data-fx-dropdown]")=>{
        const dropdowns = $$(selector)
        for(const dropdown of dropdowns) new Dropdown(dropdown)
    }
}

export default Dropdown