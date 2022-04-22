import { FC, PropsWithChildren, useMemo, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { darkTheme, lightTheme } from './theme'
import ColorModeContext from './ColorModeContext'
import { ThemeProvider } from '@mui/material/styles'

const ColorMode: FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  const theme = useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ColorMode
