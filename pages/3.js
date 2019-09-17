import React from 'react'
import Link from 'next/link'

import { Box, Image, Paragraph, ResponsiveContext, Anchor, Text } from 'grommet'

import { Page, Slide, Nav } from '../components'

const Slide3 = () => {
  const screen = React.useContext(ResponsiveContext)
  const textSize = screen === 'small' ? 'medium' : 'xlarge'
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/stars.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center' pad='large'>
        <Paragraph size={textSize}>
          <i>All great sages from all the spiritual traditions throughout the world have taught us that true happiness is within ourselves
          and things could give some degree of pleasure for some time to the mind and senses but things can not give fullfillment to the <Link href='/4'><Anchor><Text size={textSize} color='neutral-1'>heart</Text></Anchor></Link>...</i>
        </Paragraph>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <Page>
      <Slide>
        <Slide3 />
      </Slide>
      <Nav />
    </Page>
  )
}
