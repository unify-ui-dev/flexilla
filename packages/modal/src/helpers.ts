import { appendBefore, find, findAll } from "@fx-lib/utilities"
import { ModalOptions } from "./types";

/**
 * Toggles the state of the modal (open or close).
 */
const toggleModalState = (modalElement: HTMLElement, modalContent: HTMLElement | null, action: "open" | "close") => {
    if (!(modalContent instanceof HTMLElement)) throw new Error("No modal-content found")
    modalElement.setAttribute("aria-hidden", action === "open" ? "false" : "true");
    modalElement.setAttribute("data-state", action === "open" ? "open" : "close");
    modalContent.setAttribute("data-state", action === "open" ? "open" : "close");
};

const setBodyScrollable = (enableStackedModals_: boolean, allowBodyScroll_: boolean, modalElement: HTMLElement) => {
    if (!enableStackedModals_) {
        if (!allowBodyScroll_) document.body.style.overflowY = "auto";
        return
    }
    const shownModalElementsWithoutBodyScroll = findAll({ selector: "[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]", parentElement: document.documentElement })
    const filteredShown = shownModalElementsWithoutBodyScroll.filter((element: HTMLElement) => element !== modalElement)
    if (filteredShown.length === 0 && !allowBodyScroll_) document.body.style.overflowY = "auto"
}
/**
 * Initializes the modal with specified options.
 */
const initModal = (modalElement: HTMLElement, triggerButton: HTMLElement | null, options: ModalOptions) => {
    if (!(modalElement instanceof HTMLElement)) throw new Error("Modal Element must be a valid element");

    const { animateContent, allowBodyScroll, preventCloseModal, overlayClass, onShow, onHide, onToggle, enableStackedModals } = options;

    const allowBodyScroll_ = allowBodyScroll || modalElement.hasAttribute("data-allow-body-scroll") && modalElement.getAttribute("data-allow-body-scroll") !== "false"
    const preventCloseModal_ = preventCloseModal || modalElement.hasAttribute("data-prevent-close-modal") && modalElement.getAttribute("data-prevent-close-modal") !== "false"
    const enableStackedModals_ = enableStackedModals || modalElement.hasAttribute("data-enable-stacked") && modalElement.getAttribute("data-enable-stacked") !== "false"
    const overlayClassName = overlayClass?.split(" ") || modalElement.dataset.modalOverlay?.split(" ") || "";
    let isKeyDownEventRegistered = false;

    modalElement.setAttribute("data-allow-body-scroll", `${allowBodyScroll_}`)
    const overlayEl = document.createElement("span");
    overlayEl.setAttribute("aria-hidden", "true");

    const modalContent = modalElement.querySelector("[data-modal-content]");
    const closeButtons = findAll({ selector: "[data-close-modal]", parentElement: modalElement });

    if (!(modalContent instanceof HTMLElement)) throw new Error("Modal content element not found");

    const animationEnter = modalContent.dataset.enterAnimation || "";
    const animationExit = modalContent.dataset.exitAnimation || "";

    appendBefore({ newElement: overlayEl, existingElement: modalContent });
    modalContent.setAttribute("data-state", 'close');
    overlayEl.classList.add(...overlayClassName);
    overlayEl.setAttribute("data-modal-overlay", "overlay-bg");

    const closeModalEsc = (e: KeyboardEvent) => {
        document.removeEventListener("keydown", closeModalEsc);
        if (e.key === "Escape" && !preventCloseModal_) {
            hideModal();
        }
    };

    const closeAll = (currentModal: HTMLElement) => {
        if (enableStackedModals_) return
        const shownModalElements = findAll({ selector: "[data-fx-modal][data-state=open]", parentElement: document.documentElement })
        for (const shownModal of shownModalElements) {
            if (shownModal !== currentModal) {
                const modalContent_ = find({ selector: "[data-modal-content]", parentElement: shownModal })
                toggleModalState(shownModal, modalContent_, "close");
            }
        }
    }

    const showModal = () => {
        closeAll(modalElement)
        if (animateContent || animationEnter !== "") {
            const contentAnimation = animateContent ? animateContent.enterAnimation : animationEnter;
            contentAnimation !== "" && modalContent.style.setProperty("--un-modal-animation", contentAnimation);
            toggleModalState(modalElement, modalContent, "open");
        } else {
            toggleModalState(modalElement, modalContent, "open");
        }

        if (!allowBodyScroll_) document.body.style.overflow = "hidden";
        if (!isKeyDownEventRegistered) {
            document.addEventListener("keydown", closeModalEsc);
            isKeyDownEventRegistered = true;
        }
        onShow?.()
        onToggle?.({ isHidden: false })
    };

    const hideModal = () => {
        if ((animateContent?.exitAnimation && animateContent.exitAnimation !== "") || (animationExit !== "")) {
            const exitAnimation_ = animateContent ? animateContent.exitAnimation || "" : animationExit;
            modalContent.setAttribute("data-state", "close");
            modalContent.style.setProperty("--un-modal-animation", exitAnimation_);
            modalContent.addEventListener(
                "animationend",
                function handleAnimationEnd() {
                    modalContent.removeEventListener("animationend", handleAnimationEnd);
                    toggleModalState(modalElement, modalContent, "close");
                    modalContent.style.removeProperty("--un-modal-animation");
                    setBodyScrollable(enableStackedModals_, allowBodyScroll_, modalElement)
                },
                { once: true }
            );
        } else {
            toggleModalState(modalElement, modalContent, "close");
            setBodyScrollable(enableStackedModals_, allowBodyScroll_, modalElement)
        }

        if (isKeyDownEventRegistered) {
            document.removeEventListener("keydown", closeModalEsc);
            isKeyDownEventRegistered = false;
        }

        onHide?.()
        onToggle?.({ isHidden: true })
    };


    !preventCloseModal_ && overlayEl.addEventListener("click", hideModal);

    const autoInitModal = () => {
        if (triggerButton instanceof HTMLElement) triggerButton.addEventListener("click", showModal);
        if (closeButtons.length > 0) {
            for (const closeButton of closeButtons) {
                closeButton.addEventListener("click", hideModal);
            }
        }
    }

    const isHidden = () => {
        return modalElement.dataset.state === "close"
    }

    return { autoInitModal, showModal, hideModal, isHidden }
};

export { initModal };