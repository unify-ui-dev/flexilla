
declare type Arrow = {
    enableArrow?: boolean;
    arrowSize?: number;
    customClass?: string;
};

export declare class Tooltip {
    constructor({ containerElement, triggerElement, options }: TooltipParams);
    show(): void;
    hide(): void;
}

export declare type TooltipOptions = {
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