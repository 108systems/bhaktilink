import React from 'react'

import { Box, Image, Text } from 'grommet'

import Page from '../components/Page'
import Slide from '../components/Slide'
import Nav from '../components/Nav'

const Slide2 = () => {
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/stars.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center'>
        <Text size='large'>Slide 2</Text>
      </Box>
    </Box>
  )
}

const Slide2Page = () => {
  return (
    <Page>
      <Slide>
        <Slide2 />
      </Slide>
      <Nav />
    </Page>
  )
}

export default Slide2Page
