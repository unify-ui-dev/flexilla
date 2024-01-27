import { injectStyles as injectDefaultTabsStyles } from "./injectStyle"
export { default as Tabs } from "./tabs"
export type { TabsOptions, TabsParams } from "./types"

// Inject the styles for tabs and tab-panels when importing this module.
injectDefaultTabsStyles()