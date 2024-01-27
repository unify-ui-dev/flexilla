
export declare class Dropdown {
    constructor({ dropdownElement, options }: DropdownParams);
    show(): void;
    hide(): void;
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

export declare type DropdownParams = {
    dropdownElement: HTMLElement;
    options: DropdownOptions;
};

export declare const injectDropdownDefaultStyle: () => void;