import Head from 'next/head'
import type { AppProps as NextAppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseLine'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../src/createEmotionCache'
import ColorMode from '../src/ColorMode'
import Box from '@mui/material/Box'
import ToggleColorMode from '../src/ToggleColorMode'

import '@fontsource/anonymous-pro'

const clientSideEmotionCache = createEmotionCache()

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache
}

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ColorMode>
        <Box sx={{
          color: 'text.primary',
          bgcolor: 'background.default',
          width: '100%',
          height: '100%'
        }}>
          <CssBaseline />
          <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
            <ToggleColorMode />
          </Box>
          <Component {...pageProps} />
        </Box>
      </ColorMode>
    </CacheProvider>
  )
}
