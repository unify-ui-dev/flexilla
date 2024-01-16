type BackdropVisible = {
    visibility:"visible",
    backdropClass:string
}

type BackdropHidden = {
    visibility:"hidden"
}

export type OffcanvasOptions = BackdropVisible | BackdropHidden

export type OffcanvasParams = {
    offCanvasElement: HTMLElement,
    options?: {
        staticBackdrop?: boolean,
        allowBodyScroll?: boolean,
        backdrop?:OffcanvasOptions
    }
}