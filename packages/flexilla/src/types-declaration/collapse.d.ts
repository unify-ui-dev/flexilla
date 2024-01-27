
/**
 * Collapse Component
 */
export declare class Collapse {
    instance: Collapse;
    constructor({ collapseElement, triggerElement, options }: CollapseParams);
    show: () => void;
    hide: () => void;
    toggle: () => void;
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