import React, { Fragment } from 'react'
import Camera from './Camera'
import DetectionList from './DetectionList'
import {
  Container,
  Body,
  Card,
  CardItem,
  Text,
  brandPrimary,
} from 'native-base'
import { StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import potato from '../../potato.png'

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    bottom: 5,
    left: '10%',
    width: '80%',
    borderWidth: 0,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    borderRadius: 10,
  },
  cardItem: {
    backgroundColor: brandPrimary,
    borderRadius: 10,
  },
  number: {
    color: 'white',
    marginLeft: 10,
  },
  potato: {
    flex: 5,
    color: 'white',
  },
  image: {
    height: 30,
    width: 30,
  },
  body: {},
  fragment: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
})

const helps = [
  'Detection in progress, be patient !',
  'Looking for potato, back soon !',
  'Hmm, where is the potato ?',
  'Potato oh potato, where is the potato ?',
  'Looking for some spina… euh potato !',
]
const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export default class Detection extends React.Component {
  componentDidMount() {
    this.genRand()
    setTimeout(this.addFirstPotato, 10000)
    setTimeout(this.addSecondPotato, 20000)
    let int = setInterval(this.genRand, 5000)
    this.setState({ interval: int })
  }

  genRand = () => {
    let newrand = getRandomInt(0, 4)
    this.setState({ rand: newrand })
  }

  state = {
    tensorflowDatas: [],
    interval: null,
    rand: 0,
  }

  addFirstPotato = () => {
    clearInterval(this.state.interval)
    let newData = this.state.tensorflowDatas
    newData.push({
      label: 'Test',
      probability: 0.92,
      x0: 100,
      x1: 150,
      y0: 200,
      y1: 300,
      answer: false,
    })
    this.setState({ tensorflowDatas: newData })
  }

  addSecondPotato = () => {
    let newData = this.state.tensorflowDatas
    newData.push({
      label: 'Test',
      probability: 0.82,
      x0: 200,
      x1: 300,
      y0: 100,
      y1: 200,
      answer: false,
    })
    this.setState({ tensorflowDatas: newData })
  }
  static navigationOptions = {
    header: null,
  }
  render() {
    const { tensorflowDatas } = this.state
    return (
      <Container>
        <Camera />
        <DetectionList tensorflowDatas={tensorflowDatas} />
        {tensorflowDatas.length === 0 ? (
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body>
                <Text style={styles.text}>{helps[this.state.rand]}</Text>
              </Body>
            </CardItem>
          </Card>
        ) : (
          <Card style={styles.card}>
            <CardItem style={styles.cardItem}>
              <Body style={styles.body}>
                <Fragment>
                  <Image style={styles.image} source={potato} />
                  <Text style={styles.number}>{tensorflowDatas.length}</Text>
                </Fragment>
              </Body>
              <Text style={styles.potato}>
                I think I detected {tensorflowDatas.length} potatoes!
              </Text>
            </CardItem>
          </Card>
        )}
      </Container>
    )
  }
}

Detection.propTypes = {
  navigation: PropTypes.object,
}
