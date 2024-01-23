class CustomRangeIndicator {
    private rangeContainer: HTMLElement
    private rangeElement: HTMLInputElement
    private indicatorElement: HTMLSpanElement
    private indicatorClassname: string[]

    constructor({ containerElement, rangeIndicator }:
        { containerElement: HTMLElement, rangeIndicator?: string }) {
        if (!(containerElement instanceof HTMLElement)) throw new Error("No valide container element")

        this.rangeContainer = containerElement
        this.rangeElement = this.rangeContainer.querySelector("[data-input-range]") as HTMLInputElement
        this.indicatorClassname = rangeIndicator?.split(" ") || (this.rangeContainer.dataset.rangeIndicator)?.split(" ") || []
        this.indicatorElement = this.initIndicator()

        this.init()
        this.updateIndicatorSize()
    }

    private initIndicator() {
        const indicator = document.createElement("span")
        indicator.style.position = "absolute"
        indicator.style.pointerEvents = "none"
        if (this.indicatorClassname.length > 0) {
            indicator.classList.add(...this.indicatorClassname)
            this.rangeContainer.append(indicator)
        }
        return indicator
    }


    private updateIndicatorSize = () => {
        let size = '0px';
        const size_ =
            ((parseFloat(this.rangeElement.value) - parseFloat(this.rangeElement.min)) /
                (parseFloat(this.rangeElement.max) - parseFloat(this.rangeElement.min))) *
            100;

        if (size_ < 14 && size_ > 0) {
            size = `${size_ + 20 / 100}%`;
            console.log(size);
        } else {
            size = `${size_}%`;
        }

        this.indicatorElement.style.width = `${size}`;
    }

    private init() {
        this.rangeElement.addEventListener("input", this.updateIndicatorSize)
    }
}

export default CustomRangeIndicator