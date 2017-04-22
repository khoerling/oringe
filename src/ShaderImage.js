import React, { Component } from 'react'
import {resolveAssetSource, Surface} from 'gl-react-native'
const {Image: GLImage} = require("gl-react-image");
import {
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native'

import {Sierra, Hudson} from "gl-react-instagramfilters"
import GL from 'gl-react'

export default class ShaderImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageSize: null,
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    }
  }

  componentDidMount() {
    Image.getSize(this.props.source.uri, (width, height) => {
      this.setState({imageSize: {width, height}});
    })
  }

  render() {
    return (
      <Surface width={this.state.width} height={this.state.height} style={styles.backgroundImage}>
        <Sierra>
          <GLImage source={this.props.source.uri} imageSize={this.state.imageSize} />
        </Sierra>
      </Surface>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    borderWidth: 0,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})
