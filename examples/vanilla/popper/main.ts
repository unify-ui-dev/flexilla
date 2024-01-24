import { CreatePopper } from '@flexilla/popper'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const ref1 = document.querySelector("[data-reference-1]")

if (ref1 instanceof HTMLElement) {

  const hideAllPopper = (currentPopper: HTMLElement) => {
    const poppersDemo = document.querySelectorAll("[data-popper-demo-1]")
    for (const popperDemo of poppersDemo) {
      if (popperDemo !== currentPopper) {
        popperDemo.setAttribute("data-state", "close")
        popperDemo.setAttribute("aria-hidden", "true")
        popperDemo.classList.add("invisible")
      }
    }
  }
  const triggerPopper = (popperEl: HTMLElement) => {
    const isOpened = popperEl.dataset.state === "open"
    if (isOpened) return
    hideAllPopper(popperEl)
    popperEl.setAttribute("data-state", "open")
    popperEl.setAttribute("aria-hidden", "false")
    popperEl.classList.remove("invisible")
  }

  const popBM = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-bm]") as HTMLElement,
    options: {
      placement: "bottom",
      offsetDistance: 5
    }
  })
  const popBS = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-bs]") as HTMLElement,
    options: {
      placement: "bottom-start",
      offsetDistance: 5
    }
  })
  const popBE = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-be]") as HTMLElement,
    options: {
      placement: "bottom-end",
      offsetDistance: 5
    }
  })
  const popRM = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-rm]") as HTMLElement,
    options: {
      placement: "right",
      offsetDistance: 5
    }
  })
  const popRS = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-rs]") as HTMLElement,
    options: {
      placement: "right-start",
      offsetDistance: 5
    }
  })
  const popRE = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-re]") as HTMLElement,
    options: {
      placement: "right-end",
      offsetDistance: 5
    }
  })
  const popTM = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-tm]") as HTMLElement,
    options: {
      placement: "top",
      offsetDistance: 5
    }
  })
  const popTS = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-ts]") as HTMLElement,
    options: {
      placement: "top-start",
      offsetDistance: 5
    }
  })
  const popTE = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-te]") as HTMLElement,
    options: {
      placement: "top-end",
      offsetDistance: 5
    }
  })
  const popLM = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-lm]") as HTMLElement,
    options: {
      placement: "left",
      offsetDistance: 5
    }
  })
  const popLS = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-ls]") as HTMLElement,
    options: {
      placement: "left-start",
      offsetDistance: 5
    }
  })
  const popLE = new CreatePopper({
    reference: ref1,
    popper: document.querySelector("[data-popper-le]") as HTMLElement,
    options: {
      placement: "left-end",
      offsetDistance: 5
    }
  })

  document.querySelector("[data-trigger-rm]")?.addEventListener("click", () => {
    popRM.cleanupEvents()
    popRM.updatePosition()
    triggerPopper(document.querySelector("[data-popper-rm]") as HTMLElement)
  })
  document.querySelector("[data-trigger-rs]")?.addEventListener("click", () => {
    popRS.cleanupEvents()
    popRS.updatePosition()
    triggerPopper(document.querySelector("[data-popper-rs]") as HTMLElement)
  })
  document.querySelector("[data-trigger-re]")?.addEventListener("click", () => {
    popRE.cleanupEvents()
    popRE.updatePosition()
    triggerPopper(document.querySelector("[data-popper-re]") as HTMLElement)
  })
  document.querySelector("[data-trigger-bm]")?.addEventListener("click", () => {
    popBM.cleanupEvents()
    popBM.updatePosition()
    triggerPopper(document.querySelector("[data-popper-bm]") as HTMLElement)
  })
  document.querySelector("[data-trigger-bs]")?.addEventListener("click", () => {
    popBS.cleanupEvents()
    popBS.updatePosition()
    triggerPopper(document.querySelector("[data-popper-bs]") as HTMLElement)
  })
  document.querySelector("[data-trigger-be]")?.addEventListener("click", () => {
    popBE.cleanupEvents()
    popBE.updatePosition()
    triggerPopper(document.querySelector("[data-popper-be]") as HTMLElement)
  })
  document.querySelector("[data-trigger-lm]")?.addEventListener("click", () => {
    popLM.cleanupEvents()
    popLM.updatePosition()
    triggerPopper(document.querySelector("[data-popper-lm]") as HTMLElement)
  })
  document.querySelector("[data-trigger-ls]")?.addEventListener("click", () => {
    popLS.cleanupEvents()
    popLS.updatePosition()
    triggerPopper(document.querySelector("[data-popper-ls]") as HTMLElement)
  })
  document.querySelector("[data-trigger-le]")?.addEventListener("click", () => {
    popLE.cleanupEvents()
    popLE.updatePosition()
    triggerPopper(document.querySelector("[data-popper-le]") as HTMLElement)
  })
  document.querySelector("[data-trigger-tm]")?.addEventListener("click", () => {
    popTM.cleanupEvents()
    popTM.updatePosition()
    triggerPopper(document.querySelector("[data-popper-tm]") as HTMLElement)
  })
  document.querySelector("[data-trigger-ts]")?.addEventListener("click", () => {
    popTS.cleanupEvents()
    popTS.updatePosition()
    triggerPopper(document.querySelector("[data-popper-ts]") as HTMLElement)
  })
  document.querySelector("[data-trigger-te]")?.addEventListener("click", () => {
    popTE.cleanupEvents()
    popTE.updatePosition()
    triggerPopper(document.querySelector("[data-popper-te]") as HTMLElement)
  })
}
