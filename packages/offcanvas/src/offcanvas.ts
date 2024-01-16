
import { OffcanvasParams } from "./types"
import { createOverlay } from "./offCanvasOverlay"
import { injectStyles } from "./injectStyle"
import { closeAllOpenedOffcanvas, toggleOffCanvasState } from "./helpers"
import { findAll, appendBefore } from "@fx-lib/utilities"

/**
 * Class representing an Offcanvas element.
 */
class Offcanvas {
    private offCanvasElement: HTMLElement
    private offCanvasTriggers: HTMLElement[]
    private offCanvasCloseBtns: HTMLElement[]
    private allowBodyScroll: boolean
    private staticBackdrop: boolean
    private overlayElement: HTMLDivElement | undefined
    public instance: Offcanvas; 

    /**
   * Create an Offcanvas instance.
   * @param {OffcanvasParams} options - The options for configuring the Offcanvas.
   */
    constructor({ offCanvasElement, options = {} }: OffcanvasParams) {
        this.instance = this; 
        if (!(offCanvasElement instanceof HTMLElement)) throw new Error("Invalid Offcanvas, the provided Element is not a valid HTMLElement")
        const { staticBackdrop, allowBodyScroll, backdrop: overlay } = options
        this.offCanvasElement = offCanvasElement
        this.setupAttributes()
        this.staticBackdrop = staticBackdrop || (offCanvasElement.hasAttribute("data-static-backdrop") && offCanvasElement.dataset.staticBackdrop !== "false") || false
        this.allowBodyScroll = allowBodyScroll || (offCanvasElement.hasAttribute("data-allow-body-scroll") && offCanvasElement.dataset.allowBodyScroll !== "false") || false
        const offCanvasId = this.offCanvasElement.getAttribute("id")
        this.offCanvasTriggers = this.findOffCanvasElements("[data-offcanvas-trigger]", offCanvasId);
        this.offCanvasCloseBtns = this.findOffCanvasElements("[data-offcanvas-close]", offCanvasId);
        this.overlayElement = createOverlay(overlay, offCanvasElement.dataset.fxOffcanvasBackdrop || "", offCanvasId || "")
        this.init()
    }

    private findOffCanvasElements(selector: string, offCanvasId: string | null) {
        return findAll({
            selector: `${selector}[data-target=${offCanvasId}]`,
            parentElement: document.body,
        });
    }
    private setupAttributes() {
        if (!this.offCanvasElement.hasAttribute("data-fx-offcanvas"))
            this.offCanvasElement.setAttribute("data-fx-offcanvas", "")
    }

    /**
   * Close the Offcanvas when a click occurs outside of it.
   */
    private closeWhenClickOutSide(event: MouseEvent) {
        const isOpen = this.offCanvasElement.getAttribute("data-state") === "open"
        const clickOutOutside = !this.offCanvasElement.contains(event.target as Node) && ![...this.offCanvasTriggers].includes(event.target as HTMLElement)
        if (isOpen && clickOutOutside) this.closeOffCanvas()
    }

    private closeOffCanvas() {
        toggleOffCanvasState(this.offCanvasElement, this.overlayElement, this.allowBodyScroll, "close")
        document.removeEventListener("keydown", this.closeWithEsc)
        !this.allowBodyScroll && !this.overlayElement && document.removeEventListener("click", (event) => this.closeWhenClickOutSide(event))
    }

    private openOffCanvas() {
        closeAllOpenedOffcanvas(this.offCanvasElement)
        toggleOffCanvasState(this.offCanvasElement, this.overlayElement, this.allowBodyScroll, "open")
        document.addEventListener("keydown", (event) => this.closeWithEsc(event))
        !this.allowBodyScroll && !this.overlayElement && document.addEventListener("click", (event) => this.closeWhenClickOutSide(event))
    }

    /**
   * Close the Offcanvas when the "Escape" key is pressed.
   */
    private closeWithEsc(event: KeyboardEvent) {
        if (event.key === "Escape") { this.closeOffCanvas() }
    }

    private closeWithOverlay() {
        if (!(this.overlayElement instanceof HTMLDivElement)) return
        this.overlayElement.addEventListener("click", () => this.closeOffCanvas())
    }

    private initCloseBtns() {
        for (const closeOffCanvas of this.offCanvasCloseBtns) {
            closeOffCanvas.addEventListener("click", this.closeOffCanvas)
        }
        !this.staticBackdrop && this.closeWithOverlay()
    }

    private changeState() {
        const curState = this.offCanvasElement.getAttribute("data-state")
        curState === "open" ? this.closeOffCanvas() : this.openOffCanvas()
    }

    private initTriggers() {
        for (const triggerBtn of this.offCanvasTriggers) triggerBtn.addEventListener("click", () => this.changeState())
    }

    private init() {
        this.initTriggers()
        this.initCloseBtns()
        if (this.overlayElement instanceof HTMLDivElement) appendBefore({ newElement: this.overlayElement, existingElement: this.offCanvasElement })
        injectStyles()
    }

    public close() {
        this.openOffCanvas()
    }
    public open() {
        this.closeOffCanvas()
    }
}

export default Offcanvas