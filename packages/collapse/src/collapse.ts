
import { CollapseOptions } from "./types";
import { expandCollapse } from "./helpers";


class Collapse {
    private collapseElement: HTMLElement
    private collapseOrientation: "vertical" | "horizontal"
    private defaultState: "open" | "close"
    private collapseId: string
    private collapseTrigger: HTMLElement | null
    private options: CollapseOptions
    private collapseElementWidth: number

    /**
     * Collapse Component
     * @param selector 
     * @param triggerSelector 
     * @param options 
     */
    constructor(selector: string | HTMLElement, options: CollapseOptions = {}, triggerSelector?: string) {
        const collapseElement = typeof selector === "string" ? document.querySelector(`${selector}`) : selector
        if (!(collapseElement instanceof HTMLElement))
            throw new Error("Provided element is not a valid HTMLElement")
        this.collapseElement = collapseElement
        this.collapseId = this.collapseElement.getAttribute("id") as string

        this.collapseTrigger = document.querySelector(`${triggerSelector}`) || document.querySelector(`[data-collapse-trigger][data-target*='${this.collapseId}']`)

        this.options = options
        this.collapseOrientation = this.options.orientation || this.collapseElement.dataset.orientation as "vertical" | "horizontal" || "vertical"
        this.defaultState = this.options.defaultState || this.collapseElement.dataset.defaultState as "open" | "close" || "close"
        this.collapseElement.setAttribute("data-state", this.defaultState)
        this.collapseElementWidth = this.collapseElement.clientWidth
        this.init()
    }
    show = () => {
        expandCollapse(this.collapseElement, this.collapseTrigger, "open", this.collapseOrientation, this.collapseElementWidth)
        this.options.onToggle?.({ isExpanded: true })
    }
    hide = () => {
        expandCollapse(this.collapseElement, this.collapseTrigger, "close", this.collapseOrientation)
        this.options.onToggle?.({ isExpanded: false })
    }
    toggle = () => {
        const state = this.collapseElement.dataset.state as "close" | "open" === "close" ? "open" : "close"
        expandCollapse(this.collapseElement, this.collapseTrigger, state, this.collapseOrientation, this.collapseElementWidth)
        this.options.onToggle?.({ isExpanded: state === "open" })
    }

    private init() {
        if (this.collapseTrigger instanceof HTMLElement) this.collapseTrigger.addEventListener("click", this.toggle)
        this.defaultState === "close" && this.hide()
    }

    /**
     * auto init collapse components based on the selector provided
     * @param selector {string} default is [data-fx-collapse]
     */
    public static autoInit = (selector = "[data-fx-collapse]") => {
        const collapses = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
        for (const collapse in collapses) new Collapse(collapse)
    }
}

export default Collapse