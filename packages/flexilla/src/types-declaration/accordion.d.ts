/**
 * Accordion Component
 */
export declare class Accordion {
    instance: Accordion;
    /**
     * Creates an accordion with the specified parameters.
     */
    constructor({ accordionElement, options }: AccordionParams);
    showItem: ({ itemSelector }: {
        itemSelector: string;
    }) => void;
    hideItem: ({ itemSelector }: {
        itemSelector: string;
    }) => void;
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

export declare type AccordionParams = {
    accordionElement: HTMLElement;
    selector?: string;
    options?: AccordionOptions;
};

declare type ExpandedItem = {
    accordionItem: HTMLElement;
    trigger: HTMLElement;
    content: HTMLElement;
    value: string;
    isAlwaysOpen: boolean;
    isExpanded: boolean;
};