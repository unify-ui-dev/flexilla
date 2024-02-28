import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import { Collapse } from "@flexilla/collapse"

new Collapse("[data-collapsible-1]")
new Collapse(
    "[data-collapsible-2]",
    {
        orientation: "horizontal"
    }
)
new Collapse("[data-collapsible-3]")

new Collapse(
    '[data-collapsible-4]',
    {
        orientation: "horizontal"
    }
)
new Collapse("[data-collapsible-5]")