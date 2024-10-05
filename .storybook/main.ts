import { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../components'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@washingtonpost/storybook-addon-web-vitals'
  ],
  framework: '@storybook/nextjs'
}

export default config
