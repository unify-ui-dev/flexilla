import { Modal, ModalOptions } from "@flexilla/modal"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/modal/modal.css"

new Modal({
    modalElement: document.querySelector("[data-modal-test-1]") as HTMLElement,
})

new Modal({
    modalElement: document.querySelector("[data-modal-test-1b]") as HTMLElement
})

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
new Modal({
    modalElement: document.querySelector("[data-modal-test-3]") as HTMLElement,
    options: options
})
new Modal({
    modalElement: document.querySelector("[data-modal-test-2]") as HTMLElement,
    options: {
        onHide() {
            console.log("Modal closed")
        },
        onShow: () => {
            console.log("Modal Open")
        }
    }
})


new Modal({
    modalElement: document.querySelector("[data-modal-prevent]") as HTMLElement,
    triggerElement: document.querySelector("[data-custom-trigger]") as HTMLElement,
    options: {
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
    }
})

new Modal({
    modalElement: document.querySelector("[data-modal-with-stacked]") as HTMLElement,
    triggerElement: document.querySelector("[data-trigger-with-stacked]") as HTMLElement,
    options: {
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        }
    }
})

new Modal({
    modalElement: document.querySelector("[data-modal-prevent-stack]") as HTMLElement,
    triggerElement: document.querySelector("[data-custom-trigger-stack]") as HTMLElement,
    options: {
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
    }
})

new Modal({
    modalElement: document.querySelector("[data-modal-third]") as HTMLElement,
    triggerElement: document.querySelector("[data-trigger-third]") as HTMLElement,
    options: {
        enableStackedModals: true,
        animateContent: {
            enterAnimation: "slideIn .3s linear",
        },
    }
})