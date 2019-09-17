import React from 'react'
import App from 'next/app'
import Router from 'next/router'

import { Audio } from '../components'
import * as gtag from '../lib/gtag'

Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Audio src='https://drive.google.com/uc?export=download&id=1FHrDeiiYeFO8kgmYxeLwho3RupPeGf0R' />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
