type CollapseState = "open" | "close"



export type CollapsibleElement = HTMLElement & {
    style: {
        maxHeight: string;
        transition: string;
    };
}
export type ExpandCollapseOptions = {
    collapseElement: HTMLElement,
    triggerElement: HTMLElement | null,
    state: CollapseState,
    closeHeight?: number,
}

export type CollapseOptions = {
    defaultState?: CollapseState,
    closeHeight?: number,
    onToggle?: ({ isExpanded }: { isExpanded: boolean }) => void
}

