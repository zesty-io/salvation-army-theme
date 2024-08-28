# Project Setup

This project primarily uses `pnpm` as the package manager, but you can also use `npm` or other package managers if preferred. The project also uses `sass` to generate a minified Bootstrap CSS file

## Installation

First, install the necessary packages by running the following command:

```bash
pnpm install
```

or

```bash
npm install
```

## Generating Minified CSS

To generate the minified Bootstrap CSS file, run the following command:

```bash
pnpm sass
```

or

```bash
npm run sass
```

## Using the Custom Bootstrap CSS

To use the custom Bootstrap CSS file, include the following link in your HTML head tag

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/zesty-io/salvation-army-theme/styles/bootstrap.css"
/>
```

## Previewing the Cheatsheet

### Option 1: Open with a Browser

To preview the cheatsheet, simply open the `index.html` file in your preferred browser.

### Option 2: Use Live Server in VS Code

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in Visual Studio Code.
2. Right-click on the `index.html` file in the file explorer.
3. Select **"Open with Live Server"**.

This will automatically open the `index.html` file in your browser and update the preview whenever you make changes.

## Custom SASS Variables

The custom SASS variables for the Bootstrap CSS file are defined in `bootstrap/abstracts/_variables.scss`. You can modify these variables to customize the Bootstrap styles according to your needs.

### Using Custom Background Classes

The colors defined in the `$theme-colors` map can be utilized in your HTML by applying the corresponding `bg-{color-name}` classes. Here’s how to use them:

- **Primary Colors:**

  - `bg-primary-50`.
  - `bg-primary-100`
  - `bg-primary-200`
  - `bg-primary-300`
  - `bg-primary-400`

- **Secondary Colors:**
  - `bg-secondary-50`
  - `bg-secondary-100`
  - `bg-secondary-150`
  - `bg-secondary-200`.
- **Other Colors:**
  - `bg-background-modal`.
  - `bg-photo-overlay`
  - `bg-success`
  - `bg-warning`
  - `bg-dark`
  - `bg-dark-100`
  - `bg-light`

### Using Custom Font Size Classes

The font sizes defined in the `$font-sizes` map can be utilized in your HTML by applying the corresponding `fs-{size}` classes. Here’s how to use them:

**Font Sizes:**

- `fs-1`
- `fs-2`
- `fs-3`
- `fs-4`
- `fs-5`
- `fs-6`
- `fs-7`
- `fs-8`

### Using Custom Box Shadow Classes

The box shadows defined in your SASS file can be utilized in your HTML by applying the corresponding `shadow-{size}` classes. Here’s how to use them:

**Box Shadows:**

- `shadow`
- `shadow-sm`
- `shadow-lg`
- `shadow-xl`
