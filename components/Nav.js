import Link from 'next/link'
import { Box, Anchor } from 'grommet'
import { Radial, RadialSelected } from 'grommet-icons'
import { useRouter } from 'next/router'

const slides = [
  { href: '/' },
  { href: '/2' },
  { href: '/3' },
  { href: '/4' },
  { href: '/5' }
]

export default () => {
  const router = useRouter()
  return (
    <Box
      direction='row'
      align='center'
      justify='center'
      gap='small'
      fill='horizontal'
      background={{ color: 'black', opacity: 'medium' }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000
      }}>
      {slides.map(slide => <Link key={slide.href} href={slide.href}><Anchor icon={router.pathname === slide.href ? <RadialSelected size='small' /> : <Radial size='small' color='white' />} /></Link>)}
    </Box>
  )
}
