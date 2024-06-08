import { type DropdownOptions, Dropdown } from ".";

export const fDropdown = (dropdown: string | HTMLElement, options: DropdownOptions = {}) => new Dropdown(dropdown, options)