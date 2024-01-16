// define the height in px and width in % when wanna place the indicator on left or right of the trigger
type IndicatorRightLeft = {
    position: "left" | "right",
    height: "full" | string,
    width: string
}

// define the height in px and width in % when wanna place the indicator on top or bottom the trigger
type IndicatorBottomTop = {
    position: "bottom" | "top",
    height: string,
    width: "full" | string
}

// The default, the indicator take the width and height off current trigger
type DefaultIndicator = {
    position: "fill-trigger"
}
export type IndicatorOptions = {
    useIndicator: boolean,
    className?: string,
    customize?: DefaultIndicator | IndicatorBottomTop | IndicatorRightLeft
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

export type TabsReturns = {
    showPanel: (value: string) => void,
    activePanel: HTMLElement,
    activeTrigger: HTMLElement
};

export type TabsParams = {
    tabsElement: HTMLElement;
    options?: TabsOptions;
    indicatorOptions?: IndicatorOptions
};