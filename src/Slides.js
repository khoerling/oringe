
import React, { Component } from 'react'
import Animation from 'lottie-react-native'
import {Blur} from 'gl-react-blur'
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
import * as Animatable from 'react-native-animatable'

import ShaderImage from './ShaderImage'

export class Third extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
    }
  }

  componentDidMount() { // go!
    this.state.progress.setValue(0)
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1500,
    }).start()
  }

  render() {
    return (
      <View style={styles.container}>
        <Animation
          style={styles.heart}
          source={require('../node_modules/lottie-ios/Lottie-Screenshot/Lottie-Screenshot/TwitterHeart.json')}
          progress={this.state.progress}
        />
      </View>
    )
  }
}

export class Second extends Component {
  render() {
    return (
      <Animatable.View style={styles.container}>
        <Animatable.Text style={styles.header} animation="zoomInUp" duration={1000}>
          Lottie + OpenGL + DynamicFonts
        </Animatable.Text>
        <Animatable.Text style={styles.ideas} animation="fadeIn" duration={1200} delay={200}>
          TODO | build a declarative DSL for creating timed SlideShows
        </Animatable.Text>
      </Animatable.View>
    )
  }
}

export class First extends Component {
    constructor(props) {
      super(props)
      this.state = {
        progress: new Animated.Value(0),
      }
    }

    componentDidMount() { // go!
      this.resetLottieAnimation()
    }

    componentWillUnmount () {
      // TODO
    }

    render() {
        return (
          <View style={styles.container}>
            <Animation
              style={styles.lightbulb}
              source={require('../node_modules/lottie-ios/Lottie-Screenshot/Lottie-Screenshot/LightBulb.json')}
              progress={this.state.progress}
            />
            <Animatable.Text animation="rubberBand" delay={200} duration={1500} direction="alternate" style={styles.header}>
              Oringe | technology
            </Animatable.Text>
          </View>
        )
    }

    resetLottieAnimation() {
      this.state.progress.setValue(0)        // reset
      Animated.timing(this.state.progress, { // go!
        toValue: 1,
        duration: 2000,
      }).start()
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  heart: {
    width: 800,
    height: 800,
    marginRight: -185,
  },
  lightbulb: {
    marginLeft: -55,
    marginTop: -150,
    marginBottom: 50,
    width: 300,
    height: 300,
  },
  header: {
    backgroundColor: 'rgba(255,100,100,.5)',
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 20,
  },
  ideas: {
    fontFamily: 'Menlo',
    fontSize: 15,
    backgroundColor: '#fff',
    color: '#555',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 50,
    marginTop: 20,
  },
})
