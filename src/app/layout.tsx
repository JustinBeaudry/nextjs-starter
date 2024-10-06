import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '$/theme'

import './global.css'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'now with app router support!'
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
