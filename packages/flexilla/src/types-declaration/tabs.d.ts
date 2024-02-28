
declare type IndicatorOptions = {
    className?: string;
    transformDuration?: number;
    transformEasing?: string;
};

export declare class Tabs {
    private tabsElement;
    private options;
    private indicatorOptions;
    private defaultTabValue;
    private tabsOrientation;
    private showAnimation;
    private tabList;
    private tabPanels;
    private tabTriggers;
    private activeTabTrigger;
    private indicatorClassName;
    private indicatorTransformEaseing;
    private indicatorTransformDuration;
    private panelsContainer;
    /**
     * Tabs Components
     * @param tabs
     * @param options
     */
    constructor(tabs: string | HTMLElement, options?: TabsOptions);
    private init;
    private attachTriggerEvents;
    private initializeTab;
    /**
     * @param tabValue {string} the value of the targeted tabpanel
     */
    changeTab: (tabValue: string) => void;
}

export declare type TabsOptions = {
    orientation?: "horizontal" | "vertical";
    defaultValue?: string;
    animationOnShow?: string;
    indicatorOptions?: IndicatorOptions;
    onChange?: () => void;
    onChangeTab?: ({ currentTrigger, currentPanel }: {
        currentTrigger?: HTMLElement;
        currentPanel?: HTMLElement;
    }) => void;
};