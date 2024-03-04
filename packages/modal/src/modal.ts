
import { ModalOptions } from "./types";
import { initModal } from "./helpers";
import { $, $$ } from "@flexilla/utilities";

class Modal {
    private modalElement: HTMLElement
    public showModal: () => void
    public hideModal: () => void
    public isHidden: () => boolean
    private options: ModalOptions
    private state: string

    /**
     * Modal Component
     * @param modal 
     * @param options 
     * @param triggerElement 
     */
    constructor(modal: string | HTMLElement, options: ModalOptions = {}, triggerElement?: string|HTMLElement) {
        const modalElement = typeof modal === "string" ? $(modal) : modal
        if (!(modalElement instanceof HTMLElement)) throw new Error("Invalid provided HTMLElement")

        this.modalElement = modalElement
        this.options = options

        this.state = options?.defaultState || this.modalElement.dataset.state || "close"

        if (!this.modalElement.hasAttribute("data-fx-modal")) {
            this.modalElement.setAttribute("data-fx-modal", "");
        }
        const modalId = modalElement.dataset.modalId;

        const triggerButton = (typeof triggerElement === "string" ? $(triggerElement) : triggerElement) || $(`[data-modal-target='${modalId}']`);

        const { showModal, hideModal, autoInitModal, isHidden } = initModal(modalElement, triggerButton, this.options);

        if (this.state === "open") {
            showModal()
        }
        autoInitModal()
        this.showModal = showModal
        this.hideModal = hideModal
        this.isHidden = isHidden
    }

    /**
     * auto init Modals based on the selector provided
     * @param selector {string} default is [data-fx-modal] attribute
     */
    public static autoInit = (selector="[data-fx-modal]")=>{
        const modals = $$(selector)
        for(const modal of modals) new Modal(modal)
    }
}

export default Modal