import type { SourceData } from "@/types/index";
import { accordionCode } from "./accordion";
import { collapseCode } from "./collapse";
import { dismissibleCode } from "./dismissible";

export const codeData: SourceData = {
    ...accordionCode,
    ...collapseCode,
    ...dismissibleCode,
};