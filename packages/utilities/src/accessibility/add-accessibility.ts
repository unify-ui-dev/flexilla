import { $$ } from "./../selector";
import { $getEl } from "./../selector";
import { KeyDirAccessibilityOptions } from "./types";

export const keyboardNavigation = (
    { element, targetChildren = "a:not([disabled]), button:not([disabled])", direction }: KeyDirAccessibilityOptions
) => {

    const targetEl = $getEl(element)
    const children = $$(targetChildren, targetEl)


    const makeAccessible = (event: KeyboardEvent) => {
        if (children.length === 0) return
        const key = event.key;
        const current = document.activeElement;
        let currentInd = children.findIndex((el:HTMLElement) => el === current);
        if (currentInd === -1) {
            if (key === "ArrowUp") children[children.length - 1].focus();
            else children[0].focus();
        }
        const goPrev = (index: number) => {
            if (index > 0) return index - 1
            return children.length - 1
        }
        const goNext = (index: number) => {
            if (index < children.length - 1) return index + 1
            return 0
        }
        switch (key) {
            case 'ArrowDown':
                event.preventDefault();
                if (direction === "all" || direction === "up-down") currentInd = goNext(currentInd)
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (direction === "all" || direction === "left-right") currentInd = goNext(currentInd)
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (direction === "all" || direction === "up-down") currentInd = goPrev(currentInd)
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (direction === "all" || direction === "left-right") currentInd = goPrev(currentInd)
                break;
            case 'Home':
                event.preventDefault();
                currentInd = 0
                break;
            case 'End':
                event.preventDefault();
                currentInd = children.length - 1
                break;
        }
        children[currentInd].focus()
    }

    const make = () => {
        targetEl.addEventListener('keydown', makeAccessible);
    }
    const destroy = () => {
        targetEl.removeEventListener('keydown', makeAccessible);
    }

    return {
        make,
        destroy
    }
}