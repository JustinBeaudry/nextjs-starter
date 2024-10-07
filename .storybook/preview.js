import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '$/theme'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  )
]
