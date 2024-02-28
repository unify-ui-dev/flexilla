
export declare class Dropdown {
    private dropdownElement;
    private triggerElement;
    private contentElement;
    private triggerStrategy;
    private placement;
    private offsetDistante;
    private preventFromCloseOutside;
    private preventFromCloseInside;
    private options;
    private dropdownItems;
    private popper;
    constructor(dropdown: string | HTMLElement, options?: DropdownOptions);
    private handleDocumentClick;
    private handleKeyDown;
    private findDropdownElement;
    private onToggleState;
    private toggleStateOnClick;
    private showOnMouseEnter;
    private hideOnMouseLeave;
    show(): void;
    hide(): void;
    private init;
}

export declare type DropdownOptions = {
    triggerStrategy?: "click" | "hover";
    placement?: Placement;
    preventCloseFromInside?: boolean;
    preventCloseFromOutside?: boolean;
    offsetDistante?: number;
    onToggle?: ({ isHidden }: {
        isHidden: boolean;
    }) => void;
};