
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
    instance: OffCanvas;
    /**
     * Create an Offcanvas instance.
     * @param {OffcanvasParams} options - The options for configuring the Offcanvas.
     */
    constructor({ offCanvasElement, options }: OffcanvasParams);
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
