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

**Primary Colors:**

- Use `bg-primary-50` for a background color of `#ffebeb`.
- Use `bg-primary-100` for a background color of `#ff838b`.
- Use `bg-primary-200` for a background color of `#eb2533`.
- Use `bg-primary-300` for a background color of `#c5000e`.
- Use `bg-primary-400` for a background color of `#9e121c`.

**Secondary Colors:**

- Use `bg-secondary-50` for a background color of `#d7e9ff`.
- Use `bg-secondary-100` for a background color of `#77a9ee`.
- Use `bg-secondary-150` for a background color of `#61769c`.
- Use `bg-secondary-200` for a background color of `#002056`.

**Other Colors:**

- Use `bg-background-modal` for a background color of `#121212`.
- Use `bg-photo-overlay` for a background color of `#1c1b1f`.
- Use `bg-success` for a background color of `#12825f`.
- Use `bg-warning` for a background color of `#f2ab53`.
- Use `bg-dark` for a background color of `#575757`.
- Use `bg-dark-100` for a background color of `#1c1b1f`.
- Use `bg-light` for a background color of `#fff`.

## Using Custom Font Size Classes

The font sizes defined in the `$font-sizes` and `$display-font-sizes` maps can be utilized in your HTML by applying the corresponding `fs-{size}` and `display-{size}` classes. Here’s how to use them:

### Heading Font Sizes:

- Use `fs-1` for the `h1` font size.
- Use `fs-2` for the `h2` font size.
- Use `fs-3` for the `h3` font size.
- Use `fs-4` for the `h4` font size.
- Use `fs-5` for the `h5` font size.
- Use `fs-6` for the `h6` font size.
- Use `fs-7` for the large title font size.

### Body Text Font Sizes:

- Use `display-1` for the extra-large body font size.
- Use `display-2` for the large body font size.
- Use `display-3` for the medium body font size.
- Use `display-4` for the small body font size.
- Use `display-5` for the caption font size.

### Using Custom Opacity Classes

The opacity levels defined in the `$opacity` map can be utilized in your HTML by applying the corresponding `opacity-{level}`, `bg-opacity-{level}`, or `link-opacity-{level}` classes. Here’s how to use them:

**Opacity Levels:**

- Use `opacity-0`, `bg-opacity-0`, or `link-opacity-0` for `0%` opacity.
- Use `opacity-5`, `bg-opacity-5`, or `link-opacity-5` for `5%` opacity.
- Use `opacity-10`, `bg-opacity-10`, or `link-opacity-10` for `10%` opacity.
- Use `opacity-15`, `bg-opacity-15`, or `link-opacity-15` for `15%` opacity.
- Use `opacity-20`, `bg-opacity-20`, or `link-opacity-20` for `20%` opacity.
- Use `opacity-25`, `bg-opacity-25`, or `link-opacity-25` for `25%` opacity.
- Use `opacity-30`, `bg-opacity-30`, or `link-opacity-30` for `30%` opacity.
- Use `opacity-35`, `bg-opacity-35`, or `link-opacity-35` for `35%` opacity.
- Use `opacity-40`, `bg-opacity-40`, or `link-opacity-40` for `40%` opacity.
- Use `opacity-45`, `bg-opacity-45`, or `link-opacity-45` for `45%` opacity.
- Use `opacity-50`, `bg-opacity-50`, or `link-opacity-50` for `50%` opacity.
- Use `opacity-55`, `bg-opacity-55`, or `link-opacity-55` for `55%` opacity.
- Use `opacity-60`, `bg-opacity-60`, or `link-opacity-60` for `60%` opacity.
- Use `opacity-65`, `bg-opacity-65`, or `link-opacity-65` for `65%` opacity.
- Use `opacity-70`, `bg-opacity-70`, or `link-opacity-70` for `70%` opacity.
- Use `opacity-75`, `bg-opacity-75`, or `link-opacity-75` for `75%` opacity.
- Use `opacity-80`, `bg-opacity-80`, or `link-opacity-80` for `80%` opacity.
- Use `opacity-85`, `bg-opacity-85`, or `link-opacity-85` for `85%` opacity.
- Use `opacity-90`, `bg-opacity-90`, or `link-opacity-90` for `90%` opacity.
- Use `opacity-95`, `bg-opacity-95`, or `link-opacity-95` for `95%` opacity.
- Use `opacity-100`, `bg-opacity-100`, or `link-opacity-100` for `100%` opacity.

### Using Custom Box Shadow Classes

The box shadows defined in your SASS file can be utilized in your HTML by applying the corresponding `shadow-{size}` classes. Here’s how to use them:

**Box Shadows:**

- Use `shadow` for the default box shadow: `0px 4px 4px -1px rgba(36, 104, 147, 0.04)`.
- Use `shadow-sm` for a small box shadow: `0px 1px 2px 0px rgba(36, 104, 147, 0.04)`.
- Use `shadow-lg` for a large box shadow: `0px 4px 8px 0px rgba(36, 104, 147, 0.04)`.
- Use `shadow-xl` for an extra-large box shadow: `0px 8px 12px 0px rgba(36, 104, 147, 0.04)`.
