import React from 'react'
import { View, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Text } from 'native-base'
import Svg, { Polyline, Circle } from 'react-native-svg'

const styles = StyleSheet.create({
  tick: {
    position: 'absolute',
    width: 150,
    height: 150,
  },
  proba: {
    position: 'absolute',
    color: 'white',
    fontSize: 10,
    marginLeft: 8,
    marginTop: 12,
  },
  view: {
    position: 'absolute',
  },
})

const DetectionIndicator = ({ indicatorStyle, label, probability }) => {
  let textStyle = indicatorStyle
  return (
    <View style={styles.view}>
      <Svg style={[styles.tick, indicatorStyle]}>
        <Circle
          cx="20"
          cy="20"
          r="20"
          fill={probability < 0.9 ? '#F5A623' : '#6AB616'}
        />
      </Svg>
      <Text style={[styles.proba, textStyle]}>{probability}%</Text>
    </View>
  )
}

DetectionIndicator.propTypes = {
  indicatorStyle: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number,
  }),
  label: PropTypes.string,
  probability: PropTypes.number,
}

export default DetectionIndicator
