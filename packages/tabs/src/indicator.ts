import { $, appendBefore, setAttributes } from "@flexilla/utilities";
import { VERTICAL_ORIENTATION } from "./const";


/**
 * Creates the indicator element and appends it to the tabList.
 */
export const createIndicator = ({ activeTabTrigger, indicatorClassName, tabsOrientation, tabList }: { activeTabTrigger: HTMLElement, indicatorClassName: string, tabsOrientation: string, tabList: HTMLElement }) => {
    if (!indicatorClassName || indicatorClassName === "") return;


    const indicatorClasses = indicatorClassName

    const indicator_ = document.createElement("span");
    setAttributes(indicator_,{
        "data-tab-indicator":"",
        "aria-hidden":"true"
    })
    const transformFunction = tabsOrientation === VERTICAL_ORIENTATION ? getTransformY : getTransformX;

    indicator_.style.setProperty(
        "transform", transformFunction(activeTabTrigger)
    );

    const classesArray = indicatorClasses ? indicatorClasses.split(" ") : [];
    indicator_.classList.add(...classesArray);

    const firstTriggerElement = $("[data-tabs-trigger]:first-child", tabList)
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
export const moveIndicator = ({ triggerElement, indicator_, tabsOrientation, transformDuration, transformEasing, tabList }:
    {
        triggerElement: HTMLElement,
        indicator_: HTMLSpanElement | undefined, tabsOrientation: string,
        transformDuration?: number,
        transformEasing?: string,
        tabList: HTMLElement
    }) => {

    tabList.style.setProperty("--un-tab-indicator-height", `${tabsOrientation === VERTICAL_ORIENTATION ? 10 : triggerElement.clientHeight}px`)
    tabList.style.setProperty("--un-tab-indicator-width", `${tabsOrientation === VERTICAL_ORIENTATION ? triggerElement.clientWidth : 100}px`)
    tabList.style.setProperty("--un-tab-indicator-top", `${tabsOrientation === VERTICAL_ORIENTATION ? 0 : triggerElement.offsetTop}px`)
    tabList.style.setProperty("--un-tab-indicator-left", `${tabsOrientation === VERTICAL_ORIENTATION ? triggerElement.offsetLeft : 0}px`)

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