import { find, findAll, findDirectDescendant } from "@flexilla/utilities";
import { IndicatorOptions, TabsOptions, TabsParams } from "./types";
import { DEFAULT_INDICATOR, DEFAULT_ORIENTATION, TRANSFORM_DURATION, TRANSFORM_EASING } from "./const";
import { createIndicator } from "./indicator";
import { activeTab, handleKeyEvent, onInitTabIfHasChildWithIndicator } from "./helpers";

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
  private indicatorClassName: string;
  private indicatorTransformEaseing: string;
  private indicatorTransformDuration: number;
  private panelsContainer: HTMLElement

  constructor({ tabsElement, options = {}, indicatorOptions }: TabsParams) {
    if (!(tabsElement instanceof HTMLElement)) {
      throw new Error("Please Provide a valid HTMLElement for the tabs component");
    }

    this.tabsElement = tabsElement;
    this.panelsContainer = findDirectDescendant({ selector: "[data-panels-container]", parentElement: this.tabsElement }) || this.tabsElement
    this.options = options;
    this.indicatorOptions = indicatorOptions || DEFAULT_INDICATOR;
    const { orientation, defaultValue, animationOnShow } = this.options;
    this.defaultTabValue = defaultValue || this.tabsElement.dataset.defaultValue || "";

    this.tabsOrientation = orientation || this.tabsElement.dataset.orientation || DEFAULT_ORIENTATION;
    this.showAnimation = animationOnShow || this.tabsElement.dataset.showAnimation || "";

    this.tabList = findDirectDescendant({ selector: "[data-tab-list]", parentElement: this.tabsElement }) as HTMLElement;
    const panels = findAll({ selector: "[data-tab-panel]", parentElement: this.panelsContainer });
    this.tabPanels = panels.filter((panel) => panel.parentElement === this.panelsContainer)
    if (!(this.tabList instanceof HTMLElement)) {
      throw new Error("TabList Element is required, tabList must have a data-tab-list attribute and be direct descendant of the tabs");
    }
    const isValidTabPanels = this.tabPanels.every(element => element instanceof HTMLElement)
    if(!isValidTabPanels) {
      throw new Error("TabPanels Element are required, tabPanels must have a data-tab-panel attribute and be direct descendant of the tabs or the panels container (data-panels-container)");
    }

    this.tabTriggers = findAll({ selector: "[data-tabs-trigger]", parentElement: this.tabList });

    if (this.tabTriggers.length <= 0) {
      throw new Error("No trigger found, Tab component must have at least one trigger");
    }

    const defaultActiveTrigger = find({ selector: "[data-tabs-trigger][data-state=active]", parentElement: this.tabList })

    this.activeTabTrigger = find({ selector: `[data-tabs-trigger][data-target='${this.defaultTabValue}']`, parentElement: this.tabList }) || defaultActiveTrigger || this.tabTriggers[0];

    const { transformEasing, transformDuration, className } = this.indicatorOptions;

    this.indicatorClassName = className || this.tabsElement.getAttribute("data-indicator-class-name") || "";
    this.indicatorTransformEaseing = transformEasing || this.tabsElement.dataset.indicatorTransformEasing || TRANSFORM_EASING;
    this.indicatorTransformDuration = transformDuration || parseInt(this.tabsElement.dataset.indicatorTransformDuration || "") || TRANSFORM_DURATION;
    this.init();
  }

  private init() {
    if (!this.tabsElement.hasAttribute("data-fx-tabs")) {
      this.tabsElement.setAttribute("data-fx-tabs", "");
    }
    this.initializeTab(
      {
        tabTriggers: this.tabTriggers,
        tabPanels: this.tabPanels,
        tabsPanelContainer: this.panelsContainer,
        showAnimation: this.showAnimation,
        tabsOrientation: this.tabsOrientation,
        indicatorTransformDuration: this.indicatorTransformDuration,
        indicatorTransformEaseing: this.indicatorTransformEaseing,
        activeTabTrigger: this.activeTabTrigger,
        indicatorClassName: this.indicatorClassName,
        tabList: this.tabList
      }
    );
  }

  private attachTriggerEvents(triggerElement: HTMLElement) {
    if (!(triggerElement instanceof HTMLElement)) return;
    triggerElement.addEventListener("click", (e) => {
      e.preventDefault();
      this.activeTabTrigger = triggerElement;
      const tabAct = activeTab({
        triggerElement,
        tabTriggers: this.tabTriggers,
        tabPanels: this.tabPanels,
        tabsPanelContainer: this.panelsContainer,
        showAnimation: this.showAnimation,
        tabsOrientation: this.tabsOrientation,
        indicatorTransformDuration: this.indicatorTransformDuration,
        indicatorTransformEaseing: this.indicatorTransformEaseing,
        tabList: this.tabList
      });
      this.options.onChangeTab && (this.options.onChangeTab({
        currentTrigger: triggerElement,
        currentPanel: tabAct?.currentTabPanel
      }));
    });

    triggerElement.addEventListener("keydown", (event) => handleKeyEvent(event, this.tabTriggers, this.tabsOrientation));
  }

  private initializeTab(
    { tabTriggers, tabPanels, tabsPanelContainer, showAnimation, tabsOrientation, indicatorTransformDuration, indicatorTransformEaseing, activeTabTrigger, indicatorClassName, tabList }: { tabTriggers: HTMLElement[], tabPanels: HTMLElement[], tabsPanelContainer: HTMLElement, showAnimation: string, tabsOrientation: string, indicatorTransformDuration: number, indicatorTransformEaseing: string, activeTabTrigger: HTMLElement, indicatorClassName: string, tabList: HTMLElement }
  ) {
    for (const tabTrigger of tabTriggers) {
      this.attachTriggerEvents(tabTrigger);
    }

    createIndicator({
      activeTabTrigger,
      indicatorClassName,
      tabsOrientation,
      tabList
    });

    const tabAct = activeTab({
      triggerElement: activeTabTrigger,
      tabTriggers,
      tabPanels,
      tabsPanelContainer: tabsPanelContainer,
      showAnimation,
      tabsOrientation,
      indicatorTransformDuration,
      indicatorTransformEaseing,
      tabList: tabList
    });

    onInitTabIfHasChildWithIndicator({
      currentTab: tabAct?.currentTabPanel as HTMLElement,
      tabsOrientation: tabsOrientation,
      indicatorTransformDuration: indicatorTransformDuration,
      indicatorTransformEaseing: indicatorTransformEaseing,
    });

    this.options.onChangeTab && (this.options.onChangeTab({
      currentTrigger: activeTabTrigger,
      currentPanel: tabAct?.currentTabPanel
    }));
  }

  /**
   * @param tabValue {string} the value of the targeted tabpanel
   */
  changeTab = (tabValue: string) => {
    const triggerElement = find({ selector: `[data-tabs-trigger][data-target='${tabValue}']`, parentElement: this.tabList })
    if (!(triggerElement instanceof HTMLElement)) return
    this.activeTabTrigger = triggerElement;
    const tabAct = activeTab({
      triggerElement,
      tabTriggers: this.tabTriggers,
      tabPanels: this.tabPanels,
      tabsPanelContainer: this.panelsContainer,
      showAnimation: this.showAnimation,
      tabsOrientation: this.tabsOrientation,
      indicatorTransformDuration: this.indicatorTransformDuration,
      indicatorTransformEaseing: this.indicatorTransformEaseing,
      tabList: this.tabList
    });
    this.options.onChangeTab && (this.options.onChangeTab({
      currentTrigger: triggerElement,
      currentPanel: tabAct?.currentTabPanel
    }));
  }
}

export default Tabs