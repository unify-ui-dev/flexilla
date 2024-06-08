import { keyboardNavigation } from "@flexilla/utilities/accessibility"
import { toggleDataAttribute } from "@flexilla/utilities/toggler"
import { $ } from "@flexilla/utilities"
import "./../main"

const navigate = keyboardNavigation({
    element: "[data-fx-popper]",
    targetChildren: "a:not([disabled])",
    direction: "all"
})


const triggerElement = $("[data-dropdown-trigger]")
if (triggerElement instanceof HTMLElement) {

    triggerElement.addEventListener("click", () => {
        const isOpen = $('[data-fx-popper]')?.getAttribute("data-state") === "open"
        if (!isOpen) {
            $('[data-fx-popper]')?.focus()
            navigate.make()
        }
        else navigate.destroy()
    })

    toggleDataAttribute({
        trigger: triggerElement,
        target: "[data-fx-popper]",
        attributes: {
            from: {
                'data-state': 'open'
            },
            to: {
                'data-state': 'close'
            }
        }
    })
}