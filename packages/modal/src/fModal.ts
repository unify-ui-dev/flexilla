import { Modal, type ModalOptions } from ".";

export const fModal = (modal: string | HTMLElement, options: ModalOptions = {}, triggerElement?: string | HTMLElement) => new Modal(modal, options, triggerElement)