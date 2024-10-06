import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { css } from '@mui/material-pigment-css'

import './global.css'
import '@mui/material-pigment-css/styles.css'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'now with app router support!'
}

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={css(({ theme }) => ({
          color: 'hsl(var(--palette-foreground))',
          backgroundColor: 'hsl(var(--palette-background))',
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          ...theme.applyStyles('dark', {
            colorScheme: 'dark'
          })
        }))}
      >
        {props.children}
      </body>
    </html>
  )
}
