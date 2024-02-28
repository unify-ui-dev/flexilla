import { Dismissible } from "@flexilla/dismissible"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'


new Dismissible('[data-remove-from-dom]', "remove-from-dom")
new Dismissible('[data-remove-from-screen]')