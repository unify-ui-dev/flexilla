import { Dismissible } from "flexilla"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const element1 = document.querySelector("[data-remove-from-dom]")
if (element1 instanceof HTMLElement)
    new Dismissible({ dismissibleElement: element1, action: "remove-from-dom" })

const element2 = document.querySelector("[data-remove-from-screen]")
if (element2 instanceof HTMLElement)
    new Dismissible({ dismissibleElement: element2 })