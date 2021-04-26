import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Cards from './Cards'

export default function App() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Cards />
      </Box>
    </Container>
  )
}
