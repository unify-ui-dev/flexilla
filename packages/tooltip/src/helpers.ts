import { setAttributes } from "@flexilla/utilities"

const updateTooltipState = (
    { state, container, trigger, popper }: {
        state: "open" | "close",
        container: HTMLElement,
        trigger: HTMLElement,
        popper: HTMLElement
    }) => {
    setAttributes(container, {
        "data-state": state
    })
    setAttributes(trigger, {
        "aria-expanded": `${state}`
    })
    setAttributes(popper, {
        "data-state": state,
        "aria-hidden": `${state !== "open"}`,
    })
}

export const initPoppoverAttributes = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    if (!container.hasAttribute("data-open")) setAttributes(container, {
        "data-state": "close"
    })
    if (!container.hasAttribute("data-fx-tooltip")) setAttributes(container, {
        "data-fx-tooltip": ''
    })
    if (!trigger.hasAttribute("aria-expanded")) setAttributes(trigger, {
        "aria-expanded": "false"
    })
    if (!popper.hasAttribute("aria-hidden")) setAttributes(popper, {
        "data-state": "close",
        "aria-hidden": "true",
    })
}

export const showTooltip = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updateTooltipState({ state: "open", container, trigger, popper })
}

export const hidePopover = ({ container, trigger, popper }: {
    container: HTMLElement,
    trigger: HTMLElement,
    popper: HTMLElement
}) => {
    updateTooltipState({ state: "close", container, trigger, popper })
}
