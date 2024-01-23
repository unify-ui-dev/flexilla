type Direction = 'top' | 'left' | 'bottom' | 'right';
type Alignment = 'start' | 'middle' | 'end';
export type Placement = `${Direction}-${Alignment}` | Direction

type EventEffect = {
    disableOnScroll?: boolean,
    disableOnResize?: boolean
}

export type Arrow = {
    enableArrow?: boolean,
    arrowSize?: number,
    customClass?: string
}

export type PopperOptions = {
    placement?: Placement | "bottom",
    offsetDistance?: number,
    arrow?: Arrow,
    eventEffect?: EventEffect
}

export type Dimensions = {
    popperHeight: number;
    popperWidth: number;
    refHeight: number;
    refWidth: number;
    refLeft: number;
    refTop: number;
    refRight: number;
}

export type ElementType = {
    reference: HTMLElement,
    popper: HTMLElement
}

export type PopperParams = {
    reference: HTMLElement,
    popper: HTMLElement,
    options?: PopperOptions
}