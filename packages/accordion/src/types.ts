type ExpandedItem = {
    accordionItem: HTMLElement
    trigger: HTMLElement,
    content: HTMLElement,
    value:string,
    isAlwaysOpen: boolean,
    isExpanded:boolean
}

export type AccordionOptions = {
    accordionType?: "single" | "multiple",
    defaultValue?: string,
    allowTriggerOnFocus?: boolean,
    preventClosingAll?: boolean,
    onChangeItem?: ({ expandedItem }: { expandedItem?: ExpandedItem }) => void
}

export type AccordionItemMetadata = {
    accordionTriggerElement: HTMLButtonElement,
    accordionContentElement: HTMLDivElement,
    accordionItemValue: string,
    isItemExpanded: boolean,
    isAlwaysOpen: boolean
}