/**
 * Oringe React Native Sizzle
 * @flow
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
} from 'react-native'

import Slideshow from './src/Slideshow'
import {First, Second, Third} from './src/Slides'

const
  { width, height } = require('Dimensions').get('window'),
  images = 'wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312'
    .split(',')
    .map(id => `https://imgur.com/${id}.jpg`)

// main
// ---------
export default class Oringe extends Component {
    constructor(props) {
      super(props)
      this.state = {
        time: 0.02,
        frames: 1,
      }
    }

    componentDidMount() { // go!
      this.loopAnimationFrame()
    }

    componentWillUnmount () {
      cancelAnimationFrame(this._raf)
    }

    render() {
      return (
        <Slideshow
          styles={styles.backgroundImage}
          time={this.state.time}
          width={width}
          height={height}
          images={images.slice(2)}
          pauseDuration={2}
          transitionDuration={.5}>
          <First />
          <Second />
          <Third />
        </Slideshow>
      )
    }

    loopAnimationFrame() { // boot glSlideshow frame loop
      let startTime
      const loop = t => {
        this._raf = requestAnimationFrame(loop)
        if (!startTime) startTime = t
        const time = (t - startTime) / 1000
        this.setState({ time: time, frames: this.state.frames+1 })
      }
      this._raf = requestAnimationFrame(loop)
    }
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
  },
})

AppRegistry.registerComponent('Oringe', () => Oringe)
