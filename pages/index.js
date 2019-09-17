import React from 'react'
import Link from 'next/link'

import { Box, Image, Text, ResponsiveContext, Anchor } from 'grommet'

import { Page, Slide, Nav } from '../components'

const Slide1 = () => {
  const screen = React.useContext(ResponsiveContext)
  const textSize = screen === 'small' ? 'medium' : 'xlarge'
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/happiness.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center' pad='large'>
        <Text weight='bold' size={textSize}>We are all looking for <Link href='/2'><Anchor><Text size={textSize}>happiness</Text></Anchor></Link>...</Text>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <Page>
      <Slide>
        <Slide1 />
      </Slide>
      <Nav />
    </Page>
  )
}
