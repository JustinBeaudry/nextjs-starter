import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from '../lib/theme/getTheme'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={lightTheme}>
      <Story />
    </ThemeProvider>
  )
]
