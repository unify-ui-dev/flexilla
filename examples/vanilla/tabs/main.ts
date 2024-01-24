import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { Tabs } from "flexilla"

const element = document.querySelector("[data-tabs]")
if (element instanceof HTMLElement) {
    new Tabs({
        tabsElement: element,
    })
}
const element2 = document.querySelector("[data-use-indicator]")
if (element2 instanceof HTMLElement) {
    new Tabs({
        tabsElement: element2,
        options: {

        },
    })
}
const tabAnimated = document.querySelector("[data-tab-animated-key]")
if (tabAnimated instanceof HTMLElement) {
    new Tabs({
        tabsElement: tabAnimated,
        options: {
            orientation: "horizontal"
        },
        indicatorOptions: {
            useIndicator: true,
            className: "rd bg-gray3 absolute top-0 left-0",
        }
    })
}

const verticalTab = document.querySelector("[data-vertical-tab]")
if (verticalTab instanceof HTMLElement) {
    new Tabs({
        tabsElement: verticalTab,
        options: {
            orientation: "vertical"
        },
    })
}
const verticalTab2 = document.querySelector("[data-vertical-tab-2]")
if (verticalTab2 instanceof HTMLElement) {
    new Tabs({
        tabsElement: verticalTab2,
        options: {
            orientation: "vertical"
        },
        indicatorOptions: {
            useIndicator: true,
            className: "rd bg-gray3 absolute top-0 left-0"
        }
    })
}
const tabWithDefault = document.querySelector("[data-tab-default-indicator]")
if (tabWithDefault instanceof HTMLElement) {
    new Tabs({
        tabsElement: tabWithDefault,
        options: {
            orientation: "horizontal"
        },
        indicatorOptions: {
            useIndicator: true,
            className: "rd bg-gray3 absolute top-0 left-0"
        }
    })
}