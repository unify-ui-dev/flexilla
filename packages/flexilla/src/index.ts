import "./flexilla.css"
import { Accordion, fAccordion } from "@flexilla/accordion"
import { AutoResizeTextArea, fAutoResizableTextArea } from "@flexilla/auto-resize-area"
import { Collapse, fCollapse } from "@flexilla/collapse"
import { CustomRange, fCustomRange } from "@flexilla/custom-range"
import { Dismissible, fDismissible } from "@flexilla/dismissible"
import { Dropdown, fDropdown } from "@flexilla/dropdown"
import { Modal, fModal } from "@flexilla/modal"
import { OffCanvas, fOffcanvas } from "@flexilla/offcanvas"
import { Tabs, fTabs } from "@flexilla/tabs"
import { Tooltip, fTooltip } from "@flexilla/tooltip"

import type { AccordionOptions } from "@flexilla/accordion"
import type { CollapseOptions } from "@flexilla/collapse"
import type { ModalOptions } from "@flexilla/modal"
import type { OffcanvasOptions } from "@flexilla/offcanvas"
import type { TabsOptions } from "@flexilla/tabs"
import type { DropdownOptions } from "@flexilla/dropdown"
import type { TooltipOptions } from "@flexilla/tooltip"
import type { FlexillaOptions } from "./types"

/**
 * Automaticaly init Components based on data-attribute or provided selector for each component via options
 * @param options 
 */
const initFlexilla = (
    options:FlexillaOptions
) => {
    Accordion.autoInit(options.accordion)
    AutoResizeTextArea.autoInit(options.autoresize)
    Collapse.autoInit(options.collapse)
    CustomRange.autoInit(options.customRange)
    Dismissible.autoInit(options.dismissible)
    Dropdown.autoInit(options.dropdown)
    Modal.autoInit(options.modal)
    OffCanvas.autoInit(options.offcanvas)
    Tabs.autoInit(options.tabs)
    Tooltip.autoInit(options.tooltip)
}

export {
    Accordion, AutoResizeTextArea, Collapse, CustomRange, Dismissible, Dropdown, Modal, OffCanvas, Tabs, Tooltip, AccordionOptions, CollapseOptions
    , ModalOptions, TabsOptions, OffcanvasOptions, FlexillaOptions,
    DropdownOptions, TooltipOptions,
    fAccordion, fAutoResizableTextArea, fCollapse, fCustomRange, fDismissible, fDropdown, fModal, fOffcanvas, fTabs, fTooltip,
    initFlexilla
}