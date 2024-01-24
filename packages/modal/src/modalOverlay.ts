import { afterTransition, appendBefore } from "@flexilla/utilities"

const destroyAfter = (overlayElement: HTMLElement, modalElement: HTMLElement) => {
    modalElement.removeChild(overlayElement)
}

export const destroyOverlay = (overlayElement: HTMLElement, modalElement: HTMLElement) => {
    afterTransition({
        element: overlayElement,
        callback() {
            destroyAfter(overlayElement, modalElement)
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