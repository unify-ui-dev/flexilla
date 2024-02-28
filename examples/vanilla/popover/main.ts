import { Tooltip } from "@flexilla/tooltip"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/tooltip/tooltip.css"

new Tooltip(
  "[data-popover-1]",
  {
    triggerStrategy: "click"
  })

new Tooltip("[data-popover-bm]",
  {
    triggerStrategy: "click",
    placement: "bottom"
  })

new Tooltip("[data-popover-bs]",
  {
    triggerStrategy: "click",
    placement: "bottom-start"
  })

new Tooltip("[data-popover-be]",
  {
    triggerStrategy: "click",
    placement: "bottom-end"
  })

new Tooltip("[data-popover-tm]",
  {
    triggerStrategy: "click",
    placement: "top"
  })


new Tooltip("[data-popover-ts]",
  {
    triggerStrategy: "click",
    placement: "top-start"
  })

new Tooltip("[data-popover-te]",
  {
    triggerStrategy: "click",
    placement: "top-end"
  })

new Tooltip("[data-popover-lm]",
  {
    triggerStrategy: "click",
    placement: "left"
  })

new Tooltip("[data-popover-ls]",
  {
    triggerStrategy: "click",
    placement: "left-start"
  })

new Tooltip("[data-popover-le]",
  {
    triggerStrategy: "click",
    placement: "left-end"
  })

new Tooltip("[data-popover-rm]",
  {
    triggerStrategy: "click",
    placement: "right"
  })

new Tooltip("[data-popover-rs]",
  {
    triggerStrategy: "click",
    placement: "right-start"
  })
new Tooltip("[data-popover-re]",
  {
    triggerStrategy: "click",
    placement: "right-end"
  })


new Tooltip("[data-popover-hover]",
  {
    placement: "left",
  })

new Tooltip("[data-popover-hover-2]",
  {
    placement: "right",
    triggerStrategy: "hover"
  })


new Tooltip("[data-popover-offsetdistance]",
  {
    placement: "top-start"
  })

new Tooltip("[data-popover-offsetdistance-2]",
  {
    triggerStrategy: "click",
    placement: "bottom-start",
    offsetDistance: 14
  })