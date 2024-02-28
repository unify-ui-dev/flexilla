import { Modal, ModalOptions } from "@flexilla/modal"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/flexilla/flexilla.css"

new Modal("[data-modal-test-1]")

new Modal("[data-modal-test-1b]")

const options: ModalOptions = {
    animateContent: {
        enterAnimation: "slideIn .5s linear",
        exitAnimation: "slideOut .2s linear"
    },
    onHide() {
        console.log("Modal closed")
    },
    onShow: () => {
        console.log("Modal Open")
    }
}
new Modal(
    "[data-modal-test-3]",
    options
)
new Modal(
    "[data-modal-test-2]",
    {
        onHide() {
            console.log("Modal closed")
        },
        onShow: () => {
            console.log("Modal Open")
        }
    }
)


new Modal(
    "[data-modal-prevent]",
    {
        preventCloseModal: true,
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        },
        onHide() {
            console.log("Modal closed")
        },
        onShow: () => {
            console.log("Modal Open")
        }
    },
    "[data-custom-trigger]"
    )

new Modal(
    "[data-modal-with-stacked]",
   {
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        }
    },
   "[data-trigger-with-stacked]")

new Modal(
   "[data-modal-prevent-stack]",
     {
        enableStackedModals: true,
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        },
        onHide() {
            console.log("Modal closed")
        },
        onShow: () => {
            console.log("Modal Open")
        }
    },
   "[data-custom-trigger-stack]"
)

new Modal(
    "[data-modal-third]",
    {
        enableStackedModals: true,
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        },
    },
    "[data-trigger-third]"
)