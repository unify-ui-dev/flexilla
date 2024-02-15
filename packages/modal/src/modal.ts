
import { ModalOptions, ModalParams } from "./types";
import { initModal } from "./helpers";
import { find } from "@flexilla/utilities";

/**
 * Modal Class
 */
class Modal {
    private modalElement: HTMLElement
    public showModal: () => void
    public hideModal: () => void
    public isHidden: () => boolean
    private options:ModalOptions
    private state:string
    /**
     * Creates and initializes a modal.
     */
    public instance: Modal
    constructor({ modalElement, triggerElement, options = {} }: ModalParams) {
        this.instance = this
        if(!(modalElement instanceof HTMLElement)) throw new Error("Invalid provided HTMLElement")
        
        this.modalElement = modalElement
        this.options = options

        this.state = options?.defaultState || this.modalElement.dataset.state || "close"
        
        if(!this.modalElement.hasAttribute("data-fx-modal")){
            this.modalElement.setAttribute("data-fx-modal", "");
        }
        const modalId = modalElement.dataset.modalId;

        const triggerButton = triggerElement || find({
            selector: `[data-modal-target='${modalId}']`,
            parentElement: document.body
        });

        const { showModal, hideModal, autoInitModal, isHidden } = initModal(modalElement, triggerButton, this.options);

        if(this.state=== "open"){
            showModal()
        }
        autoInitModal()
        this.showModal = showModal
        this.hideModal = hideModal
        this.isHidden = isHidden
    }
}

export default Modal