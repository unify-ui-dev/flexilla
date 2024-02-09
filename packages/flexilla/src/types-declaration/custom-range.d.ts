export declare class CustomRange {
    private rangeContainer;
    private rangeElement;
    private indicatorElement;
    private indicatorClassname;
    constructor({ containerElement, rangeIndicator }: {
        containerElement: HTMLElement;
        rangeIndicator?: string;
    });
    private initIndicator;
    private updateIndicatorSize;
    private init;
}