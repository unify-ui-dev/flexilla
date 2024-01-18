# @fx-lib/auto-resize-area

This package provides a utility class, `AutoResizableTextArea`, that allows you to create auto-resizable text areas in your web applications.

## Installation

You can install the `@fx-lib/auto-resize-area` package via npm:

```shell
npm install @fx-lib/auto-resize-area
```

## Usage

To use the `AutoResizableTextArea` class, follow these steps:

Import the class into your JavaScript or TypeScript file:
```ts
import { AutoResizableTextArea } from '@fx-lib/auto-resize-area';
```

Use it With JS
```js
const textArea = document.querySelector('[data-my-autorizable]');

const autoResizableTextarea = new AutoResizableTextArea({ textareaElement:textArea });
```

Use it with TS
```ts
const textArea = document.querySelector('[data-my-autorizable]') as HTMLTextAreaElement;

const autoResizableTextarea = new AutoResizableTextArea({ textareaElement:textArea });
```
Okay Now the Your Text Area will now autonomatically resize based on its content whenever the user types or window is resized

## Example
```html
<textarea placeholder="Enter something here" data-autoresizable class="px-3 py-1.5 wfull rounded-md bg-gray50 border border-gray-200 dark:border-gray-800 focus:outline focus:outline-2 focus:outline-blue-600 dark:focus:outline-blue-500 placeholder:text-gray-400 dark:placeholder:text-gray-600 text-gray-700 dark:text-gray-300 resize-none invalid:outline-red-600 dark:invalid:outline-red-500"></textarea>

<script>
  import { AutoResizableTextArea } from '@fx-lib/auto-resize-area';

  const textareaElement = document.querySelector('textarea');

  const autoResizableTextarea = new AutoResizableTextArea({ textareaElement });
</script>
```
