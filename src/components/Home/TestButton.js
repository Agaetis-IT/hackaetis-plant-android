import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    width: 212,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: null,
  },
  buttonText: {
    flex: 1,
    lineHeight: 30,
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
})
const TestButton = ({ navigation }) => {
  let { navigate } = navigation
  return (
    <Button style={styles.button} onPress={() => navigate('Detection')}>
      <Text style={styles.buttonText}>TEST IT !</Text>
    </Button>
  )
}
TestButton.propTypes = {
  navigation: PropTypes.object,
}

export default TestButton
