import { Tooltip } from "@flexilla/tooltip"
import "./../main"

new Tooltip("[data-tooltip]#tooltip-test")

new Tooltip("[data-tooltip]#tooltip-testTop",
  {
    placement: "top"
  }
)

new Tooltip(
  "[data-tooltip]#tooltip-testLeft",
  {
    placement: "left"
  }
)

new Tooltip("[data-tooltip]#tooltip-testRight",
  {
    placement: "right"
  }
)


new Tooltip("[data-tooltip]#tooltip-testClick",
  {
    triggerStrategy: "click"
  }
)

new Tooltip("[data-tooltip]#tooltip-testHover",
  {
    triggerStrategy: "hover"
  }
)