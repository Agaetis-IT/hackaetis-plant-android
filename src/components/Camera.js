import React from 'react'
import { RNCamera } from 'react-native-camera'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
})

const Camera = () => (
  <RNCamera
    ref={ref => {
      this.camera = ref
    }}
    style={styles.camera}
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.on}
    permissionDialogTitle={'Permission to use camera'}
    permissionDialogMessage={'We need your permission to use your camera phone'}
  />
)

export default Camera
