import { injectStyle } from "@flexilla/utilities"

/**
* Inject the defaultDropdown styles
*/
export const injectStyles = () => {
    const newStyles = `[data-fx-dropdown]{position: relative;}[data-fx-dropdown] [data-dropdown-content]{visibility: hidden;}[data-fx-dropdown][data-state="open"] [data-dropdown-content]{visibility: visible;}`
    injectStyle({
        newStyles: newStyles,
        identifier: "[data-fx-dropdown]"
    })
}
