export type DismissibleParams = {
    dismissibleElement: HTMLElement
    action?: "remove-from-dom" | "hide-from-screen",
    onDissmiss?: () => void
}