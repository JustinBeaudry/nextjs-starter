const path = require('path')
const toPath = filePath => path.join(process.cwd(), filePath)

module.exports = {
  stories: ['../src/components'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    '@washingtonpost/storybook-addon-web-vitals'
  ],
  framework: '@storybook/react',
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react')
        }
      }
    }
  }
}
