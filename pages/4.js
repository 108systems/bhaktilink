import React from 'react'
import Link from 'next/link'

import { Box, Image, Paragraph, ResponsiveContext, Text, Anchor } from 'grommet'

import { Page, Slide, Nav } from '../components'

const Slide4 = () => {
  const screen = React.useContext(ResponsiveContext)
  const textSize = screen === 'small' ? 'medium' : 'xlarge'
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/love.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center'>
        <Paragraph size={textSize}>
          <i>Its only to <Text weight='bold' size={textSize}>love</Text> and to <Text weight='bold' size={textSize}>be loved</Text> that we can actually experience pleasure within ourselves
          and the origin of that love from a spiritual perspective is the true <Link href='/5'><Anchor><Text color='neutral-4' size={textSize}>journey within</Text></Anchor></Link></i>
        </Paragraph>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <Page>
      <Slide>
        <Slide4 />
      </Slide>
      <Nav />
    </Page>
  )
}
