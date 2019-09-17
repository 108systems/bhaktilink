import { Twitter, Facebook, VK, Whatsapp, Mail } from 'react-social-sharing'

import { Box } from 'grommet'

export default () => {
  return (
    <Box direction='row' gap='small'>
      <Facebook solid small link='https://bhakti.link' />
      <Twitter solid small message="Bhakti Yoga - Yoga's Ancient Wisdom" link='https://bhakti.link' />
      <Whatsapp solid small message="Bhakti Yoga - Yoga's Ancient Wisdom" link='https://bhakti.link' />
      <VK solid small message="Bhakti Yoga - Yoga's Ancient Wisdom" link='https://bhakti.link' />
      <Mail solid small message="Bhakti Yoga - Yoga's Ancient Wisdom" link='https://bhakti.link' />
    </Box>
  )
}
