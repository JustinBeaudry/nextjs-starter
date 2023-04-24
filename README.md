NextJS 13 starter with React 18, MUI v5 (emotion, light/dark mode support), Typescript, Jest, Testing Library, and Storybook support

This repo also uses Yarn2, and has yarn bundled in the `.yarn/releases` folder

## Getting Started

Storybook, and Jest expect to find stories and components in a `components/` folder but this can be configured in
`jest.config.js` and `.storybook/main.js`

## Note about Next.js 13 app directory support

Due to [an issue with emotion](https://github.com/emotion-js/emotion/issues/2928) this template will not support the
app directory until this issue is resolved.
