export type IndicatorOptions = {
    useIndicator: boolean,
    className?: string,
    transformDuration?: number,
    transformEasing?: string,
}

export type TabsOptions = {
    orientation?: "horizontal" | "vertical"
    defaultValue?: string,
    animationOnShow?: string,
    onChange?: () => void,
    onChangeTab?: ({ currentTrigger, currentPanel }: { currentTrigger?: HTMLElement, currentPanel?: HTMLElement }) => void
};



export type TabsParams = {
    tabsElement: HTMLElement;
    options?: TabsOptions;
    indicatorOptions?: IndicatorOptions
};