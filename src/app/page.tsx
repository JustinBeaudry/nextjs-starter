import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Home: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Typography component='h1' color='primary'>
          Material UI v5 with Next.js in TypeScript
        </Typography>
        <Typography component='h2' color='secondary'>
          Boilerplate for building faster.
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
