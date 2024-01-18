import { injectStyle } from "@fx-lib/utilities"

export const injectStyles = () => {
    injectStyle({
        newStyles: `[data-fx-tabs] [data-tab-panel]{display: none;animation: none;-webkit-animation: none;}[data-fx-tabs] [data-tab-panel][aria-selected="true"]{display: flex;}[data-fx-tabs] [data-tab-panel][aria-selected="true"]{animation: var(--un-tab-show-animation);-webkit-animation: var(--un-tab-show-animation);animation-fill-mode: both;}[data-fx-tabs] [data-tabs-trigger]{position:relative; }[data-tab-indicator]{position: absolute;transform-origin: 0 0;width: var(--un-tab-indicator-width);height: var(--un-tab-indicator-height);top: var(--un-tab-indicator-top);left: var(--un-tab-indicator-left);}`,
        identifier: "[data-fx-modal]"
    })
}