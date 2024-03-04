import { Tabs } from "@flexilla/tabs"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/tabs/tabs.css"


new Tabs("[data-tabs]")

new Tabs("[data-tabs-nested2]")

new Tabs("[data-with-indicator]")

new Tabs("[data-tab-animated-key]",
    {
        orientation: "horizontal",
        indicatorOptions: {
            className: "rd bg-gray3 absolute top-0 left-0",
        }
    }
)

new Tabs("[data-vertical-tab]",
    {
        orientation: "vertical"
    },
)

new Tabs("[data-vertical-tab-2]",
    {
        orientation: "vertical",
        indicatorOptions: {
            className: "rd bg-gray3 absolute top-0 left-0"
        }
    }
)

new Tabs('[data-tab-default-indicator]',
    {
        orientation: "horizontal",
        indicatorOptions: {
            className: "rd bg-gray3 absolute top-0 left-0"
        }
    }
)