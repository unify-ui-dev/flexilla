import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { AutoResizeTextArea } from "@flexilla/flexilla"

const textArea = document.querySelector("[data-autoresizable]")

if (textArea instanceof HTMLTextAreaElement)
    new AutoResizeTextArea({ textareaElement: textArea })