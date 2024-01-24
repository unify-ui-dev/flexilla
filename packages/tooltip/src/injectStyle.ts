import { injectStyle } from "@flexilla/utilities"
export const injectStyles = () => {
    const newStyles = `
    [data-fx-tooltip] {position: relative;} 
    [data-fx-tooltip] [data-fx-popper][aria-hidden="true"]{visibility: hidden; position:absolute;}
    [data-fx-tooltip] [data-fx-popper][data-state="open"] {visibility: visible;}
    `
    injectStyle({
        newStyles: newStyles,
        identifier: "[data-fx-tooltip]"
    })
}