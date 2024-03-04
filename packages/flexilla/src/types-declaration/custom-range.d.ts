
export declare class CustomRange {
    private rangeContainer;
    private rangeElement;
    private indicatorElement;
    private indicatorClassname;
    constructor(containerElement_: string | HTMLElement, rangeIndicator?: string);
    private initIndicator;
    private updateIndicatorSize;
    private init;
    /**
     * auto init the Custom Input Range based on the selector provided
     * @param selector {string} default is [data-fx-custom-range]
     */
    static autoInit: (selector?: string) => void;
}