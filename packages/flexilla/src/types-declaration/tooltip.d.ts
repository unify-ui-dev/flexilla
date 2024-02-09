
declare type Arrow = {
    enableArrow?: boolean;
    arrowSize?: number;
    customClass?: string;
};

export declare class Tooltip {
    private containerElement;
    private options;
    private referenceElement;
    private popperElement;
    private placement;
    private arrow;
    private popper;
    private offsetDistance;
    private triggerStrategy;
    constructor({ containerElement, triggerElement, options }: TooltipParams);
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
    arrow?: Arrow;
    triggerStrategy?: "click" | "hover";
    onShow?: () => void;
    onHide?: () => void;
    onToggle?: ({ isHidden }: {
        isHidden?: boolean;
    }) => void;
};

export declare type TooltipParams = {
    containerElement: HTMLElement;
    triggerElement?: HTMLElement;
    options?: TooltipOptions;
};