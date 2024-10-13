export type OffcanvasOptions = {
    staticBackdrop?: boolean;
    allowBodyScroll?: boolean;
    backdrop?: string;
    beforeHide?: () => { cancelAction?: boolean; } | void;
    beforeShow?: () => void;
    onShow?: () => void;
    onHide?: () => void;
    animationDuration?: number;  // Optional duration for animations (in milliseconds)
    defaultState?: 'open' | 'close';
};
