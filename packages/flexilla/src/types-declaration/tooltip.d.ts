
export declare class Tooltip {
    private containerElement;
    private options;
    private referenceElement;
    private popperElement;
    private placement;
    private popper;
    private offsetDistance;
    private triggerStrategy;
    constructor(tooltip: string | HTMLElement, options?: TooltipOptions);
    private hideOnEscPressed;
    private findPopoverElements;
    private onShow;
    private onHide;
    private onToggle;
    private toggleOnClickMode;
    private showOnHover;
    private hideOnHover;
    private closeWhenClickOutside;
    show(): void;
    hide(): void;
    private init;
    /**
     * auto init Tooltips based on the selector provided
     * @param selector {string} default is [data-fx-tooltip]
     */
    static autoInit: (selector?: string) => void;
}

export declare type TooltipOptions = {
    placement?: Placement;
    offsetDistance?: number;
    triggerStrategy?: "click" | "hover";
    onShow?: () => void;
    onHide?: () => void;
    onToggle?: ({ isHidden }: {
        isHidden?: boolean;
    }) => void;
};