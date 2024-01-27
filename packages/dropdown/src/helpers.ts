import { setAttributes } from "@flexilla/utilities"

const updateDropDownState = (
    { state, container, trigger, content }: {
        state: "open" | "close",
        container: HTMLElement,
        trigger: HTMLElement,
        content: HTMLElement
    }) => {
    setAttributes(container, {
        "data-state": state
    })
    setAttributes(trigger, {
        "aria-expanded": `${state === "open"}`
    })
    setAttributes(content, {
        "data-state": state,
        "aria-hidden": `${state !== "open"}`,
    })
}

export const removeFocusOnItem = (items:HTMLElement[]) => {
    const focusedElement = document.activeElement
    if(!(focusedElement instanceof HTMLElement)) return
    if(items.includes(focusedElement)){
        focusedElement.blur()
    }
}

export const initDropdownAttributes = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    if (!container.hasAttribute("data-state")) setAttributes(container, {
        "data-state": "close"
    })
    if (!container.hasAttribute("data-fx-dropdown")) setAttributes(container, {
        "data-fx-dropdown": ''
    })
    if (!trigger.hasAttribute("aria-expanded")) setAttributes(trigger, {
        "aria-expanded": "false"
    })
    if (!popper.hasAttribute("aria-hidden")) setAttributes(popper, {
        "data-state": "close",
        "aria-hidden": "true",
    })
}

export const showDropdown = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updateDropDownState({ state: "open", container, trigger, content: popper })
}

export const hideDropdown = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updateDropDownState({ state: "close", container, trigger, content: popper })
}


/**
 * Focuses on the first item in the dropdown content.
 */
const focusFirstItem = (items: HTMLElement[]) => items.length > 0 && items[0].focus();

/**
 * Focuses on the last item in the dropdown content.
 */
const focusLastItem = (items: HTMLElement[]) =>
    items.length > 0 && items[items.length - 1].focus();


/**
 * Handles key events for arrow up and arrow down for navigating dropdown items.
 * @param {KeyboardEvent} event - The keydown event.
 */
const onKeyUpDown = (event: KeyboardEvent, items: HTMLElement[]) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        const current = document.activeElement;
        let currentInd = items.findIndex((el) => el === current);
        if (currentInd === -1) {
            if (event.key === "ArrowUp") focusLastItem(items);
            else focusFirstItem(items);
        } else {
            if (event.key === "ArrowUp" && currentInd > 0) currentInd--;
            else if (event.key === "ArrowDown" && currentInd + 1 < items.length)
                currentInd++;
            items[currentInd].focus();
        }
    }
};

export const handleDocKeyDown = ({
    event,
    items,
    dropdownElement, preventCloseFromOutside, hideDropDown,
    triggerStrategy
}: {
    event: KeyboardEvent,
    items: HTMLElement[], dropdownElement: HTMLElement,
    preventCloseFromOutside: boolean,
    triggerStrategy: "click" | "hover",
    hideDropDown: () => void
}) => {
    if (triggerStrategy !== "hover" && event.key === "Escape") {
        if (dropdownElement.getAttribute("data-state") === "open") {
            if (!preventCloseFromOutside) hideDropDown();
        }
    } else onKeyUpDown(event, items);
}