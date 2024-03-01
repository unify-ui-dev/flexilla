const switchTheme = document.querySelector("[data-switch-theme]") as HTMLElement
const docElement = document.documentElement;

const getThemePreference = () => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const isDarkTheme = getThemePreference() === "dark";
docElement.classList[isDarkTheme ? "add" : "remove"]("dark");
if (switchTheme instanceof HTMLElement) {
    switchTheme.addEventListener("click", (e) => {
        e.preventDefault();
        const isDarkTheme_ = getThemePreference() === "dark";
        docElement.classList[isDarkTheme_ ? "remove" : "add"]("dark");
        localStorage.setItem("theme", isDarkTheme_ ? "light" : "dark");
    });
}