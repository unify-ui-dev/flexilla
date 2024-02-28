# Popper (@flexilla/popper)

An ultra-compact positioning engine designed with inspiration from [Nanopop](https://www.npmjs.com/package/nanopop){:target="_blank"}. Much like its counterpart, PopperJS, our library thrives on simplicity and efficiency.

## When to opt for @flexilla/popper over PopperJS?

If you are considering `@flexilla/popper` over `PopperJS`, it's likely due to similar reasons as Nanopop. However, Nanopop fell short in enabling certain functionalities we desired. This led to the creation of our package to address those specific needs.


Choose `@flexilla/popper` for a small, powerful, and efficient positioning solution.

> **Note:** `@flexilla/popper` is a part of the `flexilla` library's ecosystem.


## Usage 

Installation

```bash
npm i @flexilla/popper
```

Usage 

```js
import { CreatePopper } from '@flexilla/popper'
import "@flexilla/popper/popper.css"

new CreatePopper(
    referenceElement,//HTMLElement
    popperElement,//HTMLElement
    {
    //   options here
    }
  )
```

> **Note:** The popper Element must have `data-fx-popper` attribute, the parent container must be have position set to relative

