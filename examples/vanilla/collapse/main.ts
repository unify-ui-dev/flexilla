import "./../main"
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
const collapse = new Collapse("[data-collapsible-5]",{
    onToggle({ isExpanded }) {
        
    },
})


