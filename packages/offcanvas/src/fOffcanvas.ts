import { OffCanvas, type OffcanvasOptions } from ".";

export const fOffcanvas = (offcanvas: string | HTMLElement, options: OffcanvasOptions = {}) => new OffCanvas(offcanvas, options)