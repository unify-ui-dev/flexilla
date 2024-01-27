
declare type DefaultIndicator = {
    position: "fill-trigger";
};

declare type IndicatorBottomTop = {
    position: "bottom" | "top";
    height: string;
    width: "full" | string;
};

declare type IndicatorOptions = {
    useIndicator: boolean;
    className?: string;
    customize?: DefaultIndicator | IndicatorBottomTop | IndicatorRightLeft;
    transformDuration?: number;
    transformEasing?: string;
};

declare type IndicatorRightLeft = {
    position: "left" | "right";
    height: "full" | string;
    width: string;
};

export declare class Tabs {
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