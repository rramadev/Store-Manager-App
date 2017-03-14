# Angular2 Demo - Store Manager App

## Synopsis

A minimal Angular2 demo app using:

- TypeScript
- SystemJS
- NPM Build
- SASS

You can see the a running demo [here](http://*****.github.io/******).

## Commands

command | description
--- | ---
`npm run setup`| installs globals/etc
`npm run clean`| clean dist directory
`npm run build`| clean, ts & sass build
`npm run build:ts`| typescript build
`npm run build:sass`| sass build
`npm run build:css`| postcss build
`npm run watch`| clean/watch ts & sass
`npm run watch:ts`| watch typescript
`npm run watch:sass`| watch sass
`npm run dev`| build, watch, browsersync

## Component Tree

Below outlines a tree of how the components are arranged in the Angular2 component tree.

![component tree](http://content.screencast.com/users/amcdaniel22/folders/Snagit/media/1a70d1e6-a97f-4b2a-afcc-562f78979e91/2016-02-25_18-45-09.png)

## File Structure

The folder structure is aimed to encapsulate components into their own modules. In each component folder, it contains all the html, css, js for that component. Components that are not coupled to this application are grouped into a common folder for reuse.

```
â””â”€â”€ src
    â”œâ”€â”€ app           -- root     component
    â”‚   â”œâ”€â”€ header    -- header   component
    â”‚   â””â”€â”€ rsvp      -- rsvp     component
    â””â”€â”€ common        -- root     utilities and components that are reusable
        â”œâ”€â”€ parallax  -- parallax component
        â””â”€â”€ utils     -- misc     utilities
```

## Installation

...


1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.

3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes.
    It also starts the lite-server and launches the browser to run the application.
