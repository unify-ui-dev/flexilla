import { afterTransition, appendBefore } from "@flexilla/utilities"

const destroyAfter = (overlayElement: HTMLElement) => {
    overlayElement.parentElement?.removeChild(overlayElement)
}

export const destroyOverlay = (overlayElement: HTMLElement) => {
    overlayElement.setAttribute("data-state", "close")
    afterTransition({
        element: overlayElement,
        callback() {
            destroyAfter(overlayElement)
        },
    })
}

export const buildOverlay = (
    { modalContent, overlayClassName }:
        {
            modalContent: HTMLElement,
            overlayClassName: string[] | ""
        }
) => {
    const overlayEl = document.createElement("span");
    overlayEl.setAttribute("aria-hidden", "true");
    overlayEl.setAttribute("data-state", "open")
    appendBefore({ newElement: overlayEl, existingElement: modalContent });
    overlayEl.classList.add(...overlayClassName);
    overlayEl.setAttribute("data-modal-overlay", "overlay-bg");
    return overlayEl
}