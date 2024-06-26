import { $, $$ } from "@flexilla/utilities"
import { ModalOptions } from "./types";
import { buildOverlay, destroyOverlay } from "./modalOverlay";

/**
 * Toggles the state of the modal (open or close).
 */
const toggleModalState = (modalElement: HTMLElement, modalContent: HTMLElement | null, action: "open" | "close") => {
    if (!(modalContent instanceof HTMLElement)) throw new Error("No modal-content found")
    modalElement.setAttribute("aria-hidden", action === "open" ? "false" : "true");
    modalElement.setAttribute("data-state", action);
    modalContent.setAttribute("data-state", action);
    const overlayEl = $("[data-modal-overlay]", modalElement);
    if (overlayEl instanceof HTMLElement) overlayEl.setAttribute("data-state", action)
};

const setBodyScrollable = (enableStackedModals_: boolean, allowBodyScroll_: boolean, modalElement: HTMLElement) => {
    if (!enableStackedModals_) {
        if (!allowBodyScroll_) document.body.style.overflowY = "auto";
        return
    }
    const shownModalElementsWithoutBodyScroll = $$("[data-fx-modal][data-state=open]:not([data-allow-body-scroll=true]")
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


    const modalContent = $("[data-modal-content]", modalElement);
    const closeButtons = $$("[data-close-modal]", modalElement);

    if (!(modalContent instanceof HTMLElement)) throw new Error("Modal content element not found");

    const animationEnter = modalContent.dataset.enterAnimation || "";
    const animationExit = modalContent.dataset.exitAnimation || "";


    modalContent.setAttribute("data-state", 'close');


    const handleModalOverlayElement = () => {
        const modalOverlay = $("[data-modal-overlay]", modalElement) as HTMLElement
        destroyOverlay(modalOverlay)
    }
    const closeModalEsc = (e: KeyboardEvent) => {
        document.removeEventListener("keydown", closeModalEsc);
        if (e.key === "Escape" && !preventCloseModal_) {
            hideModal();
            handleModalOverlayElement()
        }
    };

    const closeAll = (currentModal: HTMLElement) => {
        if (enableStackedModals_) return
        const shownModalElements = $$("[data-fx-modal][data-state=open]")
        for (const shownModal of shownModalElements) {
            if (shownModal !== currentModal) {
                const modalOverlay = $("[data-modal-overlay]", shownModal) as HTMLElement
                modalOverlay.setAttribute("data-state", "close")
                const modalContent_ = $("[data-modal-content]", shownModal)
                toggleModalState(shownModal, modalContent_, "close");
                destroyOverlay(modalOverlay)
            }
        }
    }

    const showModal = () => {
        const isOpened = modalElement.getAttribute("data-state") === "open"
        if (isOpened) return

        closeAll(modalElement)
        const overlayElement = buildOverlay({
            modalContent: modalContent,
            overlayClassName: overlayClassName,
        })

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

        modalElement.focus();

        !preventCloseModal_ && overlayElement.addEventListener("click", hideModal);
        onShow?.()
        onToggle?.({ isHidden: false })
    };


    const hideModal = () => {
        const hideModal_ = () => {
            toggleModalState(modalElement, modalContent, "close");
            setBodyScrollable(enableStackedModals_, allowBodyScroll_, modalElement)
            handleModalOverlayElement();
        }
        const modalEndAnimation = (callBack: () => void) => {
            modalContent.addEventListener(
                "animationend",
                function handleAnimationEnd() {
                    callBack()
                },
                { once: true }
            );
        }
        if ((animateContent?.exitAnimation && animateContent.exitAnimation !== "")|| animationExit !== "") {
            const exitAnimation_ = animateContent ? animateContent.exitAnimation || "" : animationExit;
            modalContent.setAttribute("data-state", "close");
            modalContent.style.setProperty("--un-modal-animation", exitAnimation_);
            modalEndAnimation(() => {
                modalContent.style.removeProperty("--un-modal-animation");
                hideModal_()
            })
        } else {
            hideModal_()
        }

        if (isKeyDownEventRegistered) {
            document.removeEventListener("keydown", closeModalEsc);
            isKeyDownEventRegistered = false;
        }
        modalElement.blur();
        onHide?.()
        onToggle?.({ isHidden: true })
    };


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