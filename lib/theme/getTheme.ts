import { PaletteMode, createTheme as createMuiTheme } from '@mui/material'
import flow from 'lodash.flow'
import { MODES, light, dark, base } from './palette.mjs'

export const isLight = (mode: PaletteMode) => mode === MODES.light
export const isDark = (mode: PaletteMode) => mode === MODES.dark

const getDesignTokens = (mode: PaletteMode) => ({
  ...base,
  ...(isLight(mode) ? light : dark)
})

const createTheme = flow([getDesignTokens, createMuiTheme])

export const lightTheme = createTheme(MODES.light)
export const darkTheme = createTheme(MODES.dark)
