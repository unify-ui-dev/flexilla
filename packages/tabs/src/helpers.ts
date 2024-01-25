import { find } from "@flexilla/utilities";
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
* Hides all tab panels except the active panel.
*/
const hideAllTabPanels = (activePanel: HTMLElement, tabPanels: HTMLElement[]) => {
  for (const tabPanel of tabPanels) {
    if (tabPanel !== activePanel) {
      tabPanel.setAttribute("data-state", INACTIVE_STATE);
      tabPanel.setAttribute("aria-hidden", STATE_TO_TRUE);
      tabPanel.hidden = true;
    }
  }
};

/**
 * Activates the selected tab and updates the indicator position.
 */
export const activeTab = ({ triggerElement, tabTriggers, tabPanels, tabsElement, showAnimation, indicator_, tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing }: { triggerElement: HTMLElement, tabTriggers: HTMLElement[], tabPanels: HTMLElement[], tabsElement: HTMLElement, showAnimation: string, indicator_: HTMLSpanElement | undefined, tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string }) => {
  if (!(triggerElement instanceof HTMLElement)) return;
  const toSelectTab = find(
    { selector: `[data-tab-panel]#${triggerElement.getAttribute("data-target")}`, parentElement: tabsElement }
  );
  if (!toSelectTab) return;
  setAllTriggerToFalse(triggerElement, tabTriggers);
  hideAllTabPanels(toSelectTab, tabPanels);
  toSelectTab.setAttribute("data-state", ACTIVE_STATE);
  triggerElement.setAttribute("data-state", ACTIVE_STATE);
  toSelectTab.setAttribute("aria-hidden", STATE_TO_FALSE);
  toSelectTab.hidden = false;
  if (showAnimation && showAnimation !== "") {
  console.log(`Hummm showAnimation ${showAnimation}`)
    // toSelectTab.style.animation = `${showAnimation}`
    toSelectTab.style.setProperty("--un-tab-show-animation", `${showAnimation}`)
  }
  if (indicator_ instanceof HTMLElement) {
    indicator_.style.setProperty("--un-tab-indicator-height", `${tabsOrientation === VERTICAL_ORIENTATION ? 10 : triggerElement.clientHeight}px`)
    indicator_.style.setProperty("--un-tab-indicator-width", `${tabsOrientation === VERTICAL_ORIENTATION ? triggerElement.clientWidth : 100}px`)
    indicator_.style.setProperty("--un-tab-indicator-top", `${tabsOrientation === VERTICAL_ORIENTATION ? 0 : triggerElement.offsetTop}px`)
    indicator_.style.setProperty("--un-tab-indicator-left", `${tabsOrientation === VERTICAL_ORIENTATION ? triggerElement.offsetLeft : 0}px`)
  }

  moveIndicator({
    triggerElement,
    indicator_,
    tabsOrientation,
    transformDuration: indicatorTransformDuration,
    transformEasing: indicatorTransformEaseing
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