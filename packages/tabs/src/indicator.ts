import { find, appendBefore } from "@flexilla/utilities";
import { VERTICAL_ORIENTATION } from "./const";
import { IndicatorOptions } from "./types";


/**
 * Sets up styles for the indicator element.
 */
const createStylesForIndicator = (indicator_: HTMLElement) => {
    if (!(indicator_ instanceof HTMLElement)) return;
    const styles = {
        "--un-tab-indicator-height": "2px",
        "--un-tab-indicator-top": "0px",
        "--un-tab-indicator-left": "0px",
    };
    for (const [property, value] of Object.entries(styles)) {
        indicator_.style.setProperty(property, value);
    }
};
/**
 * Creates the indicator element and appends it to the tabList.
 */
export const createIndicator = ({activeTabTrigger, useIndicator, tabsOrientation, tabsElement, indicatorOptions, tabList}:{activeTabTrigger: HTMLElement, useIndicator: boolean, tabsOrientation: string, tabsElement: HTMLElement, indicatorOptions: IndicatorOptions, tabList: HTMLElement}) => {
    if (!useIndicator) return;

    const { className } = indicatorOptions

    const indicatorClasses = className || tabsElement.dataset.indicatorClassName || ""

    const indicator_ = document.createElement("span");
    indicator_.setAttribute("data-tab-indicator", '')
    indicator_.setAttribute("aria-hidden", "true")
    const transformFunction = tabsOrientation === VERTICAL_ORIENTATION ? getTransformY : getTransformX;

    indicator_.style.setProperty(
        "transform", transformFunction(activeTabTrigger)
    );
    if (indicatorClasses) {
        const classesArray = indicatorClasses ? indicatorClasses.split(" ") : [];
        indicator_.classList.add(...classesArray);
    } else {
        createStylesForIndicator(indicator_);
    }

    const firstTriggerElement = find({ selector: ":first-child", parentElement: tabList })
    firstTriggerElement && appendBefore({ newElement: indicator_, existingElement: firstTriggerElement })

    return indicator_
};

/**
 * Transforms an element's position and size to apply to the indicator.
 */
const getTransformX = (triggerElement: HTMLElement) => {
    const transform = {
        x: triggerElement.offsetLeft,
        scaleX: triggerElement.offsetWidth / 100,
    };
    return `translateX(${transform.x}px) scaleX(${transform.scaleX})`;
};

/**
 * Transforms an element's position and size to apply to the indicator.
 */
const getTransformY = (triggerElement: HTMLElement) => {
    const transform = {
        y: triggerElement.offsetTop,
        scaleY: triggerElement.offsetHeight / 10,
    };
    return `translateY(${transform.y}px) scaleY(${transform.scaleY})`;
};

/**
 * Moves the indicator to the position of the given element.
 */
export const moveIndicator = ({ triggerElement, indicator_, tabsOrientation, transformDuration, transformEasing }: {
    triggerElement: HTMLElement,
    indicator_: HTMLSpanElement|undefined, tabsOrientation: string,
    transformDuration?: number,
    transformEasing?: string
}) => {

    if (!(indicator_ instanceof HTMLElement)) return;
    indicator_.animate(
        [
            {
                transform:
                    tabsOrientation === VERTICAL_ORIENTATION
                        ? getTransformY(triggerElement)
                        : getTransformX(triggerElement),
            },
        ],
        {
            fill: "both",
            duration: transformDuration,
            easing: transformEasing,
        }
    );
};