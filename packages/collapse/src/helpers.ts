export const expandCollapse = (
    collapseElement: HTMLElement,
    triggerElement: HTMLElement | null, state: "open" | "close",
    orientation: "vertical" | "horizontal",
    collapseElementWidth?:number
) => {
    if (!(collapseElement instanceof HTMLElement)) throw new Error("accordion item not a valid HTMLELement")

    collapseElement.setAttribute("aria-hidden", state === "open" ? "false" : "true")
    collapseElement.setAttribute("data-state", state)
    switch (orientation) {
        case "horizontal": {
            collapseElement.style.width = state === "open" ? `${collapseElementWidth}px` : "0px"
            break;
        }
        default: {
            collapseElement.style.height = state === "open" ? `${collapseElement.scrollHeight}px` : "0px"
            break;
        }
    }
    if (triggerElement instanceof HTMLElement) triggerElement.setAttribute("aria-expanded", state === "open" ? "true" : "false")
}