import { find, findDirectDescendant } from "@flexilla/utilities";
import { ACTIVE_STATE, INACTIVE_STATE, STATE_TO_FALSE, STATE_TO_TRUE, VERTICAL_ORIENTATION } from "./const";
import { moveIndicator } from "./indicator";

/**
 * Sets all triggers' data-state attribute to false except the active trigger.
 */
const setAllTriggerToFalse = (activeTrigger: HTMLElement, tabTriggers: HTMLElement[]) => {
  for (const tabTrigger of tabTriggers) {
    if (tabTrigger !== activeTrigger) {
      tabTrigger.setAttribute("data-state", INACTIVE_STATE);
    }
  }
};

/**
 * Setup the nested tabs if it has a custom indicator
 */
export const onInitTabIfHasChildWithIndicator = ({ currentTab, tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing }: { currentTab: HTMLElement, tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string }) => {
  if (!(currentTab instanceof HTMLElement)) return

  const childrenTab = findDirectDescendant({ selector: "[data-fx-tabs]", parentElement: currentTab })
  if (!(childrenTab instanceof HTMLElement)) return

  const tabList = findDirectDescendant({ selector: "[data-tab-list]", parentElement: childrenTab }) as HTMLElement
  const triggerElement = tabList.querySelector("[data-tabs-trigger][data-state=active]") as HTMLElement
  const indicator = tabList.querySelector("span[data-tab-indicator]") as HTMLSpanElement

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
const hideAllTabPanels = (activePanel: HTMLElement, tabPanels: HTMLElement[]) => {
  for (const tabPanel of tabPanels) {
    if (tabPanel !== activePanel) {
      tabPanel.setAttribute("data-state", INACTIVE_STATE);
      tabPanel.setAttribute("aria-hidden", STATE_TO_TRUE);
      tabPanel.hidden = true
      if (tabPanel.hasAttribute("data-initial-active")) {
        tabPanel.setAttribute("data-initial-active", "false")
      }
    }
  }
};

/**
 * Activates the selected tab and updates the indicator position.
 */
export const activeTab = ({ triggerElement, tabTriggers, tabPanels, tabsPanelContainer, showAnimation, tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing, tabList }: { triggerElement: HTMLElement, tabTriggers: HTMLElement[], tabPanels: HTMLElement[], tabsPanelContainer: HTMLElement, showAnimation: string, tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string, tabList: HTMLElement }) => {
  if (!(triggerElement instanceof HTMLElement)) return;
  const toSelectTab = findDirectDescendant(
    { selector: `[data-tab-panel]#${triggerElement.getAttribute("data-target")}`, parentElement: tabsPanelContainer }
  );
  if (!toSelectTab) return;
  setAllTriggerToFalse(triggerElement, tabTriggers);
  hideAllTabPanels(toSelectTab, tabPanels);
  toSelectTab.setAttribute("data-state", ACTIVE_STATE);
  toSelectTab.hidden = false
  triggerElement.setAttribute("data-state", ACTIVE_STATE);
  toSelectTab.setAttribute("aria-hidden", STATE_TO_FALSE);
  if (showAnimation && showAnimation !== "") {
    toSelectTab.style.setProperty("--un-tab-show-animation", `${showAnimation}`)
  }

  const indicator = find({ selector: "[data-tab-indicator]", parentElement: tabList }) as HTMLSpanElement


  moveIndicator({
    triggerElement,
    indicator_: indicator,
    tabsOrientation,
    transformDuration: indicatorTransformDuration,
    transformEasing: indicatorTransformEaseing,
    tabList
  });

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