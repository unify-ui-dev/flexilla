import { Tooltip } from "@flexilla/tooltip"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/tooltip/tooltip.css"

new Tooltip({
  containerElement: document.querySelector("[data-popover-1]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-1] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-bm]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-bm] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "bottom"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-bs]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-bs] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "bottom-start"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-be]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-be] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "bottom-end"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-tm]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-tm] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "top"
  }
})


new Tooltip({
  containerElement: document.querySelector("[data-popover-ts]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-ts] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "top-start"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-te]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-te] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "top-end"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-lm]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-lm] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "left"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-ls]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-ls] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "left-start"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-le]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-le] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "left-end"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-rm]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-rm] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "right"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-rs]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-rs] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "right-start"
  }
})
new Tooltip({
  containerElement: document.querySelector("[data-popover-re]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-re] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "right-end"
  }
})


new Tooltip({
  containerElement: document.querySelector("[data-popover-hover]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-hover] [data-popover-trigger]") as HTMLElement,
  options: {
    placement: "left",
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-hover-2]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-hover-2] [data-popover-trigger]") as HTMLElement,
  options: {
    placement: "right",
    triggerStrategy: "hover"
  }
})


new Tooltip({
  containerElement: document.querySelector("[data-popover-offsetdistance]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-offsetdistance] [data-popover-trigger]") as HTMLElement,
  options: {
    placement: "top-start"
  }
})

new Tooltip({
  containerElement: document.querySelector("[data-popover-offsetdistance-2]") as HTMLElement,
  triggerElement: document.querySelector("[data-popover-offsetdistance-2] [data-popover-trigger]") as HTMLElement,
  options: {
    triggerStrategy: "click",
    placement: "bottom-start",
    offsetDistance: 14
  }
})