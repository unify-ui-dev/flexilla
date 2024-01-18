import { find, findAll } from "@fx-lib/utilities";
import { IndicatorOptions, TabsOptions, TabsParams } from "./types";
import { DEFAULT_ORIENTATION, TRANSFORM_DURATION, TRANSFORM_EASING } from "./const";
import { createIndicator } from "./indicator";
import { activeTab, handleKeyEvent } from "./helpers";
import { injectStyles } from "./injectStyle";

class Tabs {
  private tabsElement: HTMLElement;
  private options: TabsOptions;
  private indicatorOptions: IndicatorOptions;
  private defaultTabValue: string;
  private tabsOrientation: string;
  private showAnimation: string;
  private tabList: HTMLElement;
  private tabPanels: HTMLElement[];
  private tabTriggers: HTMLElement[];
  private activeTabTrigger: HTMLElement;
  private useIndicator: boolean;
  private indicatorTransformEaseing: string;
  private indicatorTransformDuration: number;
  private indicator: HTMLSpanElement | undefined;

  constructor({ tabsElement, options = {}, indicatorOptions = { useIndicator: false } }: TabsParams) {
    if (!(tabsElement instanceof HTMLElement)) {
      throw new Error("Please Provide a valid HTMLElement for the tabs component");
    }

    this.tabsElement = tabsElement;
    this.options = options;
    this.indicatorOptions = indicatorOptions;
    const { orientation, defaultValue, animationOnShow } = this.options;
    this.defaultTabValue = defaultValue || this.tabsElement.dataset.defaultValue || "";

    this.tabsOrientation = orientation || this.tabsElement.dataset.orientation || DEFAULT_ORIENTATION;
    this.showAnimation = animationOnShow || this.tabsElement.dataset.showAnimation || "";

    this.tabList = find({ selector: "[data-tab-list]", parentElement: this.tabsElement }) as HTMLElement;
    this.tabPanels = findAll({ selector: "[data-tab-panel]", parentElement: this.tabsElement });
    if (!(this.tabList instanceof HTMLElement)) {
      throw new Error("TabList Element is required");
    }

    this.tabTriggers = findAll({ selector: "[data-tabs-trigger]", parentElement: this.tabList });

    if (this.tabTriggers.length <= 0) {
      throw new Error("No trigger found, Tab component must have at least one trigger");
    }

    this.activeTabTrigger =
      find({ selector: `[data-tabs-trigger][data-target='${this.defaultTabValue}']`, parentElement: this.tabsElement }) ||
      this.tabTriggers[0];

    const { transformEasing, transformDuration, useIndicator } = this.indicatorOptions;

    this.useIndicator = useIndicator ||
      this.tabsElement.hasAttribute("data-use-indicator") &&
      this.tabsElement.getAttribute("data-use-indicator") !== "false" || false;
    this.indicatorTransformEaseing = transformEasing || this.tabsElement.dataset.indicatorTransformEasing || TRANSFORM_EASING;
    this.indicatorTransformDuration = transformDuration || parseInt(this.tabsElement.dataset.indicatorTransformDuration || "") || TRANSFORM_DURATION;

    this.indicator = undefined;
    this.init();
  }

  init() {
    this.tabsElement.setAttribute("data-fx-tabs", "");
    injectStyles();
    this.initializeTab();
  }

  attachTriggerEvents(triggerElement: HTMLElement) {
    if (!(triggerElement instanceof HTMLElement)) return;
    triggerElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.activeTabTrigger = triggerElement;
      const tabAct = activeTab({
        triggerElement,
        tabTriggers: this.tabTriggers,
        tabPanels: this.tabPanels,
        tabsElement: this.tabsElement,
        showAnimation: this.showAnimation,
        indicator_: this.indicator,
        tabsOrientation: this.tabsOrientation,
        indicatorTransformDuration: this.indicatorTransformDuration,
        indicatorTransformEaseing: this.indicatorTransformEaseing
      });
      this.options.onChangeTab && (this.options.onChangeTab({
        currentTrigger: triggerElement,
        currentPanel: tabAct?.currentTabPanel
      }));
    });

    triggerElement.addEventListener("keydown", (event) => handleKeyEvent(event, this.tabTriggers, this.tabsOrientation));
  }

  initializeTab() {
    for (const tabTrigger of this.tabTriggers) {
      this.attachTriggerEvents(tabTrigger);
    }

    const indicatorEl = createIndicator({
      activeTabTrigger: this.activeTabTrigger,
      useIndicator: this.useIndicator,
      tabsOrientation: this.tabsOrientation,
      tabsElement: this.tabsElement,
      indicatorOptions: this.indicatorOptions,
      tabList: this.tabList
    });

    this.indicator = indicatorEl;

    const tabAct = activeTab({
      triggerElement: this.activeTabTrigger,
      tabTriggers: this.tabTriggers,
      tabPanels: this.tabPanels,
      tabsElement: this.tabsElement,
      showAnimation: this.showAnimation,
      indicator_: this.indicator,
      tabsOrientation: this.tabsOrientation,
      indicatorTransformDuration: this.indicatorTransformDuration,
      indicatorTransformEaseing: this.indicatorTransformEaseing
    });

    this.options.onChangeTab && (this.options.onChangeTab({
      currentTrigger: this.activeTabTrigger,
      currentPanel: tabAct?.currentTabPanel
    }));
  }
}

export default Tabs