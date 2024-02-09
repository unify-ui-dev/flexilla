/**
 * Collapse Component
 */
export declare class Collapse {
    instance: Collapse;
    private collapseElement;
    private collapseOrientation;
    private defaultState;
    private collapseId;
    private collapseTrigger;
    private options;
    private collapseElementWidth;
    constructor({ collapseElement, triggerElement, options }: CollapseParams);
    show: () => void;
    hide: () => void;
    toggle: () => void;
    private init;
}

export declare type CollapseOptions = {
    orientation?: "vertical" | "horizontal";
    defaultState?: "open" | "close";
    onToggle?: ({ isExpanded }: {
        isExpanded: boolean;
    }) => void;
};

export declare type CollapseParams = {
    collapseElement: HTMLElement;
    triggerElement?: HTMLElement;
    options?: CollapseOptions;
};