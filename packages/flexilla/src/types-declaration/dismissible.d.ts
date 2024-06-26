
export declare class Dismissible {
    private dismissibleElement;
    private dismissButtons;
    private action;
    private onDismiss;
    /**
     * Dismissible Component
     * @param dismissible
     * @param action
     * @param onDissmiss
     */
    constructor(dismissible: string | HTMLElement, action?: "remove-from-dom" | "hide-from-screen", onDissmiss?: () => void);
    private hideFromScreen;
    private removeFromDom;
    dismiss: () => void;
    private init;
    /**
     * auto init Dismissible Element based on the selector provided
     * @param selector {string} default is [data-fx-dismissible]
     */
    static autoInit: (selector?: string) => void;
}

/**
 *
 * @param dismissible
 * @param action
 * @param onDissmiss
 * @returns
 */
export declare const fDismissible: (dismissible: string | HTMLElement, action?: "remove-from-dom" | "hide-from-screen", onDissmiss?: () => void) => Dismissible;
