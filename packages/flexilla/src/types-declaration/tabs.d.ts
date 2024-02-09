declare type IndicatorOptions = {
    useIndicator: boolean;
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
    private useIndicator;
    private indicatorTransformEaseing;
    private indicatorTransformDuration;
    private indicator;
    private panelsContainer;
    constructor({ tabsElement, options, indicatorOptions }: TabsParams);
    init(): void;
    attachTriggerEvents(triggerElement: HTMLElement): void;
    initializeTab(): void;
}

export declare type TabsOptions = {
    orientation?: "horizontal" | "vertical";
    defaultValue?: string;
    animationOnShow?: string;
    onChange?: () => void;
    onChangeTab?: ({ currentTrigger, currentPanel }: {
        currentTrigger?: HTMLElement;
        currentPanel?: HTMLElement;
    }) => void;
};

export declare type TabsParams = {
    tabsElement: HTMLElement;
    options?: TabsOptions;
    indicatorOptions?: IndicatorOptions;
};