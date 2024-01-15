/**
 * Defines animation classes for modal content.
 */
export type ModalContentAnimations = {
    enterAnimation: string;
    exitAnimation?: string;
};

/**
 * Defines options for modal behavior.
 */
export type ModalOptions = {
    animateContent?: ModalContentAnimations;
    overlayClass?: string;
    preventCloseModal?: boolean;
    allowBodyScroll?: boolean;
    enableStackedModals?:boolean
    onShow?: () => void;
    onHide?: () => void;
    onToggle?:({isHidden}:{isHidden:boolean})=>void
};

/**
 * Defines the return types for the accordion functionality.
 */
export type ModalReturns = {
    showModal: () => void;
    hideModal: () => void;
    isHidden: () => boolean;
};

/**
 * Defines parameters for modal initialization.
 */
export type ModalParams = {
    modalElement: HTMLElement;
    triggerElement?:HTMLElement,
    modalShown?:boolean,
    options?: ModalOptions;
};