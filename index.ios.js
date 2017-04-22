/**
 * Oringe React Native Sizzle
 * @flow
 */

import React, { Component } from 'react'
import Animation from 'lottie-react-native'
import {resolveAssetSource, Surface} from 'gl-react-native'
import {
    AppRegistry,
    StyleSheet,
    Dimensions,
    Text,
    View,
    Image,
    Animated,
} from 'react-native'

import Slideshow from './src/Slideshow'
import ShaderImage from './src/ShaderImage'

const
  { width, height } = require('Dimensions').get('window'),
  images = 'wxqlQkh,G2Whuq3,0bUSEBX,giP58XN,iKdXwVm,IvpoR40,zJIxPEo,CKlmtPs,fnMylHI,vGXYiYy,MnOB9Le,YqsZKgc,0BJobQo,Otbz312'
    .split(',')
    .map(id => `https://imgur.com/${id}.jpg`)


export default class Oringe extends Component {
    constructor(props) {
      super(props)
      this.state = {
        time: 0.02,
        frames: 1,
        progress: new Animated.Value(0),
      }
    }

    componentDidMount() {
      this.resetLottieAnimation()
      this.loopAnimationFrame()
    }

    componentWillUnmount () {
      cancelAnimationFrame(this._raf)
    }

    render() {
        return (
            <View style={styles.background}>
                <Slideshow
                  styles={styles.backgroundImage}
                  time={this.state.time}
                  width={width}
                  height={height}
                  images={images.slice(2)}
                  pauseDuration={3.5}
                  transitionDuration={2}>
                    <View style={styles.container}>
                        <Animation
                            style={styles.animation}
                            source={require('./node_modules/lottie-ios/Lottie-Screenshot/Lottie-Screenshot/PinJump.json')}
                            progress={this.state.progress}
                        />
                        <Text style={styles.header} onPress={ _ => this.resetLottieAnimation() }>
                            Lottie + OpenGL + DynamicFonts
                        </Text>
                        <Text style={styles.ideas} onPress={ _ => this.resetLottieAnimation() }>
                            TODO |  Build declarative DSL glue'ing Lottie, OpenGL + Dynamic Font combinations for timed SlideShows
                        </Text>
                    </View>
                </Slideshow>
            </View>
        )
    }

    resetLottieAnimation() {
      this.state.progress.setValue(0)        // reset
      Animated.timing(this.state.progress, { // go!
        toValue: 1,
        duration: 5000,
      }).start()
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
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  animation: {
    marginLeft: -40,
    width: 300,
    height: 300,
  },
  backgroundImage: {
    position: 'absolute',
  },
  background: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(255,100,100,.5)',
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  ideas: {
    fontFamily: 'Menlo',
    fontSize: 8,
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#555',
    padding: 2,
    marginHorizontal: 50,
    marginTop: 10,
  },
})

AppRegistry.registerComponent('Oringe', () => Oringe)
