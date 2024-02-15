import { Tabs } from "@flexilla/tabs"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/tabs/tabs.css"


const element = document.querySelector("[data-tabs]")
if (element instanceof HTMLElement) {
    new Tabs({
        tabsElement: element,
    })
}
const elementNested1 = document.querySelector("[data-tabs-nested]")
if (elementNested1 instanceof HTMLElement) {
    new Tabs({
        tabsElement: elementNested1,
    })
}
const elementNested2 = document.querySelector("[data-tabs-nested2]")
if (elementNested2 instanceof HTMLElement) {
    new Tabs({
        tabsElement: elementNested2,
    })
}
const element2 = document.querySelector("[data-with-indicator]")
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
            className: "rd bg-gray3 absolute top-0 left-0"
        }
    })
}