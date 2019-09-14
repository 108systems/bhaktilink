import Link from 'next/link'
import { Box, Anchor } from 'grommet'
import { Radial, RadialSelected } from 'grommet-icons'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  console.log('pathname', router.pathname)
  return (
    <Box
      direction='row'
      align='center'
      justify='center'
      gap='small'
      fill='horizontal'
      height='xsmall'
      background={{ color: 'black', opacity: 'medium' }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
      }}>
      <Link href='/'><Anchor icon={router.pathname === '/' ? <RadialSelected size='small' /> : <Radial size='small' color='white' />} /></Link>
      <Link href='/2'><Anchor icon={router.pathname === '/2' ? <RadialSelected size='small' /> : <Radial size='small' color='white' />} /></Link>
    </Box>
  )
}
