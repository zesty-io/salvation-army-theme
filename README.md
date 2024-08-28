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

## Custom SASS Variables

The custom SASS variables for the Bootstrap CSS file are defined in `bootstrap/abstracts/_variables.scss`. You can modify these variables to customize the Bootstrap styles according to your needs.

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
