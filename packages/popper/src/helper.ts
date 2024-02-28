import { Dimensions, ElementType } from "./types";

export const getDimensions = ({ reference, popper }: ElementType): Dimensions => {
    const popperRect = popper.getBoundingClientRect();
    const refRect = reference.getBoundingClientRect();
    return {
        popperHeight: popperRect.height,
        popperWidth: popperRect.width,
        refHeight: refRect.height,
        refWidth: refRect.width,
        refLeft: refRect.left,
        refTop: refRect.top,
        refRight: refRect.right
    };
};

export const canBeAlignedOnMiddleX = (popperWidth: number, refWidth: number, refLeft: number, windowWidth: number): boolean => {
    const spaceOnLeft = refLeft;
    const spaceOnRight = windowWidth - (refLeft + refWidth);
    return spaceOnLeft >= (popperWidth - refWidth) / 2 && spaceOnRight >= (popperWidth - refWidth) / 2;
};

export const canBeAlignedOnMiddleY = (popperHeight: number, refHeight: number, refTop: number, windowHeight: number): boolean => {
    return (popperHeight - refHeight) / 2 <= refTop &&
        refTop + popperHeight / 2 + refHeight / 2 <= windowHeight;
};

export const adjustYForTopVisibility = (
    canAdjustYToFitTop: () => boolean,
    canAdjustYToFitBottom: () => boolean,
    refTop: number, refHeight: number, popperHeight: number): number => {

    return refTop > popperHeight - refHeight ?
        (
            canAdjustYToFitBottom() ? window.innerHeight - (popperHeight + refTop)
                : -popperHeight
        ) :
        canAdjustYToFitTop() ? -refTop : refHeight;
};

export const canAdjustYToFitBottom = (
    refTop: number,
    refHeight: number,
    popperHeight: number,
    windowHeight: number
): boolean => {
    return refTop <= windowHeight &&
        popperHeight - refTop <= refHeight;
};

export const canAdjustYToFitTop = (refTop: number, refHeight: number, popperHeight: number, windowHeight: number): boolean => {
    return popperHeight <= windowHeight && -refTop <= refHeight;
};

export const adjustXForVisibility = (
    canAdjustXToFitRight: () => boolean,
    refLeft: number, popperWidth: number, windowWidth: number,
    refWidth: number
) => {
    const spaceOnLeft = refLeft;
    const spaceOnRight = windowWidth - (popperWidth + refLeft);
    return canAdjustXToFitRight() ? -refLeft : spaceOnLeft > spaceOnRight && windowWidth - (popperWidth + refLeft -refWidth) + popperWidth <= windowWidth ?
     windowWidth - (popperWidth + refLeft) :-refLeft;
}

export const canAdjustXToFitRight = (refLeft: number,
    windowWidth: number, popperWidth: number, refWidth: number) => {
    return windowWidth - (refLeft + refWidth) >= popperWidth && windowWidth - (popperWidth + refLeft) <= windowWidth
}