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

    const placeTop = -popperHeight - offsetDistance
    const placeBottom = refHeight + offsetDistance
    const placeLeft = -popperWidth - offsetDistance
    const placeRight = refWidth + offsetDistance

    const canPlaceTop = availableSpaceTop >= popperHeight + offsetDistance
    const canPlaceBottom = availableSpaceBottom >= popperHeight + offsetDistance
    const canPlaceLeft = availableSpaceLeft >= popperWidth + offsetDistance
    const canPlaceRight = availableSpaceRight >= popperWidth + offsetDistance

    if (placement.startsWith("top")) {
        y = canPlaceTop ? placeTop : canPlaceBottom ? placeBottom : placeTop;
    } else if (placement.startsWith("bottom")) {
        y = canPlaceBottom ? placeBottom : canPlaceTop ? placeTop : placeBottom;
    } else if (placement.startsWith("left")) {
        x = canPlaceLeft ? placeLeft : canPlaceRight ? placeRight : placeLeft;
    } else if (placement.startsWith("right")) {
        x = canPlaceRight ? placeRight : canPlaceLeft ? placeLeft : placeRight;
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