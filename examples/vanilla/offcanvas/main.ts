import { OffCanvas } from "flexilla"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

const elemnt = document.querySelector("[data-slideover-from-left]")
if (elemnt instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: elemnt,
        options: {
            backdrop: {
                visibility: "visible",
                backdropClass: "bg-gray/50"
            }
        }
    })
}
const elemnt2 = document.querySelector("[data-slideover-from-top]")
if (elemnt2 instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: elemnt2,
        options: {
            backdrop: {
                visibility: "visible",
                backdropClass: "bg-gray/50"
            }
        }
    })
}
const elemnt3 = document.querySelector("[data-slideover-from-bottom]")
if (elemnt3 instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: elemnt3,
        options: {
            backdrop: {
                visibility: "visible",
                backdropClass: "bg-gray/50"
            }
        }
    })
}
const elemnt4 = document.querySelector("[data-slideover-from-right]")
if (elemnt4 instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: elemnt4,
        options: {
            backdrop: {
                visibility: "visible",
                backdropClass: "bg-gray/50"
            }
        }
    })
}
const backdropOffCanvas = document.querySelector("[data-offcanvas-withbackdrop]")
if (backdropOffCanvas instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: backdropOffCanvas,
    })
}
const backdropBlurOffCanvas = document.querySelector("[data-offcanvas-backdrop-blur]")
if (backdropBlurOffCanvas instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: backdropBlurOffCanvas,
    })
}

const backdropBodyScroll = document.querySelector("[data-offcanvas-bodyscroll]")
if (backdropBodyScroll instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: backdropBodyScroll,
    })
}
const backdropBodyScrollBlurOffCanvas = document.querySelector("[data-offcanvas-bodyscroll-overlay]")
if (backdropBodyScrollBlurOffCanvas instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: backdropBodyScrollBlurOffCanvas,
        options: {
            allowBodyScroll: true
        }
    })
}
const backdropStatic = document.querySelector("[data-offcanvas-static-overlay]")
if (backdropStatic instanceof HTMLElement) {
    new OffCanvas({
        offCanvasElement: backdropStatic,
    })
}
const backdropStatic2 = document.querySelector("[data-offcanvas-static-overlay-2]")
if (backdropStatic2 instanceof HTMLElement) {
    const { open, close } = new OffCanvas({
        offCanvasElement: backdropStatic2,
        options: {
            staticBackdrop: true
        }
    })


}