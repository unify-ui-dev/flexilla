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
 * Defines parameters for modal initialization.
 */
export type ModalParams = {
    modalElement: HTMLElement;
    triggerElement?:HTMLElement,
    modalShown?:boolean,
    options?: ModalOptions;
};