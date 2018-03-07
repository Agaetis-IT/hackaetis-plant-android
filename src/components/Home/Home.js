import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Text } from 'native-base'
import PropTypes from 'prop-types'
import mrPotato from '../../mr_potato.png'
import TestButton from './TestButton'

const styles = StyleSheet.create({
  potato: {
    width: '40%',
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    flex: 2,
    fontSize: 40,
    fontWeight: 'bold',
  },
  question: {
    textAlign: 'center',
    color: 'white',
    flex: 1,
    fontSize: 20,
  },
  container: {
    backgroundColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
})

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <Container style={styles.container}>
        <Text style={styles.potato}>POTATO OR NOT ?</Text>
        <Text style={styles.question}> THAT IS THE QUESTION</Text>
        <Image style={styles.image} source={mrPotato} />
        <TestButton navigation={this.props.navigation} />
      </Container>
    )
  }
}

Home.propTypes = {
  navigation: PropTypes.object,
}
