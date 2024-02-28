type BackdropVisible = {
    visibility: "visible",
    backdropClass: string
}

type BackdropHidden = {
    visibility: "hidden"
}

export type BackdropOptions = BackdropVisible | BackdropHidden

export type OffcanvasOptions = {
    staticBackdrop?: boolean,
    allowBodyScroll?: boolean,
    backdrop?: BackdropOptions
}