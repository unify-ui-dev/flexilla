# Collapse Component

The Collapse component is used to hide and show an element.

## Params

| Params       | Description                            | Type                                    |
| ------------ | -------------------------------------- | --------------------------------------- |
| collapseElement | The element to be collapsed/expanded    | HTMLElement                            |
| triggerElement  | The element that triggers the collapse | HTMLElement \| null                     |
| options       | Additional options for the Collapse    | CollapseOptions                         |


### CollapseOptions

| Option       | Description                            | Type                                    |
| ------------ | -------------------------------------- | --------------------------------------- |
| orientation  | The orientation of the collapse         | "vertical" \| "horizontal" \| "vertical" |
| defaultState | The default state of the collapse       | "open" \| "close" \| "close"             |

## Example

```js
const options = {
  orientation: "vertical",
  defaultState: "close",
};

const collapse = new Collapse(
  '#myCollapseElement',
  options,
  '#myTriggerElement',
);

// Show the collapse element
collapse.show();

// Hide the collapse element
collapse.hide();

// Toggle the collapse element
collapse.toggle();
```