import { injectStyle } from "@flexilla/utilities"

const injectStyles = () => {
    const newStyles = "[data-fx-offcanvas-overlay]{position: fixed;inset: 0;display: flex;}[data-fx-offcanvas-overlay][data-state=visible]{visibility: visible;}[data-fx-offcanvas-overlay][data-state=hidden]{visibility: hidden;}"
    injectStyle({
        newStyles: newStyles,
        identifier: "[data-fx-offcanvas]"
    })
}

export const injectDefault = () => {
    const allOffcanvas = document.querySelectorAll("[data-fx-offcanvas]")
    if (allOffcanvas.length > 0) injectStyles()
}