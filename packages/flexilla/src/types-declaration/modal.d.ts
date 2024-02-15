/**
 * Modal Class
 */
export declare class Modal {
    private modalElement;
    showModal: () => void;
    hideModal: () => void;
    isHidden: () => boolean;
    private options;
    private state;
    /**
     * Creates and initializes a modal.
     */
    instance: Modal;
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
    defaultState?: "open" | "close";
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