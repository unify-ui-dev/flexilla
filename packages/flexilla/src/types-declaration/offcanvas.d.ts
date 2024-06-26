
declare type BackdropHidden = {
    visibility: "hidden";
};

declare type BackdropOptions = BackdropVisible | BackdropHidden;

declare type BackdropVisible = {
    visibility: "visible";
    backdropClass: string;
};

export declare const fOffcanvas: (offcanvas: string | HTMLElement, options?: OffcanvasOptions) => OffCanvas;

/**
 * Class representing an Offcanvas element.
 */
export declare class OffCanvas {
    private offCanvasElement;
    private offCanvasTriggers;
    private offCanvasCloseBtns;
    private allowBodyScroll;
    private staticBackdrop;
    private backdropClass;
    private backdrop;
    /**
     * Offcanvas Component
     * @param offcanvas
     * @param options
     */
    constructor(offcanvas: string | HTMLElement, options?: OffcanvasOptions);
    private findOffCanvasElements;
    private setupAttributes;
    /**
     * Close the Offcanvas when a click occurs outside of it.
     */
    private closeWhenClickOutSide;
    private closeOffCanvas;
    private openOffCanvas;
    /**
     * Close the Offcanvas when the "Escape" key is pressed.
     */
    private closeWithEsc;
    private initCloseBtns;
    private changeState;
    private initTriggers;
    private init;
    open(): void;
    close(): void;
    /**
     * auto init Offcanvas based on the selector provided
     * @param selector {string} default is [data-fx-offcanvas] attribute
     */
    static autoInit: (selector?: string) => void;
}

export declare type OffcanvasOptions = {
    staticBackdrop?: boolean;
    allowBodyScroll?: boolean;
    backdrop?: BackdropOptions;
};
