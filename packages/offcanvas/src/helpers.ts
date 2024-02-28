import { $, $$ } from "@flexilla/utilities"
import { destroyOverlay } from "./offCanvasOverlay"

/**
* Toggle the state of the Offcanvas between open and close.
*/
export const toggleOffCanvasState = (
    offCanvasElement: HTMLElement,
    allowBodyScroll: boolean,
    state: "open" | "close",) => {
    offCanvasElement.setAttribute("aria-hidden", state === "open" ? "false" : "true")
    offCanvasElement.setAttribute("data-state", state)
    if (!allowBodyScroll) toggleBodyScroll(state)
}

/**
* Toggle body scroll based on the Offcanvas state.
*/
const toggleBodyScroll = (state: "open" | "close") => {
    document.body.style.overflow = state === "open" ? "hidden" : "";
    document.body.style.overflowY = state === "open" ? "hidden" : "auto";
}

/**
* Close all opened Offcanvas elements except the current one.
*/
const closeOpenedOffCanvas = (offcanvas: HTMLElement, currentOffcanvas: HTMLElement) => {
    if (offcanvas === currentOffcanvas) return
    offcanvas.setAttribute("aria-hidden", "true")
    offcanvas.setAttribute("data-state", "close")
    const overlayEl = $(`[data-fx-offcanvas-overlay][data-offcanvas-el=${offcanvas.getAttribute("id")}]`, offcanvas.parentElement as HTMLElement)
    if (overlayEl instanceof HTMLElement) destroyOverlay(overlayEl, offcanvas.parentElement as HTMLElement)

}
/**
* Close all opened Offcanvas elements.
*/
export const closeAllOpenedOffcanvas = (currentOffcanvas: HTMLElement) => {
    const openedOffCans = $$("[data-fx-offcanvas][data-state=open]")
    if (openedOffCans.length <= 0) return
    for (const openedOffCan of openedOffCans) closeOpenedOffCanvas(openedOffCan, currentOffcanvas)
}