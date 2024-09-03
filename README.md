able of Contents

1. [Project Setup](#project-setup)
2. [Installation](#installation)
3. [Generating Minified CSS](#generating-minified-css)
4. [Using the Custom Bootstrap CSS](#using-the-custom-bootstrap-css)
5. [Previewing the Cheatsheet](#previewing-the-cheatsheet)
6. [Custom SASS Variables](#custom-sass-variables)
   - [Using Custom Background Classes](#using-custom-background-classes)
   - [Using Custom Font Size Classes](#using-custom-font-size-classes)
   - [Using Custom Opacity Classes](#using-custom-opacity-classes)
   - [Using Custom Box Shadow Classes](#using-custom-box-shadow-classes)
   - [Using Custom Border Radius Classes](#using-custom-border-radius-classes)
7. [Custom Button Components](#custom-button-components)
   - [Basic Button Styles](#basic-button-styles)
8. [Custom Carousel Component](#carousel-component)

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
- Use `bg-dark-50` for a background color of `#1c1b1f` with 50% opacity.
- Use `bg-light` for a background color of `#fff`.

## Using Custom Font Size Classes

The font sizes defined in the `$font-sizes` and `$display-font-sizes` maps can be utilized in your HTML by applying the corresponding `fs-{size}` and `display-{size}` classes. Here’s how to use them:

### Heading Font Sizes:

- Use `fs-1` for the `h1` font size (5rem).
- Use `fs-2` for the `h2` font size (3.75rem).
- Use `fs-3` for the `h3` font size (3rem).
- Use `fs-4` for the `h4` font size (2.125rem).
- Use `fs-5` for the `h5` font size (1.75rem).
- Use `fs-6` for the `h6` font size (1.5rem).
- Use `fs-7` for the large title font size (1.25rem).

### Body Text Font Sizes:

- Use `display-1` for the extra-large body font size (1.125rem).
- Use `display-2` for the large body font size (1rem).
- Use `display-3` for the medium body font size (0.875rem).
- Use `display-4` for the small body font size (0.75rem).
- Use `display-5` for the caption font size (0.625rem).

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

### Using Custom Border Radius Classes

- **`$spacer = 1`**
- **`rounded-0`**: `0` - No rounding.
- **`rounded-1`**: `$spacer * 0.25` - A small rounding, equivalent to 25% of the spacer unit.
- **`rounded-2`**: `$spacer * 0.5` - A moderate rounding, equivalent to 50% of the spacer unit.
- **`rounded-3`**: `$spacer * 0.75` - Slightly larger rounding, equivalent to 75% of the spacer unit.
- **`rounded-4`**: `$spacer` - A full spacer unit rounding.
- **`rounded-5`**: `$spacer * 1.25` - A slightly larger rounding, equivalent to 125% of the spacer unit.
- **`rounded-6`**: `$spacer * 1.5` - Larger rounding, equivalent to 150% of the spacer unit.
- **`rounded-7`**: `$spacer * 1.75` - Even larger rounding, equivalent to 175% of the spacer unit.
- **`rounded-8`**: `$spacer * 2` - Double the spacer unit for significant rounding.
- **`rounded-9`**: `$spacer * 2.25` - Larger still, at 225% of the spacer unit.
- **`rounded-10`**: `$spacer * 2.5` - Rounding at 250% of the spacer unit.
- **`rounded-11`**: `$spacer * 2.75` - A softer edge with rounding at 275% of the spacer unit.
- **`rounded-12`**: `$spacer * 3` - Rounding at 300% of the spacer unit.
- **`rounded-14`**: `$spacer * 3.5` - Rounding at 350% of the spacer unit.
- **`rounded-15`**: `$spacer * 3.75` - Rounding at 375% of the spacer unit.
- **`rounded-16`**: `$spacer * 4` - Rounding at 400% of the spacer unit.
- **`rounded-17`**: `$spacer * 4.25` - Rounding at 425% of the spacer unit.
- **`rounded-18`**: `$spacer * 5` - Rounding at 500% of the spacer unit, creating very rounded edges.
- **`rounded-19`**: `$spacer * 6` - Maximum rounding, equivalent to 600% of the spacer unit.

# Custom Button Components

### Basic Button Styles

Use the following classes to create buttons with basic styles:

```html
<!-- Default Button Sizes -->
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-info">Info Button</button>
<button class="btn btn-light">Light Button</button>

<!-- Large Buttons -->
<button class="btn btn-primary btn-lg">Primary Button</button>
<button class="btn btn-secondary btn-lg">Secondary Button</button>
<button class="btn btn-info btn-lg">Info Button</button>
<button class="btn btn-light btn-lg">Light Button</button>

<!-- Small Buttons -->
<button class="btn btn-primary btn-sm">Primary Button</button>
<button class="btn btn-secondary btn-sm">Secondary Button</button>
<button class="btn btn-info btn-sm">Info Button</button>
<button class="btn btn-light btn-sm">Light Button</button>
```

# Carousel Component

The Carousel component allows you to create a slideshow of items. Use the following classes and HTML structure to integrate a carousel into your webpage.

### Basic Carousel Structure

```html
<article
  class="my-3"
  id="carousel"
>
  <div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
    <h4>Carousel</h4>
    <a
      class="d-flex align-items-center"
      href="https://getbootstrap.com/docs/5.3/components/carousel/"
      >Documentation</a
    >
  </div>

  <div>
    <div class="bd-example-snippet bd-code-snippet">
      <div class="bd-example m-0 border-0">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-control-container">
            <button
              class="carousel-control-prev hide"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span class="material-symbols-outlined">arrow_back</span>
              <span class="visually-hidden">Previous</span>
            </button>

            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-label="Slide 1"
                aria-current="true"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span class="material-symbols-outlined">arrow_forward</span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: First slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="#777"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="#555"
                  dy=".3em"
                >
                  First slide
                </text>
              </svg>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Second slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="#666"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="#444"
                  dy=".3em"
                >
                  Second slide
                </text>
              </svg>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>

            <div class="carousel-item">
              <svg
                class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"
                width="800"
                height="400"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Third slide"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect
                  width="100%"
                  height="100%"
                  fill="#555"
                ></rect>
                <text
                  x="50%"
                  y="50%"
                  fill="#333"
                  dy=".3em"
                >
                  Third slide
                </text>
              </svg>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
```

### Carousel Controls

- **Previous Button**: Moves the carousel to the previous slide.
  - `class="carousel-control-prev"`: Style class for the previous button.
  - `data-bs-slide="prev"`: Data attribute to specify the action.
  - `<span class="material-symbols-outlined">arrow_back</span>`: Icon for the button.
  - `aria-label="Previous"`: Accessible label.
- **Next Button**: Moves the carousel to the next slide.
  - `class="carousel-control-next"`: Style class for the next button.
  - `data-bs-slide="next"`: Data attribute to specify the action.
  - `<span class="material-symbols-outlined">arrow_forward</span>`: Icon for the button.
  - `aria-label="Next"`: Accessible label.

### Carousel Indicators

- **Indicators**: Small buttons that indicate the current slide and allow navigation to a specific slide.
  - `class="carousel-indicators"`: Container for the indicators.
  - `<button type="button" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>`: Indicator for the first slide.
  - `data-bs-slide-to="N"`: Specifies which slide the button corresponds to.
  - `aria-current="true"`: Indicates the active slide.

### Carousel Items

- **Carousel Item**: Represents each slide within the carousel.
  - `class="carousel-item"`: Style class for the item.
  - `class="active"`: Indicates the currently visible slide.
  - **Content**: Typically includes an image or other content along with optional captions.

### Carousel Captions

- **Caption**: Provides text and description for each slide.
  - `class="carousel-caption d-none d-md-block"`: Style class for the caption.
  - Contains elements like `<h5>` and `<p>` to provide slide labels and descriptions.
