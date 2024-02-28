
export declare class Modal {
    private modalElement;
    showModal: () => void;
    hideModal: () => void;
    isHidden: () => boolean;
    private options;
    private state;
    /**
     * Modal Component
     * @param modal
     * @param options
     * @param triggerElement
     */
    constructor(modal: string | HTMLElement, options?: ModalOptions, triggerElement?: string | HTMLElement);
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