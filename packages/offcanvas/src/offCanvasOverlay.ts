import { afterTransition } from "@flexilla/utilities";
import { BackdropOptions } from "./types";

const getOptionClassNameFromOptions = (options: BackdropOptions | undefined) => {
    if (!options) return
    const { visibility } = options
    if (visibility === "hidden") return
    const { backdropClass } = options
    return backdropClass || ""
}

const destroyAfter = (overlayElement: HTMLElement, parentElement_:HTMLElement) => {
    parentElement_.removeChild(overlayElement)
}

export const destroyOverlay = (overlayElement: HTMLElement, parentElement_:HTMLElement) => {
    afterTransition({
        element: overlayElement,
        callback() {
            destroyAfter(overlayElement, parentElement_)
        },
    })
}

export const createOverlay = (options: BackdropOptions | undefined, overlayClassName: string, offcanvasId: string): HTMLDivElement | undefined => {
    if (!options && overlayClassName === "") return
    const overlayElement = document.createElement("div")
    overlayElement.setAttribute("aria-hidden", "true")
    overlayElement.setAttribute("data-state", "visible")
    overlayElement.setAttribute("data-fx-offcanvas-overlay", "")
    overlayElement.setAttribute("data-offcanvas-el", offcanvasId)
    const backdropClass = getOptionClassNameFromOptions(options)
    const overlayClassName_ = backdropClass !== "" && backdropClass || overlayClassName
    if (overlayClassName_ === "") return
    const className = overlayClassName_.split(" ")
    overlayClassName_ !== "" && overlayElement.classList.add(...className)
    return overlayElement
}