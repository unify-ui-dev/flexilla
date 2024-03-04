import { $, $$, $d } from "@flexilla/utilities";
import { IndicatorOptions, TabsOptions } from "./types";
import { DEFAULT_INDICATOR, DEFAULT_ORIENTATION, TRANSFORM_DURATION, TRANSFORM_EASING } from "./const";
import { createIndicator } from "./indicator";
import { activeTab, handleKeyEvent, hideAllTabPanels } from "./helpers";

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

  /**
   * Tabs Components
   * @param tabs 
   * @param options 
   */
  constructor(tabs: string | HTMLElement, options: TabsOptions = {}) {
    const tabsElement = typeof tabs === "string" ? $(tabs) : tabs
    if (!(tabsElement instanceof HTMLElement)) {
      throw new Error("Please Provide a valid HTMLElement for the tabs component");
    }

    this.tabsElement = tabsElement;
    this.panelsContainer = $d("[data-panels-container]", this.tabsElement) || this.tabsElement
    this.options = options;
    this.indicatorOptions = this.options.indicatorOptions || DEFAULT_INDICATOR;
    const { orientation, defaultValue, animationOnShow } = this.options;
    this.defaultTabValue = defaultValue || this.tabsElement.dataset.defaultValue || this.getDefActivePanelValue(this.panelsContainer) || "";

    this.tabsOrientation = orientation || this.tabsElement.dataset.orientation || DEFAULT_ORIENTATION;
    this.showAnimation = animationOnShow || this.tabsElement.dataset.showAnimation || "";

    this.tabList = $d("[data-tab-list]", this.tabsElement) as HTMLElement;
    const panels = $$("[data-tab-panel]", this.panelsContainer);
    this.tabPanels = panels.filter((panel) => panel.parentElement === this.panelsContainer)
    if (!(this.tabList instanceof HTMLElement)) {
      throw new Error("TabList Element is required, tabList must have a data-tab-list attribute and be direct descendant of the tabs");
    }
    const isValidTabPanels = this.tabPanels.every(element => element instanceof HTMLElement)
    if (!isValidTabPanels) {
      throw new Error("TabPanels Element are required, tabPanels must have a data-tab-panel attribute and be direct descendant of the tabs or the panels container (data-panels-container)");
    }

    this.tabTriggers = $$("[data-tabs-trigger]", this.tabList);

    if (this.tabTriggers.length <= 0) {
      throw new Error("No trigger found, Tab component must have at least one trigger");
    }

    const defaultActiveTrigger = $("[data-tabs-trigger][data-state=active]", this.tabList)

    this.activeTabTrigger = $(`[data-tabs-trigger][data-target='${this.defaultTabValue}']`, this.tabList) || defaultActiveTrigger || this.tabTriggers[0];

    const { transformEasing, transformDuration, className } = this.indicatorOptions;

    this.indicatorClassName = className || this.tabsElement.getAttribute("data-indicator-class-name") || "";
    this.indicatorTransformEaseing = transformEasing || this.tabsElement.dataset.indicatorTransformEasing || TRANSFORM_EASING;
    this.indicatorTransformDuration = transformDuration || parseInt(this.tabsElement.dataset.indicatorTransformDuration || "") || TRANSFORM_DURATION;
    this.init();
  }

  private getDefActivePanelValue = (panelsContainer: HTMLElement) => {
    const panel = $d("[data-tab-panel][data-state=active]", panelsContainer)
    return panel?.getAttribute("id")
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
    const activePanel = $d(`[data-tab-panel]#${activeTabTrigger.getAttribute("data-target")}`, tabsPanelContainer)
    hideAllTabPanels(activePanel, tabPanels)

    const tabAct = activeTab({
      triggerElement: activeTabTrigger,
      tabTriggers,
      tabsPanelContainer: tabsPanelContainer,
      showAnimation,
      tabsOrientation,
      indicatorTransformDuration,
      indicatorTransformEaseing,
      tabList: tabList
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
    const triggerElement = $(`[data-tabs-trigger][data-target='${tabValue}']`, this.tabList)
    if (!(triggerElement instanceof HTMLElement)) return
    this.activeTabTrigger = triggerElement;
    const tabAct = activeTab({
      triggerElement,
      tabTriggers: this.tabTriggers,
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

  /**
     * auto init Tabs Elements based on the selector provided
     * @param selector {string} default is [data-fx-tabs] attribute
     */
  public static autoInit = (selector="[data-fx-tabs]") =>{
    const tabsEls = $$(selector)
    for(const tabs of tabsEls) new Tabs(tabs)
  }
}

export default Tabs