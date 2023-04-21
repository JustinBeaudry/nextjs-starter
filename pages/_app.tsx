import Head from 'next/head'
import type { AppProps as NextAppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Box from '@mui/material/Box'
<<<<<<< HEAD
import createEmotionCache from '../lib/theme/createEmotionCache'
import ColorMode from '../lib/theme/ColorMode'
import ToggleColorMode from '../lib/theme/ToggleColorMode'
=======
import createEmotionCache from '../lib/createEmotionCache'
import ColorMode from '../lib/ColorMode'
import ToggleColorMode from '../lib/ToggleColorMode'
>>>>>>> b45134c (moves src to lib, refactors theme)

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
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ColorMode>
        <Box
          sx={{
            color: 'text.primary',
            bgcolor: 'background.default',
            width: '100%',
            height: '100%'
          }}
        >
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
