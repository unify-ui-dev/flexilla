import { injectDefault as defaultOffCanvasStyle } from "./injectStyles"
export { default as OffCanvas } from "./offcanvas"
export type { OffcanvasParams, BackdropOptions as OffcanvasOptions } from "./types"

// Inject the styles for tabs and tab-panels when importing this module.
document.addEventListener("DOMContentLoaded", defaultOffCanvasStyle)