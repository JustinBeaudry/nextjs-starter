import { useContext } from 'react'
import ColorModeContext from './ColorModeContext'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'

const ToggleColorMode = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <IconButton onClick={colorMode.toggleColorMode} color='inherit'>
      {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  )
}

export default ToggleColorMode
