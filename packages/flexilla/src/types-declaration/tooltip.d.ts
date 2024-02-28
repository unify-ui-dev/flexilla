
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
}

export declare type TooltipOptions = {
    defineRequiredStyles?: "inject" | "custom";
    placement?: Placement;
    offsetDistance?: number;
    triggerStrategy?: "click" | "hover";
    onShow?: () => void;
    onHide?: () => void;
    onToggle?: ({ isHidden }: {
        isHidden?: boolean;
    }) => void;
};