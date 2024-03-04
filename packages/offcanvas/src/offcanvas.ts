
import { BackdropOptions, OffcanvasOptions } from "./types"
import { closeAllOpenedOffcanvas, toggleOffCanvasState } from "./helpers"
import { appendBefore, $$, $ } from "@flexilla/utilities"
import { createOverlay, destroyOverlay } from "./offCanvasOverlay"

/**
 * Class representing an Offcanvas element.
 */
class Offcanvas {
    private offCanvasElement: HTMLElement
    private offCanvasTriggers: HTMLElement[]
    private offCanvasCloseBtns: HTMLElement[]
    private allowBodyScroll: boolean
    private staticBackdrop: boolean
    private backdropClass: string
    private backdrop: BackdropOptions | undefined

    /**
     * Offcanvas Component
     * @param offcanvas 
     * @param options 
     */
    constructor(offcanvas: string | HTMLElement, options: OffcanvasOptions = {}) {

        const offCanvasElement = typeof offcanvas === "string" ? $(offcanvas) : offcanvas
        if (!(offCanvasElement instanceof HTMLElement)) throw new Error("Invalid Offcanvas, the provided Element is not a valid HTMLElement")
        const { staticBackdrop, allowBodyScroll, backdrop: overlay } = options
        this.offCanvasElement = offCanvasElement
        this.setupAttributes()
        this.staticBackdrop = staticBackdrop || (offCanvasElement.hasAttribute("data-static-backdrop") && offCanvasElement.dataset.staticBackdrop !== "false") || false
        this.allowBodyScroll = allowBodyScroll || (offCanvasElement.hasAttribute("data-allow-body-scroll") && offCanvasElement.dataset.allowBodyScroll !== "false") || false
        const offCanvasId = this.offCanvasElement.getAttribute("id")
        this.offCanvasTriggers = this.findOffCanvasElements("[data-offcanvas-trigger]", offCanvasId);
        this.offCanvasCloseBtns = this.findOffCanvasElements("[data-offcanvas-close]", offCanvasId);
        this.backdrop = overlay
        this.backdropClass = this.offCanvasElement.dataset.offcanvasBackdrop || ""
        this.init()
    }

    private findOffCanvasElements(selector: string, offCanvasId: string | null) {
        return $$(`${selector}[data-target=${offCanvasId}]`);
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
        const id = this.offCanvasElement.getAttribute("id")
        const overlayElement = $(`[data-fx-offcanvas-overlay][data-offcanvas-el=${id}]`, this.offCanvasElement.parentElement as HTMLElement)
        toggleOffCanvasState(
            this.offCanvasElement,
            this.allowBodyScroll,
            "close"
        )
        if (overlayElement instanceof HTMLElement)
            destroyOverlay(overlayElement, this.offCanvasElement.parentElement as HTMLElement)
        document.removeEventListener("keydown", this.closeWithEsc)
        !this.allowBodyScroll && !overlayElement && document.removeEventListener("click", (event) => this.closeWhenClickOutSide(event))
    }

    private openOffCanvas() {
        closeAllOpenedOffcanvas(this.offCanvasElement)
        toggleOffCanvasState(
            this.offCanvasElement,
            this.allowBodyScroll,
            "open")
        const id = this.offCanvasElement.getAttribute("id") as string
        const overlayElement = createOverlay(
            this.backdrop,
            this.backdropClass,
            id
        )
        if (overlayElement instanceof HTMLElement) {
            appendBefore({ newElement: overlayElement, existingElement: this.offCanvasElement })
            if (!this.staticBackdrop)
                overlayElement.addEventListener("click", () => {
                    this.closeOffCanvas()
                })
        }
        document.addEventListener("keydown", (event) => this.closeWithEsc(event))
    }

    /**
   * Close the Offcanvas when the "Escape" key is pressed.
   */
    private closeWithEsc(event: KeyboardEvent) {
        if (event.key === "Escape") { this.closeOffCanvas() }
    }


    private initCloseBtns() {
        for (const closeOffCanvas of this.offCanvasCloseBtns) {
            closeOffCanvas.addEventListener("click", this.closeOffCanvas)
        }
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
    }

    public open() {
        this.openOffCanvas()
    }
    public close() {
        this.closeOffCanvas()
    }

    /**
     * auto init Offcanvas based on the selector provided
     * @param selector {string} default is [data-fx-offcanvas] attribute
     */
    public static autoInit = (selector = "[data-fx-offcanvas]") =>{
        const offCanvasElements = $$(selector)
        for (const offCanvasElement of offCanvasElements)  new Offcanvas(offCanvasElement)
    }
}

export default Offcanvas