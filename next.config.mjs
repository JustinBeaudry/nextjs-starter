import { withPigment } from '@pigment-css/nextjs-plugin'
import { createTheme } from '@mui/material'
import { base, light } from './lib/theme/palette.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const lightTheme = createTheme({ ...base, light })

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: lightTheme
}

export default withPigment(nextConfig, pigmentConfig)
