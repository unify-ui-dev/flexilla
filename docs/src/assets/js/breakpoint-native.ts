let  breakpoint:string;

// Get the current breakpoint
const getBreakpoint = () => window
    .getComputedStyle(document.body, ":before")
    .content.replace(/\"/g, "");

// Calculate breakpoint on page load
breakpoint = getBreakpoint();

// Recalculate breakpoint on resize
window.addEventListener(
  "resize",
  () => {
    breakpoint = getBreakpoint();
  },
  false
);

export { breakpoint  };
