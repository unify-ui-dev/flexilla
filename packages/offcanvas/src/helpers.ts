import { appendBefore, find, findAll } from "@fx-lib/utilities"
import { createOverlay, destroyOverlay } from "./offCanvasOverlay"
import { BackdropOptions } from "./types"

/**
* Toggle the state of the Offcanvas between open and close.
*/
export const toggleOffCanvasState = (
    offCanvasElement: HTMLElement,
    offcanvasId: string,
    allowBodyScroll: boolean,
    state: "open" | "close",
    staticBackdrop?: boolean,
    overlay?: {
        options: BackdropOptions | undefined, overlayClassName: string, offcanvasId: string,
        closeOverlayCallBak?: (() => void)
    }) => {
    offCanvasElement.setAttribute("aria-hidden", state === "open" ? "false" : "true")
    offCanvasElement.setAttribute("data-state", state)

    switch (state) {
        case "close": {
            const overlayElement = find({ selector: `[${offcanvasId}]`, parentElement: offCanvasElement.parentElement as HTMLElement })
            if (overlayElement) {
                overlayElement.setAttribute("data-is-visible", "false")
                destroyOverlay(overlayElement)
            }
            break;
        }
        default: {
            const overlayElement = createOverlay(
                overlay?.options,
                overlay?.overlayClassName as string,
                offcanvasId
            )
            if (overlayElement instanceof HTMLElement) {
                appendBefore({ newElement: overlayElement, existingElement: offCanvasElement })
                !staticBackdrop && overlayElement.addEventListener("click", () => {
                    overlay?.closeOverlayCallBak?.()
                })
            }
            break;
        }
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
    if (overlayEl instanceof HTMLElement) destroyOverlay(overlayEl)

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