import { Dropdown, Tooltip, Modal, Dismissible } from "@flexilla/flexilla";
import { $$ } from "./selector";

const dropdownsEl = $$("[data-demo-dropdown]");
for (const dropdown of dropdownsEl) {
    new Dropdown(dropdown)
}

const tooltipsEls = $$("[data-demo-tooltip]")
for (const tooltip of tooltipsEls) {
    new Tooltip(tooltip, { placement: "bottom-middle" });
}

new Modal("[data-modal-invite]");

const dismissibleEls = $$("[data-dismissible-demo]")
if (dismissibleEls.length) {
    for (const dismissible of dismissibleEls) {
        new Dismissible(dismissible);
    }
}