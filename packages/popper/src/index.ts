import { injectStyles } from "./injectStyles";
export { default as CreatePopper } from "./popper"
export type { PopperParams, PopperOptions, Placement } from "./types"

// Inject the styles for popper when importing this module.
injectStyles()