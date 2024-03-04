
export declare class AutoResizeTextArea {
    private textareaElement;
    /**
     * Auto-resize Area
     * @param textarea
     */
    constructor(textarea: string | HTMLTextAreaElement);
    private autoresizeTextarea;
    /**
     * auto init the auto-resize based on the selector provided
     * @param selector {string} default is [data-fx-autoresize]
     */
    static autoInit: (selector?: string) => void;
}