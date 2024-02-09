import { Modal } from "@flexilla/flexilla"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/modal/modal.css"


const modalEl = document.querySelector("[data-modal-test-1]")
if (modalEl instanceof HTMLElement) {
    new Modal({
        modalElement: modalEl,
        options: {

        }
    })
}
const modalEl1 = document.querySelector("[data-modal-test-1b]")
if (modalEl1 instanceof HTMLElement) {
    new Modal({
        modalElement: modalEl1,
        options: {

        }
    })
}
const modalEl3 = document.querySelector("[data-modal-test-3]")
if (modalEl3 instanceof HTMLElement) {
    new Modal({
        modalElement: modalEl3,
        options: {
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
    })
}

const modalEl2 = document.querySelector("[data-modal-test-2]")
if (modalEl2 instanceof HTMLElement) {
    new Modal({
        modalElement: modalEl2,
        options: {
            onHide() {
                console.log("Modal closed")
            },
            onShow: () => {
                console.log("Modal Open")
            }
        }
    })
}


const modalEl4 = document.querySelector("[data-modal-prevent]")
const closeModal = document.querySelector("[data-custom-trigger]")
if (modalEl4 instanceof HTMLElement) {
    const b = new Modal({
        modalElement: modalEl4,
        triggerElement:closeModal,
        options: {
            preventCloseModal:true,
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
}

const modalWithStacked = document.querySelector("[data-modal-with-stacked]")
const openWithStacked = document.querySelector("[data-trigger-with-stacked]")
if (modalWithStacked instanceof HTMLElement) {
    const b = new Modal({
        modalElement: modalWithStacked,
        triggerElement:openWithStacked,
        options: {
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
}
const modalEl5 = document.querySelector("[data-modal-prevent-stack]")
const closeModal1 = document.querySelector("[data-custom-trigger-stack]")
if (modalEl5 instanceof HTMLElement) {
    const b = new Modal({
        modalElement: modalEl5,
        triggerElement:closeModal1,
        options: {
            enableStackedModals:true,
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
}

const modalEl6 = document.querySelector("[data-modal-third]")
const closeModal2 = document.querySelector("[data-trigger-third]") 
if (modalEl6 instanceof HTMLElement) {
    const b = new Modal({
        modalElement: modalEl6,
        triggerElement:closeModal2,
        options: {
            enableStackedModals:true,
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
}