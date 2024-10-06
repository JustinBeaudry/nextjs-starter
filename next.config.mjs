import { withPigment, extendTheme } from '@pigment-css/nextjs-plugin'
import { light, dark } from './lib/theme.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const theme = extendTheme({
  colorSchemes: {
    light,
    dark
  }
})

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme
}

export default withPigment(nextConfig, pigmentConfig)
