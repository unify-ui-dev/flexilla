import { Dropdown } from 'flexilla'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const dropDown1 = new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-1]") as HTMLElement,
    options: {}
})
new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-2]") as HTMLElement,
    options: {}
})
new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-3]") as HTMLElement,
    options: {
        triggerStrategy:"hover"
    }
})
new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-4]") as HTMLElement,
    options: {}
})
new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-5]") as HTMLElement,
    options: {
        preventCloseFromInside:true
    }
})
new Dropdown({
    dropdownElement: document.querySelector("[data-drop-down-6]") as HTMLElement,
    options: {
        preventCloseFromOutside:true
    }
})