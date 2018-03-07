import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import DetectionLabel from './DetectionLabel'

const styles = StyleSheet.create({
  view: {
    borderWidth: 5,
    borderStyle: 'solid',
    borderColor: 'red',
    position: 'absolute',
  },
})

const DetectionRectangle = ({ rectangleStyle, label, probability }) => {
  return (
    <View style={[styles.view, rectangleStyle]}>
      <DetectionLabel label={label} probabilty={probability} />
    </View>
  )
}

DetectionRectangle.propTypes = {
  rectangleStyle: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  label: PropTypes.string,
  probability: PropTypes.number,
}

export default DetectionRectangle
