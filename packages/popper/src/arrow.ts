import { Arrow } from "./types";

export const createArrow = (
    {
        customClass,
    }: Arrow) => {
    const className = customClass?.split(" ")

    const arrow = document.createElement("span")
    arrow.setAttribute("aria-hidden", "true")
    arrow.hidden = true
    arrow.setAttribute("data-fx-poper-arrow", "arrow-indicator")
    if (className && className[0] !== "" && className.length > 0) arrow.classList.add(...className)

    const addToParent = (parentElement: HTMLElement, refElement: HTMLElement) => {
        const arrowExist = parentElement.querySelector("span[data-fx-poper-arrow]") as HTMLElement
        !arrowExist && parentElement.insertBefore(arrow, refElement)
    }

    const removeToParent = (parentElement: HTMLElement) => {

        if (parentElement.contains(arrow)) {
            parentElement.removeChild(arrow)
        }
    }

    return {
        addToParent,
        removeToParent
    }
}