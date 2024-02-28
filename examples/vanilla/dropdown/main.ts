import { Dropdown } from "@flexilla/dropdown"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/dropdown/dropdown.css"

new Dropdown("[data-drop-down-1]")
new Dropdown("[data-drop-down-2]")
new Dropdown(
    "[data-drop-down-3]",
    {
        triggerStrategy: "hover"
    }
)
new Dropdown("[data-drop-down-4]")
new Dropdown("[data-drop-down-5]",
    {
        preventCloseFromInside: true
    }
)
new Dropdown("[data-drop-down-6]",
    {
        preventCloseFromOutside: true
    }
)