# @flexilla/dismissible | Dismissible Component

`@flexilla/dismissible` is a lightweight package that provides a way to dismiss elements from the DOM or hide them from the screen.

## Installation

```shell
npm install @flexilla/dismissible
```
Import 
```js
import Dismissible from '@flexilla/dismissible';
```

## Params

| Name | Description | Data Attributes | Type | | --------------------- | -------------------------------------- | --------------- | -------------------- | | dismissibleElement | The element to be dismissed. | - | HTMLElement | | action | The action to perform when dismissing the element. Available options: "remove-from-dom", "hide-from-screen". | data-action | "remove-from-dom" \| "hide-from-screen" | | onDismiss | The callback function to be executed when the element is dismissed. | - | () => void |

## Example
```html
<div class="dismissable-element" data-action="remove-from-dom">
    <button class="dismiss-button" data-dismiss-btn>Dismiss</button>
</div>

<script>
    const dismissible = new Dismissible('.dismissable-element',
        action: "remove-from-dom",
        onDismiss: () => {
            console.log("Element dismissed!");
        }
        );
</script>
```