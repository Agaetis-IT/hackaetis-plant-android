import React, { Fragment } from 'react'
import { Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  },
})

const DetectionLabel = ({ label, probabilty }) => (
  <Fragment>
    <Text style={styles.text}>{label}</Text>
    <Text style={styles.text}>{probabilty}</Text>
  </Fragment>
)

DetectionLabel.propTypes = {
  label: PropTypes.string,
  probabilty: PropTypes.number,
}

export default DetectionLabel
