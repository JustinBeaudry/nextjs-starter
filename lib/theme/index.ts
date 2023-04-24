import { createTheme as createMuiTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import flow from 'lodash.flow'

export enum MODES {
  'light' = 'light',
  'dark' = 'dark'
}

export const isLight = (mode: PaletteMode) => mode === MODES.light
export const isDark = (mode: PaletteMode) => mode === MODES.dark

const base = {
  typography: {
    fontFamily: 'Anonymous Pro'
  }
}

const light = {
  palette: {
    mode: MODES.light,
    primary: {
      main: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.6'
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)'
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)'
    },
    divider: 'rgba(0, 0, 0, 0.12)'
  }
}

const dark = {
  palette: {
    mode: MODES.dark,
    primary: {
      main: '#fff'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      default: '#fff',
      paper: '#fff'
    },
    text: {
      primary: '#fff',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)'
    },
    action: {
      active: '#fff',
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
  ...base,
  ...(isLight(mode) ? light : dark)
})

const createTheme = flow([getDesignTokens, createMuiTheme])

export const lightTheme = createTheme(MODES.light)
export const darkTheme = createTheme(MODES.dark)
