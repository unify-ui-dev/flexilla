class CustomRangeIndicator {
    private rangeContainer: HTMLElement;
    private rangeElement: HTMLInputElement;
    private indicatorElement: HTMLSpanElement;
    private indicatorClassname: string[];

    constructor(containerElement_: string | HTMLElement, rangeIndicator?: string) {
        const containerElement = typeof containerElement_ === "string" ? document.querySelector(containerElement_) : containerElement_;
        if (!(containerElement instanceof HTMLElement)) throw new Error("No valid container element");

        this.rangeContainer = containerElement;
        this.rangeElement = this.rangeContainer.querySelector("[data-input-range]") as HTMLInputElement;

        if (!(this.rangeElement instanceof HTMLInputElement)) throw new Error("The provided element doesn't have a valid HTMLInputElement. Make sure to add data-input-range to the input element");

        this.indicatorClassname = rangeIndicator?.split(" ") || (this.rangeContainer.dataset.rangeIndicator)?.split(" ") || [];
        this.indicatorElement = this.initIndicator();
        this.initRange();
        this.updateIndicatorSize();
    }

    private initIndicator() {
        const indicator = document.createElement("span");

        if (this.indicatorClassname.length > 0) {
            indicator.classList.add(...this.indicatorClassname);
        }

        this.rangeContainer.append(indicator);
        return indicator;
    }

    private updateIndicatorSize = () => {
        const sizePercentage =
            ((parseFloat(this.rangeElement.value) - parseFloat(this.rangeElement.min)) /
                (parseFloat(this.rangeElement.max) - parseFloat(this.rangeElement.min))) * 100;

        this.indicatorElement.style.width = `${Math.min(Math.max(sizePercentage + 20, 20), 100)}%`;
        this.indicatorElement.style.left = `calc(${sizePercentage}% - 10px)`;
    }

    private initRange() {
        this.rangeElement.addEventListener("input", this.updateIndicatorSize);
    }

    static autoInit = (selector = "[data-fx-custom-range]") => {
        const inputRanges = Array.from(document.querySelectorAll(selector)) as HTMLInputElement[];
        for (const inputRange of inputRanges) new CustomRangeIndicator(inputRange);
    }

    static init = (containerElement_: string | HTMLElement, rangeIndicator?: string) => new CustomRangeIndicator(containerElement_, rangeIndicator);
}

export default CustomRangeIndicator;
