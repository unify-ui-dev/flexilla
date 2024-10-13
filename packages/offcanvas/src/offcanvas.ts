import { OffcanvasOptions } from "./types";
import { initOffcanvas } from "./helpers";
import { $, $$ } from "@flexilla/utilities";

class Offcanvas {
    private offcanvasElement: HTMLElement;
    public showOffcanvas: () => void;
    public hideOffcanvas: () => void;
    public isHidden: () => boolean;
    private options: OffcanvasOptions;
    private state: string;

    /**
     * Offcanvas Component with animations
     * @param offcanvas 
     * @param options 
     * @param triggerElement 
     */
    constructor(offcanvas: string | HTMLElement, options: OffcanvasOptions = {}, triggerElement?: string | HTMLElement) {
        const offcanvasElement = typeof offcanvas === "string" ? $(offcanvas) : offcanvas;
        if (!(offcanvasElement instanceof HTMLElement)) throw new Error("Invalid provided HTMLElement");

        this.offcanvasElement = offcanvasElement;
        this.options = options;

        this.state = options?.defaultState || this.offcanvasElement.dataset.state || "close";

        if (!this.offcanvasElement.hasAttribute("data-fx-offcanvas")) {
            this.offcanvasElement.setAttribute("data-fx-offcanvas", "");
        }

        const triggerButton = (typeof triggerElement === "string" ? $(triggerElement) : triggerElement) || $(`[data-offcanvas-target='${this.offcanvasElement.dataset.offcanvasId}']`);

        const { showOffcanvas, hideOffcanvas, autoInitOffcanvas, isHidden } = initOffcanvas(offcanvasElement, triggerButton, this.options);

        // Initialize offcanvas state and animations
        if (this.state === "open") {
            this.playOpenAnimation();
        } else {
            this.offcanvasElement.style.display = "none";
        }

        this.showOffcanvas = this.playOpenAnimation.bind(this);
        this.hideOffcanvas = this.playCloseAnimation.bind(this);
        this.isHidden = isHidden;

        this.initTriggers();  // Ensure triggers are initialized
        this.initCloseBtns();  // Ensure close buttons are initialized

        autoInitOffcanvas();
    }

    // Predefined open animation for offcanvas
    private playOpenAnimation(): void {
        this.offcanvasElement.style.display = "block";
        this.offcanvasElement.animate([
            { transform: 'translateX(-100%)' },
            { transform: 'translateX(0)' }
        ], {
            duration: this.options.animationDuration || 300,
            easing: 'ease-out',
        });
    }

    // Predefined close animation for offcanvas
    private playCloseAnimation(): void {
        const animation = this.offcanvasElement.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-100%)' }
        ], {
            duration: this.options.animationDuration || 300,
            easing: 'ease-in',
        });

        animation.onfinish = () => {
            this.offcanvasElement.style.display = "none";
        };
    }

    /**
     * Auto-init Offcanvas based on selector
     * @param selector {string} default is [data-fx-offcanvas]
     */
    public static autoInit = (selector: string = "[data-fx-offcanvas]") => {
        const offcanvases = $$(selector);
        for (const offcanvas of offcanvases) new Offcanvas(offcanvas);
    }

    /**
     * Initialize an offcanvas instance
     * @param offcanvas 
     * @param options 
     * @param triggerElement 
     */
    public static init = (offcanvas: string | HTMLElement, options: OffcanvasOptions = {}, triggerElement?: string | HTMLElement) => new Offcanvas(offcanvas, options, triggerElement);

    // Initialize trigger elements
    private initTriggers() {
        // Add your trigger initialization logic here
    }

    // Initialize close buttons
    private initCloseBtns() {
        // Add your close button initialization logic here
    }
}

export default Offcanvas;
