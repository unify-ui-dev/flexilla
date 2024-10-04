import type { SourceData } from "@/types/index";
import { accordionCode } from "./accordion";
import { collapseCode } from "./collapse";
import { dismissibleCode } from "./dismissible";
import { tabsCode } from "./tabs";
import { dropdownCode } from "./dropdown";
import { tooltipCode } from "./tooltips";
import { modalCode } from "./modal";

export const codeData: SourceData = {
    ...accordionCode,
    ...collapseCode,
    ...dismissibleCode,
    ...tabsCode,
    ...dropdownCode,
    ...tooltipCode,
    ...modalCode
};