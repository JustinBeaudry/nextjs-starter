import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import ColorModeContext from './ColorModeContext'
<<<<<<< HEAD:lib/theme/ToggleColorMode.tsx
import { isLight } from './index'
=======
import { isLight } from './theme'
>>>>>>> fafd3d0 (moves src to lib, refactors theme):lib/ToggleColorMode.tsx

const ToggleColorMode = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
      {isLight(theme.palette.mode) ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  )
}

export default ToggleColorMode
