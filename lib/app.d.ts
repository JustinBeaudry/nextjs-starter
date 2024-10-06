import type { Theme, SxProps } from '@mui/material/styles'
import type { ExtendTheme as ExtendReactTheme } from '@pigment-css/react/theme'
import type { ExtendTheme as ExtendMuiTheme } from '@mui/material-pigment-css'

declare module '@pigment-css/react/theme' {
  interface ThemeArgs {
    theme: ExtendReactTheme<{
      colorScheme: 'light' | 'dark'
      tokens: {
        palette: {
          background: string
          foreground: string
          primary: string
          primaryForeground: string
          border: string
        }
      }
    }>
  }
}

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: ExtendMuiTheme<{
      colorScheme: 'light' | 'dark'
      tokens: {
        palette: {
          background: string
          foreground: string
          primary: string
          primaryForeground: string
          border: string
        }
      }
    }>
  }
}

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      sx?: SxProps<Theme>
    }
    interface SVGProps<T> {
      sx?: SxProps<Theme>
    }
  }
}
