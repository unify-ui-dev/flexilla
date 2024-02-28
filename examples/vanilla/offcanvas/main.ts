import { OffCanvas } from "@flexilla/offcanvas"
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'
import "@flexilla/offcanvas/offcanvas.css"
new OffCanvas("[data-slideover-from-left]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "bg-gray/50"
        }
    }
)

new OffCanvas(
    "[data-slideover-from-top]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "bg-gray/50"
        }
    }
)
new OffCanvas("[data-slideover-from-bottom]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "bg-gray/50"
        }
    }
)

new OffCanvas("[data-slideover-from-right]",
    {
        backdrop: {
            visibility: "visible",
            backdropClass: "bg-gray/50"
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