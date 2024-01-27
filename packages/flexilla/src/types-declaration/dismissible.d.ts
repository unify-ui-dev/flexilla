
export declare class Dismissible {
    constructor({ dismissibleElement, action, onDissmiss }: DismissibleParams);
    dismiss: () => void;
}

export declare type DismissibleParams = {
    dismissibleElement: HTMLElement;
    action?: "remove-from-dom" | "hide-from-screen";
    onDissmiss?: () => void;
};