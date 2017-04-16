/**
 * Sample React Native App
 * https://github.com/facebook/react-native
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

export default class oringe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: new Animated.Value(0),
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
      <View style={styles.background}>
        <Image
            resizeMode={Image.resizeMode.contain}
            style={styles.backgroundImage}
            //source={{uri: 'https://farm3.staticflickr.com/2853/32736018454_5c3640c512_k.jpg'}}>
            source={require('./assets/stock-photo-101390981.jpg')} />
        <View style={styles.container}>
          <Animation
            style={{
              width: 300,
              height: 300,
            }}
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
  image: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
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

AppRegistry.registerComponent('oringe', () => oringe);
