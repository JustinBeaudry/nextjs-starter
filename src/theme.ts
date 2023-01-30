import { createTheme as createMuiTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'
import flow from 'lodash.flow'

const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		primary: {
			main: mode === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)'
		},
		secondary: {
			main: mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)'
		},
		background: {
			...(mode === 'dark'
				? { default: '#121212', paper: '#121212' }
				: { default: '#fff', paper: '#fff' }
			)
		},
		text: {
			...(mode === 'dark'
				? { primary: '#fff', secondary: 'rgba(255, 255, 255, 0.7)', disabled: 'rgba(255, 255, 255, 0.5)' }
				: { primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)' }
			)
		},
		action: {
			...(mode === 'dark'
				? {
						active: '#fff',
						hover: 'rgba(255, 255, 255, 0.08)',
						selected: 'rgba(255, 255, 255, 0.16)',
						disabled: 'rgba(255, 255, 255, 0.3)',
						disabledBackground: 'rgba(255, 255, 255, 0.12)'
					}
				: {
						active: 'rgba(0, 0, 0, 0.54)',
						hover: 'rgba(0, 0, 0, 0.04)',
						selected: 'rgba(0, 0, 0, 0.08)',
						disabled: 'rgba(0, 0, 0, 0.26)',
						disabledBackground: 'rgba(0, 0, 0, 0.12)'
					}
			)
		},
		divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.12)'
	},
	typography: {
		fontFamily: 'Anonymous Pro'
	}
})

const createTheme = flow([getDesignTokens, createMuiTheme])

export const lightTheme = createTheme('light')
export const darkTheme = createTheme('dark')
