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
     * Modal Component with built-in animations
     * @param modal 
     * @param options 
     * @param triggerElement 
     */
    constructor(modal: string | HTMLElement, options: ModalOptions = {}, triggerElement?: string | HTMLElement) {
        const modalElement = typeof modal === "string" ? $(modal) : modal;
        if (!(modalElement instanceof HTMLElement)) throw new Error("Invalid provided HTMLElement");

        this.modalElement = modalElement;
        this.options = options;

        this.state = options?.defaultState || this.modalElement.dataset.state || "close";

        if (!this.modalElement.hasAttribute("data-fx-modal")) {
            this.modalElement.setAttribute("data-fx-modal", "");
        }
        const modalId = modalElement.dataset.modalId;

        const triggerButton = (typeof triggerElement === "string" ? $(triggerElement) : triggerElement) || $(`[data-modal-target='${modalId}']`);

        const { showModal, hideModal, autoInitModal, isHidden } = initModal(modalElement, triggerButton, this.options);

        if (this.state === "open") {
            this.playOpenAnimation(); // Use animation when opening the modal
        }

        this.showModal = this.playOpenAnimation.bind(this); // Update to use the open animation
        this.hideModal = this.playCloseAnimation.bind(this); // Update to use the close animation
        this.isHidden = isHidden;
        
        autoInitModal();
    }

    // Predefined open animation
    private playOpenAnimation(): void {
        this.modalElement.style.display = "block"; // Ensure it's visible before animation
        this.modalElement.animate([
            { opacity: 0, transform: 'scale(0.95)' }, // Start with opacity 0 and scaled down
            { opacity: 1, transform: 'scale(1)' } // End with full opacity and normal scale
        ], {
            duration: this.options.animationDuration || 300, // Allow users to pass in animation duration
            easing: 'ease-out', // Smooth easing
        });
    }

    // Predefined close animation
    private playCloseAnimation(): void {
        const animation = this.modalElement.animate([
            { opacity: 1, transform: 'scale(1)' }, // Start with full opacity and normal scale
            { opacity: 0, transform: 'scale(0.95)' } // End with opacity 0 and scaled down
        ], {
            duration: this.options.animationDuration || 300, // Allow users to pass in animation duration
            easing: 'ease-in', // Smooth easing
        });

        // Set display to none after animation is complete
        animation.onfinish = () => {
            this.modalElement.style.display = "none";
        };
    }

    /**
     * auto init Modals based on the selector provided
     * @param selector {string} default is [data-fx-modal] attribute
     */
    public static autoInit = (selector: string = "[data-fx-modal]") => {
        const modals = $$(selector);
        for (const modal of modals) new Modal(modal);
    }

    /**
     * Modal Component
     * @param modal 
     * @param options 
     * @param triggerElement 
     */
    static init = (modal: string | HTMLElement, options: ModalOptions = {}, triggerElement?: string | HTMLElement) => new Modal(modal, options, triggerElement);
}

export default Modal;
