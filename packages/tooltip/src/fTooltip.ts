import { Tooltip, type TooltipOptions } from ".";

export const fTooltip = (tooltip: string | HTMLElement, options: TooltipOptions = {}) => new Tooltip(tooltip, options)