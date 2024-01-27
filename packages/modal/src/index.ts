import { injectStyles as injectDefaultStyle } from "./injectStyles";
export { default as Modal } from "./modal"
export type { ModalOptions, ModalParams } from "./types"

// Inject styles on the document head. This is required for proper positioning of modals
injectDefaultStyle()