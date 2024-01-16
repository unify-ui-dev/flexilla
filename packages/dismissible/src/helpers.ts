export const dismissElement = (
    { dismissibleElement, callback }:
        {
            dismissibleElement: HTMLElement,
            callback: (() => void)
        }
) => {
    const elementTransition = getComputedStyle(dismissibleElement).transition
    if (elementTransition !== "none" && elementTransition !== "") {
        dismissibleElement.addEventListener("transitionend",
            function handleTransitionEnd() {
                dismissibleElement.removeEventListener("transitionend", handleTransitionEnd)
                callback()
            },
            { once: true }
        )
    } else callback()
}