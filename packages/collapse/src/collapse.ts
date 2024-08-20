
import type { CollapseOptions } from "./types";
import { expandCollapseElement } from "./collapsible";

import { $$, $, dispatchCustomEvent } from "@flexilla/utilities"


class Collapse {
    private collapseElement: HTMLElement
    private defaultState: "open" | "close"
    private collapseId: string
    private collapseTrigger: HTMLElement | null
    private options: CollapseOptions
    private closeHeight: number

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

        this.collapseTrigger = $(`${triggerSelector}`) || $(`[data-collapse-trigger][data-target*='${this.collapseId}']`)

        this.options = options
        this.defaultState = this.options.defaultState || this.collapseElement.dataset.defaultState as "open" | "close" || "close"

        this.closeHeight = this.options.closeHeight || parseInt(this.collapseElement.dataset.closeHeight || "0") || 0
        this.initCollapse()
    }
    show = () => {
        dispatchCustomEvent(this.collapseElement, "beforeshow", {
            isExpanded: false
        })
        expandCollapseElement({
            collapseElement: this.collapseElement,
            triggerElement: this.collapseTrigger, state: "open",
            closeHeight: this.closeHeight
        })
        this.options.onToggle?.({ isExpanded: true })
        dispatchCustomEvent(this.collapseElement, "aftershow", {
            isExpanded: false
        })
    }
    hide = () => {
        dispatchCustomEvent(this.collapseElement, "beforehide", {
            isExpanded: false
        })
        expandCollapseElement({
            collapseElement: this.collapseElement,
            triggerElement: this.collapseTrigger, state: "close",
            closeHeight: this.closeHeight
        })
        this.options.onToggle?.({ isExpanded: false })
        dispatchCustomEvent(this.collapseElement, "afterhide", {
            isExpanded: false
        })
    }
    toggle = () => {
        const state = this.collapseElement.dataset.state as "close" | "open" === "close" ? "open" : "close"
        dispatchCustomEvent(this.collapseElement, "beforetoggle", {
            isExpanded: state === "open"
        })
        expandCollapseElement({
            collapseElement: this.collapseElement,
            triggerElement: this.collapseTrigger, state: state,
            closeHeight: this.closeHeight
        })
        this.options.onToggle?.({ isExpanded: state === "open" })
        dispatchCustomEvent(this.collapseElement, "aftertoggle", {
            isExpanded: state === "open"
        })
    }

    private initCollapse() {
        if (this.collapseTrigger instanceof HTMLElement) this.collapseTrigger.addEventListener("click", this.toggle)

        this.defaultState === "close" ? this.hide() : null
        this.defaultState === "open" ? this.show() : null
    }

    /**
     * Collapse Component
     * @param selector 
     * @param triggerSelector 
     * @param options 
     */
    public static init = (selector: string | HTMLElement, options: CollapseOptions = {}, triggerSelector?: string) => new Collapse(selector, options, triggerSelector)

    /**
     * auto init collapse components based on a provided selector
     * @param selector {string} default is [data-fx-collapse]
     */
    public static autoInit = (selector = "[data-fx-collapse]") => {
        const collapses = $$(selector)
        for (const collapseEl of collapses) {
            new Collapse(collapseEl)
        }
    }
}

export default Collapse