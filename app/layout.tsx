import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@mui/material-pigment-css/styles.css'

export const metadata: Metadata = {
  title: 'NextJS Starter',
  description: 'now with app router support!'
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body>{props.children}</body>
    </html>
  )
}
