import React from 'react'
import Link from 'next/link'

import { Box, Image, Paragraph, ResponsiveContext, Anchor, Text } from 'grommet'

import { Page, Slide, Nav } from '../components'

const Slide2 = () => {
  const screen = React.useContext(ResponsiveContext)
  const textSize = screen === 'small' ? 'medium' : 'xlarge'
  return (
    <Box fill align='center' justify='center' direction='row' animation='fadeIn'>
      <Box fill>
        <Image src='/static/img/city.jpg' fit='cover' />
      </Box>
      <Box fill align='center' justify='center' pad='large'>
        <Paragraph size={textSize}>
          <i>We are trying to find it through wealth, power, sexual pleasures, acquisition of property and money, through enterteinment
          but somehow or other that happiness has beginning, has an end and has so many <Link href='/3'><Anchor><Text color='neutral-3' size={textSize}>limitations and vulnerabilities</Text></Anchor></Link>...</i>
        </Paragraph>
      </Box>
    </Box>
  )
}

export default () => {
  return (
    <Page>
      <Slide>
        <Slide2 />
      </Slide>
      <Nav />
    </Page>
  )
}
