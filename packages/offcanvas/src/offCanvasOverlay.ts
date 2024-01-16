import { OffcanvasOptions } from "./types";

const getOptionClassNameFromOptions = (options: OffcanvasOptions | undefined) => {
    if (!options) return
    const { visibility } = options
    if (visibility === "hidden") return
    const { backdropClass } = options
    return backdropClass || ""
}

export const createOverlay = (options: OffcanvasOptions | undefined, overlayClassName: string, offcanvasId: string): HTMLDivElement | undefined => {
    if (!options && overlayClassName === "") return
    const overlayElement = document.createElement("div")
    overlayElement.setAttribute("aria-hidden", "true")
    overlayElement.setAttribute("data-fx-offcanvas-overlay", "")
    overlayElement.setAttribute("data-offcanvas-el", offcanvasId)
    overlayElement.hidden = true
    const backdropClass = getOptionClassNameFromOptions(options)
    const overlayClassName_ = backdropClass !== "" && backdropClass || overlayClassName
    if (overlayClassName_ === "") return
    const className = overlayClassName_.split(" ")
    overlayClassName_ !== "" && overlayElement.classList.add(...className)
    return overlayElement
}