declare type BackdropHidden = {
    visibility: "hidden";
};

declare type BackdropVisible = {
    visibility: "visible";
    backdropClass: string;
};

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
    instance: OffCanvas;
    private backdrop;
    /**
     * Create an Offcanvas instance.
     * @param {OffcanvasParams} options - The options for configuring the Offcanvas.
     */
    constructor({ offCanvasElement, options }: OffcanvasParams);
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
}

export declare type OffcanvasOptions = BackdropVisible | BackdropHidden;

export declare type OffcanvasParams = {
    offCanvasElement: HTMLElement;
    options?: {
        staticBackdrop?: boolean;
        allowBodyScroll?: boolean;
        backdrop?: OffcanvasOptions;
    };
};