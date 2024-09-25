NextJS 13 starter with React 18, MUI v5 (emotion, light/dark mode support), Typescript, Jest, Testing Library, and Storybook support

This repo uses Yarn2 and has yarn bundled in the `.yarn/releases` folder.

## Getting Started

Storybook and Jest expect to find stories and components in a `components/` folder, but this can be configured in
`jest.config.js` and `.storybook/main.js`

## App directory support
There is an [open issue](https://github.com/JustinBeaudry/nextjs-starter/issues/9) investigating support for the App Directory.
However, due to an [open issue](https://github.com/emotion-js/emotion/issues/2928) with emotion's lack of support for server-side compilation, I'm [looking to move over to using Pigment CSS](https://github.com/JustinBeaudry/nextjs-starter/issues/11)
