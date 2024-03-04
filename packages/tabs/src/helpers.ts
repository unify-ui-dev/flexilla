import { $, $d, setAttributes } from "@flexilla/utilities";
import { ACTIVE_STATE, INACTIVE_STATE, STATE_TO_FALSE, STATE_TO_TRUE, VERTICAL_ORIENTATION } from "./const";
import { moveIndicator } from "./indicator";

/**
 * Sets all triggers' data-state attribute to false except the active trigger.
 */
const setAllTriggerToFalse = (activeTrigger: HTMLElement, tabTriggers: HTMLElement[]) => {
  for (const tabTrigger of tabTriggers) {
    if (tabTrigger !== activeTrigger) {
      setAttributes(tabTrigger, { "data-state": INACTIVE_STATE, tabindex: "-1" })
    }
  }
};

/**
 * Setup the nested tabs if it has a custom indicator
 */
const setNestedTabsIndicatorCorrectly = ({ tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing, indicator, triggerElement, tabList }: { tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string, indicator: HTMLSpanElement, triggerElement: HTMLElement, tabList: HTMLElement }) => {
  if (!(indicator instanceof HTMLSpanElement) || !(triggerElement instanceof HTMLElement)) return
  moveIndicator({
    triggerElement,
    indicator_: indicator,
    tabsOrientation,
    transformDuration: indicatorTransformDuration,
    transformEasing: indicatorTransformEaseing,
    tabList
  });
}


/**
* Hides all tab panels except the active panel.
*/
export const hideAllTabPanels = (activePanel: HTMLElement | undefined, tabPanels: HTMLElement[]) => {
  for (const tabPanel of tabPanels) {
    if (tabPanel !== activePanel) {
      setAttributes(tabPanel, { "data-state": INACTIVE_STATE, "aria-hidden": STATE_TO_TRUE })
      tabPanel.hidden = true
    }
  }
};

/**
 * Activates the selected tab and updates the indicator position.
 */
export const activeTab = ({ triggerElement, tabTriggers, tabsPanelContainer, showAnimation, tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing, tabList }: { triggerElement: HTMLElement, tabTriggers: HTMLElement[], tabsPanelContainer: HTMLElement, showAnimation: string, tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string, tabList: HTMLElement }) => {
  const currentTab = $d("[data-tab-panel][data-state=active]", tabsPanelContainer)
  if (currentTab) {
    setAttributes(currentTab, { "data-state": "hidden" })
    currentTab.hidden = true
  }
  if (!(triggerElement instanceof HTMLElement)) return;
  const toSelectTab = $d(`[data-tab-panel]#${triggerElement.getAttribute("data-target")}`, tabsPanelContainer);
  if (!(toSelectTab instanceof HTMLElement)) return;
  setAllTriggerToFalse(triggerElement, tabTriggers);
  toSelectTab.hidden = false
  setAttributes(toSelectTab, { "data-state": ACTIVE_STATE, "aria-hidden": STATE_TO_FALSE })
  setAttributes(triggerElement, { "data-state": ACTIVE_STATE, tabindex: "0" })

  if (showAnimation && showAnimation !== "") {
    toSelectTab.style.setProperty("--un-tab-show-animation", `${showAnimation}`)
  }

  const indicator = $("[data-tab-indicator]", tabList) as HTMLSpanElement


  moveIndicator({
    triggerElement,
    indicator_: indicator,
    tabsOrientation,
    transformDuration: indicatorTransformDuration,
    transformEasing: indicatorTransformEaseing,
    tabList
  });

  const childrenTab = $d("[data-fx-tabs]", toSelectTab)
  if (childrenTab instanceof HTMLElement) {
    const tabList = $d("[data-tab-list]", childrenTab) as HTMLElement
    const triggerElement = tabList.querySelector("[data-tabs-trigger][data-state=active]") as HTMLElement
    const indicator = tabList.querySelector("span[data-tab-indicator]") as HTMLSpanElement
    if (indicator instanceof HTMLSpanElement && triggerElement instanceof HTMLElement && !childrenTab.hasAttribute("data-nested-indicator-seteled")) {
      childrenTab.setAttribute("data-nested-indicator-seteled", '')
      setNestedTabsIndicatorCorrectly({
        tabsOrientation: tabsOrientation,
        indicatorTransformDuration: indicatorTransformDuration,
        indicatorTransformEaseing: indicatorTransformEaseing,
        indicator: indicator,
        triggerElement: triggerElement,
        tabList: tabList
      })
    }
  }


  return { currentTabPanel: toSelectTab }
};

/**
* Handles keydown events for tab triggers.
*/
export const handleKeyEvent = (event: KeyboardEvent, tabTriggers: HTMLElement[], tabsOrientation: string) => {
  const currentIndex = tabTriggers.findIndex(
    (tabTrigger) => tabTrigger.getAttribute("data-state") === ACTIVE_STATE
  );

  const direction =
    event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 1;
  const isVertical = tabsOrientation === VERTICAL_ORIENTATION;

  const isValidIndex = (index: number) =>
    !tabTriggers[index].hasAttribute("disabled");

  const getNextIndex = (currentIndex: number, direction: 1 | -1, length: number) => {
    let nextIndex = (currentIndex + direction + length) % length;
    while (!isValidIndex(nextIndex)) {
      nextIndex = (nextIndex + direction + length) % length;
    }
    return nextIndex;
  };

  if (
    (isVertical && (event.key === "ArrowUp" || event.key === "ArrowDown")) ||
    (!isVertical && (event.key === "ArrowLeft" || event.key === "ArrowRight"))
  ) {
    event.preventDefault();
    const nextValidIndex = getNextIndex(
      currentIndex,
      direction,
      tabTriggers.length
    );
    const currentTrigger_ = tabTriggers[nextValidIndex];
    currentTrigger_.focus();
    currentTrigger_.click();
  }
};