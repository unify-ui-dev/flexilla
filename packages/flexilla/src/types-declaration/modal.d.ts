
/**
 * Modal Class
 */
export declare class Modal {
    showModal: () => void;
    hideModal: () => void;
    isHidden: () => boolean;
    instance: Modal;
    /**
     * Creates and initializes a modal.
     */
    constructor({ modalElement, triggerElement, options }: ModalParams);
}

/**
 * Defines animation classes for modal content.
 */
declare type ModalContentAnimations = {
    enterAnimation: string;
    exitAnimation?: string;
};

/**
 * Defines options for modal behavior.
 */
export declare type ModalOptions = {
    animateContent?: ModalContentAnimations;
    overlayClass?: string;
    preventCloseModal?: boolean;
    allowBodyScroll?: boolean;
    enableStackedModals?: boolean;
    onShow?: () => void;
    onHide?: () => void;
    onToggle?: ({ isHidden }: {
        isHidden: boolean;
    }) => void;
};

/**
 * Defines parameters for modal initialization.
 */
export declare type ModalParams = {
    modalElement: HTMLElement;
    triggerElement?: HTMLElement;
    modalShown?: boolean;
    options?: ModalOptions;
};