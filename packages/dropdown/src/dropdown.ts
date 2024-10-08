import { DropdownOptions } from "./types"
import { CreatePopover, type Placement } from "@flexilla/popover"
import { $$, $, keyboardNavigation } from "@flexilla/utilities"


class Dropdown {
    private triggerElement: HTMLElement
    private contentElement: HTMLElement

    private options: DropdownOptions
    private CreatePopoverInstance: CreatePopover
    private navigationKeys: {
        make: () => void;
        destroy: () => void;
    }

    private triggerStrategy: "click" | "hover"
    private placement: Placement
    private offsetDistance: number
    private preventFromCloseOutside: boolean
    private preventFromCloseInside: boolean
    private defaultState: "open" | "close"
    constructor(dropdown: string | HTMLElement, options: DropdownOptions = {}) {
        const contentElement = typeof dropdown === "string" ? $(dropdown) : dropdown
        if (!(contentElement instanceof HTMLElement)) throw new Error("Provided Element is not a valid HTMLElement")
        this.contentElement = contentElement
        this.triggerElement = $(`[data-dropdown-trigger][data-dropdown-id=${this.contentElement.getAttribute("id")}]`) as HTMLElement

        if (!(this.triggerElement instanceof HTMLElement)) throw new Error("Provide a valid HTML Element for the trigger")
        if (!(this.contentElement instanceof HTMLElement)) throw new Error("Provide a valid HTML Element for the dropdown conten")

        this.options = options

        this.triggerStrategy = this.options.triggerStrategy || this.contentElement.dataset.triggerStrategy as "click" | "hover" || "click"
        this.placement = this.options.placement || this.contentElement.dataset.placement as Placement || "bottom-start"
        this.offsetDistance = this.options.offsetDistance || parseInt(`${this.contentElement.dataset.offsetDistance}`) | 6
        this.preventFromCloseOutside = this.options.preventFromCloseOutside || this.contentElement.hasAttribute("data-prevent-close-outside") || false
        this.preventFromCloseInside = this.options.preventCloseFromInside || this.contentElement.hasAttribute("data-prevent-close-inside") || false
        this.defaultState = this.options.defaultState || this.contentElement.dataset.defaultState as "close" | "open" || "close";

        this.CreatePopoverInstance = new CreatePopover({
            trigger: this.triggerElement,
            content: this.contentElement,
            options: {
                placement: this.placement,
                offsetDistance: this.offsetDistance,
                triggerStrategy: this.triggerStrategy,
                preventFromCloseOutside: this.preventFromCloseOutside,
                preventCloseFromInside: this.preventFromCloseInside,
                defaultState: this.defaultState,
                beforeShow: this.beforeShow,
                beforeHide: this.beforeHide,
                onShow: this.onShow,
                onHide: this.onHide,
                onToggle: ({ isHidden }) => {
                    this.onToggle({ isHidden })
                },
                popper: this.options.popper
            }
        })


        this.navigationKeys = keyboardNavigation({
            containerElement: this.contentElement,
            targetChildren: "a:not([disabled]), button:not([disabled])",
            direction: "up-down"
        })
    }


    private onToggle = ({ isHidden }: { isHidden?: boolean }) => {
        this.options.onToggle?.({ isHidden })
    }

    private beforeShow = () => {
        this.contentElement.focus()
        this.navigationKeys.make()
    }

    private beforeHide = () => {
        this.contentElement.blur()
        this.navigationKeys.destroy()
    }

    private onShow = () => {
        this.options.onShow?.()
    }
    private onHide = () => {
        this.options.onHide?.()
    }

    show = () => {
        this.CreatePopoverInstance.show()
    }

    hide = () => {
        this.CreatePopoverInstance.hide()
    }


    setShowOptions = ({ placement, offsetDistance }: { placement: Placement, offsetDistance?: number }) => {
        this.CreatePopoverInstance.setShowOptions({ placement, offsetDistance })
    }

    /**
     * auto init dropdown Components based on the selector provided
     * @param selector {string} default is [data-fx-dropdown] attribute
     */
    static autoInit = (selector = "[data-fx-dropdown]") => {
        const dropdowns = $$(selector)
        for (const dropdown of dropdowns) new Dropdown(dropdown)
    }

    /**
     * init dropdown Component
     * @param selector {string} 
     */
    static init(dropdown: string | HTMLElement, options: DropdownOptions = {}) {
        new Dropdown(dropdown, options)
    }
}

export default Dropdown