import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  view: {
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'red',
    position: 'absolute',
  },
})

const DetectionSquare = props => {
  const { top, left, height, width } = props
  return <View style={[styles.view, { height, width, top, left }]} />
}

DetectionSquare.propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
}

export default DetectionSquare
