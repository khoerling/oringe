/**
 * Oringe React Native Sizzle
 * @flow
 */

import React, { Component } from 'react'
import { Animated } from 'react-native'
import Animation from 'lottie-react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native'

import ShaderImage from './src/ShaderImage'

  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
export default class Oringe extends Component {
    }
  }

  resetAnimation() {
    this.state.progress.setValue(0)        // reset
    Animated.timing(this.state.progress, { // go!
      toValue: 1,
      duration: 5000,
    }).start()
  }

  componentDidMount() {
    this.resetAnimation()
  }

  render() {
    return (
      // TODO split this out in src/
      <View style={styles.background}>
        <ShaderImage style={styles.backgroundImage} />
        <View style={styles.container}>
          <Animation
            style={styles.animation}
            source={require('./node_modules/lottie-ios/Lottie-Screenshot/Lottie-Screenshot/PinJump.json')}
            progress={this.state.progress}
          />
          <Text style={styles.header} onPress={ _ => this.resetAnimation() }>
            Lottie + GPUImage + Fonts
          </Text>
          <Text style={styles.ideas} onPress={ _ => this.resetAnimation() }>
            IDEA |  Use Lottie for a slick, sexy App UI
          </Text>
          <Text style={styles.ideas}>
            TODO |  Build declarative DSL glue'ing GPUImage + Dynamic Font combinations for SlideShows
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
  },
  animation: {
    width: 300,
    height: 300,
  },
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  backgroundImage: {
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    flex: 1,
  },
  header: {
    backgroundColor: 'rgba(255,100,100,.2)',
    fontFamily: 'Georgia',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  ideas: {
    fontFamily: 'Menlo',
    fontSize: 7,
    textAlign: 'center',
    backgroundColor: '#eee',
    color: '#555',
    padding: 2,
    marginHorizontal: 50,
    marginTop: 10,
  },
});

AppRegistry.registerComponent('Oringe', () => Oringe)
