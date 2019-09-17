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
        <Audio src='/static/audio/background.mp3' />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
