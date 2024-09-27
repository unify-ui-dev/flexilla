import { $$ } from "./../selector";
import { $getEl } from "./../selector";
import { KeyDirAccessibilityOptions } from "./types";


export const keyboardNavigation = (
    { containerElement, targetChildren = "a:not([disabled]), button:not([disabled])", direction }: KeyDirAccessibilityOptions
) => {

    let hasEventListener = false
    const parentEl = $getEl(containerElement as HTMLElement) || document.body;
    const children = typeof targetChildren === "string" ? $$(targetChildren, parentEl) : targetChildren;

    const makeAccessible = (event: KeyboardEvent) => {
        event.preventDefault()
        parentEl.focus()
        if (children.length === 0) return;

        const key = event.key;
        const current = document.activeElement;
        let currentInd = children.findIndex((el: HTMLElement) => el === current);

        if (currentInd === -1) {
            if (key === "ArrowUp" || key === "ArrowLeft") {
                children[children.length - 1].focus();
            } else {
                children[0].focus();
            }
            return;
        }

        const goPrev = (index: number) => (index > 0 ? index - 1 : children.length - 1);
        const goNext = (index: number) => (index < children.length - 1 ? index + 1 : 0);

        const directionIsAllOrUpDown = direction === "all" || direction === "up-down"
        const directionIsAllOrLeftRight = direction === "all" || direction === "left-right"
        switch (key) {
            case 'ArrowDown':
                if (directionIsAllOrUpDown) {
                    event.preventDefault();
                    currentInd = goNext(currentInd);
                }
                break;
            case 'ArrowRight':
                if (directionIsAllOrLeftRight) {
                    event.preventDefault();
                    currentInd = goNext(currentInd);
                }
                break;
            case 'ArrowUp':
                if (directionIsAllOrUpDown) {
                    event.preventDefault();
                    currentInd = goPrev(currentInd);
                }
                break;
            case 'ArrowLeft':
                if (directionIsAllOrLeftRight) {
                    event.preventDefault();
                    currentInd = goPrev(currentInd);
                }
                break;
            case 'Home':
                event.preventDefault();
                currentInd = 0;
                break;
            case 'End':
                event.preventDefault();
                currentInd = children.length - 1;
                break;
            default:
                return; // Exit if the key is not one of the handled keys
        }

        if (children[currentInd] !== current) {
            children[currentInd].focus();
        }
    };

    const make = () => {
        if (!hasEventListener) {
            document.addEventListener('keydown', makeAccessible);
            hasEventListener = true;
        }
    };

    const destroy = () => {
        if (hasEventListener) {
            document.removeEventListener('keydown', makeAccessible);
            hasEventListener = false;
        }
    };
    return {
        make,
        destroy
    };
};