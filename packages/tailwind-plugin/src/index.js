const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addVariant, e, addUtilities }) => {
  const validStateValues = [
    "open",
    "not-open",
    "visible",
    "not-visible",
    "hidden",
    "not-hidden",
    "close",
    "not-close",
    "active",
    "not-active",
    "inactive",
    "not-inactive",
  ];
  const prefix = "fx";
  const selector = "data-state";
  for (const stateValue of validStateValues) {
    const startWithNot = stateValue.startsWith("not-");
    const value = startWithNot
      ? stateValue.substring(stateValue.indexOf("-") + 1)
      : stateValue;
    const variantName = `${prefix}-${stateValue}`;
    const attrGen = `[${selector}="${value}"]`;
    addVariant(`${variantName}`, [
      ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return startWithNot
            ? `.${e(
                `${variantName}${separator}${className}`
              )}[${selector}]:not(${attrGen})`
            : `.${e(`${variantName}${separator}${className}`)}${attrGen}`;
        });
      },
      ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return startWithNot
            ? `:where([${selector}]:not(${attrGen})) .${e(
                `${variantName}${separator}${className}`
              )}:not(${selector})`
            : `:where(${attrGen}) .${e(
                `${variantName}${separator}${className}`
              )}`;
        });
      },
    ]);
  }
  //
  addUtilities({
    ".ui-popper": {
      position: "absolute",
      top: "0",
      left: "0",
      transform:
        "translate(var(--fx-popper-placement-x), var(--fx-popper-placement-y))",
    },
    ".ui-tabs-indicator": {
      position: "absolute",
      transformOrigin: "0 0",
      width: "var(--un-tab-indicator-width)",
      top: "var(--un-tab-indicator-top)",
      left: "var(--un-tab-indicator-left)",
    },
    ".ui-animated": {
      animattion: "var(--un-modal-animation)",
      animationFillMode: "both",
    },
    ".ui-overlay": {
      position: "fixed",
      inset: "0",
    },
  });
});
