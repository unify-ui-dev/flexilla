class AutoResizableTextArea {
    private textareaElement: HTMLTextAreaElement;

    /**
     * Auto-resize Area
     * @param textarea 
     */
    constructor(textarea: string | HTMLTextAreaElement) {
        this.textareaElement = (typeof textarea === "string") ? document.querySelector(`${textarea}`) as HTMLTextAreaElement : textarea;
        if (!(this.textareaElement instanceof HTMLTextAreaElement)) throw new Error("Provided Element is not a Valid HTMLTextAreaElement");
        this.autoresizeTextarea();
        this.textareaElement.addEventListener("input", this.autoresizeTextarea.bind(this), false);
        window.addEventListener("resize", this.autoresizeTextarea.bind(this));
    }

    private autoresizeTextarea(): void {
        const { paddingTop, paddingBottom } = getComputedStyle(this.textareaElement);
        this.textareaElement.style.height = "auto";
        this.textareaElement.style.height = `${this.textareaElement.scrollHeight +
            parseFloat(paddingTop) +
            parseFloat(paddingBottom)
            }px`;
    }
}

export default AutoResizableTextArea