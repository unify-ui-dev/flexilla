const getAccordionPaddingY = (accordionItem: HTMLElement) => {
    const computedStyle = getComputedStyle(accordionItem)
    return {
        pt: parseFloat(computedStyle.paddingTop),
        pb: parseFloat(computedStyle.paddingBottom),
        pl: parseFloat(computedStyle.paddingLeft),
        pr: parseFloat(computedStyle.paddingRight)
    }
}

export const expandCollapse = (collapseElement: HTMLElement, triggerElement: HTMLElement | null, state: "open" | "close", orientation: "vertical" | "horizontal") => {
    if (!(collapseElement instanceof HTMLElement)) throw new Error("accordion item not a valid HTMLELement")
    const { pt, pb, pl, pr } = getAccordionPaddingY(collapseElement)
    collapseElement.setAttribute("aria-hidden", state === "open" ? "false" : "true")
    collapseElement.setAttribute("data-state", state)
    switch (orientation) {
        case "vertical":
            collapseElement.style.height = state === "open" ? `${collapseElement.scrollHeight}px` : "0px"
            if (pt > 0) collapseElement.style.paddingTop = state === "open" ? `${pt}px` : "0px"
            if (pb > 0) collapseElement.style.paddingBottom = state === "open" ? `${pb}px` : "0px"
            break;
        case "horizontal":
            collapseElement.style.width = state === "open" ? `${collapseElement.scrollWidth}px` : "0px"
            if (pr > 0) collapseElement.style.paddingRight = state === "open" ? `${pr}px` : "0px"
            if (pl > 0) collapseElement.style.paddingLeft = state === "open" ? `${pl}px` : "0px"
            break;
        default:
            break;
    }
    triggerElement instanceof HTMLElement && triggerElement.setAttribute("aria-expanded", state === "open" ? "true" : "false")
}