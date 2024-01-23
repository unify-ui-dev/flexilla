import { Tooltip } from 'fx-lib'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const tooltip1 = document.querySelector("[data-tooltip]#tooltip-test") as HTMLElement
new Tooltip({
  containerElement: tooltip1,
})

const tooltip2 = document.querySelector("[data-tooltip]#tooltip-testTop") as HTMLElement
new Tooltip({
  containerElement: tooltip2,
  options:{
    placement:"top"
  }
})

const tooltip3 = document.querySelector("[data-tooltip]#tooltip-testLeft") as HTMLElement
new Tooltip({
  containerElement: tooltip3,
  options:{
    placement:"left"
  }
})
const tooltip4 = document.querySelector("[data-tooltip]#tooltip-testRight") as HTMLElement
new Tooltip({
  containerElement: tooltip4,
  options:{
    placement:"right"
  }
})

const tooltip5 = document.querySelector("[data-tooltip]#tooltip-testClick") as HTMLElement
new Tooltip({
  containerElement: tooltip5,
  options:{
    triggerStrategy:"click"
  }
})
const tooltip6 = document.querySelector("[data-tooltip]#tooltip-testHover") as HTMLElement
new Tooltip({
  containerElement: tooltip6,
  options:{
    triggerStrategy:"hover"
  }
})