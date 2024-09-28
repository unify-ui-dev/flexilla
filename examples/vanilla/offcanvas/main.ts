import { OffCanvas} from "@flexilla/offcanvas"
import "./../main"

OffCanvas.init("[data-slideover-from-left]",
    {
        backdrop: {
            visibility: "hidden",
        }
    }
)


new OffCanvas(
    "[data-slideover-from-top]",
)
new OffCanvas("[data-slideover-from-bottom]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "ui-overlay bg-gray8/50"
        }
    }
)

new OffCanvas("[data-slideover-from-right]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "ui-overlay bg-gray8/50"
        }
    }
)
new OffCanvas("[data-offcanvas-withbackdrop]")
new OffCanvas("[data-offcanvas-backdrop-blur]")

new OffCanvas("[data-offcanvas-bodyscroll]")
new OffCanvas("[data-offcanvas-bodyscroll-overlay]",
    {
        allowBodyScroll: true
    }
)
new OffCanvas("[data-offcanvas-static-overlay]")

new OffCanvas("[data-offcanvas-static-overlay-2]",
    {
        staticBackdrop: true
    }
)