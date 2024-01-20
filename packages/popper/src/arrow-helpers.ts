import { Placement } from "./types";

type ArrowPosition = {
    popper: HTMLElement,
    arrowSize: number,
    offsetDistance: number,
    placement: Placement,
    refWidth: number,
    refHeight: number,
    x: number,
    y: number
}

export const setArrowPosition = (
    { popper, arrowSize, offsetDistance, placement, refWidth, refHeight, x, y }: ArrowPosition
) => {
    const arrowSpan = popper.parentElement?.querySelector("span[data-fx-poper-arrow]")

    if (arrowSpan instanceof HTMLElement) {
        const setArrowProperties = (xAxis: number, yAxis: number) => {
            arrowSpan.style.setProperty("--fx-popper-arrow-x", `${xAxis}px`);
            arrowSpan.style.setProperty("--fx-popper-arrow-y", `${yAxis}px`);
        }
        arrowSpan.style.setProperty("--fx-popper-size", `${arrowSize}px`);
        arrowSpan.style.setProperty("--fx-popper-size", `${arrowSize}px`);
        const setArrowPosition = () => {
            const { width: arrowWidth, height: arrowHeight } = arrowSpan.getBoundingClientRect()
            if (placement === "top" || placement === "top-middle" || placement === "bottom" || placement === "bottom-middle") {
                const xAxis = refWidth / 2 - arrowSpan.clientWidth / 2
                const yAxis = y >= 0 ? refHeight + offsetDistance / 2 : -offsetDistance - arrowHeight / 2
                setArrowProperties(xAxis, yAxis)
            } else if (placement === "right" || placement === "left") {
                const munisOffset = offsetDistance / 2
                const xAxis = x >= 0 ? refWidth + munisOffset : - offsetDistance - arrowWidth / 2
                const yAxis = refHeight / 2 - arrowHeight / 2
                setArrowProperties(xAxis, yAxis)
            }
        }
        setArrowPosition()
    }
}