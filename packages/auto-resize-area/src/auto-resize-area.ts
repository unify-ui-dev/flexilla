class AutoResizableTextArea {
    private textareaElement: HTMLTextAreaElement;

    constructor({textareaElement}:{textareaElement: HTMLTextAreaElement}) {
        this.textareaElement = textareaElement;
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