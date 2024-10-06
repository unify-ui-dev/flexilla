import { afterTransition } from "@flexilla/utilities";

const destroyAfter = (overlayElement: HTMLElement) => overlayElement.parentElement?.removeChild(overlayElement)


export const destroyOverlay = (overlayElement: HTMLElement) => {
    overlayElement.setAttribute("data-state", "invisible")
    afterTransition({
        element: overlayElement,
        callback() {
            destroyAfter(overlayElement)
        },
    })


}

export const createOverlay = (backdrop: string, offcanvasId: string): HTMLDivElement | undefined => {

    const overlayClassName_ = backdrop
    if (overlayClassName_ === "" || !overlayClassName_) return
    const overlayElement = document.createElement("div")
    overlayElement.setAttribute("aria-hidden", "true")
    overlayElement.setAttribute("data-state", "visible")
    overlayElement.setAttribute("data-fx-offcanvas-overlay", "")
    overlayElement.setAttribute("data-offcanvas-el", offcanvasId)
    if (overlayClassName_ === "") return
    const className = overlayClassName_.split(" ")
    overlayClassName_ !== "" && overlayElement.classList.add(...className)
    return overlayElement
}