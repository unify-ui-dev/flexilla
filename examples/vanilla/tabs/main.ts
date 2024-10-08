import { Tabs } from "./../../../packages/tabs/src/index"
import "./../main"


new Tabs("[data-tabs]")

new Tabs("[data-tabs-nested2]")

new Tabs("[data-with-indicator]")

new Tabs("[data-tab-animated-key]",
    {
        indicatorOptions: {
            className: "ui-tabs-indicator rd bg-zinc2 dark-bg-zinc8 absolute top-0 left-0",
        },
    }
)

new Tabs("[data-vertical-tab]")

new Tabs("[data-vertical-tab-2]",
    {
        indicatorOptions: {
            className: "ui-tabs-indicator rd bg-zinc2 dark-bg-zinc8 absolute top-0 left-0"
        }
    }
)

new Tabs('[data-tab-default-indicator]',
    {
        indicatorOptions: {
            className: "ui-tabs-indicator rd bg-zinc2 dark-bg-zinc8 absolute top-0 left-0"
        },
    }
)