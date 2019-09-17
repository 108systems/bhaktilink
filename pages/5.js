import React from 'react'

import { Box, Text, Grid } from 'grommet'

import { Page, Slide, Nav, Share, YoutubeVideo } from '../components'

const videos = [
  'https://www.youtube.com/embed/jv0RFMQgh10',
  'https://www.youtube.com/embed/CyB071tzOi8',
  'https://www.youtube.com/embed/JW1Am81L0wc',
  'https://www.youtube.com/embed/YpEIOHmIkXY',
  'https://www.youtube.com/embed/xTwuJaTOl8g'
]
const books = ['https://www.radhanathswami.com/books/#the_journey_within']

const Slide5 = () => {
  return (
    <Box fill align='center' justify='start' pad='medium' gap='small'>
      <Share />
      <Text size='large'>Learn more on Bhakti Yoga</Text>
      <Box fill overflow='scroll'>
        <Grid rows='small' columns='medium' gap='small'>
          {videos.map(src => <YoutubeVideo key={src} width='100%' height='100%' src={src} />)}
        </Grid>
      </Box>
      <Box fill='horizontal' height='48px' />
    </Box>
  )
}

export default () => {
  return (
    <Page>
      <Slide>
        <Slide5 />
      </Slide>
      <Nav />
    </Page>
  )
}
