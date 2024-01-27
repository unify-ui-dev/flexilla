export const injectStyles = () => {
    const existingStyleTag = document.head.querySelector("[data-fx-style]")
    const newStyles = "[data-fx-popper] {position: absolute; left: 0px;top: 0px; transform: translateX(var(--fx-popper-placement-x)) translateY(var(--fx-popper-placement-y));}"
    if (existingStyleTag) {
        const currentStyle = existingStyleTag.textContent || ""
        if (!currentStyle.includes("[data-fx-popper]")) {
            existingStyleTag.textContent += newStyles
        }
        return
    }
    const styleElement = document.createElement("style")
    styleElement.textContent = newStyles
    styleElement.setAttribute("data-fx-style", "")
    document.head.appendChild(styleElement)
}