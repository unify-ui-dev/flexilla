
export declare class Accordion {
    private accordionElement;
    private options;
    private items;
    private preventFromClosingAll;
    private allowTriggerOnFocus;
    private accordionType;
    private defaultItemValue;
    private defaultItem;
    /**
     * Flexilla Accordion component
     * @param accordion
     * @param options
     */
    constructor(accordion: string | HTMLElement, options?: AccordionOptions);
    showItem: (selector: string) => void;
    hideItem: (selector: string) => void;
    private init;
    /**
     * auto init accordion components based on the selector provided
     * @param selector {string} default is [data-fx-accordion]
     */
    static autoInit: (selector?: string) => void;
}

export declare type AccordionOptions = {
    accordionType?: "single" | "multiple";
    defaultValue?: string;
    allowTriggerOnFocus?: boolean;
    preventClosingAll?: boolean;
    onChangeItem?: ({ expandedItem }: {
        expandedItem?: ExpandedItem;
    }) => void;
};

declare type ExpandedItem = {
    accordionItem: HTMLElement;
    trigger: HTMLElement;
    content: HTMLElement;
    value: string;
    isAlwaysOpen: boolean;
    isExpanded: boolean;
};