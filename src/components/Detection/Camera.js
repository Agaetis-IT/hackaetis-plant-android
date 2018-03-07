import React from 'react'
import { RNCamera } from 'react-native-camera'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
})

let pictures = []

export default class Camera extends React.Component {
  componentDidMount() {
    this.interval = setInterval(this.takePicture, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref
        }}
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={
          'We need your permission to use your camera phone'
        }
      />
    )
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5 }
      const data = await this.camera.takePictureAsync(options)
      console.tron.log(data.uri)
      pictures.push(data.uri)
    }
  }
}
