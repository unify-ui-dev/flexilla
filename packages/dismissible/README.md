# @fx-lib/dismissible | Dismissible Component

`@fx-lib/dismissible` is a lightweight package that provides a way to dismiss elements from the DOM or hide them from the screen.

## Installation

```shell
npm install @fx-lib/dismissible
```
Import 
```js
import Dismissible from '@fx-lib/dismissible';
```

## Params

| Name | Description | Data Attributes | Type | | --------------------- | -------------------------------------- | --------------- | -------------------- | | dismissibleElement | The element to be dismissed. | - | HTMLElement | | action | The action to perform when dismissing the element. Available options: "remove-from-dom", "hide-from-screen". | data-action | "remove-from-dom" \| "hide-from-screen" | | onDismiss | The callback function to be executed when the element is dismissed. | - | () => void |

## Example
```html
<div class="dismissable-element" data-action="remove-from-dom">
    <button class="dismiss-button" data-dismiss-btn>Dismiss</button>
</div>

<script>
    const dismissibleElement = document.querySelector('.dismissable-element');
    const dismissible = new Dismissible({
        dismissibleElement,
        action: "remove-from-dom",
        onDismiss: () => {
            console.log("Element dismissed!");
        }
    });
</script>
```