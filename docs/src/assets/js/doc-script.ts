import { Tabs, Accordion, Collapse, Dismissible } from "@flexilla/flexilla";
import { $$, $ } from "./selector";


const initTableOfContent = () => {
    const tabOfContentMob = $("[data-tabs-content]");
    const trigger = $("[data-trigger-tab-content]");
    if (tabOfContentMob && trigger) {
        const positionateTabs = () => {
            const { height, top, left } = trigger.getBoundingClientRect();
            tabOfContentMob.style.setProperty("--tabs-top", `${height + top}px`)
            tabOfContentMob.style.setProperty("--tabs-left", `${left}px`)
        };
        const toggleTabOfContent = () => {
            const isOpened = trigger.getAttribute("aria-expanded") === "true";
            trigger.setAttribute("aria-expanded", `${!isOpened}`);
            tabOfContentMob.setAttribute(
                "data-state",
                `${isOpened ? "close" : "open"}`,
            );
            document.body.style.overflowY = `${isOpened ? "auto" : "hidden"}`;
            positionateTabs()
            if (!isOpened) {
                document.addEventListener("click", hideOnClickOutSide);
            } else {
                document.removeEventListener("click", hideOnClickOutSide);
            }
        };
        const hideTabOfContent = () => {
            trigger.setAttribute("aria-expanded", "false");
            tabOfContentMob.setAttribute("data-state", "close");
            document.body.style.overflowY = "auto";
            document.removeEventListener("click", hideOnClickOutSide);
        };
        const hideOnClickOutSide = (ev: MouseEvent) => {
            if (!trigger.contains(ev.target as Node)) {
                hideTabOfContent();
            }
        };
        trigger.addEventListener("click", toggleTabOfContent);
        tabOfContentMob.addEventListener("click", hideTabOfContent);
    }
}
const initAllCustomComponents = () => {
    const customBlockCodes = $$("[data-custom-block-code]")
    for (const blockCode of customBlockCodes) {
        const selectD = blockCode.querySelector("[data-tab-select]");
        const panelsD = Array.from(
            blockCode.querySelectorAll("[data-snippet-bloc]"),
        );
        const desactiveAll = (exept: HTMLElement) => {
            panelsD.forEach((panel) => {
                if (panel !== exept) {
                    panel.setAttribute("data-state", "inactive");
                    panel.ariaHidden = "true";
                }
            });
        };
        if (selectD instanceof HTMLSelectElement) {
            const defaultPanel = blockCode.querySelector(
                `[data-snippet-bloc]#snippet-bloc-${selectD.value}`,
            ) as HTMLElement;
            desactiveAll(defaultPanel);
            selectD.addEventListener("change", () => {
                const panelTo = blockCode.querySelector(
                    `[data-snippet-bloc]#snippet-bloc-${selectD.value}`,
                );
                if (!(panelTo instanceof HTMLElement)) return;
                desactiveAll(panelTo);
                if (panelTo?.getAttribute("data-state") !== "active") {
                }
                panelTo.setAttribute("data-state", "active");
                panelTo.ariaHidden = "false";
            });
        }
    }
}


export const initAppScript = () => {
    const dismissibleEls = $$("[data-dismissible]")
    Collapse.autoInit("[data-collapsible-example]")
    Tabs.autoInit("[data-tab-fx-site]")
    Accordion.autoInit("[data-accordion-example]")

    initAllCustomComponents()
    initTableOfContent()

    for (const dismissEl of dismissibleEls) {
        new Dismissible(dismissEl)
    }
}


