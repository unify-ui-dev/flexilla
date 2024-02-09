export declare class Dismissible {
    private dismissibleElement;
    private dismissButtons;
    private action;
    private onDismiss;
    constructor({ dismissibleElement, action, onDissmiss }: DismissibleParams);
    private hideFromScreen;
    private removeFromDom;
    dismiss: () => void;
    private init;
}

export declare type DismissibleParams = {
    dismissibleElement: HTMLElement;
    action?: "remove-from-dom" | "hide-from-screen";
    onDissmiss?: () => void;
};