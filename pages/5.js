import React from 'react'

import { Box, Text } from 'grommet'

import { Page, Slide, Nav, Share, YoutubeVideo } from '../components'

// const videos = [
//   'https://www.youtube.com/embed/jv0RFMQgh10',
//   'https://www.youtube.com/embed/CyB071tzOi8',
//   'https://www.youtube.com/embed/JW1Am81L0wc',
//   'https://www.youtube.com/embed/YpEIOHmIkXY',
//   'https://www.youtube.com/embed/xTwuJaTOl8g'
// ]
// const books = ['https://www.radhanathswami.com/books/#the_journey_within']
//
// const Videos = () => {
//   return (
//     <Box fill overflow='scroll'>
//       <Grid rows='small' columns='medium' gap='small'>
//         {videos.map(src => <YoutubeVideo key={src} width='100%' height='100%' src={src} />)}
//       </Grid>
//     </Box>
//   )
// }

const Slide5 = () => {
  return (
    <Box fill align='center' justify='center' pad='large' gap='small'>
      <Text size='large'>Thank You! Spread the ❤️</Text>
      <Share />
      <Text size='large'>Learn more on Bhakti Yoga</Text>
      <Box fill align='center' justify='center'><YoutubeVideo src='https://www.youtube.com/embed/CyB071tzOi8' /></Box>
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
