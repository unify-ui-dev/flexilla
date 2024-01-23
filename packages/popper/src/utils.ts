import {
    canBeAlignedOnMiddleX, canAdjustYToFitTop,
    canBeAlignedOnMiddleY, adjustYForTopVisibility, canAdjustYToFitBottom, adjustXForVisibility, canAdjustXToFitRight
} from "./helper";


type UtilType = {
    placement: string,
    refWidth: number,
    refTop: number,
    refLeft: number,
    popperWidth: number,
    refHeight: number,
    popperHeight: number,
    windowHeight: number,
    windowWidth: number,
    offsetDistance: number
}

export const determinePosition = (
    { placement,
        refWidth,
        refTop,
        refLeft,
        refHeight,
        popperWidth,
        popperHeight,
        windowHeight,
        windowWidth,
        offsetDistance
    }: UtilType
) => {
    // Calculate available space once for efficiency
    const availableSpaceRight = windowWidth - refLeft - refWidth;
    const availableSpaceLeft = refLeft;
    const availableSpaceBottom = windowHeight - refTop - refHeight;
    const availableSpaceTop = refTop;

    const adjustContentVisibilityY = () => adjustYForTopVisibility(
        () => canAdjustYToFitTop(refTop, refHeight, popperHeight, windowHeight),
        () => canAdjustYToFitBottom(refTop, refHeight, popperHeight, windowHeight), refTop, refHeight, popperHeight)

    const adjustContentVisibilityX = () => adjustXForVisibility(
        () => canAdjustXToFitRight(refLeft, windowWidth, popperWidth, refWidth),
        refLeft, popperWidth, windowWidth, refWidth
    )

    const calculateMiddleX = () => (
        canBeAlignedOnMiddleX(popperWidth, refWidth, refLeft, windowWidth) ?
            refWidth / 2 - popperWidth / 2 : adjustContentVisibilityX()
    )

    const calculateMiddleY = () => (
        canBeAlignedOnMiddleY(popperHeight, refHeight, refTop, windowHeight) ?
            refHeight / 2 - popperHeight / 2 :
            adjustContentVisibilityY()
    );

    const calculateXStart = () => (popperWidth + refLeft <= windowWidth ? 0 : adjustContentVisibilityX());
    const calculateXEnd = () => (popperWidth - refWidth <= refLeft ? -popperWidth + refWidth : adjustContentVisibilityX());
    const calculateYStart = () => (refTop + popperHeight <= windowHeight ? 0 : adjustContentVisibilityY());
    const calculateYEnd = () => (popperHeight - refHeight <= refTop ? -popperHeight + refHeight : adjustContentVisibilityY());

    let x = 0;
    let y = 0;

    if (placement.startsWith("top")) {
        y = availableSpaceTop >= popperHeight + offsetDistance ? -popperHeight - offsetDistance : refHeight + offsetDistance;
    } else if (placement.startsWith("bottom")) {
        y = availableSpaceBottom >= popperHeight + offsetDistance ? refHeight + offsetDistance : -popperHeight - offsetDistance;
    } else if (placement.startsWith("left")) {
        x = availableSpaceLeft >= popperWidth + offsetDistance ? -popperWidth - offsetDistance : refWidth + offsetDistance;
    } else if (placement.startsWith("right")) {
        x = availableSpaceRight >= popperWidth + offsetDistance ? refWidth + offsetDistance : -popperWidth - offsetDistance;
    }

    switch (placement) {
        case "bottom":
        case "bottom-middle":
        case "top":
        case "top-middle":
            x = calculateMiddleX();
            break;
        case "left":
        case "left-middle":
        case "right":
        case "right-middle":
            y = calculateMiddleY();
            break;
        case "bottom-start":
        case "top-start":
            x = calculateXStart();
            break;
        case "bottom-end":
        case "top-end":
            x = calculateXEnd();
            break;
        case "left-start":
        case "right-start":
            y = calculateYStart();
            break;
        case "left-end":
        case "right-end":
            y = calculateYEnd();
            break;
    }
    return { x, y };
}