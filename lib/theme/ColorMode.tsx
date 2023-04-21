import { FC, PropsWithChildren, useMemo, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ThemeProvider } from '@mui/material/styles'
<<<<<<< HEAD:lib/theme/ColorMode.tsx
import { darkTheme, lightTheme, MODES, isLight } from './index'
=======
import { darkTheme, lightTheme, MODES, isLight } from './theme'
>>>>>>> fafd3d0 (moves src to lib, refactors theme):lib/ColorMode.tsx
import ColorModeContext from './ColorModeContext'

const ColorMode: FC<PropsWithChildren<{}>> = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(prefersDarkMode ? MODES.dark : MODES.light)
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (isLight(prevMode) ? MODES.dark : MODES.light))
      }
    }),
    []
  )
  const theme = useMemo(() => (isLight(mode) ? lightTheme : darkTheme), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ColorMode
