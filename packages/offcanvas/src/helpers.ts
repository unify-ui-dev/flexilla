import { find, findAll } from "@fx-lib/utilities"

/**
* Toggle the state of the Offcanvas between open and close.
*/
export const toggleOffCanvasState = (offCanvasElement: HTMLElement, overlayElement: HTMLDivElement | undefined, allowBodyScroll: boolean, state: "open" | "close") => {
    offCanvasElement.setAttribute("aria-hidden", state === "open" ? "false" : "true")
    offCanvasElement.setAttribute("data-state", state)
    if (overlayElement) {
        overlayElement.hidden = state === "close"
        overlayElement.style.display = state === "open" ? "flex" : "none"
    }
    if (!allowBodyScroll) toggleBodyScroll(state)
}

/**
* Toggle body scroll based on the Offcanvas state.
*/
const toggleBodyScroll = (state: "open" | "close") => {
    document.body.style.overflow = state === "open" ? "hidden" : "auto";
}

/**
* Close all opened Offcanvas elements except the current one.
*/
const closeOpenedOffCanvas = (offcanvas: HTMLElement, currentOffcanvas: HTMLElement) => {
    if (offcanvas === currentOffcanvas) return
    offcanvas.setAttribute("aria-hidden", "true")
    offcanvas.setAttribute("data-state", "close")
    const overlayEl = find({
        selector: `[data-fx-offcanvas-overlay][data-offcanvas-el=${offcanvas.getAttribute("id")}]`,
        parentElement: offcanvas.parentElement as HTMLElement
    })
    if (overlayEl instanceof HTMLElement) overlayEl.hidden = true
}
/**
* Close all opened Offcanvas elements.
*/
export const closeAllOpenedOffcanvas = (currentOffcanvas: HTMLElement) => {
    const openedOffCans = findAll({
        selector: "[data-fx-offcanvas][data-state=open]",
        parentElement: document.body
    })
    if (openedOffCans.length <= 0) return
    for (const openedOffCan of openedOffCans) closeOpenedOffCanvas(openedOffCan, currentOffcanvas)
}