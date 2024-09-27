
import { actionToggler as toggleDataAttribute } from "@flexilla/utilities/toggler"
import { $, keyboardNavigation } from "@flexilla/utilities"
import "./../main"

const popperEl = $("[data-fx-popper]") as HTMLElement
const navigate = keyboardNavigation({
    containerElement: popperEl,
    targetChildren: "a:not([disabled]), button:not([disabled])",
    direction: "up-down"
})

const triggerElement = $("[data-dropdown-trigger]")
if (triggerElement instanceof HTMLElement) {
    toggleDataAttribute({
        trigger: triggerElement,
        targets: [
            {
                element: popperEl,
                attributes: {
                    initial: { 'data-state': 'close' },
                    to: { 'data-state': 'open' }
                }
            }
        ],
        onToggle({ isExpanded }) {
            if (!isExpanded) navigate.destroy()
            else navigate.make()
        },
    })
}