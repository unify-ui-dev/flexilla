# Getting Started with Flexilla

Welcome to Flexilla! Flexilla is a versatile, CSS framework-agnostic library designed to streamline the creation of interactive components such as dropdowns, accordions, and tabs. Whether you're building a simple website or a complex web application, Flexilla provides the tools you need to enhance user interactions effortlessly.

## Prerequisites

Before integrating Flexilla into your project, ensure you have the following prerequisites met:

- **Node.js and npm:** Required for npm-based installations. Download from [Node.js Official Website](https://nodejs.org/).
- **Modern Browser:** Flexilla is compatible with all modern browsers, including Chrome, Firefox, Safari, and Edge.
- **CSS Framework (Optional):** While Flexilla is framework-agnostic, it can be seamlessly integrated with frameworks like TailwindCSS or UnoCSS for enhanced styling.

## Installation Methods

Flexilla offers multiple installation methods to fit your project's needs.

### 1. Using npm

Flexilla can be easily installed using npm, making it a breeze to manage dependencies in your project.

1. **Initialize npm (if not already initialized):**

    ```bash
    npm init -y
    ```

2. **Install Flexilla:**

    ```bash
    npm install flexilla
    ```

3. **Import Flexilla in Your Project:**

    ```javascript
    import Flexilla from 'flexilla';
    import 'flexilla/dist/flexilla.css'; // Import Flexilla CSS
    ```

4. **Initialize a Component:**

    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        const dropdown = new Flexilla.Dropdown(document.querySelector('.my-dropdown'));
        dropdown.init();
    });
    ```

### 2. Using CDN

For quick integrations or prototyping, Flexilla can be included directly via CDN links.

1. **Include Flexilla CSS:**

    ```html
    <link rel="stylesheet" href="https://cdn.flexilla.com/flexilla.min.css">
    ```

2. **Include Flexilla JS:**

    ```html
    <script src="https://cdn.flexilla.com/flexilla.min.js"></script>
    ```

3. **Initialize a Component:**

    ```html
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const accordion = new Flexilla.Accordion(document.querySelector('.my-accordion'));
            accordion.init();
        });
    </script>
    ```

### 3. Using Script Tags

Alternatively, you can include Flexilla directly in your HTML using script tags without a package manager.

1. **Include Flexilla CSS and JS:**

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdn.flexilla.com/flexilla.min.css">
    </head>
    <body>
        <!-- Your HTML components here -->

        <script src="https://cdn.flexilla.com/flexilla.min.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                const tabs = new Flexilla.Tabs(document.querySelector('.my-tabs'));
                tabs.init();
            });
        </script>
    </body>
    </html>
    ```

## Basic Usage

Once Flexilla is installed, integrating its components into your project is straightforward.

### Example: Implementing a Dropdown

1. **HTML Structure:**

    ```html
    <div class="dropdown my-dropdown">
        <button class="dropdown-toggle">Select an option</button>
        <div class="dropdown-menu">
            <a href="#">Option 1</a>
            <a href="#">Option 2</a>
            <a href="#">Option 3</a>
        </div>
    </div>
    ```

2. **JavaScript Initialization:**

    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        const dropdown = new Flexilla.Dropdown(document.querySelector('.my-dropdown'));
        dropdown.init();
    });
    ```

3. **Customization (Optional):**

    ```javascript
    const dropdown = new Flexilla.Dropdown(document.querySelector('.my-dropdown'), {
        animation: 'fade', // Options: 'fade', 'slide'
        closeOnSelect: true
    });
    dropdown.init();
    ```

## Configuration Options

Flexilla components come with a variety of configuration options to tailor their behavior and appearance.

### Dropdown Configuration

| Option          | Type    | Description                                      | Default   |
|-----------------|---------|--------------------------------------------------|-----------|
| `animation`     | `string`| Type of animation for opening/closing dropdown    | `'slide'` |
| `closeOnSelect` | `boolean`| Determines if dropdown closes upon selection      | `true`    |
| `trigger`       | `string`| Event to trigger dropdown (`'click'`, `'hover'`) | `'click'` |

### Accordion Configuration

| Option        | Type      | Description                                             | Default |
|---------------|-----------|---------------------------------------------------------|---------|
| `multiExpand` | `boolean` | Allows multiple sections to be open simultaneously      | `false` |
| `animation`   | `string`  | Type of animation for expanding/collapsing              | `'slide'` |

### Tabs Configuration

| Option      | Type     | Description                                           | Default  |
|-------------|----------|-------------------------------------------------------|----------|
| `activeTab` | `number` | Index of the tab to be active on initialization       | `0`      |
| `animation` | `string` | Type of animation when switching tabs                 | `'fade'` |

## Troubleshooting

Encountering issues while setting up Flexilla? Here are some common problems and their solutions.

### Issue 1: Flexilla Components Not Displaying Correctly

**Solution:**

- Ensure that the Flexilla CSS is properly linked in your project.
- Check for any CSS conflicts with existing styles.
- Verify that the HTML structure matches the component's requirements.

### Issue 2: JavaScript Errors on Initialization

**Solution:**

- Confirm that Flexilla JS is correctly included before your initialization script.
- Make sure you're selecting the correct DOM elements.
- Check the browser console for specific error messages and refer to the documentation.

### Issue 3: Components Not Responsive

**Solution:**

- Ensure that your project is responsive by including the necessary meta tags.

    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

- Verify that Flexilla's responsive classes are utilized appropriately.
