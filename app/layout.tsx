import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import ColorMode from '../lib/theme/ColorMode'
import ToggleColorMode from '../lib/theme/ToggleColorMode'
import { lightTheme as theme } from '../lib/theme'

import '@pigment-css/react/styles.css'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'now with app router support!',
  themeColor: theme.palette.primary.main
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <ColorMode>
          <Box
            sx={{
              color: 'text.primary',
              bgcolor: 'background.default',
              width: '100%',
              height: '100%'
            }}
          >
            <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
              <ToggleColorMode />
            </Box>
            <CssBaseline />
            {props.children}
          </Box>
        </ColorMode>
      </body>
    </html>
  )
}
