import useBreakpoint from "@helper/break-point";
import type { ComponentChildren } from "preact";


export function ResponsiveShow({ deviceShow, children }: { deviceShow: "mobile" | "tablet" | "desktop" | "desktopXl" | "tablet-mobile" | "desktop-to-mobile" |"desktop-to-large", children: ComponentChildren }) {
    const { mobile, tablet, desktop, desktopXl } = useBreakpoint()
    return (
        <>
            {
                mobile && deviceShow === "mobile" ? children : null
            }
            {
                tablet && deviceShow === "tablet" ? children : null
            }
            {
                desktop && deviceShow === "desktop" ? children : null
            }
            {
                desktopXl && deviceShow === "desktopXl" ? children : null
            }
            {
                (tablet || mobile) && deviceShow === "tablet-mobile" ? children : null
            }
            {
                (tablet || mobile || desktop) && deviceShow === "desktop-to-mobile" ? children : null
            }
            {
                (desktop || desktopXl) && deviceShow === "desktop-to-large" ? children : null
            }
        </>
    )
}
