const navbar = document.querySelector("[data-navbar]");
const trigger = document.querySelector("[data-toggle-navbar]");
if (navbar instanceof HTMLElement && trigger instanceof HTMLButtonElement) {
  trigger.addEventListener("click", () => {
    const state = navbar.dataset.state || "close";
    navbar.setAttribute(
      "data-state",
      `${state === "open" ? "close" : "open"}`
    );
    trigger.setAttribute(
      "data-expanded",
      `${state === "open" ? "false" : "true"}`
    );
    document.body.style.overflowY = `${state === "open" ? "auto" : "hidden"}`;
  });
  navbar.addEventListener("click", () => {
    navbar.setAttribute("data-state", "close");
    trigger.setAttribute("data-expanded", "false");
    document.body.style.overflowY = "auto";
  });
}