import { Grommet } from 'grommet'
import { dark } from 'grommet/themes'
// import Head from 'next/head'

export default ({ theme = dark, children }) => (
  <Grommet full theme={theme}>
    {/* <Head>

    </Head> */}
    {children}
  </Grommet>
)
