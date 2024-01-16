export const afterTransition = (
    { element, callback }:
        {
            element: HTMLElement,
            callback: (() => void)
        }
) => {
    const elementTransition = getComputedStyle(element).transition
    if (elementTransition !== "none" && elementTransition !== "") {
        element.addEventListener("transitionend",
            function handleTransitionEnd() {
                element.removeEventListener("transitionend", handleTransitionEnd)
                callback()
            },
            { once: true }
        )
    } else callback()
}