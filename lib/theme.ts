'use client'

import { createTheme } from '@mui/material/styles'

export const dark = {
  palette: {
    primary: {
      main: 'rgba(0, 0, 0, 0.87)'
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.6)'
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

export const light = {
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.7)'
    },
    background: {
      default: '#121212',
      paper: '#121212'
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

export default createTheme({
  cssVariables: true,
  colorSchemes: {
    light,
    dark
  }
})
