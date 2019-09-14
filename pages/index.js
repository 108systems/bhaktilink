import React from 'react'

import { Box, Image, Text } from 'grommet'

import Page from '../components/Page'
import Slide from '../components/Slide'
import Nav from '../components/Nav'

const Slide1 = () => {
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/city.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center'>
        <Text size='large'>Slide 1</Text>
      </Box>
    </Box>
  )
}

const Home = () => {
  return (
    <Page>
      <Slide>
        <Slide1 />
      </Slide>
      <Nav />
    </Page>
  )
}

export default Home
