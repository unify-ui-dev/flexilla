import { injectStyle } from "@flexilla/utilities"

export const injectStyles = () => {
    const newStyles = "[data-fx-offcanvas-overlay]{position: fixed;inset: 0;}[data-fx-offcanvas-overlay]:not(:hidden){display: flex;}[data-fx-offcanvas-overlay]:is(:hidden){display: none;}"
    injectStyle({
        newStyles:newStyles,
        identifier:"[data-fx-offcanvas]"
    })
}