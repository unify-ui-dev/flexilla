// import {} from "@flexilla"
import { CreatePopover } from "@flexilla/popover"
import "./../main"

new CreatePopover({
  trigger: "[data-fx-tooltip-trigger][data-popover-target]",
  content: "[data-popover-content]",
  options: {
    triggerStrategy:"click",
    preventCloseFromInside:true,
    offsetDistance:0
  }
})
