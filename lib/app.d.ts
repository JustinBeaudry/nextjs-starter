import type { Theme, SxProps } from '@mui/material/styles'

declare module '@mui/material-pigment-css' {
  interface ThemeArgs {
    theme: Theme
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
