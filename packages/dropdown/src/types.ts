type Direction = 'top' | 'left' | 'bottom' | 'right';
type Alignment = 'start' | 'end';
export type Placement = `${Direction}-${Alignment}`

export type DropdownOptions = {
    defineRequiredStyles?:"inject"|"custom",
    triggerStrategy?:"click"|"hover",
    placement?:Placement,
    preventCloseFromInside?:boolean,
    preventCloseFromOutside?:boolean,
    offsetDistante?:number,
    onToggle?:({isHidden}:{isHidden:boolean})=>void
}

export type DropdownParams = {
    dropdownElement:HTMLElement,
    options:DropdownOptions
}