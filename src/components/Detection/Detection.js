import React from 'react'
import Camera from './Camera'
import RectangleList from './RectangleList'
import {
  Container,
  Body,
  Card,
  CardItem,
  Text,
  brandPrimary,
} from 'native-base'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const tensorflowDatas = [
  {
    label: 'Test',
    probability: 0.1239,
    x0: 100,
    x1: 150,
    y0: 200,
    y1: 300,
  },
  {
    label: 'Test2',
    probability: 0.4,
    x0: 200,
    x1: 300,
    y0: 200,
    y1: 300,
  },
  {
    label: 'Test3',
    probability: 0.9,
    x0: 10,
    x1: 200,
    y0: 400,
    y1: 500,
  },
]

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 5,
    left: '10%',
    width: '80%',
  },
  cardItem: {
    backgroundColor: brandPrimary,
  },
  text: {
    opacity: 1,
  },
})

export default class Detection extends React.Component {
  static navigationOptions = {
    title: 'Detection',
  }
  render() {
    return (
      <Container>
        <Camera />
        <RectangleList tensorflowDatas={tensorflowDatas} />
        <Card style={styles.card}>
          <CardItem style={styles.cardItem}>
            <Body>
              <Text style={styles.text}>Help</Text>
            </Body>
          </CardItem>
        </Card>
      </Container>
    )
  }
}

Detection.propTypes = {
  navigation: PropTypes.object,
}
