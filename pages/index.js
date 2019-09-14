import React from 'react'
import { Grommet, Box } from 'grommet'
import { dark } from 'grommet/themes'
import { Github } from 'grommet-icons'

const Home = () => (
  <Grommet full theme={dark}>
    <Box fill align='center' justify='center'>
      <Github />
    </Box>
  </Grommet>
)

export default Home
