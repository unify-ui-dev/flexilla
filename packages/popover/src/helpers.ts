import { setAttributes } from "@flexilla/utilities"

export const updatePopoverState = (
    { state,  trigger, popper }: {
        state: "open" | "close",
        trigger: HTMLElement,
        popper: HTMLElement
    }) => {
    setAttributes(popper, {
        "data-state": state
    })
    setAttributes(trigger, {
        "aria-expanded": `${state}`
    })
}


export const showPopover = ({  trigger, popper }: {
    container?: HTMLElement|null,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updatePopoverState({ state: "open", trigger, popper })
}

export const hidePopover = ({  trigger, popper }: {
    container?: HTMLElement|null,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updatePopoverState({ state: "close", trigger, popper })
}



