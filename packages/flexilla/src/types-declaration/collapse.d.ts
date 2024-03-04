
export declare class Collapse {
    private collapseElement;
    private collapseOrientation;
    private defaultState;
    private collapseId;
    private collapseTrigger;
    private options;
    private collapseElementWidth;
    /**
     * Collapse Component
     * @param selector
     * @param triggerSelector
     * @param options
     */
    constructor(selector: string | HTMLElement, options?: CollapseOptions, triggerSelector?: string);
    show: () => void;
    hide: () => void;
    toggle: () => void;
    private init;
    /**
     * auto init collapse components based on the selector provided
     * @param selector {string} default is [data-fx-collapse]
     */
    static autoInit: (selector?: string) => void;
}

export declare type CollapseOptions = {
    orientation?: "vertical" | "horizontal";
    defaultState?: "open" | "close";
    onToggle?: ({ isExpanded }: {
        isExpanded: boolean;
    }) => void;
};