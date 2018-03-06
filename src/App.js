import { Container, StyleProvider } from 'native-base'
import React from 'react'
import * as tensorflow from './services/tensorflow'
import theme from './theme'
import Camera from './components/Camera'
import RectangleList from './components/RectangleList'

tensorflow.imageclassifier()

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

const App = () => (
  <StyleProvider style={theme}>
    <Container>
      <Camera />
      <RectangleList tensorflowDatas={tensorflowDatas} />
    </Container>
  </StyleProvider>
)

export default App
