# Flexilla (flexilla)

Flexilla is an open-source set of unstyled interactive UI components for building interactive and customizable user interfaces.


## Why Flexilla(flexilla)

Flexilla(flexilla) is a set of unstyled components  that help you quickly add interactivity to your UI Element with accessibility in mind. Flexilla includes Dropdown, collapse, accordion, tabs, Offcanvas and more. It's mainly designed to be integrated beautifully with Tailwind CSS or UnoCSS


## Where Can I use it?

- When dealing with a project where you don't want to use a JS Framework but you need interactive component with accessibility in mind (Recommanded : AstroJS, PHP and PHP frameworks, Static Websites)


## Installation

### Install the library

```shell
npm install @flexilla/flexilla
```

### Install a package

If you want to use only one package or two then we recommand you to install only those packages

- let's say you need an Accordion component only

```shell
npm install @flexilla/accordion
```



## Using With CSS Framework (WIP)

Flexilla doesn't use any CSS Framework, it's just update states via data attributes, you can directly specify style on the component according to it's state (for an accordion: each item has a data-open attribute wich can be close or open, and eache item has trigger `aria-expended="true"` or `aria-expended="false"` and content `data-state="open"` or `data-state="close"`) 


## Using with UnoCSS

Flexilla has a UnoCSS preset allowing you to have nice prefix like `data-opened` instead of writting `data-[state=open]`. [Check the list off all prefixes]()

- Install flexilla preset 


### Using with TailwindCSS

Flexilla has a TailwindCSS Plugin allowing you to have nice prefix like `data-opened` instead of writting `data-[state=open]`. [Check the list off all prefixes]()

- Install flexilla tailwind Plugin