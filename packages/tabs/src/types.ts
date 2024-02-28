export type IndicatorOptions = {
    className?: string,
    transformDuration?: number,
    transformEasing?: string,
}

export type TabsOptions = {
    orientation?: "horizontal" | "vertical"
    defaultValue?: string,
    animationOnShow?: string,
    indicatorOptions?:IndicatorOptions,
    onChange?: () => void,
    onChangeTab?: ({ currentTrigger, currentPanel }: { currentTrigger?: HTMLElement, currentPanel?: HTMLElement }) => void
};